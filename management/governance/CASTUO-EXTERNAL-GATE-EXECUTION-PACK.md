# CASTÚO-SYSTEM External Gate Execution Pack

## Purpose and boundary

Este paquete transforma los nueve pendientes externos en acciones verificables. No ejecuta autorizaciones, no contiene tokens y no convierte un procedimiento en evidencia. Cada gate permanece `BLOCKED`, `SECURITY_HOLD` o `EVIDENCE_REQUIRED` hasta que exista el artefacto externo firmado o verificable y su commit/URL de procedencia.

## Gate matrix

| Gate | Entrada necesaria | Verificación | Evidencia de cierre | Owner | Rollback |
|---|---|---|---|---|---|
| GitHub remote security | Scope `security_events` autorizado y acceso de lectura | Consultar Security and quality en ambas ramas principales; comprobar 0 alertas por tipo | Captura/API JSON con repositorio, branch, timestamp y scopes no secretos | Repository owner | Revocar scope y conservar estado bloqueado si la respuesta no es completa |
| GitHub remediation | Lista remota de findings por repositorio | Corregir cada finding en PR revisable; ejecutar checks y escaneo posterior | PR mergeada, check run, advisory result y diff trazable | Repository owner + reviewers | Revertir únicamente por PR; no escribir directamente en main |
| GitHub assurance | Acceso a checks, logs y annotations | Reproducir workflow y registrar causa raíz, corrección y rerun | Run ID, logs redacted, annotations y commit SHA | CI/assurance owner | Cancelar rerun y reabrir gate si faltan logs o integridad |
| Vault provider | Decisión HashiCorp Vault o AWS Secrets Manager | Configurar backend server-side, least privilege, rotation y revocation; nunca frontend | Provider configuration reference, redacted integration test and rotation audit | Security owner | Mantener `SECURITY_HOLD` y volver al neutral adapter |
| Independent review | Revisor independiente y scope aprobado | Revisar contratos, evaluator, replay, claims y límites | Informe firmado con alcance, método, limitaciones y commit | Assurance owner | Invalidar revisión si cambia el commit o el alcance |
| Field evidence | Piloto, escenario, fallo y KPIs definidos | Ejecutar con inputs reproducibles, incidentes, recovery y observación | Field pack con hashes, timestamps, KPIs, incident IDs y review | Pilot owner | Roll back pilot version and preserve evidence bundle |
| Commercial evidence | Benchmark económico autorizado | Medir coste, repetibilidad, condiciones y sensibilidad | Benchmark reproducible, assumptions, source data and review | Commercial owner | Retirar claim comercial y mantener `EVIDENCE_REQUIRED` |
| Production restore | Entorno efímero aislado y manifest vigente | Restaurar, verificar hashes, probar rollback window y auditar resultado | Restore run ID, checksums, timing, reviewer and rollback record | Platform owner | Destruir entorno efímero y conservar únicamente el manifest |
| Federation | Dos organizaciones, contracts compatible y policy multi-tenant | Ejecutar proof compartible, data boundary y ledger anchor multipartito | Interop report, proof IDs, policy decisions and signed review | Federation owner | Revocar trust relationship y regresar a local-only mode |

## Evidence rules

La evidencia de cierre debe ser específica al gate, reproducible y ligada al commit que se evaluó. Un resultado local de tests, build o scan sólo demuestra el alcance local correspondiente; no sustituye la comprobación remota, independiente, de campo, comercial, de restore o de federación.

Los artefactos deben excluir tokens, credenciales, valores de secretos, PII y datos clínicos o industriales crudos. Cuando sea necesario mostrar trazabilidad, se utilizarán hashes, identificadores pseudónimos, timestamps y referencias redacted.

## Current state

| Scope | Current state |
|---|---|
| Local contracts/evaluators | Implemented and locally tested |
| Local security scan | Passed; 0 dependency advisories; SBOM generated |
| GitHub remote alert verification | Blocked by missing `security_events` authorization |
| Vault provider | `SECURITY_HOLD`; provider not selected |
| Independent review | Evidence required |
| Field/commercial evidence | Evidence required |
| Production restore | Readiness contract only; real restore required |
| Federation | Locked pending prior gates |

The operating index and `OPEN-EXTERNAL-GATES.md` remain the source of truth for promotion state.
