<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="CASTÚO-SYSTEM official logo" width="520" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

**Systems Architect · Evidence Engineer · AI Governance & Assurance**  
Founder and lead architect of CASTÚO-SYSTEM™

I build evidence-driven digital infrastructure for traceable, offline-first and reviewable operations.

> **NO CLAIM WITHOUT PROVENANCE. NO EXTERNAL CLAIM WITHOUT REPRODUCIBLE EVIDENCE.**

## Start here: e3bundle

**[e3bundle — verify evidence bundles offline](https://github.com/Traky12/castuo-e3-001)** is a small MIT-licensed Python CLI for checking the integrity of files and signatures in an evidence bundle.

It creates a manifest with SHA-256 digests, supports Ed25519 signatures, and reports verification findings in JSON with meaningful exit codes. Verification is local; it does not require a hosted service, account or network connection after installation.

- **Integrity:** identifies declared files that changed, are missing, or are unexpected.
- **Signature checks:** verifies Ed25519 signatures over the declared manifest. For security-sensitive use, supply trusted public keys and an explicit positive signature threshold.
- **Automation:** includes a reusable GitHub Action for CI.
- **Demo:** [try the browser verifier](https://traky12.github.io/castuo-e3-001/). It uses WebCrypto and example data; selected files stay in the browser. The published demo currently demonstrates the `v0.1.1` examples.

### Quick start

The installation step needs network access. Verification commands run locally after installation.

```bash
git clone --branch v0.1.1 --depth 1 https://github.com/Traky12/castuo-e3-001
cd castuo-e3-001
python -m pip install .

e3bundle verify examples/bundles/valid \
  --min-signatures 2 \
  --trusted-keys examples/bundles/trusted-keys.json
# Expected: VERIFIED, exit 0

e3bundle verify examples/bundles/tampered \
  --min-signatures 2 \
  --trusted-keys examples/bundles/trusted-keys.json
# Expected: FAILED, exit 1
```

The commands clone the pinned `v0.1.1` source and install it from that checkout. Package installation may download dependencies; verification itself runs locally. See the [repository README](https://github.com/Traky12/castuo-e3-001#readme) for usage details.

**Limit:** a successful check establishes that the declared file contents match their digests and that the checked signatures validate under the configured trust rules. It does not prove that the underlying statements are true, that a signer is who they claim to be unless their key is independently pinned, or that a system is certified or approved for production.

### Release status — 2026-10-10

- Latest published release: **[`v0.1.1` alpha](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.1)**.
- `v0.1.2` remains an unpublished candidate; no `v0.1.2` or `v0.1.3` release is being claimed.
- The GitHub Pages publication gate remains closed until a corrected, approved release and matching GitHub, PyPI and GHCR artifacts are available, along with the required legal-page configuration.
- Do not pin the moving `main` branch as a released version or treat the current candidate as security-reviewed for production use.

## Current Public Status

**Snapshot:** 2026-10-10  
**Technical state:** consolidation in progress  
**Promotion state:** `CONSOLIDATION-1.0 = BLOCKED`

CASTÚO-SYSTEM is a modular technical asset being consolidated for traceable and governed distributed operations. **CASTÚO Evidence-Ready Field Operations** is a product direction and validation objective, not a proven commercial product.

**Current validation focus — OVS-01: CASTUO-SYSTEM Edge Continuity.** The defined scenario covers event identity, offline persistence, recovery after restart, synchronization, evidence and replay. It remains `PENDING`; formal end-to-end execution and independent reproduction have not been established. The next validation milestone, **E3-001 — controlled independent reproduction**, is also `PENDING`.

**Private-core CI boundary.** Required workflows have shown runner-assignment failures with no executable step evidence. The cause has not been established. Those observations are classified as `BLOCKED / NOT EXECUTED`, not as proof that tests passed or failed. Security-sensitive changes remain unapproved for integration until required checks execute and pass on their current commits.

Production operation, field validation, independent validation, certification, regulatory conformity, paid-customer traction and recurring revenue are **not claimed**. Repository activity, code, documentation and successful scoped CI checks do not independently establish those outcomes.

Full status, promotion table, authority model, economic notice and historical record: [`docs/PROFILE-STATUS-DETAIL.md`](docs/PROFILE-STATUS-DETAIL.md).

## Design exploration — bioinput traceability

CASTÚO-SYSTEM is exploring a product-agnostic evidence model linking a declared bioinput product and lot, application conditions, and later measured crop observations.

This is a **design proposal only**—not an implemented capability, field trial, efficacy result, certification or manufacturer partnership. Any real dataset requires a defined scientific protocol, product-specific evidence, privacy controls and legal/regulatory review.

[Read the bilingual scope, scientific limits and privacy boundaries](docs/BIOINPUT-TRACEABILITY.md).

## Public repositories

| Repository | Public role and boundary |
|---|---|
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | `e3bundle` CLI and bounded E3-001 reproduction protocol (MIT) |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Offline-first edge/IoT runtime experiments: buffering, synchronization and telemetry continuity; field and production claims remain unpromoted |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Bounded offline workflow, recovery and evidence-export experiments (Apache-2.0) |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Selected public evidence units, manifests and bounded reproducibility artefacts |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | Testing and assurance tooling; licence pending IP review |

Private repositories, forks and repository roles: [`docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md).

## Authority and evidence boundaries

- **`Castuo-system` (private)** is the canonical authority for current technical state, governance and promotion decisions.
- **`castuo-evidence` and `castuo-e3-001`** publish selected evidence, protocols and tools within their stated scope; they do not decide system state or promotion.
- **`castuo-evolution` (private)** is a non-canonical evolution workspace, not a source of truth for current state.
- **`Traky12`** is the public read-model and evidence index. It does not determine technical status, governance outcomes or promotion.

A README or manifest is not a deployment record. A test result is not independent reproduction. A digest proves integrity of a representation, not the truth of its content.

Full boundary: [`PUBLIC_CLAIM_BOUNDARY.md`](PUBLIC_CLAIM_BOUNDARY.md) · Evidence index: [`evidence-center/README.md`](evidence-center/README.md).

## Links

- [CASTÚO-SYSTEM website](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [Security policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Versión en español](README.es.md)

## Not Claimed

This profile does not claim production operation, independent or field validation, certification or regulatory conformity, paid-customer traction, recurring revenue, production AI autonomy, autonomous authority, or multi-site industrial deployment.

> The goal is not to make the system look certain. The goal is to make bounded claims, evidence and limitations inspectable.
