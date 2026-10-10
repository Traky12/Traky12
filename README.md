<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="CASTÚO-SYSTEM official logo" width="280" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

**Systems Architect · Evidence Engineer · AI Governance & Assurance**  
Founder and lead architect of CASTÚO-SYSTEM™

I build evidence-driven infrastructure for traceable, offline-first and reviewable operations.

> **No claim without provenance. No external claim without reproducible evidence.**

## Try e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** is a small MIT-licensed Python CLI for creating, signing and verifying evidence bundles offline. It creates SHA-256 manifests and checks Ed25519 signatures against configured trust rules.

**[Try the browser demo — v0.1.1 examples](https://traky12.github.io/castuo-e3-001/)** · **[Open the repository](https://github.com/Traky12/castuo-e3-001)** · **[Contribute](https://github.com/Traky12/castuo-e3-001/contribute)**

### Install the GitHub alpha

PyPI publication is pending. The pinned GitHub tag can be installed directly:

```bash
python -m pip install "git+https://github.com/Traky12/castuo-e3-001@v0.1.3"
git clone --branch v0.1.3 --depth 1 https://github.com/Traky12/castuo-e3-001
cd castuo-e3-001
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Expected: VERIFIED, exit 0
```

**Release status (11 Oct 2026):** `v0.1.3` alpha is published on GitHub Releases and the GHCR container image; PyPI publication is pending. The browser demo still serves the `v0.1.1` examples. Do not treat these as independent review or production approval.

## What I build

- Offline-first edge and IoT systems.
- Portable evidence bundles and cryptographic verification.
- Fail-closed identity, access and secret-management patterns.
- AI governance and assurance for operational systems.

CASTÚO-SYSTEM is the wider architecture; `e3bundle` is its most concrete public tool.

## Current Public Status

`CONSOLIDATION-1.0 = BLOCKED`. The public focus is `e3bundle`; independent reproduction (E3-001) is `PENDING`, with 0 of 2 signed external reviews. `Traky12` is the public read-model: it reports state but does not decide it. `Castuo-system` (private) is the canonical authority for technical state and promotion; `castuo-evolution` (private) is a non-canonical workspace. Details: [public status and history](docs/PROFILE-STATUS-DETAIL.md).

## Contribute

Reproduce the example workflow, report a reproducible bug, improve tests/accessibility/docs, or propose a small change with a clear acceptance test.

[Good first issues](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue) · [Contribution guide](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md) · [Security policy](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)

## Selected repositories

- [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) — `e3bundle` CLI, browser verifier and bounded E3-001 protocol.
- [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) — selected public evidence units and reproducibility artefacts.
- [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) — offline-first edge/IoT runtime experiments; no field or production claim is promoted.

[Full repository map](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) · [Public claim boundary](PUBLIC_CLAIM_BOUNDARY.md) · [Evidence index](evidence-center/README.md)

## Not Claimed

Verification establishes file integrity and signature validity under configured trust rules; it does not prove that content is true or independently establish a signer's identity. Independent reproduction, field/production validation, certification, regulatory conformity, paid-customer traction, recurring revenue and production AI autonomy are not claimed.

## Links

[CASTÚO-SYSTEM](https://castuo-system.es/) · [ORCID](https://orcid.org/0009-0007-3489-0565) · [Versión en español](README.es.md)
