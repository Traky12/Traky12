# CASTÚO-SYSTEM — Master Prompt Governance Policy

**Source:** `/home/ubuntu/upload/pasted_content_28.txt`  
**Source identifier:** `pasted_content_28.txt`  
**Date integrated:** 2026-08-18  
**Authority:** `castuo-evolution` control plane  
**State:** `CURRENT / DECLARED_SCOPE`  
**Claim boundary:** `LOCAL POLICY / NO PRODUCTION CLAIM`

## Purpose

This policy normalizes the master prompt as an operational governance contract for CASTÚO-SYSTEM. It governs how the system describes capabilities, evidence, maturity, claims, risks, gates, security and external validation. It is a policy and not evidence that any target capability is operational.

> **NO CLAIM WITHOUT PROVENANCE** · **NO AI DEPLOYMENT WITHOUT ASSURANCE** · **NO SCALE WITHOUT SECURITY AND OBSERVABILITY**

## System position

CASTÚO-SYSTEM is an evidence-first control and observability infrastructure for distributed and rural offline-first operations. Its initial wedge is **CASTÚO Evidence-Ready Field Operations**: create an organization, register an operation, continue through connectivity loss, synchronize, review evidence and export a report.

The wedge is a target operating workflow until field evidence, independent review and repeatable execution close the relevant gates. Offline-first, edge/IoT, MQTT, private cloud, assisted AI, data sovereignty, federation, observability, recovery, assurance, evidence lineage, secure connectors, vault and governed automation are architectural or experimental capabilities unless their specific evidence is reviewed and promoted.

## State vocabulary

| State | Normative meaning |
|---|---|
| `CURRENT` | Supported by the declared scope and available evidence |
| `TARGET` | Planned promotion profile; not current operation |
| `EXPERIMENTAL` | Laboratory, pilot, integration or research work |
| `PENDING` | Evidence, execution, review or authorization incomplete |
| `NOT_CLAIMED` | Explicitly outside the authorized claim boundary |

Evidence qualifiers must include scope: `LOCAL_VERIFIED`, `SYNTHETIC_VERIFIED`, `DECLARED_SCOPE`, `REMOTE_UNVERIFIED`, `INDEPENDENTLY_REVIEWED`, `FIELD_VERIFIED`, `COMMERCIAL_VERIFIED`, `SECURITY_HOLD` or `PROMOTION_BLOCKED`. The unqualified label `VERIFIED` is prohibited.

## Conservatively preserved baseline

| Area | Current governed reading |
|---|---|
| Control-plane maturity | High and increasingly coherent within the local architecture scope |
| Local implementation evidence | Meaningful but bounded |
| Remote verification | Blocked or unverified |
| Field validation | Absent |
| Independent assurance | Pending |
| Commercial evidence | Not claimed |
| External value | `B01–B03 = 1`, `B04–B12 = 0`, `3/12` in declared external scope |
| Internal controls | `B13–B15 = 1`; never converted into external value |
| Promotion debt | `9`, with critical debt `1`, subject to the authoritative binary artifact |
| Bottleneck | `B04 · remotely verifiable CI = 0` |

The B04 state is an evidence boundary, not a diagnosis of code failure. A remote `403` is an access diagnostic and does not independently prove a functional defect.

## Promotion contract

The normative chain is:

```text
CLAIM → EVIDENCE → EXECUTION → HASH → REPRODUCTION → INDEPENDENT REVIEW → GATE → PROMOTION / ROLLBACK
```

Promotion must be explicit, reversible, scope-bound, reproducible, owner-approved and default-deny when mandatory evidence is absent. Each module declares `Owner`, `Scope`, `Input`, `Output`, `Evidence required`, `Current state`, `Promotion gate` and `Rollback condition`.

## P0 / P1 / P2

| Priority | Governed focus | Exit evidence |
|---|---|---|
| P0 | Remote CI, access diagnostics, security baseline, frontend secret elimination, backend-only connectors, approved least-privilege Vault, typed evidence, negative tests and governed merge | Remote result with authenticated access, reproducible workflow, security evidence and reviewable PR merge |
| P1 | Repository catalog, ownership, sensitivity, scopes, authorization, observability, SLOs, backup, restore, checksums, rollback, lineage and evidence inventory | Operational controls exercised in the declared environment with redacted evidence |
| P2 | Independent reproduction, alternative implementation, vendor independence, S-001, field validation, independent review, pilot, economic evidence, payment, repeatability and transferability | Independent or field/commercial evidence package with signed review and authorized gate |

## Secure connector boundary

```text
BROWSER INTENT → AUTHENTICATED BACKEND → APPROVED VAULT → LEAST-PRIVILEGE PROVIDER CALL → REDACTED AUDIT EVENT → STATUS ONLY TO BROWSER
```

API keys must never enter `localStorage`, static bundles, browser provider calls, unredacted logs or client-visible responses. Connectors remain `SECURITY_HOLD` until a Vault provider is approved, scopes are minimized, owner/security approval exists and rotation, revocation and rollback are evidenced.

## Dashboard communication

The dashboard must lead with the problem and the Evidence-Ready Field Operations wedge, then show what is demonstrated, what is blocked and the next verifiable action. Coverage percentages must be labelled `LOCAL DESIGN COVERAGE`, `EVIDENCE INDEX COVERAGE`, `PLANNING COVERAGE` or `DOCUMENTATION COVERAGE`, followed by `NOT A MATURITY SCORE` and `NOT PRODUCTION EVIDENCE` where applicable.

The dashboard must keep visible: `0 verified production claims`, `NO FIELD EVIDENCE`, `REMOTE VERIFICATION BLOCKED OR UNVERIFIED`, `INDEPENDENT REVIEW PENDING` and `COMMERCIAL EVIDENCE NOT CLAIMED`.

## Writing and claim firewall

Every important statement must answer: what is claimed, where the evidence is, scope, executor, date, reproducibility, reviewer, authorizing gate and exclusions. If any answer is unavailable, use `PENDING`, `UNVERIFIED`, `TARGET` or `NOT_CLAIMED`.

Prohibited transformations include commit activity into production operation, PR state into merge/review/deployment, repository activity into customer adoption or revenue, planning coverage into commercial traction, a prepared benchmark into competitive superiority, or a field plan into a completed pilot.

## Next gate

**Owner:** platform/security control plane.  
**Input:** authorized remote CI/checks access and approved Vault decision.  
**Execution:** reproduce B04 workflow and record access diagnostic separately from functional result.  
**Expected evidence:** authenticated remote result, redacted checks/log metadata, branch/commit reference and reviewable PR lineage.  
**Acceptance:** B04 changes only when the workflow is remotely observable and reproducible; no `403` is interpreted as a code failure or as zero alerts.  
**Rollback:** retain `B04 = 0`, `REMOTE_UNVERIFIED` and `PROMOTION_BLOCKED` when access or evidence is incomplete.

## References

1. [`CASTUO-SYSTEM-OPERATING-INDEX.md`](./CASTUO-SYSTEM-OPERATING-INDEX.md)
2. [`CASTUO-UNIFIED-STRATEGY-AND-BINARY-PROGRESSION.md`](./CASTUO-UNIFIED-STRATEGY-AND-BINARY-PROGRESSION.md)
3. [`CASTUO-SESSION-REGISTER-2026-08-18.md`](./CASTUO-SESSION-REGISTER-2026-08-18.md)
