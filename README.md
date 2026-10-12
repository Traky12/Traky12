# Gregorio Julián Jiménez Bodes · Traky12

<p align="center">
  <img src="assets/brand/profile-header.svg" alt="Evidence-first systems engineering: traceability, offline-first and assurance" width="100%" />
</p>

<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="assets/brand/castuo-system-header.png"
       alt="CASTÚO-SYSTEM visual identity"
       width="100%" />
</p>
<!-- CASTUO:BRAND:END -->

<p align="center">
  <strong>Systems Architect · Evidence Engineer · AI Governance &amp; Assurance</strong><br />
  Founder and lead architect of CASTÚO-SYSTEM™
</p>

<p align="center">
  I build evidence-driven infrastructure for operations that must be traceable, resilient offline and independently reviewable.
</p>

<p align="center">
  <a href="https://traky12.github.io/castuo-e3-001/"><img src="https://img.shields.io/badge/TRY_THE_DEMO-Examples_v0.1.1-167D78?style=for-the-badge" alt="Try the browser demo using v0.1.1 examples" /></a>
  <a href="https://github.com/Traky12/castuo-e3-001"><img src="https://img.shields.io/badge/EXPLORE-e3bundle-183346?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Explore e3bundle source and evidence" /></a>
  <a href="https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue"><img src="https://img.shields.io/badge/CONTRIBUTE-Start_here-BB6B3D?style=for-the-badge" alt="Find beginner-friendly work items" /></a>
  <a href="https://discord.gg/tgxmnmPPD"><img src="https://img.shields.io/badge/JOIN_THE_COMMUNITY-Discord-5865F2?style=for-the-badge&amp;logo=discord&amp;logoColor=white" alt="Join the CASTÚO community" /></a>
</p>

> **No claim without provenance. No external claim without reproducible evidence.**

---

## Featured tool · e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** is a small MIT-licensed Python CLI for creating, signing and verifying portable evidence bundles offline. It creates SHA-256 manifests and checks signatures against supplied public keys.

<p align="center">
  <img src="assets/brand/e3bundle-flow.svg" alt="e3bundle flow: input files, SHA-256 manifest, Ed25519 signatures, offline verification, and a machine-readable VERIFIED, FAILED or ERROR result" width="100%" />
</p>

**What it does**
- Detects changed, missing or added files against a manifest.
- Checks signatures against the public keys and trust policy supplied by the operator.
- Produces a bounded verification result suitable for scripting and review.

### Release gate and source review

The GitHub `v0.1.3` alpha prerelease exists. There is a documentation conflict: the README stored in that tag still carries an older release-state statement, while the current repository README documents the current public status.

- [Current release and alpha-testing notes](https://github.com/Traky12/castuo-e3-001/blob/main/README.md#install)
- [Inspect the pinned `v0.1.3` source](https://github.com/Traky12/castuo-e3-001/tree/v0.1.3) · [Read the prerelease notes](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3)
- [Inspect the failed PyPI publication run](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766020) · [Inspect the successful GHCR publication run](https://github.com/Traky12/castuo-e3-001/actions/runs/38088624936)
- [Review the release and publication gate](docs/PROFILE-STATUS-DETAIL.md)
- [Try the browser demo](https://traky12.github.io/castuo-e3-001/) — synthetic `v0.1.1` examples only; this does not validate the `v0.1.3` CLI release.

Synthetic examples illustrate defined behaviour; they do not independently validate CASTÚO-SYSTEM or establish the truth of the underlying data.

## Governed flow · field data rises, decisions descend, evidence anchors

<p align="center">
  <img src="assets/diagrams/castuo-governed-orchestration.svg" alt="Conceptual CASTÚO-SYSTEM flow: six sources pass identity, provenance, integrity, permission and quality controls; simulated outputs descend into evidence review" width="100%" />
</p>

**One governance model, two bounded flows.**

- **Field data rises:** Six conceptual sources reach the coordinating layer only after identity, provenance, integrity, permission and quality checks.
- **Decisions descend (simulation):** Outputs pass illustrative thresholds `0.18 → 0.36 → 0.52`. Outputs below a threshold abstain with a trace; eligible outputs enter a simulated queue and are compared against evidence criteria.

`Capture → Validate → Normalise → Persist → Rules / AI → Explainable decision → Evidence`

> **SIMULATION · SYNTHETIC SOURCES · EXPERIMENTAL · NO PRODUCTION CLAIM**

<sub>Concept illustration only. GitHub renders the SVG statically; [open the motion-capable version](docs/VECTOR-MOTION.md). Sources, particles, thresholds and the queue's every-14-step timing are intentionally synthetic.</sub>

- [Governed-orchestration scope and evidence questions](docs/GOVERNED-ORCHESTRATION.md)
- [Governed-flow scope, reproducibility and limitations](docs/GOVERNED-FLOW-SOVEREIGNTY.md)
- [Public status and open evidence gates](docs/PROFILE-STATUS-DETAIL.md)

## Current Public Status

> **Last complete gate verification: 2026-10-11.** GitHub alpha prerelease `v0.1.3` and its GHCR image are verified; cross-registry publication remains **BLOCKED**. PyPI publication, public fixed-version Pages publication and independent reproduction are still unresolved.

| Gate | Current state | Evidence |
|---|---|---|
| GitHub / GHCR | Alpha artefacts available; not production approval | [Release](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3) · [Publication gate](https://github.com/Traky12/castuo-e3-001/blob/main/docs/PROFILE-STATUS-DETAIL.md) |
| PyPI / advisory / Pages | **BLOCKED** — `invalid-publisher` and HTTP 404 were observed in the last documented gate; root cause is not confirmed | [PyPI runbook](https://github.com/Traky12/castuo-e3-001/blob/main/docs/PROFILE-STATUS-DETAIL.md) |
| Browser demo | Synthetic `v0.1.1` examples only; does not validate the `v0.1.3` CLI | [Open demo](https://traky12.github.io/castuo-e3-001/) |
| Independent reproduction (E3-001) | **E3-001 as `PENDING`** — 0 of 2 signed external reviews; reproduction remains paused | [Issue #30](https://github.com/Traky12/castuo-e3-001/issues/30) |

**`CONSOLIDATION-1.0 = BLOCKED`.** `Traky12` is the public read-model; it reports state but does not decide technical state or promotion. `Castuo-system` remains the private canonical authority for technical promotion decisions.

## Selected work

<table>
  <tr>
    <td width="33%" valign="top">
      <strong><a href="https://github.com/Traky12/castuo-evidence">castuo-evidence</a></strong><br />
      Selected public evidence units, manifests and reproducibility artefacts.<br /><br />
      <sub>Focus: provenance · reviewability</sub>
    </td>
    <td width="33%" valign="top">
      <strong><a href="https://github.com/Traky12/castuo-agro-edge">castuo-agro-edge</a></strong><br />
      Offline-first edge and IoT runtime experiments, with field and production claims kept unpromoted.<br /><br />
      <sub>Focus: continuity · edge systems</sub>
    </td>
    <td width="33%" valign="top">
      <strong><a href="https://github.com/Traky12/Cast-o">Cast-o</a></strong><br />
      Testing and assurance tooling. The test suite is partially executable; performance benchmarking is not yet evidenced and licensing remains under IP review.<br /><br />
      <sub>Focus: testing · assurance</sub>
    </td>
  </tr>
</table>

[Full repository map](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) · [Public claim boundary](PUBLIC_CLAIM_BOUNDARY.md) · [Evidence index](evidence-center/README.md)

## Agricultural edge systems · application domain

<p align="center">
  <img src="assets/brand/agro-edge-concept.svg" alt="Conceptual illustration connecting crop and sensor signals to local edge processing and reviewable evidence; no live deployment is represented" width="100%" />
</p>

<p align="center"><sub>Concept illustration only. It does not represent a deployed system, live sensor feed, field trial, measured agronomic outcome or production validation.</sub></p>

This is the visual direction for the agricultural edge domain explored in [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge). It communicates a possible architecture—field signals, local processing and reviewable evidence—without claiming a live operational service.

## Engineering principles

- **Traceability over assertion.** Keep claims linked to inspectable sources and reproducible checks.
- **Fail closed.** Missing trust, unclear state or unavailable evidence must not silently become success.
- **Capability is not maturity.** `DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL`.

## Not Claimed

A valid manifest establishes whether files match the recorded digests. A valid signature establishes that a signature verifies under a configured public key and policy. Neither proves that the content itself is true, complete, operational or authoritative.

Independent reproduction, field and production validation, certification, regulatory conformity, paid-customer traction, recurring revenue and production AI autonomy are **not claimed**.

## Contribute

Start with a bounded, reproducible change:
- [Good first issues](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue)
- [Contribution guide](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md)
- [Security policy](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)

## Links

<p align="center">
  <a href="https://orcid.org/0009-0007-3489-0565">ORCID</a> ·
  <a href="README.es.md">Versión en español</a>
</p>

<p align="center">
  <sub><code>Traky12</code> is the public read-model. Canonical technical state and promotion decisions remain in the private <code>Castuo-system</code> repository.</sub>
</p>
