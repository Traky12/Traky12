# CASTÚO-SYSTEM — public status detail

Detailed status and historical context for the profile README. Document review updated 2026-10-13. The complete release-gate verification documented below remains dated 2026-10-11; this edit is a documentary reconciliation, not a new workflow run. The profile README is the concise public snapshot, while this document holds supporting status and history.

## Documentary reconciliation — 2026-10-13

This review date and the technical gate date are deliberately separate. The last complete release-gate result documented here is [workflow run 38137298070](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070); this change does not assert that the gate was re-executed.

- The run's build job and Chromium, Firefox and WebKit UI jobs passed. The legal-identity prerequisite passed. The publication-gate step reported `release=true, pypi=false, ghcr=true, advisory=false`, and the `deploy` job was skipped. A successful job conclusion means the gate logic executed; it does not mean all publication prerequisites passed.
- The public E3-001 status remains `Independent foreign replay: PENDING`, `Runner attestation: PENDING`, `Signed human review: PENDING · quorum 0/2`, `G2: REVIEW_REQUIRED`, `staging-rls handoff: BLOCKED`, and `Promotion: BLOCKED` ([canonical public status](https://github.com/Traky12/castuo-e3-001/blob/main/STATUS.md)). The CP-3 second-operator request remains open and pending ([issue #86](https://github.com/Traky12/castuo-e3-001/issues/86)).
- The five-tester recruitment issue remains paused while PyPI, advisory and Pages gates are unresolved ([issue #30](https://github.com/Traky12/castuo-e3-001/issues/30)). Its historical CLI instructions target `v0.1.1` and must not be counted as a reproduction of `v0.1.3`.
- The mismatch between the immutable `v0.1.3` tag README and the current default-branch release wording is tracked separately in [issue #87](https://github.com/Traky12/castuo-e3-001/issues/87). Do not rewrite the old tag or infer cross-registry availability from a GitHub release or GHCR image.

No new external tester report, independent signature, OVS-01 replay, PyPI publication, advisory confirmation or Pages deployment is inferred from this documentation update.

## Core governance incident — 2026-10-13

**Public status:** `GOVERNANCE_INCIDENT = OPEN` · `POST_MERGE_FAILURE_CAUSE = UNDETERMINED` · `SYSTEM_PROMOTION = BLOCKED`.

The private canonical `Castuo-system` repository records that PR #564 merged while its registered governance gates were not all evidenced as closed. Six post-merge workflows report `FAILURE`; available job data did not include usable steps, 15 job-log download attempts returned `404 BlobNotFound`, and no artifacts were available for those runs.

This establishes an evidence/incident condition, not a root cause. The available evidence does not justify claims of a source-level test failure, code regression, GitHub Actions outage, or successful post-merge CI. The GitHub status degradation reported for 12 October was resolved before the merge and remains contextual, not causal evidence. A separate community report with similar symptoms is also non-conclusive.

The account owner's direct confirmation of whether a manual LinkedIn post exists, and any public URL, remains pending. LinkedIn API access/scope/page-role evidence and an independent human review of the merge commit are also pending. The current profile does not claim that publication happened or did not happen.

No publication workflow rerun, publication execution, or revert is recorded by the incident session. A workflow that combines preflight and publication remains blocked; an independently executed `PREFLIGHT_ONLY` path has not been demonstrated. The core incident record in the private canonical repository retains the full evidence and exact run references.

**Interpretation boundary:** capability inventory is not runtime verification. This incident alone neither promotes nor erases individual historical capability evidence; capability claims must stay bounded to their own exact artifact, scope and test.

## Current public release and validation gate — 2026-10-11

- **GitHub:** [`v0.1.3`](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3) exists as a public alpha prerelease, published on 2026-10-10. The release has no manually attached assets. This is distinct from an approved, cross-registry release.
- **PyPI:** the [release publish run](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766020) failed at OIDC exchange with `invalid-publisher`. The [post-merge Pages gate](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) independently confirmed HTTP 404 for PyPI `e3bundle 0.1.3`. The [runbook](https://github.com/Traky12/castuo-e3-001/blob/main/docs/PYPI-RELEASE-RUNBOOK.es.md) records immutable OIDC subject claims as a compatibility hypothesis, not a confirmed root cause. Compare the persisted Trusted Publisher row with the non-secret claims; if it matches, stop repeated OIDC retries and escalate with the run URL and non-secret evidence. Do not claim PyPI availability before the package can be retrieved and installed from the public index.
- **GHCR:** the [release container workflow](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766046) passed and reports publishing the multi-platform image `ghcr.io/traky12/e3bundle:0.1.3` with SBOM and build provenance. The post-merge [live publication gate](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) also verified that the `0.1.3` manifest is currently available. The documented digest is `sha256:0b491cf8e37247f4b71089b891ad6d77081398f64c02fc46d88a69818500f994`. This establishes availability of the container artifact, not independent review or production authorization.
- **Security advisory:** the release notes say `v0.1.3` fixes `GHSA-55pc-7v4h-jf7c`, but the [post-merge gate's anonymous lookup](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) returned HTTP 404. Public advisory metadata therefore does not currently confirm that `0.1.3` is the first patched version. Keep the advisory gate blocked and do not repeat the release-note statement as a publicly verified fixed-version claim until the advisory record is published and confirms that version.
- **Browser demo and external testers:** the public demo still uses synthetic `v0.1.1` example bundles. The tester/reproduction [issue #30 is explicitly paused](https://github.com/Traky12/castuo-e3-001/issues/30) until PyPI publication, the public advisory's fixed-version metadata and Pages deployment all pass. Do not present it as an active recruitment call or count historical `v0.1.1` instructions as reproductions of `v0.1.3`.
- **Pages gate:** [the workflow](https://github.com/Traky12/castuo-e3-001/blob/main/.github/workflows/pages.yml) now independently checks the published GitHub release, PyPI distribution, live GHCR manifest, public fixed-version advisory metadata, build/UI checks and owner-configured legal identity fields before deployment. The [latest post-merge result](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) is `release=true, pypi=false, ghcr=true, advisory=false`; deployment remains blocked. The legal-identity prerequisite was configured and passed in that run.
- **Documentation mismatch:** the `v0.1.3` tag's [README](https://github.com/Traky12/castuo-e3-001/blob/v0.1.3/README.md) still says no approved `v0.1.3` release is available, while the current repository README documents the tag for bounded alpha testing only. This is a tag-specific documentation conflict; do not silently present either as cross-registry or production approval. Reconcile it in a follow-up release/documentation change before promoting the installation path on the profile.
- **Private-core CI:** runner-assignment failures without executable step evidence remain a separate blocker. Their root cause is not established and those results are not code-test outcomes.
- **OVS-01 and independent reproduction:** remain `PENDING`; no end-to-end operational or independent result is promoted.

Do not promote a general or production-ready `v0.1.3` claim until the PyPI package is retrievable, the GHSA record marks `0.1.3` as fixed, the GHCR image is checked from the live registry, the tag documentation conflict is resolved, and the live Pages site is verified to serve the matching candidate from a successful deployment run.

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
- **e3bundle release history.** `v0.1.2` was a candidate that was never released; the `v0.1.3` GitHub alpha prerelease is published, the project status records a GHCR publication that has not been freshly rechecked here, and PyPI remains pending.
