# Gregorio Jiménez Bodes — Traky12

**Systems Architect · Evidence Engineer · AI Governance & Assurance**

Founder and lead architect of **CASTÚO-SYSTEM™**

Building evidence-driven AI, Edge/IoT, and resilient digital infrastructure for environments where connectivity, traceability, security, and operational reliability matter.

> `NO CLAIM WITHOUT PROVENANCE`
>
> `NO AI DEPLOYMENT WITHOUT ASSURANCE`
>
> `NO EXTERNAL CLAIM WITHOUT REPRODUCIBLE EVIDENCE`

---

## ⚡ CASTÚO-SYSTEM™ at a Glance

CASTÚO-SYSTEM™ is a federated technology ecosystem built around an **Evidence Operating System (EvOS)**.

Its purpose is not only to build software, but to make technical decisions, system states, claims, and validation results traceable, reproducible, and governable.

```text
Regulation
    ↓
Control
    ↓
Capability
    ↓
Implementation
    ↓
Test
    ↓
Evidence
    ↓
Provenance
    ↓
Passport
    ↓
Gate
    ↓
Decision
    ↓
Claim
    ↓
Publication
```

---

## 📊 Current Evidence Status

| Indicator | Current state | Interpretation |
| :--- | :---: | :--- |
| **Ecosystem Connectivity Index (ECI)** | 6.00 / 6.00 | Internal canonical repository connectivity |
| **Evidence Validation Index (EVI)** | 5.14 / 6.00 | Internal evidence-depth indicator |
| **AI Assurance Gate** | G4 — CONTROLLED | Current assurance stage |
| **Adversarial assurance tests** | 12 / 12 passing | Automated fail-closed controls |
| **External review package** | E2-ready | Prepared for independent inspection |
| **Independent verification** | E3 pending | Not claimed until externally verified |
| **Technology asset estimate** | €420,000 | Indicative replacement-cost estimate |

*Metrics shown here are engineering/evidence indicators, not certifications or independent audit results.*

---

## 🛡️ Evidence-First Engineering

CASTÚO-SYSTEM™ is designed around a simple rule:

> *A system should be able to show why a claim is true — and when it is not justified, it should refuse to make the claim.*

The assurance layer therefore uses **fail-closed controls**.

### Example: Unsupported Performance Claim
- Target benchmark = `85.0%`
- Observed benchmark = `82.4%`

```text
82.4% < 85.0%
       ↓
ASSURANCE GATE
       ↓
CLAIM BLOCKED
```

The system does not silently upgrade the result, reinterpret the target, or publish an unsupported performance claim. This is a deliberate design property of the EvOS assurance layer.

---

## 🤖 AI Governance & Assurance

The AI governance layer provides a canonical structure for:
- AI system inventory
- Intended purpose
- Risk classification
- Risk register
- Data provenance
- Human oversight
- Validation benchmarks
- Change control
- AI passports
- Assurance gates
- Evidence-backed claims

### Current Evidence Artifacts
- `ai-system-registry.yaml`
- `ai-requirements-matrix.yaml`
- `ai-risk-registry.yaml`
- `ai-data-governance.yaml`
- `human-oversight.yaml`
- `ai-validation-registry.yaml`
- `ai_assurance_gate.py`
- `PASS-AI-001.yaml`

### Regulatory Posture
CASTÚO-SYSTEM™ maintains a technical readiness and applicability framework for the EU AI Act (Regulation (EU) 2024/1689).

- Technical governance: **IMPLEMENTED**
- Evidence mapping: **IMPLEMENTED**
- AI assurance controls: **IMPLEMENTED**
- Applicability assessment: **ACTIVE**
- Legal conformity assessment: **NOT CLAIMED**
- Independent certification: **NOT CLAIMED**

*The system deliberately distinguishes technical readiness, legal conformity, and certification.*

---

## 🧪 Assurance Evidence

### 12/12 adversarial tests passing (`tests/assurance/`)

The assurance suite covers failure scenarios including:
- unsupported claims
- stale or expired passports
- insufficient assurance gates
- benchmark results below target
- evidence/hash manipulation
- model-change reassessment
- provenance failures

*The objective is simple: A missing, stale, or insufficient evidence chain should block the corresponding claim.*

---

## 🔎 Verify It Yourself

The core assurance evidence is publicly inspectable:

```bash
git clone https://github.com/Traky12/castuo-evolution
cd castuo-evolution

pytest tests/assurance/

# Then inspect:
cat sev/SEV-000.yaml
cat governance/ai/ai-system-registry.yaml
cat governance/ai/ai-validation-registry.yaml
cat governance/ai/ai_assurance_gate.py
cat governance/ai/PASS-AI-001.yaml
ls external-validation/
```

The public evidence index provides the canonical map: [`Public Evidence Index`](https://github.com/Traky12/castuo-evolution/blob/main/docs/public-evidence-index.md)

---

## 💶 Technology Asset Evidence

The current internal evidence model includes an **indicative replacement-cost estimate of €420,000** for the technology asset developed within the ecosystem.

Basis includes:
- Technology inventory
- Engineering effort
- Architecture & integration
- Testing & assurance
- Security & governance
- Documented replacement-cost methodology

### Important Distinction
`€420,000` is **not** presented as:
- market value
- fair value
- accounting value
- company valuation
- independent appraisal

It is an indicative replacement-cost estimate supported by a documented reconstruction methodology and evidence inventory.

---

## 🧭 Ecosystem Architecture

```text
                         Traky12
                            │
                    CONTROL PLANE
                  castuo-evolution
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
     CORE                ASSURANCE           TOOLING
 CASTÚO-SYSTEM           GOLDfish             Cast-o
        │                   │                   │
        ├─────────────┬─────┴─────┬─────────────┤
        │             │           │             │
      EDGE         OFFLINE     CTAEX PILOT    OTHER
   Agro/IoT        FIELD       VALIDATION     REPOSITORIES
```

---

## 🚀 Strategic Repositories

### 🛡️ Core & Governance
- [`CASTÚO-SYSTEM`](https://github.com/Traky12/Castuo-system) — Core platform and backend capabilities.
- [`castuo-evolution`](https://github.com/Traky12/castuo-evolution) — Control plane, evidence governance, canonical registries, and assurance.
- [`goldfish`](https://github.com/Traky12/goldfish) — Security hardening, validation, and assurance engineering.

### 📡 Edge & Real-World Operations
- [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) — Offline-first Edge/IoT infrastructure.
- [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) — Resilient field operations.
- [`ctaex-iot-pilot`](https://github.com/Traky12/ctaex-iot-pilot) — Agricultural IoT experimentation and validation.

### 🧪 Engineering Tooling
- [`Cast-o`](https://github.com/Traky12/Cast-o) — Automated testing, regression detection, and benchmarking.

---

## 🧰 Technical Stack

- **AI & Knowledge:** Local AI · RAG · SABIONDA · LangGraph
- **Backend:** Python · FastAPI · Pydantic · REST APIs
- **Edge / IoT:** Raspberry Pi · ESP32 · MQTT · LoRaWAN
- **Data & Infrastructure:** PostgreSQL · TimescaleDB · Redis · Docker · Kubernetes
- **Engineering & Assurance:** CI/CD · DevSecOps · Automated Testing · Evidence Governance · Security Scanning

---

## 🌍 Real-World Orientation

CASTÚO-SYSTEM™ is designed for environments where systems cannot assume perfect infrastructure.

Core requirements include:
- Offline operation
- Resilient synchronization
- Traceable state
- Observable infrastructure
- Human oversight
- Controlled automation
- Evidence-backed decisions

The intended progression is:
```text
Problem → Capability → Pilot → Evidence → KPI → Economic Result → External Validation → Scalable Capability
```

---

## 🔬 Evidence Portfolio

| Domain | Canonical source |
| :--- | :--- |
| Repository architecture | `governance/registry/repository-registry.yaml` |
| Master evidence | `sev/SEV-000.yaml` |
| AI systems | `governance/ai/ai-system-registry.yaml` |
| AI assurance | `governance/ai/ai_assurance_gate.py` |
| AI validation | `governance/ai/ai-validation-registry.yaml` |
| AI passport | `governance/ai/PASS-AI-001.yaml` |
| Economic evidence | `PASS-ECONOMIC-001` |
| Asset reconstruction | `governance/valuation/asset-reconstruction-report.md` |
| Regulatory applicability | `governance/ai/regulatory-applicability-register.yaml` |
| External review | `external-validation/` |
| Public evidence index | `docs/public-evidence-index.md` |

---

## ⚠️ Known Limitations

Evidence-first engineering also means making limitations visible. Current limitations include:
- Independent E3 verification is still pending.
- Regulatory applicability is assessed per system and intended purpose.
- No blanket AI Act certification claim is made.
- The €420,000 figure is a replacement-cost estimate, not an independent market valuation.
- Deployment readiness remains context-dependent.
- Benchmark results below target remain visible and block the associated claim.
- External validation and real-world evidence continue to mature.

---

## 🔗 Connect

- 🌐 [CASTÚO-SYSTEM™](https://castuo-system.es/)
- 🔬 [ORCID](https://orcid.org/0009-0007-3489-0565)
- 💼 [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8/)

> *The goal is not to make the system look certain. The goal is to make its evidence inspectable.*

**Build · Validate · Observe · Document · Evolve**
