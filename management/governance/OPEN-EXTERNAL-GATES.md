# Open External Gates

Este registro consolida los controles que no deben marcarse como cerrados con evidencia local. Su función es hacer operable el bloqueo, no convertirlo en un claim de seguridad o madurez.

| Gate | Owner | Evidence required | Authorization route | Exit criterion | Rollback |
|---|---|---|---|---|---|
| Vault provider selection | Owner / security approver | Provider approved, backend secret read/write test, rotation and revoke audit | Explicit provider choice plus dual approval | `SECURITY_HOLD` replaced only after backend-only integration and tests | Revert adapter to `SecurityHoldVaultAdapter` |
| GitHub security_events access | Owner / GitHub admin | Authorized session or token scope able to read Dependabot/code-scanning/secret-scanning endpoints | GitHub OAuth authorization or browser login | Successful read of Security and quality and branch alerts without token exposure | Revoke OAuth grant and remove token scope |
| Main-branch Security and quality | Repository maintainers | Fresh remote readings for both knowledge-base main branches | After security_events access | 0 remote alerts confirmed on both mains | Reopen remediation PR or restore branch protection |
| Residual vulnerability remediation | Repository maintainers | Advisory IDs, fixed dependency graph and remote re-scan | GitHub security workflow | No high/critical remote findings on target branches | Pin/revert only through reviewed PR |
| Evidence update after remote zero | Assurance owner | URLs, timestamps, API response metadata and signed review note | Assurance review | Evidence pack references current remote result | Mark evidence stale and lower gate |
| Remote diagnostics | Platform owner | Authorized runtime endpoint, redacted output, SLO and alert trace | Backend deployment approval | Runtime diagnostic is reproducible and secret-free | Disable endpoint and retain local diagnostics |
| Production restore | Platform owner / operations | Ephemeral restore from encrypted backup with checksum and audit | Infrastructure change approval | Restore succeeds in isolated environment and is reviewed | Destroy ephemeral environment and keep backup immutable |
| External assurance | Independent reviewer | Signed review, reproducible benchmark and negative evidence | Reviewer engagement | E3 gate closes only with independent replay | Keep claim boundary at local evidence |
| Field/economic validation | Pilot owner / commercial reviewer | Field KPIs, failure condition, economic evidence and independent review | Pilot and commercial approval | N5 promotion only after evidence package is complete | Return to P2 and invalidate competitive advantage |

The dashboard and passports must continue to expose these states as `BLOCKED`, `SECURITY_HOLD`, `EVIDENCE_REQUIRED` or `NOT_VERIFIED` until the exact exit criteria are met. No credential, token or personal information belongs in this document.

## Confirmación operativa 2026-08-17

La superficie documental gobernada fue revalidada contra GitHub: 14/14 ramas PR contienen un único bloque, el índice `CASTUO-SYSTEM-OPERATING-INDEX.md`, los límites de claims y la trazabilidad esperada; 16/16 repositorios permanecen inventariados y 2 forks continúan excluidos. La validación local del dashboard mantiene 59 tests, TypeScript sin errores, secret scan pasado, dependency scan con 0 advisories locales, SBOM y build correctos. Las PRs siguen abiertas y no se modificó directamente ninguna rama `main`.

La consulta remota de Security and quality, los checks y annotations de GitHub continúa sin cierre porque la sesión actual devuelve 403 por falta de autorización `security_events`. La selección de proveedor vault real, el restore de producción, el diagnóstico remoto, la revisión independiente, el piloto de campo y la evidencia económica continúan en `SECURITY_HOLD`, `EVIDENCE_REQUIRED` o `NOT_VERIFIED` según corresponda. Esta confirmación no promueve ningún claim ni convierte evidencia local en evidencia de producción.

### Diagnóstico GitHub actualizado

La sesión `Traky12` está autenticada, pero la consulta `GET /repos/Traky12/castuo-strategy-knowledge-base/secret-scanning/alerts` respondió `HTTP 403 Forbidden`. GitHub declara `X-Accepted-OAuth-Scopes: public_repo, repo, security_events` y la sesión no está autorizada para ese alcance. El token no se registra ni se expone; el gate permanece abierto hasta completar autorización mediante OAuth o navegador y repetir la lectura remota.

## Confirmación integral posterior a la integración narrativa y soberana

La validación local y documental más reciente registra **14/14 README/PRs válidas**, ausencia de faltantes y claims prohibidos, **62 tests verdes**, TypeScript correcto, secret scan sin credenciales con forma de secreto, dependency scan local con 0 advisories, SBOM generado, governance validado y build de producción correcto. Esta confirmación no equivale a cero alertas remotas en GitHub ni a evidencia de producción.

| Gate | Estado actual | Criterio de cierre no cumplido |
|---|---|---|
| GitHub Security and quality remoto | `BLOCKED / NOT_VERIFIED` | Sesión autenticada con `security_events` y consulta reproducible de ambas ramas principales |
| Vulnerabilidades remotas | `PENDING` | Verificación remota de 0 alertas; el scan local no sustituye Dependabot/GitHub |
| SaaS vault | `SECURITY_HOLD` | Proveedor aprobado, backend-only, rotación, revocación, doble aprobación y prueba de permisos |
| Assurance remoto | `PENDING` | Checks, logs y annotations accesibles con redacción y permisos mínimos |
| Restore/diagnóstico | `EVIDENCE_REQUIRED` | Prueba efímera real de backup/restore y diagnóstico remoto reproducible |
| Field/economic evidence | `EVIDENCE_REQUIRED` | Piloto medido, revisión independiente y evidencia económica autorizada |

No se promueve ningún claim de producción, seguridad remota cero, validación de campo, certificación, adopción o resultado económico mientras estos criterios no estén cerrados con evidencia fechada y trazable.
