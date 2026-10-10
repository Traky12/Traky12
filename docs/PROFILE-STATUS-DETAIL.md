# CASTÚO-SYSTEM — public status detail

Detailed status and historical context for the profile README. Updated 2026-10-11; the profile README is the concise public snapshot, while this document holds supporting status and history.

## Current public release and validation gate — 2026-10-11

- **GitHub release:** `v0.1.3` exists as a public alpha prerelease, published on 2026-10-10. The release has no manually attached assets. A GitHub prerelease is not by itself proof that the package is available through PyPI or that the matching browser demo is deployed.
- **PyPI and GHCR:** availability of `e3bundle==0.1.3` and `ghcr.io/traky12/e3bundle:0.1.3` has not been established by the evidence reviewed for this update. The Pages workflow explicitly tests both registries before deployment. The profile therefore does not advertise a PyPI installation command.
- **Browser demo:** the current repository documentation describes the public demo as using the `v0.1.1` example bundles. The Pages workflow tests a pinned `v0.1.3` candidate, but a candidate build and browser tests do not prove that the public URL serves that candidate.
- **Security advisory:** the `v0.1.3` release notes say they fix `GHSA-55pc-7v4h-jf7c`. The advisory's public fixed-version metadata was not independently verified in this update; do not claim that the public advisory is marked fixed at `0.1.3` until its actual record is checked.
- **Pages publication gate:** deployment requires the GitHub release, PyPI package, GHCR image, build/UI checks and owner-configured legal identity fields. Source inspection confirms the gate logic; it does not establish that the latest run passed or that deployment completed.
- **Private-core CI:** runner-assignment failures without executable step evidence remain a separate blocker. Their root cause is not established and these observations are not accepted as code-test results.
- **OVS-01 and independent reproduction:** remain `PENDING`; no end-to-end operational or independent result is promoted.

Do not merge release claims into the profile until the PyPI package is retrievable, the GHSA record identifies `0.1.3` as fixed, and the live Pages site is verified to use the matching candidate. Recheck the registries, advisory record and deployment run immediately before changing this section.

## Current Technical Focus

**OVS-01 — CASTUO-SYSTEM Edge Continuity**

**Status:** `PENDING`

**Scope:** controlled engineering scenario for event identity, offline persistence, recovery, synchronization, evidence and replay.

**Boundary:** defined but not formally executed. No production, real CTAEX, independent, certification or commercial claim is promoted.

`PROMOTION-BLOCKED` remains the default until the required evidence and human review gate exist.

## Current Promotion State

| Area | Baseline status (2026-10-05) | Meaning |
|---|---|---|
| Technical consolidation | `IN PROGRESS` | Architecture, security and governance work continue |
| Consolidation-1.0 | `BLOCKED` | Engineering and operational evidence gates remain open |
| Staging execution | `PENDING` | Requires a bounded, reproducible deployment |
| Identity and authorization | `PENDING` | Requires OIDC, organization and role evidence |
| Operational Vertical Slice | `PENDING` | OVS-01 is defined as a controlled validation objective; no end-to-end operation is promoted |
| Independent reproduction | `PENDING` | Third-party reproduction without synchronous assistance has not been demonstrated |
| Third-party review | `PENDING` | No completed independent review is claimed |
| Market validation | `NOT CLAIMED` | No commercial adoption, contract or recurring-revenue claim |

**Claim discipline:** capability is not evidence; evidence is not maturity; maturity is not a claim; and a claim is not competitive advantage (`CAPABILITY ≠ EVIDENCE ≠ MATURITY ≠ CLAIM`).

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

## Economic and Legal Notice

Technical assets, architecture, code, planning scenarios, documentation and repository activity are not cash, accounting value, funding, revenue, contracts, customer results or market validation.

Repository activity demonstrates ongoing development; it does not by itself demonstrate user adoption, customer value, market traction, commercial validation or recurring revenue.

The official PIE PLUS workbook remains authoritative for financial figures, assumptions and business-planning scenarios.

Any technical-asset valuation, contribution valuation or economic scenario belongs in a dated valuation memo or technical-economic report, not in this public profile unless its methodology and publication scope are explicitly approved.

CASTÚO-SYSTEM documentation describes technical architecture, engineering evidence, internal controls and work in progress. It does not constitute legal advice, regulatory certification, conformity assessment, investment advice, accounting valuation or a guarantee of commercial performance.

## Historical Engineering Record

Earlier engineering records, local validation snapshots, dashboard iterations, repository inventories and commit ledgers from August 2026 are retained for historical traceability in the repository history. This includes the EvOS v13.0 documentation baseline of 2026-08-15 and the governed engineering record of 2026-08-18, with its 91-entry historical commit ledger:

- [Engineering record of 2026-08-18 (profile README at commit `860a20e`)](https://github.com/Traky12/Traky12/blob/860a20ecee74af90191fb25cd72327bf5739528c/README.md)

Those records describe bounded states captured during August 2026. They do not override the current public status snapshot dated 2026-10-11 and do not constitute current production, operational, independent, field, commercial or market evidence. A commit records repository history; it is not, by itself, field evidence, deployment evidence, security assurance or commercial evidence.

The official brand asset is versioned at `assets/brand/castuo-system-logo-horizontal.jpg`. Brand consistency is presentation metadata only and does not constitute technical, security, production or commercial evidence.

## CASTÚO capability reinforcement

A dated public plan maps the capability work required to reinforce the CASTÚO-SYSTEM ecosystem without creating a parallel technical authority. It links product, core, data, edge, field, evidence, security, assurance, observability, deployment, compliance, commercial validation and technical-asset evidence to explicit dependencies and evidence requirements.

- [CASTÚO-SYSTEM — transversal capability reinforcement plan (baseline 2026-10-08; execution update 2026-10-09)](CASTUO_CAPABILITY_REINFORCEMENT_PLAN_2026-10-08.md)

The plan is a public read-model and execution map. Canonical capability state and promotion decisions remain in the authoritative repositories.
