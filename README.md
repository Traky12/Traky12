# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Founder and lead architect of CASTÚO-SYSTEM™**

> **NO CLAIM WITHOUT PROVENANCE**
>
> **NO AI DEPLOYMENT WITHOUT ASSURANCE**
>
> **NO SCALE WITHOUT SECURITY AND OBSERVABILITY**

CASTÚO-SYSTEM is an evidence-driven infrastructure direction for resilient rural and distributed operations. The first commercial wedge is **CASTÚO Evidence-Ready Field Operations**: offline-first continuity, traceability and reviewable evidence for workflows operating with irregular connectivity.

AI, Edge/IoT, federation, sovereignty and private cloud are enabling architecture. They are not separate products or claims of current production operation.

<!-- CASTUO:STATE:START -->
## Current ecosystem state

**GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED**

| Dimension | Current public status |
|---|---|
| Local conformance | `14/14 PASS LOCAL` |
| Remote conformance | `0/14` — `PENDING` |
| Remote publication | `14 PENDING` |
| Environment | `STAGING` |
| Security baseline | `PENDING` |
| Staging execution | `PENDING` |
| Human review | `PENDING` |
| Production | `NOT_CLAIMED` |
| Commercial validation | `NOT_CLAIMED` |
| Independent E3 | `PENDING` |
| Federation | `PENDING` |

**Evidence basis:** `castuo-evolution` · commit `70b7c57` · scope `local checkout set of 14 repositories` · [`evidence/local-conformance-2026-08-16/summary.json`](https://github.com/Traky12/castuo-evolution/blob/main/evidence/local-conformance-2026-08-16/summary.json) · review `PENDING`.

The public profile is a projection of the canonical control plane. Blocker: `remote_publication_conformance_security_evidence_staging_review_pending`. Local evidence does not imply remote publication, production, certification, customer result, continuous operation or federation.
<!-- CASTUO:STATE:END -->

## GitHub integration status

| Surface | Current state | Public location |
|---|---|---|
| `castuo-evidence` PR #1 | `MERGED` | S-001A pipeline, stress, envelope and fail-closed gate |
| `castuo-evidence` PR #2 | `MERGED` | Real S-001A hashes and foreign replay protocol |
| `castuo-evolution` PR #26 | `OPEN · REVIEW_REQUIRED` | EvOS v13.0 baseline and E3-001 protocol |
| `castuo-evolution` PR #27 | `OPEN · REVIEW_REQUIRED` | Capabilities, profiles, promotion gates and proof ladder |
| `Traky12/Traky12` PR #18 | `OPEN · REVIEW_REQUIRED` | This evidence-scoped profile update |
| `castuo-evolution` issue #9 | `OPEN` | Independent E3-001 review |

The protected PRs require human approval, Code Owner review, approval of the latest push and resolved conversations. No administrative bypass is used. A merged PR or a successful local check does not change `1R`, `1V`, `1A` or the production claim boundary.

## Customer wedge

```text
Problem → Field workflow → Capability → Implementation
→ Test → Evidence → Review → Pilot → Payment → Operation
→ Repeatability → Federation
```

The first user journey is intentionally bounded:

```text
Create organisation → register an operation → continue through connectivity loss
→ synchronise → review evidence → export a report
```

The public profile does not claim that this journey is a completed production or commercial operation. Measured field results, payment, renewal and continuous operation require separate evidence.

## Public semantic boundary

| Label | Meaning in this profile |
|---|---|
| `CURRENT` | Presently supported by the declared control-plane scope and evidence basis |
| `TARGET` | Intended capability or promotion profile, not current operational truth |
| `EXPERIMENTAL` | Bounded laboratory, pilot or integration work; not production evidence |
| `PENDING` | Required evidence, execution or review has not yet been completed |
| `NOT_CLAIMED` | Explicitly outside the claims authorised by current evidence |

A commit, issue, README, badge or green workflow does not prove production, customer adoption, certification, autonomy, federation, recurring revenue or continuous operation.

## Capability envelope

The capability registry is governed by `castuo-evolution` and distinguishes **capability**, **implementation**, **evidence**, **maturity** and **claim**. The following is the current public envelope; each item remains bounded by its evidence state.

| Capability | Current boundary | State | Not claimed |
|---|---|---|---|
| Evidence-ready field operations | Offline-first local workflow, synchronization, reviewable evidence and report export | `CURRENT · EVIDENCE-SCOPED` | Production continuity, customer results, recurring operation |
| Assurance and recovery | Security, observability, recovery and evidence preservation tooling | `CURRENT · EVIDENCE-SCOPED` | Independent certification, operational SLA, universal security assurance |
| Offline-first edge / IoT | Bounded telemetry, local buffering and connectivity-loss validation | `EXPERIMENTAL · PENDING REVIEW` | Autonomous field operation, validated savings, production IoT service |
| Workflow integration | Governed adapters and bounded orchestration using declared permissions | `EXPERIMENTAL · PENDING REVIEW` | Autonomous authority, privilege elevation, irreversible execution |
| AI-assisted recommendations | Dry-run advisory and controlled report preparation under explicit policy | `EXPERIMENTAL · PENDING REVIEW` | Autonomous irrigation, production decisions, independent validation |
| Federation and vendor exit | Target architecture for evidence portability and provider substitution | `TARGET · PENDING` | Verified federation, vendor exit, interoperable production network |

Promotion requires typed evidence, negative tests, replay, recovery, human review and closure of the applicable gates. A documented capability or upstream integration is not automatically a CASTÚO proprietary production capability.

## Evidence chain

```text
Claim → Evidence → Execution → Hash → Reproduction
→ Independent review → Gate → Promotion / rollback
```

The control plane governs the state. Repositories implement declared roles. Evidence Packs demonstrate bounded results. The profile summarizes and links; it does not decide.

The current public S-001A package is available in [`castuo-evidence`](https://github.com/Traky12/castuo-evidence): [`EVID-EVT-0002.json`](https://github.com/Traky12/castuo-evidence/blob/master/evidence/local/EVID-EVT-0002.json) contains real fixture, input, output and evidence hashes; [`S001A_FOREIGN_REPLAY_PROTOCOL.md`](https://github.com/Traky12/castuo-evidence/blob/master/docs/S001A_FOREIGN_REPLAY_PROTOCOL.md) defines the clean-clone replay required to move `1R` from `NO` to `YES`. The package remains local-scoped and fail-closed.

## Proof ladder

```text
S-001A local → public freeze → remote conformance → foreign replay
→ independent E3 → staging vertical slice → field result
→ paid pilot → repeatability → operational promotion
```

Only the local S-001A proof is currently closed. The control-plane proof ladder, KPI `CONTINUITY-001` and bounded vertical-slice definition are published in [PR #27](https://github.com/Traky12/castuo-evolution/pull/27) and remain subject to human review before merge.

## Repository map

| Repository | Public role | Boundary |
|---|---|---|
| `castuo-evolution` | Governance control plane | SSOT for vocabulary, Gates, evidence and promotion state |
| `Castuo-system` | Core platform | Implementation and bounded execution; production not claimed |
| `goldfish` | Assurance and recovery | Security, recovery and evidence preservation |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | CI and validation | Tests, provenance and release evidence |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Edge / IoT | Offline continuity and synchronization |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Field application | Local workflow, recovery and evidence export |
| `ctaex-iot-pilot` | Laboratory | IoT and connectivity-loss validation; field claims excluded |
| `agrovision-360` | Experimental | Bounded agro-vision research and drift evidence |
| `castuo-360-v5.3` | Workspace | Integrated application experience; workspace ≠ production |
| `-Prueba-final` | Experimental sandbox | Integration experiments only |
| `n8n` | Upstream / fork | Governed workflow integration; upstream capability ≠ CASTÚO proprietary capability |
| `openclaw` | Upstream / fork | Bounded assistant integration; upstream capability ≠ CASTÚO proprietary capability |
| `desktop-tutorial` | Training / support | Repeatable contribution and governance training |

## Current Gates

| Gate | Status | Evidence needed next |
|---|---|---|
| Local conformance | `14/14 PASS LOCAL` | Preserve per-repository artifacts |
| Remote publication | `PENDING` | PR review and merge |
| Remote conformance | `PENDING` | Workflow execution on merged remote heads |
| Security baseline | `PENDING` | Secrets, dependencies, SBOM, permissions and review controls |
| Tests | `PENDING` | Repository-specific and negative tests |
| Evidence | `PENDING` | Typed manifests, hashes and execution envelopes |
| Staging execution | `PENDING` | Bounded core-to-field vertical slice |
| Human review | `PENDING` | Dated scope-bound decision |
| GREEN-STAGING | `BLOCKED` | All previous gates complete |

## Public evidence and links

- [Production promotion gate checklist — PR #27](https://github.com/Traky12/castuo-evolution/blob/chore/align-capability-and-profile-registers/docs/PRODUCTION_PROMOTION_GATE_CHECKLIST.md)
- [Promotion readiness assessment — PR #27](https://github.com/Traky12/castuo-evolution/blob/chore/align-capability-and-profile-registers/evidence/promotion-readiness-2026-08-19.md)
- [CASTÚO Proof Ladder — PR #27](https://github.com/Traky12/castuo-evolution/blob/chore/align-capability-and-profile-registers/docs/CASTUO_PROOF_LADDER.md)
- [E3-001 foreign replay issue](https://github.com/Traky12/castuo-evolution/issues/9)
- [PR #26 security and E3 baseline](https://github.com/Traky12/castuo-evolution/pull/26)
- [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
- [Public repository map](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md)
- [Cast-o validation](https://github.com/Traky12/Cast-o)
- [Public repository list](https://github.com/Traky12?tab=repositories)
- [CASTÚO-SYSTEM™ website](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b/)

## Not claimed

This profile does not claim production operation, autonomous authority, federation, certification, independent validation, regulatory conformity, paid customer traction, recurring revenue, private-cloud provisioning, operational robotics, semiconductor manufacturing or universal interoperability.

The official PIE PLUS workbook remains authoritative for financial figures. Technical assets, architecture, code, planning scenarios and repository activity are not cash, market value, accounting value, income, funding, contract or customer result.

> The objective is not to make CASTÚO look certain. It is to make its evidence inspectable, its use understandable and its evolution safe.
