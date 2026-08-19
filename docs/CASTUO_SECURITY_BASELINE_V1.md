# CASTÚO Security Baseline v1

**Status:** `READY · EXECUTION REQUIRED`  
**Scope:** Repositories and services that enter the staging or production-candidate path.  
**Boundary:** This is an engineering baseline, not certification or regulatory conformity.

## Control matrix

| Control | Required evidence | Status |
|---|---|---|
| Dependency scanning | Dated scan per declared repository, severity and remediation owner | `PENDING` |
| Secret scanning | Native GitHub result plus local high-risk pattern scan | `PARTIAL` |
| SBOM | Versioned SBOM for each production-candidate repository | `PENDING` |
| Container scanning | Image digest, scan result and accepted exceptions where applicable | `PENDING / N/A BY REPO` |
| Permissions | Repository, environment and deployment permission review | `PENDING` |
| Branch protection | Required reviews, Code Owners, status checks and stale-review handling | `PARTIAL · VERIFIED ON PROFILE REPO` |
| OIDC | Short-lived identity configuration where cloud deployment exists | `PENDING / N/A BY REPO` |
| Secret rotation | Secret owner, rotation period, revocation procedure and last rotation | `PENDING` |
| TLS | External-service TLS requirement and certificate/endpoint evidence | `PENDING / N/A BY REPO` |
| Audit logging | Retention, access and review procedure | `PENDING` |
| Vulnerability disclosure | Public/private reporting path and triage owner | `PENDING` |
| Backup and recovery | Backup scope, restore test, RTO/RPO and result | `PENDING` |
| Incident response | Tabletop or real incident record with owner and follow-up | `PENDING` |

## Exit criteria

The baseline may move to `PASS` only when every applicable control has dated evidence, an owner, a result and a remediation/acceptance record for any exception. A green workflow alone is insufficient.

## Non-claims

This document does not claim absence of vulnerabilities, certification, regulatory conformity, production security or universal assurance. It defines the evidence required to make a bounded security claim.
