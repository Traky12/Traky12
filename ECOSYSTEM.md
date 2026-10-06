# CASTÚO-SYSTEM — Public Ecosystem Map

**Snapshot:** 2026-10-06  
**Role:** public read-model of repository roles, authority classes, migration state and disclosure boundaries.  
**Authority:** this file does not promote technical, operational, regulatory or commercial claims.

## Governing rule

> **One domain = one canonical repository. One truth = one authoritative source. One promotion = evidence + review + MIC-G decision. One public claim = bounded and traceable.**

The ecosystem remains federated. Consolidation clarifies ownership, source of truth, evidence flow and migration boundaries without erasing repository history.

## Authority model

| Surface | Current role | Authority |
|---|---|---|
| Traky12/Castuo-system | Core runtime and technical implementation | Canonical technical authority |
| Traky12/castuo-evolution | Ecosystem ownership, registry, provenance and consolidation control plane | Canonical ecosystem governance authority |
| Traky12/castuo-evidence | Public evidence packages and manifests | Canonical evidence surface |
| Traky12/castuo-e3-001 | Bounded reproduction protocol | Canonical replay protocol |
| Traky12/castuo-foreign-verifier | Portable verification tooling | Verification executor; not an independent reviewer |
| Traky12/Traky12 | Public navigation and bounded read-model | Public read-model only |

The governance control plane does not override the private runtime's technical authority. Public dashboards and portals remain derived surfaces.

## Canonical domain map

| Domain | Current repository | Architectural identifier | State | Public boundary |
|---|---|---|---|---|
| Platform core | Traky12/Castuo-system | castuo-core-platform | ACTIVE / CANONICAL | Private implementation; public page does not expose private technical authority |
| Field runtime | castuo-offline-field-operations | castuo-field-runtime | ACTIVE / CANONICAL | Bounded offline workflow and evidence scope |
| Edge telemetry | castuo-agro-edge | castuo-edge-telemetry | ACTIVE / CANONICAL | Edge/IoT implementation scope only |
| Product/demo | castuo-product-experience | castuo-field-demo | MIGRATING | Bounded demonstration/product surface |
| Evidence | castuo-evidence | castuo-evidence-pack | ACTIVE / CANONICAL | Selected public evidence and reproducibility artefacts |
| Replay | castuo-e3-001 | castuo-replay-protocol | ACTIVE / CANONICAL | Protocol, not an independent result |
| Verification | castuo-foreign-verifier | castuo-independent-verifier | ACTIVE / CANONICAL | Verification tooling, not independent assurance |
| Assurance tooling | Cast-o | castuo-assurance-workbench | ACTIVE / CANONICAL | Testing, diagnostics and benchmark tooling |
| Continuity | castuo-vendor-exit-lab | castuo-continuity-lab | EXPERIMENTAL | Scenario/lab scope only |
| Governance | castuo-evolution | castuo-governance-plane | ACTIVE / CANONICAL | Ecosystem control plane |
| Security | goldfish | castuo-security-ops | MIGRATING | Security/recovery workspace; target castuo-security is not yet present |
| Ecosystem status | castuo-live-status-dashboard | castuo-ecosystem-status | MIGRATING | Derived read-model; target castuo-control-center is not yet present |
| Maturity | castuo-progress-dashboard | castuo-maturity-dashboard | MIGRATING | Derived read-model; cannot own canonical state |
| Documentation | castuo-strategy-knowledge-base | castuo-strategy-registry | MIGRATING | Working documentation/state; target castuo-docs is not yet present |
| Public presence | Traky12 | castuo-public-index | ACTIVE | Public read-model; target castuo-site is not yet present |

## Specialized and experimental

- ctaex-iot-pilot — private controlled IoT validation workspace; repository presence is not institutional or production evidence.
- castuo-link — territorial-node concept; experimental.
- agrovision-360 — experimental vision workspace.
- castuo-neurocompanion — experimental assistant laboratory; intended purpose and data boundaries require their own assessment.

## Legacy / archive / upstream

- castuo-360-v5.3 — migration source; current material must be reconciled by source SHA before transfer.
- castuo-digital-system — archived.
- castuo-docs-portal — archived.
- castuo-security-runbook-site — archived.
- copia-de-cast-o-system-strategy-knowledge-base — archived duplicate.
- -Prueba-final — archived historical test surface.
- desktop-tutorial — archived tutorial.
- n8n and openclaw — external/upstream forks; not proprietary CASTÚO subsystems.

## Dashboard rule

A dashboard may consume ownership, evidence and domain status from canonical sources, but it may not create a competing canonical database.

## Public claim boundary

Repository activity, naming, architecture diagrams and documentation do not by themselves establish production operation, independent validation, customer operation or payment, certification or regulatory conformity, continuous availability, federation across independent nodes, vendor independence or universal interoperability.

The public read-model must preserve:

CAPABILITY ≠ EVIDENCE ≠ MATURITY ≠ CLAIM ≠ COMPETITIVE ADVANTAGE

## Promotion chain

CAPABILITY → IMPLEMENTATION → REPRODUCIBLE TEST → VERIFIABLE EVIDENCE → REVIEW → MIC-G DECISION → UPDATED STATE → BOUNDED PUBLICATION

When an evidence or review link is missing, the public state remains PENDING / NOT_CLAIMED rather than being promoted by documentation alone.

## Current consolidation state

Technical consolidation: IN PROGRESS  
Ecosystem ownership baseline: DOCUMENTED  
Repository renames: NONE EXECUTED  
Repository deletions: NONE EXECUTED  
Production operation: NOT CLAIMED  
Independent validation: PENDING  
Commercial validation: NOT CLAIMED

See the governance control plane at https://github.com/Traky12/castuo-evolution for the controlled repository registry.
