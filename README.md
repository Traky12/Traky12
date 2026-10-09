<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="CASTÚO-SYSTEM official logo" width="520" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Founder and lead architect of CASTÚO-SYSTEM™**

I build evidence-driven digital infrastructure for traceable, offline-first and reviewable operations.

> `NO CLAIM WITHOUT PROVENANCE` · `NO EXTERNAL CLAIM WITHOUT REPRODUCIBLE EVIDENCE`

## Featured project — e3bundle

### [Verify evidence bundles offline](https://github.com/Traky12/castuo-e3-001)

A small MIT-licensed Python tool that records the SHA-256 of every file in a folder, lets people sign that manifest with Ed25519, and verifies it offline. Changed, missing or added files and forged or stale signatures are reported as JSON with a clear exit code.

- No hosted service, no account, no network.
- Signed `valid` and `tampered` example bundles you can verify in seconds.
- Reusable GitHub Action for CI pipelines.

Release `v0.1.0` is published as an alpha prerelease; the `e3.bundle.v1` format is experimental.

```bash
python -m pip install "git+https://github.com/Traky12/castuo-e3-001@v0.1.0"
git clone --branch v0.1.0 --depth 1 https://github.com/Traky12/castuo-e3-001
cd castuo-e3-001
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Expected: VERIFIED, exit 0
e3bundle verify examples/bundles/tampered --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Expected: FAILED, exit 1
```

A successful verification checks file integrity and signatures over the declared manifest. It does not prove that the content is true, does not identify signers without pinned keys and is not a certification or production authorization.

## Current Public Status

**Snapshot date:** 2026-10-09 · **Status:** technical consolidation in progress · **Promotion state:** `CONSOLIDATION-1.0 = BLOCKED`

CASTÚO-SYSTEM is a modular technical asset in consolidation for traceable and governed distributed operations. Its first product direction, **CASTÚO Evidence-Ready Field Operations** (offline-first continuity, traceability and reviewable evidence for workflows with irregular connectivity), is a validation objective, not a proven commercial product.

Production operation and commercial validation are not claimed. Independent and operational validation are pending. The next validation milestone, **E3-001 — controlled independent reproduction**, is `PENDING`: the public protocol lets a third party reproduce a bounded, non-sensitive scenario; controlled-review material may be provided under defined conditions; the private core stays outside the public scope.

**Update — 2026-10-07:** Authentication hardening work has advanced in the private canonical repository; two remediations were merged after passing the required Linux CI checks. Deployment, post-deployment verification, operational validation, independent reproduction and promotion gates remain pending. This update does not claim production operation, field validation, certification or commercial validation.

Full status, promotion table, authority model, economic and legal notice and historical record: [`docs/PROFILE-STATUS-DETAIL.md`](docs/PROFILE-STATUS-DETAIL.md).

## Public Repositories

| Repository | Purpose |
|---|---|
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | `e3bundle` and the E3-001 reproduction protocol (MIT) |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Offline-first edge and IoT runtime: local buffering, synchronization and telemetry continuity |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Bounded offline workflow, recovery and evidence-export experiments (Apache-2.0) |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Selected public evidence units, manifests and bounded reproducibility artefacts |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | Testing and assurance tooling; licence pending review |

Private repositories, forks and the full role map: [`docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md).

## Authority and Evidence Boundaries

- **`Castuo-system`** (private) is the canonical authority for current technical state, governance decisions and promotion decisions.
- **`castuo-evidence`** and **`castuo-e3-001`** expose selected evidence, protocols and tools within their declared scope; they do not decide technical state or promotion.
- **`castuo-evolution`** (private) is a non-canonical evolution and governance workspace. It is not a canonical authority and does not determine the promotion state.
- **`Traky12`** is the public read-model: a representation and evidence index. It does not decide technical state, governance outcomes or promotion.

Full boundaries: [`PUBLIC_CLAIM_BOUNDARY.md`](PUBLIC_CLAIM_BOUNDARY.md) · Evidence Center: [`evidence-center/README.md`](evidence-center/README.md)

## Links

- [CASTÚO-SYSTEM™ website](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [Security policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Presentación del proyecto — 5 minutos](CASTUO-SYSTEM-5-MIN-PRESENTATION-ES.md)
- [Versión en español](README.es.md)

## Not Claimed

This profile does not claim:

- Production operation.
- Independent validation.
- Certification or regulatory conformity.
- Paid customer traction or recurring revenue.
- Operational field validation.
- AI autonomy in production.
- Autonomous authority.
- Multi-site industrial deployment.

> The goal is not to make the system look certain. The goal is to make bounded claims, evidence and limitations inspectable.
