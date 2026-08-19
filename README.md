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

## Current ecosystem state

<!-- CASTUO:STATE:START -->
## Current ecosystem state

**AUDIT-COMPLETE · PROMOTION-BLOCKED · EVIDENCE-SCOPED**

| Dimension | Current public status |
|---|---|
| Architecture inventory | `15 REPOSITORIES · 79 README · 116 WORKFLOWS` |
| Local validation | `SELECTED CHECKS PASS LOCAL` |
| Remote publication | `PR #20` and `PR #350` open; review and checks pending |
| Security baseline | `SECURITY_HOLD` — GitHub reported 115 vulnerabilities in `Cast-o` (2 critical, 32 high, 60 moderate, 21 low) |
| Staging branch | `BLOCKED` — branch protection not verified |
| Production environment | `BLOCKED` — promotion and protected-branch policy not closed |
| Code scanning | `SECURITY_HOLD` — not enabled or not accessible for `Castuo-system` |
| Staging execution | `PENDING` — immutable artifact, smoke, replay and rollback evidence required |
| Human review | `PENDING` |
| Production | `NOT_CLAIMED` — no deployment executed |
| Commercial validation | `NOT_CLAIMED` |
| Independent E3 | `PENDING` |
| Federation | `PENDING` |

**Evidence basis:** local audit package in [`Castuo-system/docs/audit/2026-08-19/`](https://github.com/Traky12/Castuo-system/tree/audit/assurance-status-2026-08-19/docs/audit/2026-08-19), repair PR [`Cast-o#20`](https://github.com/Traky12/Cast-o/pull/20), assurance PR [`Castuo-system#350`](https://github.com/Traky12/Castuo-system/pull/350), and the canonical governance boundary in [`castuo-evolution`](https://github.com/Traky12/castuo-evolution). Review, remote conformance, security closure and staging evidence remain pending.

The public profile is a projection of the canonical control plane. Blocker: `ci_security_vulnerability_branch_protection_staging_replay_rollback_review_pending`. Local evidence does not imply remote publication, production, certification, customer result, continuous operation or federation.
<!-- CASTUO:STATE:END -->

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

## Evidence chain

```text
Claim → Evidence → Execution → Hash → Reproduction
→ Independent review → Gate → Promotion / rollback
```

The control plane governs the state. Repositories implement declared roles. Evidence Packs demonstrate bounded results. The profile summarizes and links; it does not decide.

## Published audit and repair work

The current audit covers the CASTÚO architecture and its repository surfaces. The following table records what has been transferred to GitHub and what remains blocked.

| Work item | GitHub location | State |
|---|---|---|
| CI, dependency and drift repair | [`Cast-o#20`](https://github.com/Traky12/Cast-o/pull/20) | `OPEN · CHECKS PENDING` |
| Assurance status and promotion blockers | [`Castuo-system#350`](https://github.com/Traky12/Castuo-system/pull/350) | `OPEN · GATES BLOCKED` |
| Final audit report and evidence indexes | [`Castuo-system/docs/audit/2026-08-19/`](https://github.com/Traky12/Castuo-system/tree/audit/assurance-status-2026-08-19/docs/audit/2026-08-19) | `TRANSFERRED · EVIDENCE-SCOPED` |
| Core README assurance status | [`Castuo-system/README.md`](https://github.com/Traky12/Castuo-system/blob/audit/assurance-status-2026-08-19/README.md) | `TRANSFERRED · NO_CLAIM` |

The profile intentionally does not claim that all pull requests are merged, all vulnerabilities are closed, staging is verified or production is deployed. Promotion requires closed security, CI, branch protection, evidence, replay, human review and rollback gates.

## Repository map

| Repository | Public role | Boundary |
|---|---|---|
| `castuo-evolution` | Governance control plane | SSOT for vocabulary, Gates, evidence and promotion state |
| `Castuo-system` | Core platform | Implementation and bounded execution; production not claimed |
| `goldfish` | Assurance and recovery | Security, recovery and evidence preservation |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | CI and validation | Tests, provenance and release evidence |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Edge / IoT | Offline continuity and synchronization |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Field application | Local workflow, recovery and evidence export |
| `agrovision-360` | Experimental | Bounded agro-vision research; production not claimed |
| `castuo-360-v5.3` | Workspace | Integrated application experience; workspace ≠ production |
| `ctaex-iot-pilot` | Laboratory | LoRaWAN/IoT pilot; field claims remain evidence-scoped |
| `castuo-docs-portal` | Evidence portal | Documentation and traceability surface; operational claims pending |
| `castuo-progress-dashboard` | Progress dashboard | Visual evidence and gate projection; not an authority source |
| `castuo-strategy-knowledge-base` | Strategy register | Canonical sources and status boundaries; claims remain scoped |
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
| `GREEN-STAGING` | `BLOCKED` | Security, CI, branch protection, evidence, replay, rollback and human review gates |
| `PRODUCTION` | `BLOCKED` | Same immutable artifact promoted from verified staging; no direct deployment |

## Public evidence and links

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
