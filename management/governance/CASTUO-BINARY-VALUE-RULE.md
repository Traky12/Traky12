# CASTÚO Binary Value Rule v1.1

> CASTÚO no crece por acumular trabajo; crece por convertir afirmaciones en binarios demostrables dentro de un alcance declarado.

## Regla normativa

Cada condición estratégica vale `0` o `1`. `0` significa que la condición no está demostrada dentro del alcance probado. `1` significa que existe evidencia primaria, trazable, reproducible y suficiente para esa condición. No existe `0,5` por progreso parcial. La documentación, una arquitectura definida o una tarea planificada no sustituyen la evidencia requerida por un binario operacional.

Un nivel sólo puede promocionarse cuando todos sus binarios críticos están en `1`. No se promociona por promedio; un único `0` crítico conserva el bloqueo del nivel y limita los claims permitidos.

## Estado conservador actual

La lectura vigente de **valor externo** es **3/12**: `B01`, `B02` y `B03` están en `1` dentro del alcance local y documental; `B04`–`B12` permanecen en `0` porque requieren permisos, reproducción independiente, runtime, observabilidad, vault aprobado, campo o evidencia comercial que todavía no está verificada. El control interno se reporta aparte como **B13–B15 = 3/3** y no se suma al valor tecnológico externo.

| ID | Condición | Estado | Evidencia necesaria | Bloqueo principal | Siguiente acción |
|---|---|---:|---|---|---|
| B01 | Arquitectura definida | 1 | README, mapa y boundaries | Ninguno dentro del alcance documental | Mantener y versionar |
| B02 | Capacidad implementada | 1 | Código, módulos y contratos | Ninguno dentro del alcance local | Consolidar interfaces |
| B03 | Test reproducible local | 1 | Suite, fixtures y resultados | Ninguno dentro del alcance local | Mantener estabilidad |
| B04 | CI remoto verificable | 0 | Logs, annotations y jobs visibles | `security_events` / diagnóstico remoto | Autorizar GitHub y repetir lectura |
| B05 | Evidencia independiente | 0 | Replay por tercero o entorno separado | Falta de verificación externa | Repetir S-001 fuera del checkout principal |
| B06 | Runtime operacional | 0 | Ejecución sostenida con métricas | Falta de operación real | Pasar a runtime controlado |
| B07 | Observabilidad verificable | 0 | Métricas, alertas, trazas y SLOs | Observabilidad sólo documental | Convertir monitoreo en evidencia |
| B08 | Field validation | 0 | Prueba real de campo | Sin campo validado | Ejecutar piloto acotado |
| B09 | Vendor independence | 0 | Segunda implementación bajo el contrato | Dependencia de una sola ruta | Añadir proveedor alternativo |
| B10 | Seguridad operacional | 0 | Vault, least privilege, scans y approvals | Vault real y hardening externo | Aprobar vault e integrar backend-only |
| B11 | Paid pilot / commercial proof | 0 | Piloto pagado, contrato, pago y uso | No hay tracción comercial | Definir piloto y medir resultado |
| B12 | Repeatability / transferability | 0 | Repetición por terceros y documentación transferible | Conocimiento ligado al owner | Empaquetar para herencia |

## Niveles de promoción

| Nivel | Binarios críticos | Resultado permitido |
|---|---|---|
| A — Existencia | B01+B02+B03 | Existe y funciona localmente de forma reproducible |
| B — Verificabilidad | B04+B05 | Un tercero puede observar y reproducir |
| C — Operación | B06+B07+B10 | Opera con control, trazabilidad y seguridad |
| D — Campo | B08+B09 | Resiste condiciones reales y no depende de un único proveedor |
| E — Negocio | B11+B12 | Tiene valor económico repetible y transferible |

## Orden de cierre

La prioridad inmediata es `B04 → B05`. `B04` abre la verificabilidad remota; `B05` abre la reproducción independiente. Después siguen `B07 → B10 → B06 → B08 → B09 → B11 → B12`. Esta secuencia evita saltos prematuros y conserva la separación entre capability, evidence, maturity, claim y competitive advantage.

## Límites de claims

`B01=1`, `B02=1` y `B03=1` sólo autorizan claims acotados a arquitectura, implementación y reproducibilidad local. No autorizan afirmar CI remoto verde, seguridad remota cero, runtime de producción, observabilidad verificable, validación de campo, independencia de proveedor, piloto pagado ni transferibilidad. La ventaja competitiva permanece `NOT_ASSESSED / EVIDENCE_REQUIRED`.

La fórmula de comunicación es deliberadamente multiplicativa: **Arquitectura × Implementación × Verificación × Operación × Campo × Mercado**. Si una capa crítica vale `0`, el activo no puede describirse como validado en esa capa.

## Trazabilidad

El contrato tipado vive en `shared/binaryValueRule.ts`, el panel visual en `client/src/components/BinaryValueRulePanel.tsx` y las garantías contractuales en `server/binaryValueRule.contract.test.ts`. El panel muestra el estado conservador, permite filtrar por nivel, selecciona cada condición y expone evidencia requerida, bloqueo, siguiente acción y dependencias.
