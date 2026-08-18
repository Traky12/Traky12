## CASTÚO governance update — 2026-08-18

**Scope:** Dependabot and supply-chain triage before promotion.

The open Dependabot PR queue remains an actionable security workstream. Each PR must be evaluated through its own checks, compatibility impact, reviewer approval and merge/revert record. The local dashboard dependency scan reports `advisories=0` only for its declared dependency tree; it does not close this repository's remote findings.

**Exit criteria:** every applicable Dependabot PR is merged or explicitly dispositioned; checks and security workflows are green; issue history records the decision; the protected main branch is rechecked through the remote security gate.

**Owner:** repository owner plus security reviewer.

**Rollback:** revert through a new PR if a dependency update breaks tests, runtime or policy; retain the issue open until the remote evidence is attached.

**Claim boundary:** no zero-vulnerability, production-security or maturity claim is promoted from local scans alone.
