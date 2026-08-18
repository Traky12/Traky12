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

## Diagnóstico de autorización GitHub — 2026-08-18

La sesión `Traky12` continúa autenticada mediante `GH_TOKEN`, pero `GET /repos/Traky12/castuo-strategy-knowledge-base/secret-scanning/alerts` respondió `HTTP 403 Forbidden` a las 00:02:44 UTC. GitHub indica que el endpoint acepta `secret_scanning_alerts=read` y los scopes `public_repo`, `repo` o `security_events`, mientras que la sesión activa no presenta el alcance necesario. El token se mantuvo redactado y no se almacenó.

El gate permanece `BLOCKED / NOT_VERIFIED`. No se puede afirmar `0` remoto, corregir vulnerabilidades remotas con certeza ni actualizar evidencia de seguridad hasta completar la autorización y repetir las consultas en ambas ramas principales.

## Reintento de lectura remota — 2026-08-18

A las 00:30 UTC se reintentó la lectura de `secret-scanning/alerts` para `Traky12/copia-de-cast-o-system-strategy-knowledge-base` y `Traky12/castuo-strategy-knowledge-base`. Ambos endpoints respondieron `HTTP 403`. La sesión sigue autenticada, pero no ofrece el permiso requerido; no se obtuvo ningún conteo de alertas y el estado remoto continúa `BLOCKED / NOT_VERIFIED`.

## Continuidad posterior al Ledger Explorer — 2026-08-18

La iteración local `3803b849` incorpora el Ledger Explorer con búsqueda y filtros de commits/PRs, panel interactivo y exportación PDF del estado filtrado. La validación local registra 66 tests verdes, TypeScript correcto, build correcto, secret scan sin hallazgos, dependency scan local con 0 advisories, SBOM de 88 componentes y render responsive verificado. El ledger actual contiene 60 commits y las 14 superficies README permanecen validadas mediante PRs gobernadas.

Esta evidencia es local y documental. No altera los gates remotos: GitHub Security and quality continúa `BLOCKED / NOT_VERIFIED` por `security_events`, el vault real continúa `SECURITY_HOLD`, y restore/diagnóstico, assurance independiente y evidencia field/economic continúan `EVIDENCE_REQUIRED`.

## Binary promotion mapping — 2026-08-18

The Binary Value Rule maps the external gates to explicit promotion conditions. `B04` remains `0` while GitHub remote CI and Security and quality cannot be read with the required authorization; `B05` remains `0` without independent replay; `B07` remains `0` without runtime metrics, alerts and SLO evidence; `B10` remains `0` until a real vault provider is approved and backend-only rotation/revocation is verified; `B08`, `B09`, `B11` and `B12` remain `0` without field, vendor, commercial and transferability evidence. The rollback boundary is to keep the dashboard and passports at `BLOCKED`, `SECURITY_HOLD`, `EVIDENCE_REQUIRED` or `NOT_VERIFIED`; no binary is promoted by document volume or average score.

## Binary bottleneck extension — 2026-08-18

`B04 / Remote verification` es el Binary Bottleneck actual. La deuda de promoción externa es `9` (`B04–B12` en cero), mientras que la deuda crítica inmediata es `1` porque sólo B04 bloquea el siguiente salto. `B13–B15` están cerrados como controles internos (`3/3`) y no reducen la deuda externa ni autorizan claims de operación, campo, seguridad externa, negocio o ventaja competitiva.

## Unified strategy mapping — 2026-08-18

La estrategia unificada confirma que la siguiente ganancia de valor no proviene de más superficie, sino del cierre de binarios externos. `B04` sigue siendo el primer cuello de botella; después deben cerrarse `B05`, `B07`, `B10`, `B06`, `B08`, `B09`, `B11` y `B12` con evidencia específica. Los principios de provenance, assurance para IA y seguridad/observabilidad antes de escalar quedan como límites normativos para cualquier promoción futura.

## Sovereign Control Plane mapping — 2026-08-18

La nueva arquitectura común añade contratos para Binary Security Envelope, soberanía de datos, Evidence Graph, Digital Twin, ledger, incidentes/recovery y federación. Estos contratos fortalecen G1/G2/G3/G4/G6 localmente, pero no sustituyen los criterios externos de GitHub Security and quality, Vault real, runtime, revisión independiente, restore, field, comercial o federación.

La validación local posterior registra 75 tests verdes, secret scan sin credenciales, dependency scan con `advisories=0` y SBOM de 88 componentes directos. El dashboard conserva `BLOCKED / NOT_VERIFIED`, `SECURITY_HOLD` y `EVIDENCE_REQUIRED` donde los criterios de salida aún dependen de autorización, proveedor, infraestructura o revisión externa.

## Restore readiness local — 2026-08-18

`shared/restoreReadiness.ts` y sus pruebas contractuales verifican localmente schema, checkpoint, hashes críticos, ventana de rollback y divergencia de manifest. El resultado está limitado a `LOCAL RESTORE READINESS / NO PRODUCTION RESTORE CLAIM`. El gate de producción sólo podrá cerrarse mediante restore efímero real, checksum, auditoría y revisión en infraestructura aislada.

## Execution pack

`CASTUO-EXTERNAL-GATE-EXECUTION-PACK.md` contiene la matriz accionable para los gates remotos, Vault, assurance, field, commercial, restore y federation. Incluye entradas necesarias, verificación, evidencia esperada, owner y rollback. Es un paquete preparatorio y no altera los estados actuales ni contiene secretos.

## GitHub ecosystem audit and governance register — 2026-08-18

La auditoría de lectura queda en `GITHUB-ECOSYSTEM-AUDIT-2026-08-18.md`; el registro de borradores de comités, issues y PRs queda en `GITHUB-COMMITTEE-ISSUE-PR-REGISTER-2026-08-18.md`. Ambos documentos son preparatorios: no crean publicaciones remotas, no contienen tokens y no convierten la falta de `security_events` en evidencia de cero alertas.

## Governance gap P0 — main protection — 2026-08-18

The evolved control-plane role makes change authority a first-class gate. The target control is `PR REQUIRED → REVIEW REQUIRED → STATUS CHECKS → CODEOWNERS → NO FORCE-PUSH → NO DELETE`. This is a required governance outcome, not evidence that the setting is enabled. The actual repository configuration must be verified through GitHub settings/API and recorded with timestamp, owner and rollback.

### Main protection read-only verification — 2026-08-18

GitHub API read-only verification reports one required pull-request approval and stale-review dismissal for `Traky12/Castuo-system/main` and `Traky12/Cast-o/main`. It reports no required status checks, no administrator enforcement and no restrictions in the protection object. This partial observation strengthens the P0 governance gap but does not prove or close the full target control.
