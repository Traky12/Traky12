# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Founder and lead architect of CASTÚO-SYSTEM™**

> **NO CLAIM WITHOUT PROVENANCE**
> **NO AI DEPLOYMENT WITHOUT ASSURANCE**
> **NO SCALE WITHOUT SECURITY, OBSERVABILITY AND RECOVERY**

CASTÚO-SYSTEM is an evidence-driven infrastructure platform for **resilient, offline-first and governed distributed operations**.

Its initial commercial wedge is **CASTÚO Evidence-Ready Field Operations**: workflows that remain useful under intermittent connectivity, preserve local evidence, synchronize safely and produce reviewable operational records.

The architecture is evolving toward a broader **Digital + Physical Assurance Infrastructure** covering:

`energy → hardware → firmware → compute → memory → storage → network → edge → AI → data → evidence → assurance → promotion`

This is an architectural direction and capability roadmap, not a claim that every layer is currently production-ready.

---

## What CASTÚO is building

CASTÚO combines five coordinated planes:

```text
                    CASTÚO CONTROL PLANE
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     GOVERNANCE         ASSURANCE          EVIDENCE
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                  RESOURCE CONTROL PLANE
                           │
       ┌──────────┬────────┼────────┬──────────┐
       │          │        │        │          │
     ENERGY    COMPUTE   MEMORY  STORAGE    NETWORK
       │          │        │        │          │
       └──────────┴────────┼────────┴──────────┘
                           │
                    SOVEREIGN EDGE
                           │
                 DATA · AI · OPERATIONS
                           │
                 REPLAY · REVIEW · GATES
```

The objective is not to manufacture every physical component. It is to **govern, measure, secure, verify and promote the resources on which distributed operations depend**.

---

## Core operating principle

CASTÚO treats every capability as a governed object:

```text
Capability
→ Contract
→ Implementation
→ Test
→ Evidence
→ Replay
→ Review
→ Gate
→ Promotion / rollback
```

For physical resources the same principle becomes:

```text
Resource
→ Identity
→ Firmware
→ Runtime
→ Measurement
→ Failure model
→ Evidence
→ Assurance
→ Promotion
```

A resource is not treated as a claimed capability merely because it exists.

---

## Current public state

### `GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED`

| Dimension             | Current public status |
| --------------------- | --------------------- |
| Local conformance     | `14/14 PASS LOCAL`    |
| Remote conformance    | `0/14 · PENDING`      |
| Remote publication    | `14 PENDING`          |
| Environment           | `STAGING`             |
| Security baseline     | `PENDING`             |
| Staging execution     | `PENDING`             |
| Human review          | `PENDING`             |
| Independent E3        | `PENDING`             |
| Commercial validation | `NOT_CLAIMED`         |
| Federation            | `PENDING`             |
| Production            | `NOT_CLAIMED`         |

**Evidence basis:** `castuo-evolution` · local checkout scope · public evidence packages and control-plane records.

The public profile is a projection of the canonical control plane. It does not independently authorize promotion.

### Current promotion rule

```text
Missing evidence
      ↓
No promotion

Missing authority
      ↓
No promotion

Invalid provenance
      ↓
No promotion

Failed security predicate
      ↓
No promotion
```

Current blocker class:

`remote_publication_conformance_security_evidence_staging_review_pending`

---

## S-001A — Assurance Control Plane

S-001A is the current assurance workstream for contracts, authority, evidence, runtime verification and promotion control.

### Core properties

* Fail-closed authority and tenant policy.
* Explicit claim boundaries.
* Reproducible execution and replay.
* SHA-256 evidence integrity.
* Runtime commit / image / SBOM / provenance linkage.
* PostgreSQL tenant isolation with RLS and `FORCE ROW LEVEL SECURITY`.
* Adversarial RLS validation.
* CI/CD authority separation.
* Binary promotion gates.
* Human approval as a distinct control.
* Production claims explicitly disabled until authorized.

### Claim boundary

```json
{
  "claim_boundary": "LOCAL_RESULT_NO_CLAIM"
}
```

The current evidence boundary is intentionally conservative.

Local evidence does not imply:

* production deployment;
* customer operation;
* certification;
* regulatory conformity;
* continuous operation;
* federation;
* recurring revenue;
* independent validation.

---

## Evidence chain

```text
Claim
  ↓
Evidence
  ↓
Execution
  ↓
Hash
  ↓
Reproduction
  ↓
Independent review
  ↓
Gate
  ↓
Promotion / rollback
```

The control plane governs state. Repositories implement declared roles. Evidence Packs preserve bounded results.

---

## Resource-aware evolution

The next architectural extension is **R-001A — Resource-Aware Offline Field Operation**.

The objective is to extend CASTÚO from software/resource governance into governed physical and computational resources without weakening the current assurance baseline.

### Target execution path

```text
energy / battery
      ↓
edge node
      ↓
sensor
      ↓
local storage
      ↓
local compute / AI
      ↓
offline operation
      ↓
controlled degradation
      ↓
evidence envelope
      ↓
recovery
      ↓
synchronization
      ↓
replay
      ↓
review
```

### Initial resource domains

`COMPUTE · MEMORY · STORAGE · ENERGY · NETWORK · SENSOR · FIRMWARE · MODEL_RUNTIME · NODE`

### Initial contracts

`RESOURCE-001 · ENERGY-001 · WORKLOAD-001 · DEGRADATION-001`

### Initial failure policies

```text
NETWORK UNAVAILABLE
→ LOCAL OPERATION

LOW ENERGY
→ PRIORITIZED COMPUTE

GPU UNAVAILABLE
→ CPU FALLBACK

STORAGE NEAR FULL
→ EVIDENCE COMPACTION

SENSOR UNAVAILABLE
→ DEGRADED MODE

AUTHORITY UNAVAILABLE
→ FAIL-CLOSED

EVIDENCE INVALID
→ NO-PROMOTION
```

This work is currently a **targeted architecture and next vertical slice**, not a claim of physical sovereignty already achieved.

---

## Public semantic boundary

| Label          | Meaning                                                              |
| -------------- | -------------------------------------------------------------------- |
| `CURRENT`      | Supported by the declared control-plane scope and available evidence |
| `TARGET`       | Intended capability or architecture direction                        |
| `DESIGNED`     | Defined model or contract awaiting implementation evidence           |
| `EXPERIMENTAL` | Bounded laboratory, pilot or integration work                        |
| `PENDING`      | Required execution, evidence or review not yet completed             |
| `NOT_CLAIMED`  | Explicitly outside the current authorization boundary                |

A commit, issue, badge, green workflow or architectural document does not by itself prove production, certification, customer adoption, autonomy, federation or continuous operation.

---

## Customer wedge

The first commercial path is intentionally narrow:

```text
Problem
→ Field workflow
→ Capability
→ Implementation
→ Test
→ Evidence
→ Review
→ Pilot
→ Payment
→ Operation
→ Repeatability
```

### First user journey

```text
Create organisation
→ register operation
→ continue during connectivity loss
→ capture local evidence
→ synchronize
→ review
→ export report
```

The public profile does not claim that this journey is already a completed production or commercial operation.

---

## Repository architecture

| Repository                                                                                      | Role                                 | Boundary                                                                                               |
| ----------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `castuo-evolution`                                                                              | Governance control plane             | SSOT for capabilities, contracts, evidence and promotion state                                         |
| `Castuo-system`                                                                                 | Core platform                        | Private-cloud API, web, offline and AI-assisted runtime                                                |
| `goldfish`                                                                                      | Security, recovery and assurance     | Runtime hardening, observability, recovery and evidence preservation                                   |
| [`Cast-o`](https://github.com/Traky12/Cast-o)                                                   | Validation and adversarial assurance | Tests, failure injection, replay and bounded-claim challenge                                           |
| `castuo-evidence`                                                                               | Public evidence fabric               | Frozen fixtures, execution envelopes, hashes and bounded claims                                        |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge)                               | Edge / IoT runtime                   | Offline continuity, buffering and synchronization                                                      |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Field operations                     | Local workflow, recovery and evidence export                                                           |
| `castuo-product-experience`                                                                     | Product experience                   | Demo, Evidence Packs, reports and governed pilot intake                                                |
| `castuo-progress-dashboard`                                                                     | Progress control surface             | Capabilities, evidence, contracts and gates                                                            |
| `castuo-docs-portal`                                                                            | Evidence Center                      | Trust, traceability and evidence-scoped documentation                                                  |
| `castuo-strategy-knowledge-base`                                                                | Strategic knowledge base             | Canonical sources, boundaries and integration register                                                 |
| `ctaex-iot-pilot`                                                                               | Laboratory                           | IoT and connectivity-loss validation                                                                   |
| `agrovision-360`                                                                                | Experimental                         | Agro-vision research and bounded drift evidence                                                        |
| `castuo-360-v5.3`                                                                               | Workspace                            | Integrated application experience                                                                      |
| `-Prueba-final`                                                                                 | Experimental sandbox                 | Integration experiments                                                                                |
| `openclaw`                                                                                      | Upstream / fork                      | Governed assistant integration; upstream capability is not automatically CASTÚO proprietary capability |
| `n8n`                                                                                           | Upstream / fork                      | Governed workflow integration; upstream capability is not automatically CASTÚO proprietary capability  |
| `desktop-tutorial`                                                                              | Training / support                   | Repeatable contribution and governance training                                                        |

---

## Current gates

| Gate               | Status             | Next evidence                                         |
| ------------------ | ------------------ | ----------------------------------------------------- |
| Local conformance  | `14/14 PASS LOCAL` | Preserve per-repository evidence                      |
| Remote publication | `PENDING`          | Review and merge                                      |
| Remote conformance | `PENDING`          | Remote execution on merged heads                      |
| Security baseline  | `PENDING`          | Secrets, dependencies, SBOM, permissions and controls |
| Runtime evidence   | `PENDING / SCOPED` | Accepted clean-run evidence                           |
| Independent E3     | `PENDING`          | Independent replay and review                         |
| Staging execution  | `PENDING`          | Core-to-field vertical slice                          |
| Human review       | `PENDING`          | Dated scope-bound decision                            |
| GREEN-STAGING      | `BLOCKED`          | All required gates complete                           |

Promotion remains intentionally locked while required predicates are unsatisfied.

---

## Assurance architecture

### Governance

* Capability registry
* Contract registry
* AuthorityObjects
* Dependency registry
* Risk register
* Lifecycle
* Ownership
* Trust state
* Promotion gates

### Evidence

* Evidence registry
* Execution envelopes
* Frozen fixtures
* SHA-256 hashes
* Replay references
* Provenance
* Claim boundaries
* Review state

### Security

* Fail-closed authorization
* Multi-tenant policy
* PostgreSQL RLS
* `FORCE ROW LEVEL SECURITY`
* Privilege separation
* CI write-authority controls
* Runtime hardening
* Recovery controls

### Resilience

* Offline-first operation
* Local buffering
* Synchronization
* Recovery
* Degraded modes
* Failure-aware execution
* Resource-aware scheduling

### AI governance

* Model/version tracking
* Bounded AI claims
* Runtime evidence
* Model-change gates
* Fallback policy
* Evidence-preserving inference workflows

---

## Resource sovereignty roadmap

CASTÚO is designed to grow toward a governed resource plane:

```text
Energy
→ Hardware
→ Firmware
→ Compute
→ Memory
→ Storage
→ Network
→ Edge
→ Data
→ AI
→ Evidence
→ Assurance
→ Promotion
```

The objective is not to claim ownership of every physical component.

The objective is to make system-critical resources:

**discoverable · measurable · governed · replaceable · auditable · recoverable**

### Internal maturity model

```text
S0  Cloud dependent
S1  Edge capable
S2  Offline capable
S3  Local resource sovereign
S4  Federated sovereign
S5  Self-governing infrastructure
```

These are internal architecture targets. They are not public maturity claims until corresponding evidence exists.

---

## Evidence efficiency

Future resource-aware assurance will extend the evidence model into measurable operational efficiency:

```text
Compute efficiency
= useful work / energy consumed

Evidence efficiency
= validated evidence / energy consumed

Operational efficiency
= successful operation / compute + energy + network cost
```

These metrics require defined measurement methods and validated evidence before public use.

---

## Design principles

### Evidence before promotion

No promotion without evidence.

### Claims remain bounded

A local result stays local until its promotion predicates are satisfied.

### Fail closed

Missing authority, invalid evidence and unresolved security conditions produce denial or block.

### Offline continuity

Connectivity loss is a normal operating condition, not an exceptional failure.

### Resource awareness

Compute, memory, storage, energy and network are governed resources, not invisible infrastructure.

### Recovery is part of operation

A system is not resilient merely because it survives failure; it must recover predictably and preserve evidence.

### Upstream is not proprietary

Third-party and forked capabilities remain explicitly bounded by provenance and ownership.

### Architecture is not evidence

A design describes what should happen. Evidence demonstrates what happened.

---

## Public evidence

* [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
* [Public repository map](https://github.com/Traky12/Traky12/blob/main/docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md)
* [Cast-o validation framework](https://github.com/Traky12/Cast-o)
* [Public repository list](https://github.com/Traky12?tab=repositories)
* [CASTÚO-SYSTEM™ website](https://castuo-system.es/)
* [ORCID](https://orcid.org/0009-0007-3489-0565)
* [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b/)

---

## Not claimed

This profile does **not** claim:

* production operation;
* autonomous authority;
* certification;
* regulatory conformity;
* independent validation where still pending;
* paid customer traction;
* recurring revenue;
* federation;
* universal interoperability;
* semiconductor manufacturing;
* operational robotics;
* private-cloud production provisioning;
* physical resource sovereignty not yet demonstrated.

Financial figures remain governed by the official project and financial records.

Technical assets, code, architecture, planning scenarios, repository activity and evidence packages are not themselves:

`cash · market value · accounting value · income · funding · contract · customer result`

---

## The operating objective

> **Make the system inspectable. Make the claims bounded. Make failure survivable. Make promotion earned.**

CASTÚO-SYSTEM is being developed toward infrastructure in which **digital and physical resources can operate locally, degrade predictably, preserve evidence, recover safely and become promotable only when the evidence authorizes them.**

That is the direction from:

**software + edge + AI + governance + assurance**

toward:

**Digital + Physical Assurance Infrastructure.**
