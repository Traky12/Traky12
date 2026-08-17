# CASTÚO-SYSTEM y SaaS
## Manual de control operativo, arquitectura y evolución continua

**Autor:** Manus AI  
**Estado:** operativo en modo gobernado; ejecución SaaS real retenida en `SECURITY_HOLD`  
**Fecha de corte:** 17 de agosto de 2026  
**Checkpoint web:** `6ec553b5`

## 1. Propósito y principio rector

CASTÚO-SYSTEM se gobierna como un ecosistema de repositorios, capacidades, contratos y evidencia. El dashboard no convierte actividad en claims automáticamente: una capacidad sólo puede promoverse cuando existe una cadena verificable que enlaza fuente, evento, evidencia, implementación, prueba y límite declarado.

> **Regla default-deny:** si el contrato, la procedencia, la autorización, la ejecución o la evidencia no son verificables, el sistema debe conservar el estado bloqueado y no presentar una afirmación de producción.

El SaaS sigue el mismo principio. El navegador gestiona intents, estados y referencias opacas; el servidor valida identidad, permisos, scopes, expiración y auditoría; un adaptador vault provider-neutral retiene la ejecución hasta que exista un proveedor real aprobado.

## 2. Inventario de arquitectura

| Capa | Responsabilidad | Estado actual | Evidencia o control |
|---|---|---|---|
| Portfolio Control Plane | Catálogo de 16 repositorios, capacidades, contratos y gates | Operativo | Mapa de ecosistema y documentación evolutiva |
| Dashboard | Lectura visual de progreso, CI, conectores y Quantum | Operativo | React, filtros, indicadores y checkpoint |
| OAuth | Identidad y sesión de usuario | Integrado por plantilla full-stack | `useAuth`, sesión protegida y `protectedProcedure` |
| tRPC | Contratos tipados frontend/backend | Operativo | `server/routers.ts`, `client/src/lib/trpc.ts` |
| Drizzle/MySQL | Persistencia de intents, auditoría, grants y versiones | Esquema aplicado | `drizzle/schema.ts` y migraciones |
| Vault boundary | Ejecución server-side de secretos | Provider-neutral / hold | `server/vault.ts` |
| Secret scanning | Detección de literales con forma de credencial | Operativo | `pnpm security:scan` |
| Quantum Lab | Simulación determinista local | Operativo / no productivo | Contrato v1, fixture y `NO_CLAIM` |
| GitHub | Versionado y revisión de cambios | Sincronizado | `Traky12/Castuo-system`, `Traky12/Traky12` |

## 3. Modelo de datos y contratos

`connector_intents` almacena request id, conector, acción, estado, referencia vault, scopes solicitados, actor y expiración. No contiene tokens, claves, contraseñas, respuestas de proveedor ni payloads de credenciales. `connector_audit_events` es append-only en intención y registra sólo detalles redactados.

`connector_permission_grants` define quién puede ejecutar una acción sobre un conector, qué scopes recibe y cuándo expira el grant. `credential_versions` representa la versión lógica de una credencial, su estado `ACTIVE` o `REVOKED`, la referencia vault, el request de origen y el actor; nunca contiene el valor secreto.

| Contrato | Entradas | Salidas permitidas | Estado |
|---|---|---|---|
| `connectors.request` | Conector y acción validados por Zod | Request id, estado, referencia, expiración | Protegido; vault hold por defecto |
| `permissions.grant` | Usuario, conector, acción, scopes, expiración | `{ granted: true }` | Sólo admin |
| `permissions.revoke` | Id del grant | `{ revoked: true }` | Sólo admin |
| `permissions.mine` | Sesión | Grants del usuario | Protegido |
| `credentials.versions` | Conector opcional | Metadatos de versión | Protegido |
| Quantum v1 | Escenario, pesos, presupuesto | Score, confianza heurística, decisión | Determinista; `NO_CLAIM` |

## 4. Flujo operativo SaaS

La operación comienza con una sesión autenticada. El usuario selecciona un conector y una acción. El backend valida la allowlist, asigna scopes mínimos, crea un intent con expiración y construye una referencia `vault://castuo/<connector>`. Antes de aceptar ejecución, el request pasa por `SecurityHoldVaultAdapter` usando `AbortSignal.timeout(5000)`. Sin proveedor real, el boundary falla cerrado, registra un evento `blocked` y devuelve `SECURITY_HOLD` sin filtrar el error completo.

Cuando se habilite un proveedor, el adaptador deberá comprobar el grant vigente, el actor, el scope, el estado de la versión y el nonce/request id. Una rotación crea una nueva versión activa y revoca lógicamente la anterior sólo tras confirmación del proveedor. Una revocación marca la versión como `REVOKED`, invalida la capacidad de ejecución y deja trazabilidad. Un replay, grant expirado, acción sin permiso o conector no permitido se rechaza.

## 5. Matriz de permisos

| Actor | Connect | Rotate | Revoke | Regla |
|---|---:|---:|---:|---|
| Admin | Sí | Sí | Sí | Puede operar dentro de la allowlist y scopes válidos |
| Usuario con grant vigente | Sí, si coincide | Sí, si coincide | Sí, si coincide | Grant ligado a usuario, conector, acción y expiración |
| Usuario sin grant | No | No | No | `PERMISSION_DENIED` |
| Grant expirado | No | No | No | Default-deny |
| Solicitud repetida | No | No | No | `REPLAYED_REQUEST` |
| Rotación sin versión activa | No | No | No | `NO_ACTIVE_CREDENTIAL` |
| Revocación repetida | No | No | No | `ALREADY_REVOKED` |

## 6. Seguridad y observabilidad

El escáner revisa `client/src`, `server`, `shared`, `drizzle` y `scripts`, bloqueando patrones de claves privadas, tokens, API keys, secretos y credenciales de proveedores. El redactor `server/redactedLogger.ts` sanea claves sensibles anidadas y valores con forma de bearer token antes de serializar logs. Las auditorías contienen request id, conector, acción, resultado y razón controlada; no contienen secretos ni respuestas del proveedor.

El sistema debe conservar tres niveles de observabilidad. La interfaz muestra estado operativo y referencias. La auditoría persistente muestra quién pidió qué acción y con qué resultado. Los logs técnicos permiten depurar el flujo, pero siempre pasan por el redactor. El objetivo no es ocultar fallos, sino impedir que depurarlos cree una segunda vía de exfiltración.

## 7. Quantum Decision Lab

Quantum es una superficie de simulación determinista. El contrato `CASTUO-QUANTUM-DECISION-V1` fija entradas, fórmula, resultado esperado, confianza heurística y límites. El paquete `docs/quantum/evidence-pack-v1.md` demuestra reproducibilidad local, no evidencia de campo.

La barra de presupuesto representa capacidad exploratoria y no porcentaje de evidencia real. La barra de confianza representa una heurística derivada de los pesos del escenario y no una probabilidad calibrada. Ningún resultado del laboratorio autoriza una acción, una promoción G0–G7 o un claim de robustez.

## 8. Proceso evolutivo permanente

Cada cambio sigue un ciclo de seis etapas: describir la necesidad; actualizar `todo.md`; declarar modelo y contrato; implementar con controles de seguridad; probar los caminos positivos y negativos; documentar, sincronizar y crear checkpoint. El cambio sólo se considera operativo cuando sus pruebas, límites y procedencia pueden ser revisados por otra persona.

| Gate | Pregunta de control | Salida requerida |
|---|---|---|
| G0 | ¿Existe una línea base reproducible? | Fixture, fuente y estado |
| G1 | ¿El contrato está tipado y versionado? | Schema, procedimiento y test |
| G2 | ¿Puede revisarlo otra persona? | PR, diff y documentación |
| G3 | ¿Existe prueba operativa? | Métricas, logs redactados y rollback |
| G4 | ¿Se validó en campo? | Paquete de evidencia de campo |
| G5–G7 | ¿Puede promoverse sin ampliar claims? | Passport, revisión independiente y decisión registrada |

## 9. Registro de tareas y estado

El historial de `todo.md` conserva la evolución desde la interfaz inicial hasta el upgrade full-stack. Las capacidades visuales, el modelo vault-first, el Quantum Lab, el secret scanning, el redactor, el contrato Quantum y las pruebas de integración están completados. El adaptador provider-neutral está preparado y bloquea por diseño. Sólo falta seleccionar un proveedor vault real, configurar sus secretos fuera del repositorio y ejecutar la batería de integración contra ese proveedor.

La PR de referencia continúa separando implementación de evidencia remota. Los workflows con permiso insuficiente no se convierten en claims; el dashboard mantiene el bloqueo y enlaza la ejecución para revisión.

## 10. Procedimiento de validación

Antes de cada checkpoint deben ejecutarse `pnpm security:scan`, `pnpm run check`, `pnpm test` y `pnpm run build`. La suite debe cubrir autenticación, allowlist, redacción, contrato Quantum, timeout vault, conexión, rotación, revocación, permisos, expiración, replay, doble revocación y default-deny. El checkpoint se guarda sólo después de revisar `todo.md`. La publicación se realiza mediante el botón **Publish** del entorno de gestión; no se automatiza desde este repositorio.

## 11. Próximas decisiones requeridas

La decisión de mayor impacto es seleccionar el proveedor vault real y su modelo de aprobación. Después deben añadirse pruebas de integración contra un entorno efímero del proveedor, rotación con dos versiones simultáneas, revocación verificable y pruebas de recuperación. Finalmente, Quantum necesita datos de campo y revisión independiente antes de cualquier promoción.

## Referencias internas

[1]: ../security/BACKEND-SECURE-CONNECTORS.md "Backend Secure Connectors"
[2]: quantum/quantum-contract-v1.json "Quantum Decision Lab Contract v1"
[3]: quantum/evidence-pack-v1.md "Quantum Evidence Pack v1"
[4]: ../todo.md "Project TODO and evolution history"


## 12. Mapa operativo por gate

| Gate | Responsable primario | Entradas | Salidas verificables | Criterio de rollback |
|---|---|---|---|---|
| G0 Baseline | Maintainer del repositorio | Fuente, fixture, versión y scope | Baseline reproducible y `todo.md` actualizado | Restaurar último checkpoint si el baseline no compila |
| G1 Contract | Owner de arquitectura | Schema, router, threat model | Contrato tipado, migración revisada y pruebas unitarias | Revertir schema/procedure al contrato anterior sin ejecutar migración destructiva |
| G2 Review | Reviewer independiente | PR, diff, security scan y evidencia | Aprobación de alcance, permisos y límites | Bloquear merge y volver a estado `PENDING_REVIEW` |
| G3 Runtime | Operador de plataforma | Logs redactados, métricas, timeout y rollback | Ejecución reproducible y SLO declarado | Activar `SECURITY_HOLD`, revocar versión activa y restaurar checkpoint |
| G4 Field | Responsable de piloto | Entorno, dispositivos, conectividad y runbook | Paquete de campo firmado, limitaciones y revisión | Detener piloto, conservar logs y volver a última versión aprobada |
| G5–G7 Promotion | Consejo de evidencia | Passport, revisión independiente, claims y riesgos | Decisión de promoción o retención | Retirar claim, marcar `BLOCKED` y revocar acceso operativo |

El owner de un recurso no se infiere del actor que inicia una petición. Se almacena explícitamente en `connector_permission_grants.ownerUserId`. Un usuario sólo puede utilizar un grant si coinciden usuario, owner, conector, acción y expiración; los administradores conservan capacidad operativa dentro de la allowlist. La auditoría consultable se limita a los eventos propios, salvo administradores.

El dashboard consulta intents, grants, versiones y eventos de auditoría desde tRPC y muestra únicamente conteos, estados, request ids y resultados redactados. Los estados estáticos de catálogo continúan describiendo el alcance inicial, pero la lectura operativa de Secure Connectors se obtiene del backend y se mantiene vacía cuando no existe sesión.
