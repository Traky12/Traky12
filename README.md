# Gregorio Julián Jiménez Bodes · Traky12

<p align="center">
  <img src="assets/brand/profile-header.svg" alt="Evidence-first systems engineering: traceability, offline-first and assurance" width="100%" />
</p>

<p align="center">
  <img src="assets/brand/castuo-system-logo-horizontal.jpg" alt="CASTÚO-SYSTEM official logo" width="220" />
</p>

<p align="center">
  <strong>Systems Architect · Evidence Engineer · AI Governance &amp; Assurance</strong><br />
  Founder and lead architect of CASTÚO-SYSTEM™
</p>

<p align="center">
  I build evidence-driven infrastructure for operations that must be traceable, resilient offline and independently reviewable.
</p>

<p align="center">
  <a href="https://traky12.github.io/castuo-e3-001/"><img src="https://img.shields.io/badge/TRY_THE_DEMO-Examples_v0.1.1-167D78?style=for-the-badge" alt="Try the browser demo using v0.1.1 examples" /></a>
  <a href="https://github.com/Traky12/castuo-e3-001"><img src="https://img.shields.io/badge/EXPLORE-e3bundle-183346?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Explore e3bundle source code" /></a>
  <a href="https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue"><img src="https://img.shields.io/badge/CONTRIBUTE-Start_here-BB6B3D?style=for-the-badge" alt="Find beginner-friendly contribution issues" /></a>
</p>

> **No claim without provenance. No external claim without reproducible evidence.**

---

## Featured tool · e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** is a small MIT-licensed Python CLI for creating, signing and verifying portable evidence bundles offline. It creates SHA-256 manifests and verifies Ed25519 signatures against explicitly configured trust rules.

<p align="center">
  <img src="assets/brand/e3bundle-flow.svg" alt="e3bundle flow: input files, SHA-256 manifest, Ed25519 signatures, offline verification, and a machine-readable PASS, FAIL or ERROR result" width="100%" />
</p>

**What it does**
- Detects changed, missing or added files against a manifest.
- Checks signatures against the public keys and trust policy supplied by the operator.
- Produces a bounded verification result suitable for scripting and review.

### Try it from the pinned GitHub tag

\`\`\`bash
git clone --branch v0.1.3 --depth 1 https://github.com/Traky12/castuo-e3-001
cd castuo-e3-001
python -m pip install .
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Expected for the bundled synthetic example: VERIFIED, exit code 0
\`\`\`

The example is synthetic. This command demonstrates the tool's defined verification behaviour; it does not independently validate CASTÚO-SYSTEM or the truth of the underlying data.

## Public status · 11 October 2026

| Area | Current state |
|---|---|
| GitHub release | \`v0.1.3\` alpha prerelease available |
| PyPI | **Pending** — publishing was blocked by a Trusted Publisher / OIDC configuration mismatch |
| GHCR image | Publication was recorded in the project status; live registry availability has not been independently rechecked in this profile update |
| Browser demo | Public page still uses \`v0.1.1\` example bundles |
| Independent reproduction (E3-001) | **PENDING** — 0 of 2 signed external reviews |
| CASTÚO-SYSTEM consolidation | **BLOCKED** — engineering, security and operational evidence gates remain open |

For the detailed release gate, known limitations and source links, see [public status and history](docs/PROFILE-STATUS-DETAIL.md). These states are deliberately kept separate: a GitHub prerelease is not the same as a PyPI publication, a current live demo, external reproduction or production approval.

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

## Engineering principles

- **Traceability over assertion.** Keep claims linked to inspectable sources and reproducible checks.
- **Fail closed.** Missing trust, unclear state or unavailable evidence must not silently become success.
- **Capability is not maturity.** \`DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL\`.

## What verification does not prove

A valid manifest establishes whether files match the recorded digests. A valid signature establishes that a signature verifies under a configured public key and policy. Neither proves that the content is true, nor independently establishes a signer's real-world identity.

Independent reproduction, field and production validation, certification, regulatory conformity, paid-customer traction, recurring revenue and production AI autonomy are **not claimed**.

## Contribute

Start with a bounded, reproducible change:
- [Good first issues](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue)
- [Contribution guide](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md)
- [Security policy](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)

## Links

<p align="center">
  <a href="https://castuo-system.es/">CASTÚO-SYSTEM</a> ·
  <a href="https://orcid.org/0009-0007-3489-0565">ORCID</a> ·
  <a href="README.es.md">Versión en español</a>
</p>

<p align="center">
  <sub><code>Traky12</code> is the public read-model. Canonical technical state and promotion decisions remain in the private <code>Castuo-system</code> repository.</sub>
</p>
