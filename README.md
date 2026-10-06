<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="CASTÚO-SYSTEM official logo" width="520" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Founder and lead architect of CASTÚO-SYSTEM™**

Building evidence-driven digital infrastructure for bounded, traceable and reviewable operations.

> This profile presents the public technical work of Gregorio Julián Jiménez Bodes, including selected evidence, repository roles, development activity and declared boundaries related to CASTÚO-SYSTEM™.

> `NO CLAIM WITHOUT PROVENANCE` · `NO EXTERNAL CLAIM WITHOUT REPRODUCIBLE EVIDENCE`

## Executive Summary

CASTÚO-SYSTEM™ is a modular technical asset under active consolidation for traceable, governed and reviewable distributed operations. Its first product direction, **CASTÚO Evidence-Ready Field Operations**, focuses on offline-first continuity, operational traceability, evidence preservation and reviewable workflows for environments with irregular connectivity. The current engineering programme is centred on **OVS-01**, a controlled technical scenario covering event identity, offline persistence, recovery, synchronization and evidence integrity. The project follows a disciplined validation approach in which implementation, reproducibility, security, operational evidence and independent review are treated as distinct layers.

## Current Public Status

**Snapshot date:** 2026-10-05  
**Status:** Technical consolidation in progress  
**Promotion state:** `CONSOLIDATION-1.0 = BLOCKED`  
**Private technical authority:** `Castuo-system`  
**Public representation:** Selected technical evidence, repository roles, documented boundaries and development status  
**Production operation:** Not currently claimed  
**Independent validation:** Pending  
**Operational validation:** Pending  
**Commercial validation:** Not yet established

### Definition of CURRENT

`CURRENT` means that the corresponding state is implemented and verifiable within the declared scope.

It does not, by itself, mean production deployment, operational validation, independent validation, commercial availability or market adoption.

## Current Technical Focus

### OVS-01 — CASTÚO-SYSTEM Edge Continuity

**Status:** `PENDING`

**Scope:**
```text
event identity → local persistence → connectivity loss → restart and recovery → synchronization → evidence generation → replay
```

**Objective:** Establish a reproducible technical basis for continuity and evidence preservation in a controlled scenario.

**Current boundary:** The scenario is defined but has not yet been formally executed as an end-to-end promoted result. Production deployment, CTAEX validation, independent certification and commercial outcomes remain outside the current claim boundary unless separately evidenced.

`PROMOTION-BLOCKED` remains the default until the required evidence and human review gate exist.

## Current Promotion State

| **Area** | **Current status** | **Meaning** |
|---|---|---|
| Technical consolidation | `IN PROGRESS` | Architecture, security, governance and evidence work continue |
| Consolidation-1.0 | `BLOCKED` | Required engineering and validation gates remain open |
| Staging execution | `PENDING` | Requires a bounded and reproducible deployment |
| Identity and authorization | `PENDING` | Requires complete organization, identity and role evidence |
| Operational Vertical Slice | `PENDING` | OVS-01 remains the principal controlled validation objective |
| Independent reproduction | `PENDING` | Controlled third-party reproduction has not yet been demonstrated |
| Third-party review | `PENDING` | No completed independent review is currently represented |
| Market validation | `NOT ESTABLISHED` | No commercial adoption, customer contract or recurring-revenue evidence is currently represented |

**Claim discipline:** capability is not evidence; evidence is not maturity; maturity is not a claim; and a claim is not competitive advantage (`CAPABILITY ≠ EVIDENCE ≠ MATURITY ≠ CLAIM`).

## Authority and Evidence Boundaries

**`Castuo-system`** (private) is the canonical authority for current technical state, governance decisions and promotion decisions.

**`castuo-evidence`** and **`castuo-e3-001`** expose selected public evidence, protocols and reproducibility artefacts within their declared scope. They do not independently decide current technical state or promotion outcomes.

**`castuo-evolution`** (private) is a non-canonical evolution and governance workspace containing historical, prepared or working material. It is not a canonical authority, not a synchronized source of truth and does not determine the current promotion state.

**`Traky12`** is the public read-model: a representation and evidence index for selected claims, repository roles and declared limitations. It does not decide technical state, governance outcomes or promotion.

**`Cast-o`** and **`goldfish`** provide assurance, recovery and technical-support surfaces within their declared scopes. They do not independently certify the private core.

## Public Authority and Evidence Model

| Plane | Role | Authority |
|---|---|---|
| Internal technical authority | Core capabilities, contracts, current technical state, governance decisions, claims, gates and promotion decisions | `Castuo-system` |
| Evolution and governance workspace | Historical, prepared and working governance material | `castuo-evolution` — non-canonical |
| Public evidence surfaces | Selected evidence units, manifests, protocols and bounded reproducibility artefacts | `castuo-evidence` / `castuo-e3-001` |
| Assurance and recovery surfaces | Testing, assurance, recovery and security-support tooling | `Cast-o` / `goldfish` |
| External validation | Independent reproduction, field evidence and economic evidence | External reviewers, pilot owners or other independent sources |
| Public read-model | Public representation, repository map, evidence index and claim boundaries | `Traky12` |

This profile does not replace repository-specific authority. Build, deployment, security and operational instructions remain authoritative in their respective repositories and canonical technical documentation. This profile only provides a public representation and evidence index.

## Public Repository Map

| Repository | Public role | Boundary |
|---|---|---|
| `Castuo-system` *(private)* | Private platform core | Canonical authority for current technical state and promotion decisions; implementation is not publicly exposed in full |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Public evidence surface | Selected evidence units, manifests and bounded reproducibility artefacts |
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | Public reproduction protocol | Controlled independent reproduction material within declared scope |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | Assurance and validation tooling | Public tooling; does not independently certify the private core |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Public technical surface | Edge/IoT research components, buffering and synchronization experiments |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Public technical surface | Bounded offline workflow, recovery and evidence-export experiments |
| `ctaex-iot-pilot` *(private)* | Validation workspace | IoT and connectivity-loss validation workspace; field, institutional and production claims are excluded unless separately evidenced |
| `goldfish` *(private)* | Assurance and recovery workspace | Security, recovery and evidence-preservation research |

Third-party or upstream repositories, including forks, are external components and are not proprietary CASTÚO capability. The full role map lives in [`docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md).

## CASTÚO Ecosystem Architecture

The ecosystem uses differentiated architectural identifiers so that repositories are related by architecture without being treated as interchangeable components.

| Layer | Architectural component | GitHub repository |
|---|---|---|
| 01 · Core | `castuo-core-platform` | `Traky12/Castuo-system` |
| 01 · Platform workspace | `castuo-cloud-workspace` | `Traky12/castuo-360-v5.3` |
| 01 · Strategy/state | `castuo-strategy-registry` | `Traky12/castuo-strategy-knowledge-base` |
| 02 · Field | `castuo-field-runtime` | `Traky12/castuo-offline-field-operations` |
| 02 · Edge | `castuo-edge-telemetry` | `Traky12/castuo-agro-edge` |
| 02 · IoT validation | `castuo-iot-lab` | `Traky12/ctaex-iot-pilot` |
| 02 · Territorial | `castuo-territorial-nodes` | `Traky12/castuo-link` |
| 02 · Vision | `castuo-vision-lab` | `Traky12/agrovision-360` |
| 03 · Evidence | `castuo-evidence-pack` | `Traky12/castuo-evidence` |
| 03 · Replay | `castuo-replay-protocol` | `Traky12/castuo-e3-001` |
| 03 · Verification | `castuo-independent-verifier` | `Traky12/castuo-foreign-verifier` |
| 03 · Assurance | `castuo-assurance-workbench` | `Traky12/Cast-o` |
| 03 · Continuity | `castuo-continuity-lab` | `Traky12/castuo-vendor-exit-lab` |
| 04 · Governance | `castuo-governance-plane` | `Traky12/castuo-evolution` |
| 04 · Security | `castuo-security-ops` | `Traky12/goldfish` |
| 04 · Security procedures | `castuo-security-runbook` | `Traky12/castuo-security-runbook-site` *(archived)* |
| 05 · Demo | `castuo-field-demo` | `Traky12/castuo-product-experience` |
| 05 · Maturity | `castuo-maturity-dashboard` | `Traky12/castuo-progress-dashboard` |
| 05 · Ecosystem status | `castuo-ecosystem-status` | `Traky12/castuo-live-status-dashboard` |
| 05 · Trust/docs | `castuo-trust-portal` | `Traky12/castuo-docs-portal` *(archived)* |
| 06 · AI laboratory | `castuo-assistant-lab` | `Traky12/castuo-neurocompanion` |

**Naming rule:** the architectural identifier names the function; the GitHub slug remains the locator until a repository-rename operation and full reference reconciliation can be performed.

Archived historical repositories and third-party forks retain their original slugs for traceability and provenance. They are not presented as active CASTÚO architectural components.

## Next Validation Milestone

### E3-001 — Controlled Independent Reproduction

**Objective:** Enable a third-party reviewer to reproduce a bounded, non-sensitive assurance scenario.

**Public protocol:** The protocol must contain sufficient information to reproduce the declared bounded claim without exposing non-public implementation, sensitive IP, credentials or private operational material.

**Controlled-review material:** Additional artefacts, logs or private-core evidence may be made available through a controlled review process where appropriate.

**Private core:** The private implementation remains outside the public reproduction scope unless access is explicitly authorized under defined review conditions.

**Current status:** `PENDING`.

**Not claimed:** E3-001 is not yet an independent validation result, production validation, certification, customer pilot or commercial proof.

## Economic and Legal Notice

This profile distinguishes technical development evidence from economic, legal and regulatory conclusions.

Repository activity, architecture, code, documentation, planning scenarios and engineering work may demonstrate development activity and technical investment. They do not, by themselves, establish accounting value, funding, revenue, contractual commitments, customer adoption or market traction.

Financial assumptions and business-planning figures are maintained in the appropriate dated business documentation. The official PIE PLUS workbook remains authoritative for its respective financial scenarios.

Any technical-asset valuation, contribution valuation or economic scenario should be presented through a dated technical-economic or valuation document with an explicit methodology and publication scope.

The information presented here is descriptive and evidentiary in nature. It is not intended, by itself, to constitute legal advice, regulatory certification, conformity assessment, accounting valuation, investment advice or a guarantee of future commercial performance.

## Historical Engineering Record

Earlier engineering records, local validation snapshots, dashboard iterations, repository inventories and commit ledgers from August 2026 are retained for historical traceability in the repository history. This includes the EvOS v13.0 documentation baseline of 2026-08-15 and the governed engineering record of 2026-08-18, with its 91-entry historical commit ledger:

- [Engineering record of 2026-08-18 (profile README at commit `860a20e`)](https://github.com/Traky12/Traky12/blob/860a20ecee74af90191fb25cd72327bf5739528c/README.md)

Those records describe bounded states captured during August 2026. They do not override the current public status dated 2026-10-05 and do not constitute current production, operational, independent, field, commercial or market evidence. A commit records repository history; it is not, by itself, field evidence, deployment evidence, security assurance or commercial evidence.

The official brand asset is versioned at `assets/brand/castuo-system-logo-horizontal.jpg`. Brand consistency is presentation metadata only and does not constitute technical, security, production or commercial evidence.

## Links

- [CASTÚO-SYSTEM™ website](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [Public claim boundary](PUBLIC_CLAIM_BOUNDARY.md)
- [Evidence Center](evidence-center/README.md)
- [Security policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Versión en español](README.es.md)

## Current Boundaries

The current profile does not represent the following outcomes as established facts:

- Production operation.
- Autonomous authority.
- Independent validation.
- Certification.
- Regulatory conformity.
- Paid customer traction.
- Recurring revenue.
- Operational field validation.
- Private-cloud provisioning.
- Operational robotics.
- Semiconductor manufacturing.
- Universal interoperability.
- AI autonomy in production.
- Multi-site industrial deployment.

The purpose of this profile is to present the work of Gregorio Julián Jiménez Bodes and the CASTÚO-SYSTEM™ technical ecosystem in a useful, professional, transparent and independently reviewable form.

The objective is not to eliminate uncertainty. It is to make technical progress, evidence, boundaries and next validation steps clearly inspectable.

> The profile does not claim certainty; it makes the current state, technical boundaries, evidence model and next validation steps inspectable.
