# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Founder and lead architect of CASTÚO-SYSTEM™**

> **NO CLAIM WITHOUT PROVENANCE**
>
> **NO AI DEPLOYMENT WITHOUT ASSURANCE**
>
> **NO SCALE WITHOUT SECURITY AND OBSERVABILITY**

CASTÚO-SYSTEM is an evidence-driven infrastructure direction for resilient rural and distributed operations. The first commercial wedge is **CASTÚO Evidence-Ready Field Operations**: offline-first continuity, traceability and reviewable evidence for workflows operating with irregular connectivity. It is a validation objective, not a proven commercial product.

AI, Edge/IoT, federation, sovereignty and private cloud are enabling architecture. They are not separate products or claims of current production operation.

## Authority and scope

| Surface | Role |
|---|---|
| `Castuo-system` (private) | **Current canonical authority** for code, operational documentation, technical decisions and governed evolution (`governance/`) |
| `castuo-evolution` (private) | Experimental or prepared governance and evolution framework. **Not** the current authority, **not** a synchronised source of truth (SSOT), deployed control plane or autonomous governance authority |
| This profile (`Traky12/Traky12`) | Public entry point and navigation index. It summarises and links; it decides nothing and grants no license |

Public repositories are not open source by default: a repository is open source only where it contains a `LICENSE` file. Third-party forks (`n8n`, `openclaw`) remain the work of their upstream authors.

## Current engineering note — 2026-09-30

The ecosystem remains in technical consolidation.

Local engineering evidence has progressed across testing, bounded
security controls and evidence preservation. Some internal
CI-dependent validations remain pending before promotion, merge and
deployment. Public claims are limited accordingly.

No production operation, field deployment, paid customer traction,
continuous service, certification or federated authority is claimed.

## Historical snapshot — 2026-08-16

> **Historical local snapshot; not current deployment evidence.** The automatic sync from `castuo-evolution` has failed on every run since 2026-08-22 and is disabled; this table is a static, historical record.

Label at that date: **GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED** (historical, as of 2026-08-16)

| Dimension | Status (2026-08-16) |
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

**Evidence basis:** `castuo-evolution` (private repository — not publicly verifiable) · commit `70b7c57` · scope `local checkout set of 14 repositories` · file `evidence/local-conformance-2026-08-16/summary.json` · review `PENDING`.

Blocker at that date: `remote_publication_conformance_security_evidence_staging_review_pending`. Local evidence does not imply remote publication, production, certification, customer result, continuous operation or federation.

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
| `CURRENT` | Implemented and verifiable: backed by a commit, test, result, artifact, hash or release |
| `TARGET` | Approved objective, not implemented yet |
| `EXPERIMENTAL` | Prototype or proof, not consolidated; not production evidence |
| `PENDING` | Planned work, or evidence incomplete |
| `NOT_CLAIMED` | Not implemented; must not be presented as a capability |

These public labels map onto the claim status used in the canonical repository; they are not a separate maturity model.

Words such as "validated", "production", "federated", "complete", "secure" or "ready for…" require concrete evidence: commit, test, result, artifact, hash or release. A commit, issue, README, badge or green workflow does not prove production, customer adoption, certification, autonomy, federation, recurring revenue or continuous operation.

## Evidence chain

```text
Claim → Evidence → Execution → Hash → Reproduction
→ Independent review → Gate → Promotion / rollback
```

`Castuo-system` is the canonical authority. Repositories implement declared roles. Evidence Packs demonstrate bounded results. The profile summarizes and links; it does not decide.

## Repository map

| Repository | Public role | Boundary |
|---|---|---|
| `Castuo-system` | Core platform · **canonical authority** (private) | Code, operational documentation and technical evolution; production not claimed |
| `castuo-evolution` | Experimental governance and evolution framework (private) | Not the current authority, a synchronised SSOT or a deployed control plane |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | CI and validation | Tests `CURRENT` (partial); performance benchmarking `TARGET`; license `PENDING` |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Edge / IoT | Offline continuity and synchronization |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Field application | Local workflow, recovery and evidence export; Apache-2.0 |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Public evidence | Evidence packs; license `PENDING` |
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | Public evidence / protocol | Reproduction protocol; MIT |
| [`n8n`](https://github.com/Traky12/n8n) | Third-party fork | Upstream `n8n-io/n8n`; upstream capability ≠ CASTÚO proprietary capability |

Some internal, experimental, archived and pre-promotion work remains intentionally private and is not represented as a public product claim.

## Gates (historical, 2026-08-16)

> Status as recorded in the 2026-08-16 snapshot; see the current engineering note above.

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

- [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
- [Security policy](SECURITY.md)
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
