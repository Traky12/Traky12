# CASTÚO-SYSTEM — Operational Integrity Repair

**Date:** 2026-08-18  
**Scope:** local dashboard, governed artifacts and authorized README PR branches  
**State:** `LOCAL_VERIFIED / REVIEW_REQUIRED`  
**Claim boundary:** `LOCAL OPERATIONAL INTEGRITY / NO PRODUCTION CLAIM`

## Diagnosis

The operational audit found a real traceability divergence: the Git history contained **91 commits**, while `CASTUO-COMMIT-LINEAGE.md` and `shared/lineageData.ts` contained **67** entries. The README lineage contract consequently failed because the governed block did not reproduce every current SHA. This was a local consistency defect, not evidence of remote tampering or a production security incident.

A secondary operational risk was that the previous chain had no single typed contract covering ownership, timestamps, hash format, evidence references, gate references, claim boundary and rollback condition across `COMMIT → PR → ARTIFACT → EVIDENCE → GATE → CLAIM`.

## Repairs applied

| Risk | Repair | Result |
|---|---|---|
| Ledger stale against Git | Regenerated commit ledger from `git log --reverse` | 91 current commits reproduced |
| Typed projection stale | Regenerated `shared/lineageData.ts` | 91 typed commit entries and 14 PR entries |
| README lineage incomplete | Regenerated governed README lineage block and resynchronized PRs | lineage contract passes |
| No unified operational contract | Added `shared/operationalIntegrity.ts` | fail-closed structural evaluator |
| Weak transition controls | Added owner, timestamp, SHA, evidence, gate, claim boundary and rollback checks | missing fields deny local integrity |
| Claim overreach risk | Current claims require `LOCAL_ONLY`; pending/blocked claims require `NO_PRODUCTION_CLAIM` | claim boundary enforced |
| UI observability gap | Added `OperationalIntegrityPanel` | chain and violations visible in dashboard |

## Canonical integrity contract

```text
COMMIT → PR → ARTIFACT → EVIDENCE → GATE → CLAIM
```

Each record must declare `id`, `stage`, `owner`, `timestamp`, `sha`, `state`, `evidenceRef`, `gate`, `claimBoundary` and `rollback`. Duplicate identifiers, malformed hashes, empty ownership, missing evidence, missing gates, non-monotonic time, invalid stage order or unsafe claim boundaries produce `DENY`.

The local readout is `ALLOW_LOCAL` only when the structure is valid. `PENDING` or `BLOCKED` records produce `REVIEW_REQUIRED`; external gates are not promoted by this evaluator.

## Validation

| Check | Result |
|---|---:|
| Lineage source | 91 Git commits |
| Ledger | 91 unique SHAs |
| Typed projection | 91 commit entries |
| README lineage contract | Passing |
| Operational integrity tests | 4 passing |
| Lineage tests | 4 passing |
| TypeScript | Passing |
| Remote state | Not changed; 14 PRs remain open, main direct writes = 0 |

## Remaining risks

GitHub `security_events`, remote checks/logs, Dependabot, approved Vault, independent assurance, field evidence, economic evidence, restore execution and federation remain external gates. The local repair does not establish zero remote vulnerabilities, production continuity, field validation or customer adoption.

## Acceptance and rollback

Acceptance requires the local ledger count, typed projection and README block to reproduce the same current SHA set, the operational integrity contract to pass structural tests and the full validation suite to remain green. Rollback is the latest saved dashboard checkpoint; if any lineage or evidence source diverges, retain `REVIEW_REQUIRED`, invalidate the affected readout and regenerate from the authoritative Git history.
