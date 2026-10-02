# Plan evolutivo unificado de CASTÚO-SYSTEM

## 1. Objetivo y decisión estratégica

CASTÚO-SYSTEM evolucionará desde un portfolio de capacidades relacionadas hacia una **infraestructura soberana común de control, confianza, datos y evidencia**. Educación, biotecnología, drónica, robótica, medicina y operaciones sin GNSS no se tratarán como productos de seguridad independientes, sino como **dominios gobernados** que heredan una misma arquitectura de identidad, autorización, criptografía, soberanía del dato, provenance, evidencia, auditoría, ledger, gemelo digital, incidentes, recuperación y gates binarios.

La regla maestra será:

> **Every capability inherits the same trust architecture.**

Cada dominio aportará su modelo de datos, capacidades, workflows, perfil de riesgo, integraciones y requisitos regulatorios. La infraestructura común aportará el control de confianza y promoción. No se crearán nuevos repositorios, servicios de seguridad o mecanismos de evidencia por dominio salvo que exista una frontera independiente y demostrable de ownership, ciclo de vida, seguridad, despliegue o cumplimiento.

## 2. Correcciones conceptuales obligatorias

El plan mantendrá una separación estricta entre funciones que los documentos identifican como distintas. Los binarios deciden autorización o promoción; la criptografía protege confidencialidad, autenticidad e integridad; el ledger aporta anclaje y trazabilidad; el gemelo digital representa estado, relaciones, simulación y replay; y la evidencia respalda decisiones y claims. Blockchain, GaiaChain o un eventual componente denominado Trazalia no se describirán como cifrado ni como solución total de seguridad.

La decisión operativa se formalizará como una conjunción, no como una puntuación media:

```text
ALLOW = I ∧ A ∧ G ∧ D ∧ T ∧ E ∧ R
```

Donde `I` es identidad validada, `A` autorización, `G` integridad criptográfica, `D` política del dato, `T` confianza del dispositivo, `E` evidencia requerida y `R` vía de recuperación disponible. Los controles adicionales —ubicación, confianza del modelo, aprobación humana, estado GNSS o reglas específicas del dominio— se incorporarán como condiciones obligatorias cuando el perfil de riesgo lo exija. Un solo `0` en un control obligatorio producirá `DENY`, `REVIEW`, `QUARANTINE` o `RECOVERY_REQUIRED`, nunca una autorización por promedio.

## 3. Arquitectura objetivo

| Plano | Responsabilidad | Resultado gobernado |
|---|---|---|
| Control plane soberano | Governance, IAM, policy, binary rules, claims, owners, gates y lifecycle | Decisión autorizada y trazable |
| Security fabric | Identity, PKI, crypto, secrets/vault, device trust, incidentes y recovery | Confianza operacional sin duplicación por dominio |
| Data sovereignty plane | Localidad, autoridad, clasificación, retención, jurisdicción, transformaciones y exportación | Flujo de datos permitido y auditable |
| Evidence/trust plane | Evidence Graph, passports, provenance, replay, Digital Twin y trust state | Evidencia reproducible y separación de claims |
| Ledger layer | Hashes, timestamps, estados, identificadores pseudónimos y anclaje multipartito | Integridad y notarización, no base de datos principal |
| Capability fabric | Educación, biotech, drones, robotics, medicine y No-GNSS | Capacidades verticales con políticas heredadas |
| Edge/offline fabric | Local-first, cache, eventos firmados, mesh, LoRaWAN/UWB, reconciliación y safe modes | Continuidad degradada controlada |

La fuente de verdad primaria seguirá siendo el dato y el control soberano del sistema. El ledger sólo recibirá la mínima prueba de integridad necesaria: hashes, identificadores pseudónimos, timestamps, estados y pruebas criptográficas. Los datos sensibles permanecerán fuera del ledger bajo las políticas de localidad y jurisdicción correspondientes.

## 4. Contratos canónicos a crear o consolidar

La primera tarea documental y de diseño será consolidar los contratos siguientes, con esquemas versionados, owner, scope de evidencia, amenazas, rollback y pruebas contractuales:

| Contrato | Contenido mínimo |
|---|---|
| `CASTUO-SOVEREIGN-CONTROL-PLANE-REFERENCE-ARCHITECTURE.md` | Arquitectura, autoridad, ownership, límites, dependencias y reglas de promoción |
| `CASTUO-CAPABILITY-CONTRACT.yaml` | Capability, dominio, implementación, riesgo, owner, lifecycle, madurez, evidencia y claims |
| `CASTUO-BINARY-SECURITY-ENVELOPE.yaml` | Identidad, autorización, integridad, dato, dispositivo, ubicación, modelo, evidencia, aprobación humana, recuperación y decisión |
| `CASTUO-DATA-SOVEREIGNTY-POLICY.yaml` | Localidad, owner/controller/processor, finalidad, clasificación, retención, jurisdicción, transformaciones, exportación y borrado |
| `CASTUO-EVIDENCE-GRAPH-CONTRACT.yaml` | Data → hash → event → evidence → claim → ledger anchor, provenance y permisos de lectura |
| `CASTUO-DIGITAL-TWIN-CONTRACT.yaml` | Estado, relaciones, eventos, simulaciones, replay, niveles de exposición y separación público/privado |
| `CASTUO-LEDGER-ANCHOR-POLICY.yaml` | Qué se ancla, qué se excluye, algoritmos, timestamps, retención, verificación y trust multipartito |
| `CASTUO-INCIDENT-RECOVERY-CONTRACT.yaml` | Detect → identity/signature/replay check → policy → deny/quarantine → preserve → alert → rollback/recover → review |
| `CASTUO-REPOSITORY-FEDERATION-CONTRACT.yaml` | Ownership, lifecycle, interfaces, PRs, lineage, checks, federación y criterios para crear repositorios |

Trazalia se tratará inicialmente como una especificación propia de trazabilidad, no como una tecnología externa validada. Sólo podrá promocionarse si existe documentación técnica, implementación, modelo de amenazas, pruebas y evidencia reproducible.

## 5. Fases de ejecución

### Fase 0 — Baseline y control de alcance

Inventariar capacidades, repositorios, servicios existentes, owners, dependencias, superficies públicas/privadas y gates actuales. Clasificar cada elemento como `DESIGNED`, `IMPLEMENTED`, `LOCALLY_TESTED`, `REMOTELY_VERIFIED`, `FIELD_VALIDATED`, `PRODUCTION_OPERATIONAL` o `COMMERCIALLY_REPEATABLE`. Congelar claims que no tengan provenance y registrar riesgos de duplicación, proliferación de repositorios y mezcla de datos sensibles con ledger.

**Salida:** baseline soberano, mapa de ownership, matriz de claims y backlog P0/P1/P2 con criterios de salida.

### Fase 1 — Fabric común de identidad, soberanía y política

Cerrar primero `castuo-identity`, `castuo-data-sovereignty` y `castuo-security` como módulos o repositorios sólo si las fronteras operativas lo justifican. Implementar identidad de usuario, servicio y dispositivo; autorización por owner, dominio, capability y acción; PKI y firma; vault backend-only; política de datos; clasificación; retención; localidad `EDGE → REGIONAL → PRIVATE CLOUD → EU CLOUD`; y un motor de política binaria con resultados `ALLOW`, `REVIEW`, `DENY`, `QUARANTINE` y `RECOVERY_REQUIRED`.

**Criterio de salida:** ningún dominio implementa IAM, cifrado, vault o gates propios; cada operación crítica produce un Binary Security Envelope reproducible; los secretos no aparecen en frontend, logs, ledger ni fixtures.

### Fase 2 — Evidence Graph, Digital Twin y ledger de integridad

Consolidar `castuo-evidence`, `castuo-digital-twin` y `castuo-ledger`. Implementar el flujo `DATA → HASH → EVENT → EVIDENCE → CLAIM → LEDGER ANCHOR`, Evidence Passports, provenance, replay verificable y separación entre gemelo privado y gemelo público. El gemelo privado podrá contener estados, telemetría, eventos, relaciones, simulaciones y políticas internas; el público sólo expondrá capacidades aprobadas, versiones, hashes, estados de evidencia, limitaciones, releases, lineage y resultados agregados.

**Criterio de salida:** un auditor puede reproducir una transición, comprobar su hash, identificar el owner y determinar si el resultado es capability, evidence, maturity o claim; ningún registro público convierte una representación del gemelo en evidencia de operación.

### Fase 3 — Incidentes, contención y recuperación

Implementar la cadena operacional `event → identity check → signature check → replay check → policy evaluation → deny/quarantine → incident evidence → alert → rollback/recovery → review`. Cada incidente tendrá `incident_id`, actor, asset, capability, policy, failed binary, timestamp, evidence hash, containment, recovery y review. La nomenclatura deberá describir el fallo concreto, por ejemplo `SEC-POL-014 = 0 → operation denied → asset quarantined → evidence preserved → recovery required`, evitando afirmaciones vagas como “el sistema fue comprometido”.

**Criterio de salida:** los fallos negativos tienen fixture reproducible; la cuarentena preserva evidencia; la recuperación se puede ejecutar y verificar en entorno controlado; los logs se redactan y los permisos mantienen default-deny.

### Fase 4 — Resiliencia offline y modo sin GNSS

Desarrollar `castuo-resilient-edge` como capacidad transversal. El modo normal usará GNSS, IMU, mapa y red cuando estén disponibles. Ante pérdida de GNSS se pasará a estado local, IMU, visión/odometría, mapa local, mesh/LoRaWAN/UWB cuando proceda, modo degradado y finalmente `SAFE_RETURN`, `SAFE_STOP` o `LOCAL_HOLD`. La pérdida de GNSS reducirá la confianza de navegación y bloqueará `MISSION_CONTINUE` salvo que exista un modo alternativo validado y autorizado por la política del dominio.

**Criterio de salida:** eventos locales firmados, almacenamiento offline, reconciliación de conflictos, expiración de estado, recovery path y pruebas de degradación sin inferir autonomía ilimitada ni autorización implícita.

### Fase 5 — Verticales gobernadas, en orden de riesgo

No se desarrollarán los seis dominios simultáneamente. Se comenzará por operaciones offline/edge y después se reutilizará la fabric común en educación, biotecnología, drónica, robótica y medicina. Cada vertical tendrá sólo sus contratos de capability, modelo de datos, workflows, integraciones y perfil de riesgo.

| Orden | Dominio | Primer alcance | Controles específicos iniciales |
|---:|---|---|---|
| 1 | No-GNSS/edge | Continuidad offline y modos degradados | Estado local, sync, safe hold/return, recovery |
| 2 | Educación | Learning Twin, competencias, evidencias y credenciales | Identidad, provenance, privacidad y validación de evidencias |
| 3 | Biotecnología | Muestras, lotes, experimentos y cadena de custodia | Integridad, custodia, biosecurity y acceso por rol |
| 4 | Drónica | Misión, telemetría, geofence y pérdida de señal | Device trust, ubicación, human override y safe mode |
| 5 | Robótica | Tareas, percepción, actuación y parada segura | Firmware, attestation, human override y safe stop |
| 6 | Medicina | Interoperabilidad, auditoría y workflows de evidencia | Gate regulatorio específico antes de cualquier función clínica |

En medicina se empezará por interoperabilidad, auditoría, gestión de datos y evidencia. No se presentará el sistema como diagnóstico o decisión clínica sin clasificación regulatoria, análisis de finalidad y riesgo, validación independiente y cumplimiento aplicable.

### Fase 6 — Validación independiente y promoción

Ampliar los gates actuales a `G0 BASELINE`, `G1 CONTRACT`, `G2 IDENTITY`, `G3 INTEGRITY`, `G4 DATA SOVEREIGNTY`, `G5 RUNTIME`, `G6 EVIDENCE`, `G7 INDEPENDENT REVIEW`, `G8 FIELD`, `G9 COMMERCIAL` y `G10 FEDERATION`. La promoción será conjuntiva:

```text
PROMOTE = G0 ∧ G1 ∧ G2 ∧ ... ∧ G10
```

Cada gate registrará resultado `0/1`, alcance, evidencia, owner, fecha, commit, limitaciones y siguiente acción. La documentación, los tests locales, los commits y el número de repositorios no cerrarán por sí solos los gates de runtime, revisión independiente, campo, negocio o federación.

### Fase 7 — Federación soberana

Sólo después de cerrar los contratos comunes y demostrar interoperabilidad se abordará la federación entre instalaciones y organizaciones. La fase incluirá intercambio de proofs, políticas multi-organización, anclaje multipartito, trust federation, ownership distribuido, sincronización de estados y procedimientos de revocación. La federación no se considerará una capacidad de producción hasta contar con replay, recovery, independencia de confianza y pruebas de interoperabilidad.

## 6. Modelo de repositorios y ownership

| Repositorio o módulo candidato | Frontera prevista |
|---|---|
| `castuo-evolution` | Roadmap, madurez, gates, claims y gobierno transversal |
| `castuo-identity` | IAM, identidad de servicios/dispositivos y PKI |
| `castuo-data-sovereignty` | Policies de localidad, autoridad, retención y exportación |
| `castuo-security` | Binary Security Envelope, policy engine, vault, incidentes y recovery |
| `castuo-evidence` | Evidence Graph, passports, provenance y replay |
| `castuo-ledger` | Anclaje, verificación, hashes y reglas multipartitas |
| `castuo-digital-twin` | Estado, relaciones, simulación y exposición pública/privada |
| `castuo-resilient-edge` | Offline store, mesh, reconciliación y modos seguros |
| `castuo-domain-*` | Adaptadores de dominio, nunca una seguridad paralela |

La estructura anterior es un catálogo de fronteras, no una orden de crear todos los repositorios. Cada extracción deberá justificar ownership, ciclo de vida, despliegue, seguridad, cumplimiento, interfaz y coste de sincronización. Los cambios deberán pasar por commits trazables, PRs auditables, checks obligatorios, revisión y rollback.

## 7. Matriz binaria y seguridad operacional

| Control | Estado 0 | Estado 1 |
|---|---|---|
| Identity | Desconocida | Validada |
| Device | No confiable | Attestada |
| Data | Fuera de policy | Permitida |
| Crypto | Inválida | Válida |
| Provenance | Ausente | Verificable |
| Ledger | No anclado | Anclado |
| Digital Twin | Desincronizado | Consistente |
| AI/model | No autorizado | Autorizado |
| Human approval | Ausente | Válida |
| Location | Incierta | Dentro de policy |
| GNSS | Perdido sin alternativa | Alternativa validada |
| Incident | Abierto | Contenido |
| Recovery | No probado | Reproducido |
| Evidence | Pendiente | Verificada |
| Gate | Cerrado en 0 | Cerrado en 1 |

La matriz servirá para decisión y promoción, no para sustituir controles criptográficos, análisis de amenazas o pruebas de seguridad. Los controles no aplicables deberán quedar explícitamente justificados por el perfil de riesgo del dominio, nunca omitidos silenciosamente.

## 8. Validación, seguridad y calidad

Cada fase tendrá pruebas unitarias y contractuales, fixtures negativos, replay reproducible, pruebas de permisos, secret scanning, redacción de logs, dependency scanning, SBOM y TypeScript/build. Las integraciones de edge añadirán pruebas de desconexión, reconciliación y expiración. Los módulos de incidentes añadirán deny/quarantine/rollback/recovery. Los verticales deberán incluir pruebas de políticas específicas y de no elevación de claims.

La validación visual del dashboard deberá mostrar claramente capability, evidence, maturity, claim, binary state, owner, gate, limitación y siguiente acción. Ningún panel podrá presentar `LOCALLY_TESTED` como `FIELD_VALIDATED` o `PRODUCTION_OPERATIONAL`. Los resultados de simulación se etiquetarán como locales, deterministas o `NO CLAIM` cuando corresponda.

## 9. Gobierno de datos, riesgo y regulación

Cada `DataAsset` tendrá owner, controller, processor, finalidad, clasificación, retención, jurisdicción, transformaciones permitidas, política de exportación y condiciones de borrado. Los dominios con datos sensibles deberán mantener el dato original bajo control soberano y publicar únicamente el mínimo necesario para evidencia y verificación.

El riesgo se gestionará por dominio y por operación, con especial atención a device trust, ubicación, aprobación humana, modelos de IA, pérdida de GNSS, biosecurity y funciones clínicas. Medicina requerirá un gate regulatorio separado; cualquier claim de producto sanitario, diagnóstico o decisión clínica quedará prohibido hasta disponer de la clasificación y evidencia apropiadas.

## 10. Criterios de éxito y límites de claims

El plan se considerará técnicamente preparado cuando exista una fabric común reutilizable, los dominios no dupliquen controles de seguridad, los Binary Security Envelopes sean reproducibles, la cadena de evidencia sea verificable, los incidentes produzcan contención y recovery demostrables, y el modo offline/GNSS-denied degrade de forma segura.

No se afirmará seguridad absoluta, autonomía ilimitada, cifrado proporcionado por blockchain, validación externa, operación de producción, ventaja competitiva, madurez N5/N6 o cumplimiento regulatorio sin evidencia específica y trazable. La capacidad podrá estar diseñada o implementada sin que ello autorice un claim operacional.

## 11. Registro de decisiones, riesgos y rollback

Antes de cada fase se añadirá una decisión arquitectónica con alternativas descartadas, owner, coste, dependencia, amenaza y rollback. Los principales riesgos son la proliferación de repositorios, la duplicación de seguridad por vertical, la exposición de datos sensibles en ledger, la falsa equivalencia entre gemelo y evidencia, la autorización implícita durante pérdida de GNSS, el uso prematuro de Trazalia/GaiaChain y la entrada prematura en medicina. Cada riesgo tendrá un control de contención y una condición explícita de no promoción.

El rollback deberá poder restaurar contratos, políticas, adapters, esquemas de ledger, reglas binarias y estados del gemelo a un commit conocido. Las migraciones de datos se harán con exportación verificable, hash, prueba de restauración y ventana reversible.

## 12. Próximos pasos inmediatos

1. Congelar y aprobar la arquitectura soberana común y su vocabulario normativo.
2. Crear los contratos canónicos y un primer Binary Security Envelope reproducible.
3. Integrar identidad, soberanía de datos, policy engine, vault y gates con los servicios existentes.
4. Implementar Evidence Graph, Digital Twin mínimo, ledger de hashes y replay.
5. Crear el flujo de incidente con deny, quarantine, preserve, alert, rollback y recovery.
6. Validar `CASTUO RESILIENT MODE` con fixtures de pérdida de GNSS y desconexión.
7. Seleccionar una única primera capability vertical de bajo riesgo —preferentemente edge/offline o educación— y demostrar que hereda la fabric sin duplicarla.
8. Ejecutar revisión independiente antes de promover cualquier gate de campo, producción o negocio.

## 13. Entregables de cierre

El cierre de la primera iteración deberá incluir la arquitectura de referencia, contratos versionados, matriz binaria, threat model, mapa de repositorios y owners, Evidence Graph, Digital Twin mínimo, política de ledger, contrato de incidentes y recovery, fixtures de replay, pruebas de seguridad, documentación README gobernada, lineage de commits, dashboard actualizado y un registro de gates con evidencia y límites. La federación y los verticales de mayor riesgo quedarán bloqueados hasta que la fabric común demuestre integridad, soberanía, recuperación y revisión independiente.
