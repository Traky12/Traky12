# CASTÚO-SYSTEM External Gate Execution Pack

> Este documento convierte los bloqueos externos en procedimientos auditables. No concede permisos, no contiene tokens y no promueve claims. Cada gate sólo cambia de estado cuando la evidencia indicada está disponible y revisada.

## GitHub Security and quality

**Precondición.** La sesión del propietario o administrador debe autorizar `security_events` mediante el flujo oficial de GitHub. No se deben copiar tokens al repositorio, al dashboard ni a este documento.

**Comprobación segura.** Ejecutar consultas autenticadas de sólo lectura para las tablas Security and quality de ambas ramas principales y registrar repositorio, rama, timestamp UTC, endpoint, HTTP status, conteo por categoría y referencia de respuesta. Un `403` significa `NOT_VERIFIED`, no cero alertas.

**Salida del gate.** Ambos repositorios de knowledge base deben devolver lecturas remotas actuales con cero alertas verificadas, y el resultado debe quedar revisado y enlazado al Evidence Passport. La evidencia local de `dependency scan: 0 advisories` no sustituye esta lectura.

**Rollback.** Revocar el grant OAuth o retirar el alcance autorizado; marcar la lectura como stale y devolver el gate a `BLOCKED`.

## Vault provider

**Precondición.** Aprobar exactamente un proveedor backend-only —por ejemplo HashiCorp Vault o AWS Secrets Manager— y registrar owner, región/tenant y política de acceso sin valores secretos.

**Comprobación segura.** Probar lectura/escritura de una referencia efímera, rotación, revocación, aislamiento por owner, scopes mínimos, aprobación dual y redacción de logs. El frontend sólo recibe intents, estados y referencias; nunca secretos.

**Salida del gate.** Sustituir `SecurityHoldVaultAdapter` únicamente después de tests de integración exitosos y revisión de permisos. Mantener `SECURITY_HOLD` si falta cualquier control.

**Rollback.** Volver al adaptador de seguridad neutral, revocar el binding del proveedor y eliminar referencias efímeras.

## Restore y diagnóstico remoto

**Precondición.** Aprobar una infraestructura efímera y una copia cifrada inmutable; no usar datos de producción en pruebas no autorizadas.

**Comprobación segura.** Ejecutar restore byte-a-byte con SHA-256 en entorno aislado, registrar versión de envelope, checksum, duración, auditoría y destrucción del entorno. El endpoint de diagnóstico sólo puede exponer estado redacted, SLO, gate state y trace IDs no sensibles.

**Salida del gate.** Restore reproducible y diagnóstico redacted revisado por un segundo operador. No elevar madurez por documentación o smoke local únicamente.

**Rollback.** Destruir el entorno efímero, conservar la copia inmutable y deshabilitar el endpoint remoto.

## Assurance independiente, field y economía

**Precondición.** Designar revisor independiente y definir protocolo S-001 antes de la ejecución. Fijar inputs, condición de fallo, métricas y criterios de reproducción.

**Comprobación segura.** Ejecutar una segunda implementación con los mismos inputs, registrar continuidad, recovery, provenance, completeness, reviewability y claim generation, y adjuntar firma del revisor. Para N5 se requieren además KPIs de campo, condición de fallo observada, evidencia económica y revisión independiente.

**Salida del gate.** E3 sólo tras replay independiente; N5 sólo tras el paquete de campo/economía completo. Hasta entonces, mantener `LOCAL RESULT / NO CLAIM` y `EVIDENCE_REQUIRED`.

**Rollback.** Invalidar la evidencia si cambia el fixture, marcar el passport como stale y volver a P2.

## Registro mínimo

| Campo | Regla |
|---|---|
| `gate` | Identificador estable del gate |
| `owner` | Responsable humano o equipo |
| `timestampUtc` | Hora de ejecución en UTC |
| `inputBoundary` | Qué datos entraron, sin secretos |
| `result` | Estado y métricas observadas |
| `evidenceUrl` | Referencia revisable |
| `reviewer` | Segunda persona o revisor independiente cuando aplica |
| `rollback` | Acción concreta para invalidar o revertir |

Un resultado incompleto debe conservarse como `BLOCKED`, `SECURITY_HOLD`, `EVIDENCE_REQUIRED` o `NOT_VERIFIED`. Nunca se transforma una ausencia de acceso en un resultado positivo.
