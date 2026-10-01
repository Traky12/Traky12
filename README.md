# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Founder and lead architect of CASTÚO-SYSTEM™**

> **NO CLAIM WITHOUT PROVENANCE**
>
> **NO AI DEPLOYMENT WITHOUT ASSURANCE**
>
> **NO SCALE WITHOUT SECURITY AND OBSERVABILITY**

CASTÚO-SYSTEM™ is an **evidence-driven architecture for resilient rural and distributed operations**.

Its first product direction is **CASTÚO Evidence-Ready Field Operations**: an offline-first operational model for environments where connectivity is intermittent and operational information must remain traceable, reviewable and recoverable.

The architecture combines:

```text
CORE
+
EDGE / IoT
+
FIELD OPERATIONS
+
EVIDENCE
+
ASSURANCE
+
SECURITY
+
RECOVERY
+
OBSERVABILITY
+
GOVERNANCE
```

CASTÚO is being evolved through a controlled progression:

```text
Capability
→ Integration
→ Test
→ Evidence
→ Review
→ External verification
→ Validation
→ Operation
→ Payment
→ Repeatability
→ Scale
```

AI, federation, sovereign infrastructure, advanced cryptography and other experimental technologies are enabling or research layers until their specific capabilities are separately evidenced.

---

## System model

```text
                         CASTÚO-SYSTEM™
                                │
                ┌───────────────┼───────────────┐
                │               │               │
               CORE            EDGE            FIELD
                │               │               │
                └───────────────┼───────────────┘
                                │
                           EVIDENCE
                                │
                           ASSURANCE
                                │
                  SECURITY · RECOVERY · OBS
                                │
                           GOVERNANCE
                                │
                              GATES
                                │
                    VALIDATION / REVIEW
                                │
                        PILOT / OPERATION
                                │
                         PAYMENT / REPEAT
```

The architectural objective is not to maximise repository count or technology volume.

It is to make the system **integrated, reproducible, observable, recoverable and governable**.

---

## Current engineering position — 2026-09-30

CASTÚO is in a phase of **technical consolidation and evidence hardening**.

Recent engineering work has focused on:

* governance authority and repository traceability;
* security hardening and fail-closed controls;
* outbound endpoint allowlisting and removal of uncontrolled external paths;
* CI/CD repair and workflow safety;
* evidence provenance and claim boundaries;
* repository security and traceability baselines;
* state persistence and encryption-at-rest;
* recovery, rollback and operational safeguards;
* capability-to-repository traceability;
* generated status and read-only ecosystem views;
* preparation of bounded external verification.

The public profile therefore distinguishes carefully between:

```text
implemented capability
≠
integrated capability
≠
tested capability
≠
evidenced capability
≠
externally validated capability
≠
commercial operation
```

No production operation, continuous field deployment, paid customer traction, certification or federated authority is claimed merely from repository activity, documentation, commits or workflow status.

---

## Architecture authority

| Surface                      | Role                                                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `Castuo-system` (private)    | **Current canonical technical authority** for code, operational documentation, technical decisions and governed evolution                     |
| `castuo-evolution` (private) | Experimental / prepared evolution and governance surface; **not** the current SSOT, deployed control plane or autonomous governance authority |
| `Traky12/Traky12`            | Public profile, navigation and claim-boundary surface                                                                                         |
| Public repositories          | Declared implementation, evidence, verification or research surfaces according to their individual scope                                      |

`Castuo-system` is the canonical authority.

The public profile summarises and links; it does not override repository evidence.

---

## The first validation path

The commercial and technical wedge remains intentionally bounded.

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

The first user journey is:

```text
Create organisation
→ register an operation
→ continue through connectivity loss
→ preserve local state
→ synchronise
→ review evidence
→ export a report
→ replay / verify
→ promotion decision
```

This journey is a **validation target**.

It is not presented here as a completed production or commercial deployment.

---

## Golden Path objective

The immediate systems objective is to converge the existing components into one reproducible vertical slice:

```text
CORE
  ↓
EDGE
  ↓
FIELD
  ↓
EVIDENCE
  ↓
ASSURANCE
  ↓
REVIEW
  ↓
RECOVERY
  ↓
PROMOTION
```

A component passing its own local tests does not by itself prove that the complete chain operates end to end.

The key engineering milestone is therefore:

> **one bounded path, executable from start to finish, with reproducible evidence and explicit failure handling.**

---

## Evidence model

CASTÚO uses an evidence-first progression:

```text
Claim
  ↓
Evidence
  ↓
Execution
  ↓
Artifact / Hash
  ↓
Reproduction
  ↓
Review
  ↓
Gate
  ↓
Promotion / Rollback
```

The public evidence surfaces are designed to preserve both positive and negative results.

A failed validation is not rewritten into success.

A defective evidence record is retained as historical evidence and re-anchored through a new controlled record where appropriate.

This is intentional.

---

<a id="public-semantic-boundary"></a>

## Public status taxonomy

All public repositories should use the same claim vocabulary:

| Status              | Meaning                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `CURRENT`           | Implemented and verifiable within the declared repository scope       |
| `CURRENT (PARTIAL)` | Implemented in part, with known limitations or incomplete integration |
| `TARGET`            | Approved future capability; not represented as current implementation |
| `EXPERIMENTAL`      | Prototype, proof or bounded research work; not consolidated           |
| `PENDING`           | Implementation, integration or evidence is incomplete                 |
| `NOT_CLAIMED`       | Not represented as a current CASTÚO capability                        |

Evidence maturity is tracked separately:

```text
DOCUMENTED
→ IMPLEMENTED
→ TESTED
→ INTEGRATED
→ EVIDENCED
→ VALIDATED
→ OPERATIONAL
```

Commercial maturity is separate again:

```text
CUSTOMER USED
→ PAID
→ REPEATED
→ RECURRING
```

No one of these states should be inferred from another.

---

## Gates

Promotion is controlled by evidence gates defined and governed in the canonical
technical authority, not in this profile.

The rules that apply publicly are:

* each gate has explicit acceptance criteria and a named owner;
* a gate closes only by a recorded human decision backed by valid evidence —
  no AI model and no automation closes a gate;
* the first unmet predicate stops promotion;
* the appearance of an artifact does not close a gate by itself;
* maturity is never promoted automatically.

Unknown remains:

```text
UNKNOWN
```

until evidence resolves it.

---

## Core capability domains

### Core

The private canonical platform and domain architecture.

```text
Domain logic
APIs
State
Contracts
Integration
Operational documentation
Governed evolution
```

### Edge / IoT

Disconnected-operation and telemetry boundary.

```text
MQTT
Local persistence
Buffering
Synchronization
Gateway execution
Device boundary
```

### Field Operations

Human-facing operation under degraded connectivity.

```text
Offline workflows
Local assistance
GIS / navigation
Evidence capture
Resilient communications
Recovery
```

### Evidence

Public evidence and bounded verification surfaces.

```text
Evidence objects
Schemas
Validators
Negative scenarios
Reproducibility
Claim boundaries
Replay packages
```

### Assurance

Technical assurance and validation tooling.

```text
Testing
CI validation
Failure-path testing
Security checks
Evidence generation
Diagnostics
```

### Security / Recovery / Observability

Cross-cutting control capabilities.

```text
Secrets control
Fail-closed behaviour
Outbound allowlists
Encryption
Auditability
Backup
Restore
Rollback
Health / telemetry
Operational visibility
```

### Governance

System-level control of claims, changes and promotion.

```text
Authority
Traceability
Status
Gates
Change impact
Evidence linkage
Promotion
Rollback
```

---

## Public repository map

The public repositories below represent the reviewable public surface of the
ecosystem. They do not represent the full private platform, internal governance,
security operations, commercial materials or restricted research workspaces.

| Repository | Public role | Public boundary |
| --- | --- | --- |
| [`Traky12`](https://github.com/Traky12/Traky12) | Public profile and ecosystem entry point | Does not represent the full private platform |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | Testing, assurance and validation | Scope-bound engineering tooling |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Edge / IoT / offline continuity | End-to-end federation remains a target |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Offline field operations | Local capability and prepared operational flows |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Reproducible public evidence | Bounded evidence only; no production claim implied |
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | Replay and review protocol | Independent verification is a separate gate |

Third-party forks and archived repositories are not counted as proprietary CASTÚO capability unless their own scope explicitly establishes otherwise.

---

## Why the architecture is separated this way

The ecosystem intentionally separates:

```text
IMPLEMENTATION
```

from:

```text
ASSURANCE
```

and:

```text
EVIDENCE
```

from:

```text
GOVERNANCE
```

This allows a claim to be challenged independently of the component that produced it.

It also reduces the risk that:

```text
documentation
→ becomes assumed capability
```

or:

```text
green CI
→ becomes assumed production
```

or:

```text
prototype
→ becomes assumed product
```

---

## External verification

`castuo-e3-001` defines a separate verification path:

```text
freeze package
→ independent runner
→ replay
→ runner attestation
→ human review
→ bundle validation
→ gate evaluation
→ staging handoff
```

The first unmet predicate blocks promotion.

This is intended to make external review possible without granting the verifier authority over CASTÚO itself.

---

## Current limitations

Several important capabilities remain explicitly bounded or pending, including combinations of:

```text
full Core → Edge → Field E2E execution
remote conformance
external replay
independent review
deterministic evidence re-anchoring
production deployment
continuous service
field validation
commercial validation
federation
```

These limitations are part of the public technical record.

---

## Evolution strategy

CASTÚO evolves systematically rather than by uncontrolled feature accumulation.

Each new capability must answer:

```text
What does it add?
What existing capability does it depend on?
What risk does it introduce?
How is it tested?
What evidence does it produce?
How can it be reproduced?
How can it fail?
How can it recover?
What gate promotes it?
```

New repositories should only be created when an existing surface cannot carry the capability without creating unacceptable coupling or ambiguity.

The objective is not fewer repositories at any cost.

The objective is **less architectural ambiguity and less dependency on undocumented knowledge**.

---

## Priority sequence

The current progression is:

```text
1. Baseline integrity
2. Security hardening
3. Integration convergence
4. Golden Path E2E
5. Reproducible evidence
6. External verification
7. Pilot
8. First payment
9. Repeatability
10. Scale
```

Research and experimental work remains subordinate to critical integration and evidence gaps.

---

## Evidence and value boundary

CASTÚO distinguishes four different concepts:

```text
Technical capability
        ≠
Cost of reconstruction
        ≠
Economic value
        ≠
Market valuation
```

Repository count, contribution count, tests, architectural complexity and engineering effort are not themselves market value.

Any technical asset valuation must remain subject to technical due diligence, intellectual-property ownership, reproducibility, integration state, deployment evidence and commercial validation.

The official financial source remains authoritative for financial figures.

---

## Licensing and ownership

A public repository is not assumed to be open source simply because it is publicly visible.

Where no `LICENSE` file grants rights, default copyright applies.

Third-party forks remain subject to their upstream projects and licences.

CASTÚO proprietary capability must not be inferred from upstream software merely because an upstream repository is referenced, forked or integrated experimentally.

---

## Public evidence and navigation

* [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
* [Security Policy](https://github.com/Traky12/Traky12/blob/main/SECURITY.md)
* [Public Repository Map](#public-repository-map)
* [Cast-o](https://github.com/Traky12/Cast-o)
* [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge)
* [castuo-offline-field-operations](https://github.com/Traky12/castuo-offline-field-operations)
* [castuo-evidence](https://github.com/Traky12/castuo-evidence)
* [castuo-e3-001](https://github.com/Traky12/castuo-e3-001)
* [CASTÚO-SYSTEM™](https://castuo-system.es/)
* [ORCID](https://orcid.org/0009-0007-3489-0565)
* [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b/)

---

## Not claimed

This profile does not claim:

```text
production-scale continuous operation
autonomous authority
federated deployment
certification
regulatory conformity by architecture alone
paid customer traction without evidence
recurring revenue
universal interoperability
operational robotics
semiconductor manufacturing
or any other capability whose evidence boundary has not been met
```

Historical, experimental and target material must not be interpreted as current production capability.

---

> **The objective is not to make CASTÚO look certain.**
>
> **The objective is to make its capabilities inspectable, its limitations explicit, its evidence reproducible and its evolution safe.**
