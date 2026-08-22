# CASTÚO-SYSTEM™ — Promotion, PR and Security Report

**Scope:** `Traky12/Traky12`, `castuo-evolution` and `castuo-evidence` public governance surfaces.  
**Current profile surface:** `GREEN-STAGING · EVIDENCE-SCOPED`  
**System promotion:** `BLOCKED · EXTERNAL EVIDENCE REQUIRED`  
**Audit basis:** GitHub PR and branch-protection inspection on 19 August 2026.

## Executive decision

The profile surface has a passing deterministic validation check and is mergeable, but the full system is not eligible for production promotion. The protocol requires the sequence `remote conformance → security baseline → replayable S-001 staging slice → independent E3 → field evidence → commercial evidence → human GO`.

> A green staging surface is a necessary hygiene state, not a production authorization.

## Exact promotion path beyond GREEN-STAGING

The gates must be closed in order. A later gate cannot compensate for an earlier missing gate.

| Step | Gate | Exact completion requirement | Current state |
|---:|---|---|---|
| 1 | Merge governed changes | Merge the required PRs with human approval, Code Owner review where applicable, latest-push approval, resolved conversations and passing required checks | `BLOCKED · REVIEW_REQUIRED` |
| 2 | Remote conformance | Execute the declared suite on merged remote heads for all 14 repositories; record repository, commit, workflow, timestamp, environment, suite, result, artifact and SHA-256 | `0/14 · PENDING` |
| 3 | Security Baseline v1 | Produce dated dependency, secret, SBOM, container, permissions, branch-protection, OIDC/TLS, audit, disclosure, backup/restore and incident-response evidence | `PENDING` |
| 4 | S-001 staging slice | Execute one bounded organization/workflow scenario through connectivity loss, offline operations, recovery, synchronization, integrity verification, report generation and replay | `READY · PENDING STAGING` |
| 5 | Foreign replay | A distinct operator/environment reproduces the frozen evidence package without modifying the system or relying on founder knowledge | `PENDING` |
| 6 | Independent E3-001 | Independent reviewer clones, installs, runs and verifies the package; reviewer records environment, commands, hashes, deviations and a signed decision | `PENDING` |
| 7 | Operational readiness | Demonstrate observability, RTO/RPO, failure injection, rollback, backup/restore and incident response in the declared staging scope | `PENDING` |
| 8 | Field validation | A real field operator executes the bounded workflow with dated results and acceptance criteria | `NOT_CLAIMED` |
| 9 | Commercial validation | One real organization, one workflow, a declared period, payment, acceptance and one measured KPI | `NOT_CLAIMED` |
| 10 | Promotion decision | Authorized human reviews the complete evidence chain and records `GO`, `NO-GO` or `RECOVERY_REQUIRED`; rollback boundary is explicit | `BLOCKED` |

The transition target is:

```text
GREEN-STAGING · EVIDENCE-SCOPED
→ GREEN-STAGING-VERIFIED · EVIDENCE-REPRODUCIBLE
→ E3-VERIFIED · SECURITY-BASELINE-PASS
→ FIELD-PILOT-VALIDATED
→ COMMERCIAL-VALIDATED
```

## PR status

| PR | Repository | Current state | Checks / protection | Blocker |
|---|---|---|---|---|
| [#18][1] | `Traky12/Traky12` | `OPEN · MERGEABLE · BLOCKED · REVIEW_REQUIRED` | `Validate evidence dossiers` passed; `sync` is a required protected context | Human approval, Code Owner, latest-push approval, resolved conversations and required contexts |
| [#26][2] | `castuo-evolution` | `OPEN · MERGEABLE · BLOCKED · REVIEW_REQUIRED` | Status-rollup access was restricted in this session | Human approval, Code Owner and branch protection; checks require direct review |
| [#27][3] | `castuo-evolution` | `OPEN · MERGEABLE · BLOCKED · REVIEW_REQUIRED` | Status-rollup access was restricted in this session | Human approval, Code Owner and branch protection; control-plane artifacts remain unmerged |
| [#1][4] | `castuo-evidence` | `MERGED` | Historical S-001A implementation | No PR merge blocker; downstream independent replay remains pending |
| [#2][5] | `castuo-evidence` | `MERGED` | Real S-001A hashes and replay protocol | Protocol exists; completed foreign replay is not claimed |

### Branch-protection facts

`Traky12/Traky12/main` requires one approving review, Code Owner review, approval of the latest push, dismissal of stale reviews, the contexts `Validate evidence dossiers` and `sync`, strict branch update and administrator enforcement. `castuo-evolution/main` requires one approval, Code Owner review, latest-push approval, stale-review dismissal and administrator enforcement; no required status context was returned in the inspected response. `castuo-evidence/main` did not report branch protection through the inspected endpoint.

## Current security blockers

| Security area | Current finding | Exact resolution |
|---|---|---|
| Secret Scanning | GitHub API returned `403 Resource not accessible by integration` | Owner-enabled Advanced Security review and alert export; do not claim zero alerts before this exists |
| Dependabot | GitHub API returned `403 Resource not accessible by integration` | Owner-enabled dependency alert review and remediation/acceptance register |
| Code Scanning | `castuo-evolution` reported code scanning not enabled; other repositories returned access restrictions | Enable or explicitly scope code scanning for applicable repositories and retain results |
| Dependency baseline | No complete dated repository-wide result in this profile PR | Generate dependency scan, severity classification, owner and due date |
| SBOM | Not closed | Generate versioned SBOM for every production-candidate repository |
| Permissions | Profile workflow was repaired to read-only; production permission review remains open | Review repository, environment, token and deployment permissions |
| Branch protection | Strong on profile and control plane; evidence repository protection was not reported | Confirm protection policy for every production-candidate repository |
| Backup/restore | No completed exercise claimed | Run restore test, record RTO/RPO, evidence hash and reviewer |
| Incident response | No completed exercise claimed | Execute tabletop or real incident drill and record follow-up |
| OIDC/TLS/rotation/audit | Not closed or not applicable by repository | Record applicability, configuration and dated verification |

### Repaired local risks

The profile synchronization workflow now has `contents: read` and cannot automatically commit or push. Drift between generated and committed public state fails closed and requires a reviewed PR. Evidence validation covers `evidence-center/**`, `docs/**`, `README.md` and `.github/workflows/**`; it rejects tracked private material and scans high-risk secret patterns.

These repairs reduce repository-level risk. They do not prove that GitHub Advanced Security has no alerts or that production security is complete.

## Capabilities and evidence limits

| Capability | State | Current evidence | Limit |
|---|---|---|---|
| Evidence-ready field operations | `CURRENT · EVIDENCE-SCOPED` | Local workflow, offline continuity, synchronization and report export | No production, customer or recurring-operations claim |
| Assurance and recovery | `CURRENT · EVIDENCE-SCOPED` | Fail-closed gates, negative checks, recovery and evidence preservation | No certification or universal assurance claim |
| Edge/IoT continuity | `EXPERIMENTAL` | Bounded telemetry, buffering and connectivity-loss fixtures | No autonomous or production IoT claim |
| Workflow orchestration | `EXPERIMENTAL` | Governed adapters with declared permissions | No privilege elevation or irreversible authority |
| AI assistance | `EXPERIMENTAL · ADVISORY` | Dry-run recommendations and controlled reports | No autonomous production decisions |
| Federation/vendor exit | `TARGET` | Portability architecture | No verified federation or vendor exit |
| Observability/operations | `EXPERIMENTAL · STAGING` | Reporting and promotion surfaces | No continuous operational readiness |

The assurance boundary remains **`1D YES · 1R NO · 1V NO · 1A NO → PROMOTION BLOCKED`**.

## Presentation script for the updated README

### Cover — CASTÚO-SYSTEM™

CASTÚO-SYSTEM is an evidence-driven infrastructure direction for resilient rural and distributed operations. The profile is governed by three principles: no claim without provenance, no AI deployment without assurance and no scale without security and observability.

### Slide 1 — The public journey

The public reading order is `Traky12 → CASTÚO-SYSTEM → Core → Governance → Evidence → Assurance → Field Operations → Edge/IoT`. The profile is the entry point; the control plane governs; evidence repositories show bounded proof; operations repositories demonstrate implementation scope.

### Slide 2 — Current state

The profile and documentation surface is `GREEN-STAGING · EVIDENCE-SCOPED`. The full system remains `BLOCKED · EXTERNAL EVIDENCE REQUIRED`. Local conformance is `14/14 PASS LOCAL`; remote conformance, full security baseline, independent E3, field and commercial validation remain pending.

### Slide 3 — Capability envelope

The README distinguishes current evidence-scoped capabilities from experimental work and target architecture. Field operations and assurance/recovery are current within scope; Edge/IoT, workflow integration, AI assistance and observability remain experimental; federation/vendor exit remains a target.

### Slide 4 — Evidence chain

Every claim follows `Claim → Evidence → Execution → Hash → Reproduction → Independent review → Gate → Promotion or rollback`. A local result can support a local result or no-claim status, but it cannot be called independent verification.

### Slide 5 — Security posture

The profile workflow is now read-only and fail-closed. Documentation changes trigger evidence validation; tracked private material and high-risk secret patterns are rejected. The remaining security blockers are Advanced Security access, dependency evidence, SBOM, permissions, backup/restore, incident response and human review.

### Slide 6 — PR state

PR #18 is mergeable but blocked by protected-branch governance. PRs #26 and #27 in `castuo-evolution` are also open and review-required. Evidence PRs #1 and #2 are merged, but their existence does not close foreign replay or independent E3.

### Slide 7 — Promotion path

The next steps are remote conformance, Security Baseline v1, S-001 in staging, foreign replay, independent E3, operational readiness, field validation, a paid pilot and a measured result. Each step must close with dated evidence and a responsible reviewer.

### Slide 8 — Decision boundary

The system remains at `1D YES · 1R NO · 1V NO · 1A NO`. Promotion is blocked until evidence and authority exist. No production, certification, customer, autonomy, federation or commercial claim is made.

### Closing — A public contract of claims

The README is a public claims contract. It explains what exists, links what can be inspected, exposes the next gate and preserves what is not claimed. The goal is not certainty by narrative, but safe progression by reproducible evidence.

## Non-claims

This report does not claim production operation, certification, independent validation, regulatory conformity, field continuity, customer results, payment, autonomous authority, federation, vendor exit or commercial validation.

## References

[1]: https://github.com/Traky12/Traky12/pull/18 "Profile PR #18"  
[2]: https://github.com/Traky12/castuo-evolution/pull/26 "EvOS baseline PR #26"  
[3]: https://github.com/Traky12/castuo-evolution/pull/27 "Capabilities and proof ladder PR #27"  
[4]: https://github.com/Traky12/castuo-evidence/pull/1 "S-001A implementation PR #1"  
[5]: https://github.com/Traky12/castuo-evidence/pull/2 "Real hashes and replay protocol PR #2"  
[6]: https://github.com/Traky12/Traky12/actions/runs/32284766310 "Latest profile evidence validation run"  
[7]: https://github.com/Traky12/Traky12/blob/chore/evidence-scoped-capability-profile/docs/CASTUO_MASTER_PROGRESS_PROTOCOL.md "Master progress protocol record"
