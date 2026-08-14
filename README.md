# Gregorio Jiménez Bodes · Traky12

**Founder · Technical Architect · Software Engineer**

> I build evidence-driven digital infrastructure for rural, industrial and environmental systems.

My work combines:

**AI · Edge Computing · IoT · DevSecOps · Distributed Systems · Digital Twins · Observability · Open-Source Components · Evidence Engineering**

I am the founder and technical architect behind **CASTÚO-SYSTEM**, a modular technology ecosystem with open-source components that connects cloud services, edge infrastructure, APIs, automation, AI, data and evidence-driven governance.

> **Build it. Test it. Observe it. Document the evidence. Then increase its maturity.**

---

## What I build

I work on systems where **connectivity, resilience, interoperability and traceability** matter.

- 🧠 **AI** — local AI, RAG, AI-assisted operations and decision support.
- 📡 **Edge & IoT** — Raspberry Pi, ESP32, MQTT, LoRaWAN and offline buffering.
- 🔐 **Secure Infrastructure** — APIs, authentication, DevSecOps, IaC and audit trails.
- 📊 **Observability** — Prometheus, Grafana, metrics and operational visibility.
- 🛰️ **Spatial Systems** — GIS, Digital Twins and environmental monitoring.
- 🧪 **Evidence Engineering** — capabilities, provenance, evidence governance, validation gates and traceability.
- ⚙️ **Automation** — workflow automation, CI/CD and reproducible engineering.
- 🏛️ **Federated Governance** — repositories, capabilities, evidence, risks, decisions and evolutionary baselines.

The common objective is to build systems that can be **operated, measured, traced and progressively validated** rather than simply described.

---

# CASTÚO-SYSTEM

**CASTÚO-SYSTEM** is the main technology ecosystem I am building.

It brings together:

```text
Cloud
  +
Edge
  +
IoT
  +
AI
  +
APIs
  +
Automation
  +
Observability
  +
GIS / Digital Twins
  +
Evidence & Governance
```

The architecture is modular: components can operate independently while also participating in a larger interoperable system.

The focus is particularly relevant to rural, environmental and industrial environments, where connectivity and infrastructure cannot always be assumed.

## Engineering approach

Code existing is not the same as technology being validated.

CASTÚO-SYSTEM deliberately separates technical maturity states:

| State | Meaning |
|--|--|
| Implemented | The capability exists in the codebase within a defined scope. |
| Tested | The capability has defined automated, integration or other tests, with corresponding execution evidence. |
| Validated | Evidence demonstrates the capability beyond isolated implementation within a defined scope and against explicit acceptance criteria. |
| Pilot | The capability is deployed in a real environment and evaluated against defined evidence and KPIs. |
| Operational | The capability operates continuously with operational evidence, observability and defined controls. |

The progression is intentionally non-equivalent:

```text
DOCUMENTED
    ≠
IMPLEMENTED
    ≠
TESTED
    ≠
VALIDATED
    ≠
PILOT
    ≠
OPERATIONAL
```

A feature existing in code does not by itself establish validation, pilot deployment or operational maturity.

This distinction is central to the way I design and communicate technical systems.

## Evidence & Governance

A major part of my work is building an auditable capability and evidence framework.

The principle is simple:

**Technical claims should be traceable to evidence.**

This includes:

- Capability registries
- Evidence registries
- Provenance
- Verification states
- Validation gates
- Evidence promotion
- Temporal evidence policies
- Risk registries
- Decision records
- CI validation
- Documentation contracts
- Traceability between requirements, capabilities, implementations and evidence

The objective is to establish a reproducible relationship between:

```text
Requirement
    ↓
Capability
    ↓
Implementation
    ↓
Test
    ↓
Evidence
    ↓
Validation
    ↓
Decision
```

---

# CASTÚO-EVOLUTION

**CASTÚO-EVOLUTION provides the federated governance and control plane for repositories, capabilities, evidence, provenance, risks, Gates, decisions and evolutionary baselines through a shared evidence model and canonical event flow.**

The current control plane is maintained as **PARTIAL / EVIDENCE-BACKED** while end-to-end federation and vendor-independent validation continue.

It is designed to connect autonomous repositories through a shared evidence model rather than simple repository coexistence.

Its Single Source of Truth (SSOT) scope covers:

- identity
- repositories
- capabilities
- implementations
- evidence
- provenance
- risks
- Gates
- decisions
- evolutionary baselines

The purpose is not to centralize every runtime component. Each governed repository remains operationally autonomous while contributing structured technical evidence to a common governance layer.

## Federated architecture

```text
Repository
    ↓
Repository Adapter
    ↓
Canonical Event
    ↓
Provenance
    ↓
Evidence
    ↓
Capability
    ↓
Risk
    ↓
Gate
    ↓
Decision
    ↓
Evolutionary Baseline
```

The canonical flow is designed to preserve traceability across independently evolving repositories.

CASTÚO-EVOLUTION correlates evidence, evaluates defined maturity conditions, detects drift and records promotion decisions without treating documentation alone as proof of maturity.

## Federated registries

The control plane defines logically separated registries intended to be linked through shared identifiers and provenance relationships.

- repositories
- profiles and actors
- capabilities
- evidence
- provenance
- risks
- Gates
- decisions
- evolutionary baselines

## Repository adapters

Repositories do not need to implement the complete governance model themselves.

Repository-specific adapters translate repository events and evidence into the canonical CASTÚO-EVOLUTION model.

Examples include:

- castuo-agro-edge → edge, MQTT, buffering and field-operation evidence
- Cast-o → testing, regression and benchmark evidence
- GOLDfish → assurance, security and deployment evidence
- ctaex-iot-pilot → field and IoT validation evidence

The control plane can then correlate these inputs into a common governance view.

## Evidence, Gates and maturity

Federation is evidence-driven.

The control plane explicitly distinguishes:

```text
DOCUMENTED
    ≠
IMPLEMENTED
    ≠
TESTED
    ≠
VALIDATED
    ≠
PILOT
    ≠
OPERATIONAL
```

and:

```text
UNKNOWN ≠ GREEN
```

Promotion is therefore based on the evidence defined by the corresponding Gate.

Documentation, implementation or test existence alone does not automatically establish validation or operational readiness.

## Baselines and drift

Governed repositories can be associated with evolutionary baselines.

CASTÚO-EVOLUTION compares:

```text
Baseline state
      ↓
Current state
```

to identify:

- configuration drift
- unpromoted changes
- missing evidence
- provenance inconsistencies
- capability-state mismatches
- potential false-green conditions

The purpose is to preserve a traceable history of what was recorded, what changed and what evidence supported a given state.

This does not imply that every recorded state is independently validated.

## Governance principle

Repositories remain autonomous.

Governance is federated through:

**evidence · provenance · Gates · decisions · baselines**

The objective is to turn independently evolving repositories into a traceable, evidence-governed technological system without overstating their maturity.

CASTÚO-EVOLUTION connects the ecosystem through evidence, provenance and maturity controls rather than simple repository coexistence.

---

## Selected projects

- 🏗️ [**CASTÚO-SYSTEM**](https://github.com/Traky12/Castuo-system) — Core platform and ecosystem integration.
- ⚙️ [**CASTÚO-EVOLUTION**](https://github.com/Traky12/castuo-evolution) — Federated governance, provenance, evidence, Gates and evolutionary baselines.
- 📡 [**castuo-agro-edge**](https://github.com/Traky12/castuo-agro-edge) — Offline-first edge infrastructure for rural and environmental environments.
- 🧪 [**Cast-o**](https://github.com/Traky12/Cast-o) — Automated software testing, regression detection and performance benchmarking.
- 🔬 [**GOLDfish**](https://github.com/Traky12/goldfish) — Engineering assurance, validation, security and deployment practices.
- 🌱 [**ctaex-iot-pilot**](https://github.com/Traky12/ctaex-iot-pilot) — Agricultural IoT experimentation and field validation.
- 📴 [**castuo-offline-field-operations**](https://github.com/Traky12/castuo-offline-field-operations) — Offline-first field operations, local assistance and resilient communications.

---

## Technical stack

**AI / Knowledge**  
Local AI · RAG · SABIONDA · LangGraph

**Backend**  
Python · FastAPI · Pydantic · APIs

**Edge / IoT**  
Raspberry Pi · ESP32 · MQTT · LoRaWAN

**Data / Infrastructure**  
PostgreSQL · TimescaleDB · Redis

**Automation**  
n8n

**Observability**  
Prometheus · Grafana · Alertmanager

**Spatial**  
GIS · Digital Twins

**Engineering**  
GitHub · GitHub Actions · CI/CD · DevSecOps · Terraform · Docker · Kubernetes · Automated Testing

**Evidence / Governance**  
Capability Registry · Evidence Registry · Provenance · Evidence Governance · Validation Gates · Risk Registry · Decision Registry · Traceability

---

## Current focus

The current priority is not simply adding more features.

It is increasing the amount of real, reproducible evidence behind the capabilities that matter most.

Current promotion targets are being pursued for:

- MQTT ingestion → Implemented → Pilot
- Offline-first buffering → Implemented → Pilot
- Raspberry Pi gateway → Implemented → Pilot
- Prometheus observability → Implemented → Pilot
- LoRaWAN → Prepared → Pilot
- Federated governance → Implemented / Tested → Validation
- Evidence governance → Implemented / Tested → Validation

These are maturity transitions and promotion targets, not claims that the destination state has already been independently demonstrated.

The objective is to move selected capabilities from implemented software toward independently supported technical evidence.

---

## Why this work

Many digital systems assume:

**constant connectivity · centralized infrastructure · stable environments**

Real-world field environments often do not provide those guarantees.

My work explores architectures that can continue operating under constrained conditions while progressively:

**synchronizing · observing · validating · documenting**

what happens.

That makes:

**resilience · observability · interoperability · evidence**

architectural concerns rather than afterthoughts.

---

## Professional approach

I use GitHub as part of the engineering process rather than only as a code archive.

The development workflow combines:

**Repositories · Issues · Pull Requests · Tests · CI/CD · Documentation · Releases · Evidence**

The objective is not to claim maturity because a repository exists.

It is to leave behind an inspectable engineering trail in which implementations, tests, changes, evidence and decisions can progressively be related to one another.

The same principle applies to the ecosystem:

**Claim ≠ Evidence**

and:

**Evidence should be traceable to an implementation, test, event, artifact, decision or other defined source.**

---

## Versioning and scope

The public profile intentionally distinguishes between:

- CASTÚO-EVOLUTION specification / control-plane version: v2.2
- ecosystem documentation baselines: maintained separately where applicable

Version labels are only used when their scope is explicitly defined and stable.

The current CASTÚO-EVOLUTION control plane remains:

**PARTIAL / EVIDENCE-BACKED**

while end-to-end federation and vendor-independent validation continue.

---

## Connect

🌐 [Website](https://castuo-system.es/)  
🔬 [ORCID](https://orcid.org/0009-0007-3489-0565)  
💼 [LinkedIn — Castúo-System](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8/)  
🐙 [GitHub — Traky12](https://github.com/Traky12)

**Build · Validate · Observe · Document · Evolve**
