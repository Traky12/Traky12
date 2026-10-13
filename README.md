# Gregorio Julián Jiménez Bodes · Traky12

<p align="center">
  <img src="assets/brand/profile-header.svg" alt="Evidence-first systems engineering: traceability, offline-first and assurance" width="100%" />
</p>

<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-header.png" alt="CASTÚO-SYSTEM brand banner" width="100%" />
</p>
<!-- CASTUO:BRAND:END -->

<p align="center">
  <strong>Systems Architect · Evidence Engineer · AI Governance &amp; Assurance</strong><br />
  Founder and lead architect of CASTÚO-SYSTEM™
</p>

<p align="center">
  Evidence-driven systems architecture for offline-resilient operations, with provenance, integrity verification and AI governance boundaries.
</p>

<p align="center">
  <strong>No claim without provenance. No external claim without reproducible evidence.</strong>
</p>

<p align="center">
  <a href="https://traky12.github.io/castuo-e3-001/">Try the browser demo <em>(synthetic v0.1.1)</em></a> ·
  <a href="https://github.com/Traky12/castuo-e3-001">e3bundle source</a> ·
  <a href="https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue">Contribute</a> ·
  <a href="https://discord.gg/tgxmnmPPD">Community</a>
</p>

---

## Featured tool · e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** is a small MIT-licensed Python CLI for creating, signing and verifying portable evidence bundles offline.

- Records file digests in a SHA-256 manifest and detects changed, missing or undeclared files.
- Verifies Ed25519 signatures against explicitly configured trusted public keys.
- Produces bounded, machine-readable results for automation and review.

### Try the verification path

The repository contains two synthetic signed example bundles: [valid](https://github.com/Traky12/castuo-e3-001/tree/main/examples/bundles/valid) and [tampered](https://github.com/Traky12/castuo-e3-001/tree/main/examples/bundles/tampered). The tampered example changes one value in `data/readings.csv`.

After following the **bounded source-evaluation setup** in the [current e3bundle README](https://github.com/Traky12/castuo-e3-001/blob/main/README.md#install), run from the repository root:

```console
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json --format text
# Expected: VERIFIED · exit 0

e3bundle verify examples/bundles/tampered --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json --format text
# Expected: FAILED · hash mismatch in data/readings.csv · exit 1
```

The CLI release `v0.1.3` is an **alpha**. This source-level path is for bounded evaluation, not a general production-install recommendation. The browser demo runs synthetic `v0.1.1` examples locally; it is useful for trying the interaction, but does not validate the `v0.1.3` CLI. A successful integrity or signature check does not prove the underlying content is true.

## Current Public Status

> Profile status reviewed: **2026-10-13**. Last complete release-gate verification remains **2026-10-11**; this review does not claim a new release-gate run. Detailed status preserves run links, history and unresolved gates.

| Surface | State | Boundary / evidence |
|---|---|---|
| GitHub / GHCR | Alpha artefacts available | Not production approval · [release](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3) |
| PyPI / advisory / Pages | **BLOCKED** | `invalid-publisher` and HTTP 404 were observed; root cause is not confirmed · [publication gate](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) |
| Browser demo | Synthetic `v0.1.1` examples | Does not validate the `v0.1.3` CLI · [open demo](https://traky12.github.io/castuo-e3-001/) |
| Independent reproduction (E3-001) | `PENDING` · 0 of 2 signed external reviews | Reproduction remains paused · [issue #30](https://github.com/Traky12/castuo-e3-001/issues/30) |
| `CONSOLIDATION-1.0` | **BLOCKED** | Traky12 is the public read-model, not technical promotion authority |
| CASTÚO-SYSTEM core governance (2026-10-13) | **OPEN · PROMOTION BLOCKED** | Six post-merge workflows report failure, but steps/logs are unavailable; cause undetermined. Independent review and owner-side LinkedIn confirmation remain pending. |

Promotion remains **CONSOLIDATION-1.0 = BLOCKED**. `Traky12` is the public read-model; it reports status but does not decide technical state or promotion. `Castuo-system` remains the private canonical authority for technical state and promotion. `castuo-evolution` is a non-canonical workspace. See [public status and open evidence gates](docs/PROFILE-STATUS-DETAIL.md) for the complete release history and evidence.

## Governed systems · how evidence moves

<p align="center">
  <img src="assets/diagrams/castuo-governed-orchestration.svg" alt="Conceptual governed flow: sources pass identity, provenance, integrity, permission and quality checks; simulated outputs abstain or become synthetic SHA-256-linked evidence. No live data or production claim." width="100%" />
</p>

This is a **conceptual simulation**: sources, thresholds and queue timing are illustrative, not measurements or live integrations. It does not represent field validation, autonomous action or production readiness. Read the [scope and evidence questions](docs/GOVERNED-ORCHESTRATION.md) for detail.

Selected work: [castuo-evidence](https://github.com/Traky12/castuo-evidence) · [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge) (edge/IoT experiments; field validation not claimed) · [Cast-o](https://github.com/Traky12/Cast-o) (assurance tooling; benchmarking remains unevidenced and licensing is under IP review).

## Not Claimed

A `VERIFIED` result means the declared files match their manifest and the configured signature policy is satisfied. It does not prove that the content is true or independently establish a signer's real-world identity.

Independent reproduction, field and production validation, certification, regulatory conformity, paid-customer traction, recurring revenue and production AI autonomy are **not claimed**. Capability is not maturity: `DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL`.

## Contribute

Start with one bounded, reproducible contribution:

- [Good first issues](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue)
- [Contribution guide](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md)
- [Security policy](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)
- [Full repository map](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) · [Public claim boundary](PUBLIC_CLAIM_BOUNDARY.md) · [Evidence index](evidence-center/README.md)

## Contact

For technical collaboration, independent review or pilot discussions:

- LinkedIn: [CASTÚO-SYSTEM™](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8/)
- GitHub: [@Traky12](https://github.com/Traky12)

<p align="center">
  <a href="https://orcid.org/0009-0007-3489-0565">ORCID</a> ·
  <a href="README.es.md">Versión en español</a>
</p>

<p align="center">
  <sub><code>Traky12</code> is the public read-model. Canonical technical state and promotion decisions remain in the private <code>Castuo-system</code> repository.</sub>
</p>
