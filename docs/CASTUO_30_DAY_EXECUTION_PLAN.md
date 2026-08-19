# CASTÚO-SYSTEM™ — 30-Day Evidence and Commercial Execution Plan

**Repository:** `Traky12/Traky12`  
**Baseline:** `CASTÚO-SYSTEM v1.0 — Evidence Governed Baseline`  
**Date:** 19 August 2026  
**Purpose:** Convert the improvement list into an executable, evidence-scoped plan.

> The objective is not to create more narrative or repositories. The objective is to move from extensive local engineering and governance to reproducible remote evidence, operational staging, independent review and a first measurable pilot.

## Target state

```text
GitHub credibility → technical proof → remote reproducibility → staging
→ independent review → pilot → paid result → repeatability
```

The current state is `GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED`. The target for the first campaign is:

```text
14/14 REMOTE + SECURITY BASELINE PASS + S-001 REPLAYABLE + E3-001 INDEPENDENT
→ GREEN-STAGING-VERIFIED
```

This target must not be interpreted as production, customer validation or commercial validation until the corresponding evidence exists.

## Status legend

| Status | Meaning |
|---|---|
| `DONE` | Implemented and verified within the declared scope |
| `READY` | Artifact, protocol or checklist is prepared; execution remains |
| `IN PROGRESS` | Work has started and requires further commits or runs |
| `EXTERNAL` | Requires an independent operator, customer, reviewer or real environment |
| `NOT CLAIMED` | Must not be represented as completed |

## Priority register

| Priority | Workstream | Status | Exit evidence |
|---|---|---|---|
| P0 | Freeze v1.0 baseline and repository hierarchy | `READY` | Versioned baseline, canonical map and repository classes |
| P0 | Remote conformance | `READY / PENDING EXECUTION` | 14 remote records with commit, workflow, environment, result, artifact and SHA-256 |
| P0 | Security baseline v1 | `READY / PENDING EXECUTION` | Dependency, secret, SBOM, permissions, branch, OIDC, TLS, audit and recovery records |
| P0 | S-001 vertical slice | `READY / PENDING STAGING` | Replayable continuity workflow and evidence report |
| P0 | E3-001 independent review | `EXTERNAL` | Independent clone/install/run/verify package and reviewer decision |
| P1 | Staging execution | `PENDING` | Bounded core-to-field workflow in staging |
| P1 | Observability, RTO/RPO and chaos tests | `READY / PENDING EXECUTION` | Dated metrics and failure-injection results |
| P1 | Quality engineering and coverage | `PENDING` | Unit, integration, negative, replay, security and rollback tests; coverage target only if meaningful |
| P1 | Portfolio consolidation | `READY` | Tiered map with canonical, operational, research, experience and upstream classes |
| P2 | First field pilot | `EXTERNAL` | One organization, one workflow, 30–60 days, signed result |
| P2 | First paid pilot | `EXTERNAL` | Payment record, acceptance and measurable KPI |
| P2 | Commercial KPI | `EXTERNAL` | Before/after baseline, method, result and customer acceptance |
| P3 | Investor Evidence Pack | `READY / DEPENDS ON P0–P2` | Problem, solution, architecture, IP, evidence, security, pilot, result, market, model and funding need |

## Phase 0 — Freeze and reduce noise

**Objective:** Make the public system understandable in less than five minutes.

The official baseline is **CASTÚO-SYSTEM v1.0 — Evidence Governed Baseline**. The canonical profile is `Traky12/Traky12`; the governance control plane is `castuo-evolution`; implementation is in `Castuo-system`; assurance is in `goldfish`; reproducibility is in `Cast-o`; evidence is in Evidence Center and `castuo-evidence`; continuity surfaces are `castuo-agro-edge` and `castuo-offline-field-operations`.

The public hierarchy is:

| Tier | Class | Repositories |
|---|---|---|
| Tier 1 | Core and governance | `castuo-evolution`, `Castuo-system`, `goldfish`, `Cast-o` |
| Tier 2 | Operational and evidence | `castuo-agro-edge`, `castuo-offline-field-operations`, `castuo-evidence` |
| Tier 3 | Research and pilots | `agrovision-360`, `ctaex-iot-pilot` |
| Tier 4 | Experience surfaces | `castuo-360-v5.3`, `castuo-docs-portal`, `castuo-progress-dashboard` |
| Tier 5 | Upstream and experimental | `openclaw`, `n8n`, `-Prueba-final` |

**Exit:** the profile, public repository map and control plane agree on role and boundary. A repository count is not a maturity metric.

## Phase 1 — Remote conformance

**Objective:** Move from `14/14 PASS LOCAL` to `14/14 PASS REMOTE` without changing the claim boundary.

Each remote record must contain:

```yaml
repository:
commit:
workflow:
timestamp:
environment:
test_suite:
result:
artifact:
sha256:
status:
```

The execution chain is:

```text
Local evidence → commit SHA → merge → GitHub Actions
→ remote execution → generated evidence → hash
→ evidence registry → control plane
```

**Exit:** every declared repository has a remote result tied to a commit, workflow run, artifact and hash. A green workflow proves only its declared scope.

## Phase 2 — Security baseline v1

**Objective:** Replace `Security baseline = PENDING` with a dated, scope-bound baseline.

The minimum baseline covers dependency scanning, secret scanning, SBOM, container scanning where applicable, GitHub permissions, branch protection, OIDC, secret rotation, TLS, audit logging, vulnerability disclosure and backup/recovery.

Minimum KPIs:

| KPI | Required condition |
|---|---|
| Critical vulnerabilities | `0` open, or formally accepted with owner and expiry |
| High vulnerabilities | `0` open without dated acceptance |
| SBOM | `100%` of declared production-candidate repositories |
| Secret exposure | `0` confirmed exposures |
| External TLS | Mandatory where an external service is used |
| Branch protection | Required review and status checks enabled |
| Recovery | Dated restore exercise with result and owner |

**Exit:** published security baseline, scan records, exceptions register, ownership and re-test date. This is not certification.

## Phase 3 — S-001 vertical slice

**Objective:** Turn the bounded user journey into a replayable demonstration.

```text
Create organisation → register field operation → create event
→ disconnect network → generate local evidence → perform offline operations
→ reconnect → synchronise → verify integrity → generate report → replay
```

Required measures:

| Measure | Target for the bounded scenario |
|---|---|
| Events generated | Declared before execution; initial scenario may use 100 |
| Events preserved | Equal to events generated |
| Lost events | `0` |
| Duplicate events | `0` |
| Integrity failures | `0` |
| Evidence replay | `PASS` by the declared replay operator |
| Recovery and synchronization | Dated result with timestamps |

The initial scenario is one organization, one workflow, one connectivity failure, one evidence pack and one report. It excludes blockchain, drones, multi-agent scope, advanced AI and universal sensor coverage.

**Exit:** staging artifact, execution envelope, hashes, report, replay and review record. No fictional KPI may be inserted before execution.

## Phase 4 — Independent E3-001

**Objective:** Prove that a third party can clone, install, run and verify without relying on founder knowledge.

Required package:

```text
E3-001/
├── README.md
├── protocol.yaml
├── environment.json
├── input/
├── expected/
├── execution/
├── hashes/
├── result.json
└── reviewer.md
```

The reviewer must be independent of the implementation author. The result must include operator identity, environment, commit, commands, timestamps, hashes, deviations, outcome and signed decision.

**Exit:** `E3 = VERIFIED` only after an external reproduction and human review. Protocol documentation alone is `PENDING`.

## Phase 5 — GitHub credibility

The profile must act as a compact trust dashboard, not a contribution-count dashboard. The current README therefore prioritizes current state, capability boundaries, evidence links, gates, proof ladder and non-claims.

The compact status block should expose only values backed by links:

```text
VERSION                 v1.0
ENVIRONMENT             STAGING-CANDIDATE
LOCAL CONFORMANCE       14/14
REMOTE CONFORMANCE      PENDING
E3                      PENDING
SECURITY                PENDING
FIELD PILOT             NOT_CLAIMED
COMMERCIAL              NOT_CLAIMED
PRODUCTION              NOT_CLAIMED
```

No future result may be displayed as achieved before the evidence record exists.

## Phase 6 — Portfolio consolidation

The public repository map defines canonical, operational, research, experience and upstream/experimental tiers. Legacy or duplicate surfaces should be redirected, archived or explicitly marked; they must not become a second control plane.

**Exit:** every public repository has one role, one boundary, one owner and one next evidence requirement.

## Phase 7 — Quality engineering and failure testing

Coverage is useful only when it protects meaningful behavior. The test portfolio should include unit, integration, negative, failure-injection, offline, replay, security, migration and rollback tests.

Failure scenarios include network loss, database unavailability, Redis/MQTT unavailability where applicable, invalid evidence, corrupted hash, duplicate event, clock drift, partial synchronization and crash during write.

A coverage target such as `≥80%` is subordinate to critical-path and failure-path coverage. The next report must distinguish line coverage from scenario coverage.

## Phase 8 — Observability and SRE baseline

The minimum operational metrics are availability, latency, error rate, synchronization success, evidence-generation rate, evidence-verification rate, offline duration, recovery time, queue depth and storage pressure.

The continuity-specific metrics are:

```text
RTO — Recovery Time Objective
RPO — Recovery Point Objective
Evidence Integrity Rate
Synchronization Success Rate
```

**Exit:** dated dashboard or report, alert thresholds, owner, retention and incident/recovery exercise.

## Phase 9 — Field pilot

The first offer should be **CASTÚO Evidence-Ready Field Operations**, not the entire architecture. The bounded offer is one organization, one workflow, 30–60 days, offline continuity, evidence and report.

The customer buys continuity and traceability of a field operation. AI, blockchain, federation, drones and distributed architecture are not the product promise for this first pilot.

**Status:** `EXTERNAL`. It requires a real organization, consent, scope, operator, data handling and signed result.

## Phase 10 — First paid result

The minimum commercial evidence package is:

```text
1 paid pilot
1 organisation
1 workflow
30 days or declared period
1 measurable KPI
1 signed result
1 acceptance or testimonial
```

A commercial result must never be inferred from repository activity, architecture, code or a planning scenario.

## Phase 11 — Measurement

Before/after comparisons must be collected from a real declared baseline. Candidate measures include operational response time, lost operations during connectivity interruptions, evidence preservation, synchronization time and recovery time.

The numbers in this plan are target formats, not achieved results. No percentage reduction or zero-loss result may be published until measured, hashed where appropriate and accepted by the relevant operator or customer.

## Phase 12 — Investor Evidence Pack

This pack is gated by remote conformance, security baseline, S-001 replay, E3 verification, staging, independent review, pilot and measured result. Its sections are:

1. Problem.
2. Solution.
3. Architecture.
4. IP and technical assets.
5. Evidence.
6. Security.
7. Pilot.
8. Customer result.
9. Market.
10. Business model.
11. Roadmap.
12. Funding requirement.

Until those gates are closed, financial and commercial claims remain bounded and the official financial workbook remains authoritative for financial figures.

## 30-day execution order

| Window | Execution focus | Exit artifact |
|---|---|---|
| Days 1–3 | Freeze baseline, verify repository map and claim boundaries | v1.0 baseline record |
| Days 4–10 | Remote conformance runs and evidence registry | Remote evidence records |
| Days 4–10 | Security baseline scans and ownership | Security baseline v1 |
| Days 8–15 | S-001 vertical slice in staging | Evidence pack and report |
| Days 12–20 | Foreign replay preparation and execution | Replay manifest and hashes |
| Days 15–22 | Independent E3 review | Signed E3 decision |
| Days 18–25 | Observability, RTO/RPO and failure tests | SRE/failure report |
| Days 22–30 | Pilot qualification and commercial design | Pilot scope and acceptance criteria |

The 30-day campaign does not guarantee a customer, payment or verification. Those outcomes depend on independent actors and real execution.

## Decision rules

Do not add repositories, README layers, branding, blockchain, agents or integrations merely to increase activity. The bottleneck is no longer the number of capabilities; it is independent demonstration that declared capabilities work within their boundaries.

The next status transition is:

```text
GREEN-STAGING-CANDIDATE
→ GREEN-STAGING-VERIFIED
→ FIELD-PILOT-VALIDATED
→ COMMERCIAL-VALIDATED
```

Each transition requires its own evidence. No transition is achieved by narrative, merge count or local activity.

## References

[1]: https://github.com/Traky12/Traky12 "Traky12 public profile"  
[2]: https://github.com/Traky12/castuo-evolution "CASTÚO governance control plane"  
[3]: https://github.com/Traky12/castuo-evidence "CASTÚO evidence repository"  
[4]: https://github.com/Traky12/Cast-o "CAST-O validation repository"  
[5]: https://github.com/Traky12/castuo-agro-edge "CASTÚO edge repository"  
[6]: https://github.com/Traky12/castuo-offline-field-operations "CASTÚO offline field operations repository"  
[7]: https://github.com/Traky12/castuo-evolution/issues/9 "E3-001 independent review issue"
