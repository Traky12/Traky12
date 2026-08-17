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

## Ecosystem management layer

The profile now has a versioned management layer in [`management/`](management/). It catalogs the ecosystem, identifies each repository's role and canonical responsibility, and links the complete engineering plan to the core project.

- [Ecosystem manager](management/README.md)
- [Repository catalog](management/repository-catalog.yaml)
- [Evolution plan and continuity docs](management/evolution/)
- [Core progress dashboard](https://github.com/Traky12/Castuo-system/tree/main/progress-dashboard)

The manager is an index and governance surface. It does not replace the canonical implementation or promote evidence beyond its declared scope.

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
