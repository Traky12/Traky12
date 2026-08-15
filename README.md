# Gregorio Jiménez Bodes — Traky12

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Founder and lead architect of CASTÚO-SYSTEM™**

Building evidence-driven AI, Edge/IoT and resilient rural digital infrastructure where usability, security, operational state and public claims remain traceable and verifiable.

> `NO CLAIM WITHOUT PROVENANCE`
>
> `NO AI DEPLOYMENT WITHOUT ASSURANCE`
>
> `NO SCALE WITHOUT SECURITY AND OBSERVABILITY`

---

## CASTÚO-SYSTEM™ · 2026 evolution

CASTÚO-SYSTEM™ is evolving from a technically developed core toward a **usable, evidence-driven and security-first rural technology ecosystem**. The current engineering priority is not to claim that every future component is already operational; it is to make each capability progressively easier to use, safer to scale and more defensible through reproducible evidence.

The public evolution plan is documented in [`CASTUO_EVOLUTION_2026.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/CASTUO_EVOLUTION_2026.md), with the security and encryption operating model in [`SECURITY_ENCRYPTION_OPERATING_MODEL.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/SECURITY_ENCRYPTION_OPERATING_MODEL.md). The control-plane/runtime boundaries, canonical evidence envelope and GaiaChain limits are defined in the [`SOVEREIGN_ORCHESTRATION_CONTRACT.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/SOVEREIGN_ORCHESTRATION_CONTRACT.md) and tracked through the [`ORCHESTRATION_ROADMAP_2026.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/ORCHESTRATION_ROADMAP_2026.md). The complete public chronology is available in [`EVOLUTION_TIMELINE_PUBLIC.md`](EVOLUTION_TIMELINE_PUBLIC.md).

```text
Usability → Capability → Implementation → Test → Security Gate
    → Evidence / Provenance → Operational Metric → External Review
    → Customer / Contract → Controlled Scale → Reassessment ↺
```

## Maturity and evidence status

| Status | Meaning | Public claim allowed |
| :--- | :--- | :--- |
| **E1 — Internally verified** | Evidence checked within the declared engineering scope | Internal verification only |
| **E2 — Review-ready** | Reproduction package prepared for third-party inspection | Review-ready, not independently verified |
| **E3 — Independent verification** | Scope-bound independent review completed | Only for the examined scope |
| **Operational** | Live capability with owner, metrics and runbook | Only under the stated conditions |
| **Reassessment required** | Model, dependency, risk or perimeter changed | Promotion is blocked until review |

`UNKNOWN ≠ GREEN` · `DOCUMENTED ≠ IMPLEMENTED` · `IMPLEMENTED ≠ TESTED` · `TESTED ≠ VALIDATED` · `VALIDATED ≠ OPERATIONAL`

These states do not constitute certification, legal conformity, independent audit opinion or assurance beyond the evidence identified by commit, artifact, hash and scope.

## Usability-first product direction

The rural user should be able to configure a pilot, work without continuous connectivity, understand the next action, recover from an error and export a verifiable report without needing to understand the entire underlying stack. The adoption roadmap therefore prioritises guided onboarding, offline-first field work, clear dashboards, explicit incident messages, accessibility, safe defaults and measured support requirements.

The relevant measures are practical: time to first successful configuration, task completion, synchronisation failures, support requests, recurring weekly use and successful export of a traceable artifact. “Easy to use” remains a target until these measures are tested with real users.

## Controlled scale

The ecosystem separates four scaling planes:

| Plane | Scaling objective | Required guardrail |
|---|---|---|
| **SaaS** | More tenants and customers without data confusion | Tenant isolation, RBAC, quotas and versioned migrations |
| **Edge / IoT** | More devices and intermittent connectivity | Device identity, local buffering, idempotent sync and revocation |
| **Data** | More events and evidence without uncontrolled retention | Minimisation, schema versioning, encryption and retention policy |
| **Operations** | More releases without unsafe promotion | Observability, rollback, runbooks and approval Gates |

The system does not promote a physical or expensive expansion merely because it is technically attractive. It uses G1–G5 Gates to require technical, commercial, financial and documentary evidence before the next stage.

## Security and encryption by default

Security is treated as an operational boundary rather than a marketing statement. The public model is documented in the [security and encryption operating model](https://github.com/Traky12/castuo-evolution/blob/main/docs/SECURITY_ENCRYPTION_OPERATING_MODEL.md).

| Control | Public position |
|---|---|
| Secrets | No production secret belongs in Git; examples are non-functional |
| Identity | OIDC with pinned algorithms when configured; local development is not production |
| Authorisation | RBAC, minimum privilege and fail-closed role mapping |
| API | Input validation, explicit CORS, rate limits and safe errors |
| Data | TLS in transit, encryption at rest and minimisation by tenant |
| IoT | Device identity, credential rotation and replay protection |
| Evidence | Commit, artifact hash, reviewer and scope; negative findings are retained |
| Supply chain | Dependency scanning, SBOM and release blocking for critical issues |
| Continuity | Encrypted backups, restoration exercises and documented RPO/RTO |

“Encrypted” does not mean anonymous, certified or risk-free. The actual state of a control is the state supported by its implementation and evidence. A local or simulated GaiaChain transaction identifier is not described as a public blockchain confirmation; external anchoring remains a scoped Gate deliverable.

## Public evidence baseline and next milestone

EvOS v13.0 remains the public evidence baseline. The next external milestone is **E3-001 — Independent Review & Reproduction**, with a scope-bound protocol and a requirement to preserve discrepancies, failures, remediation and re-test.

The correct chain is:

```text
FAILURE → FINDING → REMEDIATION → RE-TEST
```

Never:

```text
FAILURE → DELETE
```

## Selected repositories

1. [`castuo-evolution`](https://github.com/Traky12/castuo-evolution) — control plane, governance, evidence and Gates.
2. [`Castuo-system`](https://github.com/Traky12/Castuo-system) — core platform and business logic.
3. [`goldfish`](https://github.com/Traky12/goldfish) — security hardening, CI/CD and assurance engineering.
4. [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) — offline-first agricultural edge and IoT plane.
5. [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) — resilient field operations and local continuity.
6. [`Cast-o`](https://github.com/Traky12/Cast-o) — test automation and performance tooling.

## Economic and project boundary

The indicative **€420,000 replacement-cost estimate** is a technical reconstruction estimate, not market value, accounting value, investment valuation or independent appraisal. The PIE PLUS business plan and financial model maintain a separate boundary between the existing technical asset, Phase 1 financing needs and future infrastructure conditioned by Gates.

No public profile statement should be read as a claim that funding has been received, a customer contract exists, a certification has been obtained, or a future physical phase is already committed.

## Limitations

Independent E3 verification remains pending. Regulatory applicability is system-specific. Legal conformity and certification are not claimed. Real-world external evidence is continuing. Production readiness is context-dependent and must always be read together with the declared scope, environment, metrics and evidence.

## Connect

- [CASTÚO-SYSTEM™](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8/)

> *The goal is not to make the system look certain. The goal is to make its evidence inspectable, its use understandable and its evolution safe.*

**Build · Secure · Measure · Evidence · Scale**
