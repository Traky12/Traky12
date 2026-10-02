## CASTÚO governance update — 2026-08-18

**Scope:** remote Security and quality gate and P0 hardening.

**Current evidence:** local contracts, secret scan, dependency scan, SBOM, TypeScript, tests and build are green within the dashboard scope. This does not verify GitHub Security and quality remotely.

**Blocking condition:** remote alert verification is `BLOCKED / NOT_VERIFIED` because the current authorization lacks `security_events` and the relevant request returns 403.

**Required close criteria:** authorize the scope or an equivalent read path; enumerate alerts on the protected main branch; remediate each finding through reviewable PRs; rerun checks; attach repository, branch, timestamp and redacted API evidence.

**Owner:** repository owner plus security reviewer.

**Rollback:** preserve the issue open, revert only through a PR, and do not promote a zero-alert claim from local evidence.

**References:** `CASTUO-EXTERNAL-GATE-EXECUTION-PACK.md`, `CASTUO-SYSTEM-OPERATING-INDEX.md`, `GITHUB-ECOSYSTEM-AUDIT-2026-08-18.md`.
