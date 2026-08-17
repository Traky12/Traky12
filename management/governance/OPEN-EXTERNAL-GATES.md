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
