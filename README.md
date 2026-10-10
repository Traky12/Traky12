<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="CASTÚO-SYSTEM official logo" width="520" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

**Systems Architect · Evidence Engineer · AI Governance & Assurance**  
Founder and lead architect of CASTÚO-SYSTEM™

I build evidence-driven infrastructure for traceable, offline-first and reviewable operations.

**No claim without provenance. No external claim without reproducible evidence.**

## Try e3bundle

[e3bundle](https://github.com/Traky12/castuo-e3-001) is a small MIT-licensed Python CLI that verifies the integrity of files and signatures in an evidence bundle: SHA-256 manifests, Ed25519 signatures, JSON findings and meaningful exit codes. After installation it runs locally — no hosted service, account or network connection.

[Open the browser demo](https://traky12.github.io/castuo-e3-001/) · [Read the repository](https://github.com/Traky12/castuo-e3-001) · [Release v0.1.3](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3)

```bash
python -m pip install "git+https://github.com/Traky12/castuo-e3-001@v0.1.3"
git clone --branch v0.1.3 --depth 1 https://github.com/Traky12/castuo-e3-001 && cd castuo-e3-001
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Expected: VERIFIED, exit 0
```

**Release:** v0.1.3 alpha is published on GitHub Releases and as a container image (`ghcr.io/traky12/e3bundle:0.1.3`); PyPI publication is pending. The browser demo still serves the v0.1.1 examples.

A successful check shows that declared files match their digests and that signatures validate under the configured trust rules. It does **not** prove that the underlying statements are true, that a signer's identity has been independently established, or that a system is certified or approved for production.

## What I build

- Offline-first edge and IoT systems.
- Traceable evidence bundles and cryptographic verification.
- Fail-closed identity, access and secret-management patterns.
- Reproducible audits and bounded external review.
- AI governance and assurance for high-consequence operations.

I prefer small, inspectable systems over large claims.

## Current Public Status

`CONSOLIDATION-1.0 = BLOCKED`. The public focus is `e3bundle`; independent reproduction (E3-001) is `PENDING`, with 0 of 2 signed external reviews. This profile is the public read-model of CASTÚO-SYSTEM: it reports state, it does not decide it. `Castuo-system` (private) is the canonical authority for technical state and promotion; `castuo-evolution` (private) is a non-canonical workspace. Detail and history: [`docs/PROFILE-STATUS-DETAIL.md`](docs/PROFILE-STATUS-DETAIL.md).

## Contribute

Focused contributions to `e3bundle` are welcome:

- Reproduce the verification workflow on Linux, macOS or Windows.
- Improve documentation and installation instructions.
- Add or improve browser tests.
- Report usability, compatibility or security issues.

Start with an issue. Security-sensitive changes need review, tests and a clear threat model.

[Good first issues](https://github.com/Traky12/castuo-e3-001/contribute) · [Contributing](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md) · [Security policy](SECURITY.md)

## Selected repositories

| Repository | What it is |
|---|---|
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | `e3bundle` CLI, browser verifier and the E3-001 reproduction protocol |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Selected public evidence units, manifests and reproducibility artefacts |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Offline-first edge/IoT runtime experiments: buffering, synchronization, telemetry continuity |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Offline workflow, recovery and evidence-export experiments |

Other repositories and roles: [`docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md).

## Not Claimed

- Production operation.
- Independent or field validation.
- Certification or regulatory conformity.
- Paid-customer traction or recurring revenue.
- Production AI autonomy or autonomous authority.
- Multi-site industrial deployment.

The goal is not to make the system look certain. The goal is to make bounded claims, evidence and limitations inspectable. Full boundary: [`PUBLIC_CLAIM_BOUNDARY.md`](PUBLIC_CLAIM_BOUNDARY.md) · Evidence index: [`evidence-center/README.md`](evidence-center/README.md).

## Links

[CASTÚO-SYSTEM website](https://castuo-system.es/) · [ORCID](https://orcid.org/0009-0007-3489-0565) · [Versión en español](README.es.md)
