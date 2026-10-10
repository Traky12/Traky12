# CASTÚO-SYSTEM — public status detail

Detailed status and historical context for the profile README. Updated 2026-10-11; the profile README is the concise public snapshot, while this document holds supporting status and history.

## Current public release and validation gate — 2026-10-11

- **GitHub:** [`v0.1.3`](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3) exists as a public alpha prerelease, published on 2026-10-10. The release has no manually attached assets. This is distinct from an approved, cross-registry release.
- **PyPI:** public availability of `e3bundle==0.1.3` has not been independently established in this update. The profile does not publish an installation command until the package is retrievable and its release gates are verified.
- **GHCR:** the previous profile snapshot claimed that `ghcr.io/traky12/e3bundle:0.1.3` was published, but its live manifest was not independently rechecked for this update. Treat container availability as unverified here.
- **Security advisory:** the GitHub release notes say `v0.1.3` fixes `GHSA-55pc-7v4h-jf7c`. The advisory's actual fixed-version metadata was not independently verified; do not claim it publicly marks `0.1.3` as fixed until that record is checked.
- **Browser demo:** the profile and repository README describe the public demo as using the `v0.1.1` example bundles. The Pages workflow tests a pinned `v0.1.3` candidate, but tests on a candidate build do not prove that the live public URL serves it.
- **Pages gate:** [the workflow](https://github.com/Traky12/castuo-e3-001/blob/main/.github/workflows/pages.yml) requires a GitHub `v0.1.3` release, PyPI `0.1.3`, GHCR image `0.1.3`, build/UI checks and owner-configured legal identity fields before deployment. Source inspection establishes the gate logic, not that the latest run passed or deployment completed.
- **Documentation mismatch:** the `v0.1.3` tag's [README](https://github.com/Traky12/castuo-e3-001/blob/v0.1.3/README.md) still says no approved `v0.1.3` release is available and PyPI availability is not claimed. Resolve that contradiction as part of the release closeout.
- **Private-core CI:** runner-assignment failures without executable step evidence remain a separate blocker. Their root cause is not established and those results are not code-test outcomes.
- **OVS-01 and independent reproduction:** remain `PENDING`; no end-to-end operational or independent result is promoted.

Do not merge public claims for a general `v0.1.3` install until the PyPI release can be retrieved, the GHSA record actually marks `0.1.3` as fixed, the GHCR image is checked, and the live Pages site is verified to serve the matching candidate from a successful deployment run.

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

## Moved from the profile README (2026-10-11)

The profile README was shortened to a front page (try, status, contribute, limits). These passages moved here unchanged in substance:

- **Private-core CI boundary.** Required workflows in the private core have not executed steps; GitHub reports the jobs as not started. Those observations are classified as `BLOCKED / NOT EXECUTED`, not as proof that tests passed or failed. Security-sensitive changes remain unapproved for integration until required checks execute and pass on their current commits.
- **Validation focus — OVS-01: CASTUO-SYSTEM Edge Continuity** (event identity, offline persistence, recovery after restart, synchronization, evidence and replay) remains `PENDING`.
- **Design exploration — bioinput traceability.** A product-agnostic evidence model linking a declared bioinput lot, application conditions and later crop observations. Design proposal only: not an implemented capability, field trial, efficacy result, certification or manufacturer partnership. [Scope, scientific limits and privacy boundaries](BIOINPUT-TRACEABILITY.md).
- **e3bundle release history.** `v0.1.2` was a candidate that was never released; `v0.1.3` (GHSA-55pc-7v4h-jf7c fix) is published on GitHub Releases and GHCR, with PyPI pending.
