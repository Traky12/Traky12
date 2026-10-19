#  CASTÚO-SYSTEM™

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
  I design offline-capable systems that preserve data provenance, integrity checks and explicit boundaries for AI-assisted decisions.
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

## What I build · inspect the work

| Focus | Tools used in the linked artifact | Start here |
|---|---|---|
| Portable evidence verification | Python · SHA-256 · Ed25519 · JSON | [e3bundle alpha and its limits](https://github.com/Traky12/castuo-e3-001) |
| Understandable decision boundaries | HTML · SVG · synthetic JSON cases | [Local governed explorer](demos/governed-explorer/README.md) |
| Reviewable engineering documentation | Markdown · YAML · provenance and acceptance criteria | [Public evidence dossiers](evidence-center/README.md) |

**Current focus:** make verification easier to reproduce, explain failure and abstention clearly, and improve contribution paths in English and Spanish. The linked artifacts show the scope of this work; they do not establish independent validation or production readiness.

## Featured open-source prototype · e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** is a small MIT-licensed Python CLI for creating, signing and verifying portable evidence bundles offline.

- Records file digests in a SHA-256 manifest and detects changed, missing or undeclared files.
- Verifies Ed25519 signatures against explicitly configured trusted public keys.
- Produces bounded, machine-readable results for automation and review.

> **Scope warning:** These examples are synthetic and locally verifiable. They demonstrate bundle integrity and signature-policy checks only. They do not validate field data, operational performance or production readiness.

### Try the verification path

The repository contains two synthetic signed example bundles: [valid](https://github.com/Traky12/castuo-e3-001/tree/main/examples/bundles/valid) and [tampered](https://github.com/Traky12/castuo-e3-001/tree/main/examples/bundles/tampered). The tampered example changes one value in `data/readings.csv`.

After following the **bounded source-evaluation setup** in the [current e3bundle README](https://github.com/Traky12/castuo-e3-001/blob/main/README.md#install), run from the repository root:

```console
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json --format text
# Expected: VERIFIED · exit 0

e3bundle verify examples/bundles/tampered --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json --format text
# Expected: FAILED · hash mismatch in data/readings.csv · exit 1
```

The CLI release `v0.1.3` is an **alpha**. This source-level path is for bounded evaluation, not a general production-install recommendation. The browser demo runs synthetic `v0.1.1` examples locally; it is useful for trying the interaction, but does not validate the `v0.1.3` CLI.

For a reproducible hands-on example, follow the [English dataset-tampering tutorial](https://github.com/Traky12/castuo-e3-001/blob/main/docs/tutorial-dataset-tampering.md) or the [Spanish guide](https://github.com/Traky12/castuo-e3-001/blob/main/docs/tutorial-dataset-tampering.es.md). It creates a synthetic signed dataset and shows how the verifier rejects edits, added files and missing files; it does not count as external field validation.

## What VERIFIED means

A `VERIFIED` result means that:

- The declared files match the SHA-256 manifest.
- No required file has been detected as changed or missing.
- The configured signature policy has been satisfied.
- The supplied trusted-key configuration accepted the required signatures.

It does **not** prove that:

- The underlying content is true.
- The evidence was collected correctly in the real world.
- The signer's real-world identity has been independently confirmed.
- The operation was performed in the field.
- Independent third-party assurance, production readiness or regulatory compliance has been established.

Integrity verification is one layer of assurance, not complete validation of the underlying event or claim.

## Data & confidentiality boundary

CASTÚO-SYSTEM explores optional database/API integrations, including Supabase, but **no deployed production integration is claimed**. The public profile intentionally does not expose the live project endpoint, database connection strings, secrets, private infrastructure or customer data. A project API URL is not a database password; frontend access still requires correct RLS, limited privileges and security review.

Read the [publication and Supabase disclosure policy](docs/CASTUO_PUBLICATION_AND_SUPABASE_BOUNDARY.md) before proposing public-facing integrations.

## Current Public Status

The public tool is an **alpha**, not a production-approved release.

- Independent E3-001 reproduction: `PENDING`.
- Publication and deployment gates remain open.
- `CONSOLIDATION-1.0 = BLOCKED`.

`Traky12` is the public read-model, not the technical authority. `Castuo-system` is the private canonical authority for technical state and promotion. `castuo-evolution` is a non-canonical workspace.

For dated evidence, unresolved gates and workflow history, see the [public status detail](docs/PROFILE-STATUS-DETAIL.md). Current capability must not be confused with maturity: `DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL`.

## Governed systems · how evidence moves

<p align="center">
  <a href="https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8/"><img src="assets/diagrams/castuo-governed-orchestration.svg" alt="Conceptual governed flow: sources pass identity, provenance, integrity, permission and quality checks; simulated outputs abstain or become synthetic SHA-256-linked evidence. No live data or production claim." width="100%" /></a>
</p>
<p align="center">
  <a href="https://github.com/Traky12">GitHub · @Traky12</a> ·
  <a href="https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8/">LinkedIn · CASTÚO-SYSTEM</a>
</p>


**Explore the data:** [local interactive explorer](demos/governed-explorer/README.md): six synthetic cases, step-by-step checks, abstention reasons and JSON export. Download the HTML and open it in a browser; GitHub displays its source rather than executing it. The interface is in Spanish.

<p align="center"><a href="assets/diagrams/castuo-governed-orchestration.es.preview.gif">Spanish animation preview · 10 s</a> · <a href="assets/diagrams/castuo-governed-orchestration.es.preview.mp4">Higher-definition video</a></p>

This is a **conceptual simulation**: sources, thresholds and queue timing are illustrative, not measurements or live integrations. It does not represent field validation, autonomous action or production readiness. Read the [scope and evidence questions](docs/GOVERNED-ORCHESTRATION.md) for detail.

## Project map

| Project | Purpose | Current boundary |
|---|---|---|
| [e3bundle](https://github.com/Traky12/castuo-e3-001) | Offline SHA-256 manifest and Ed25519 signature verification | Alpha; integrity checks are not a truth claim, certification or production approval |
| [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge) | Offline-first edge/IoT runtime experiments | Field validation is not claimed |
| [castuo-evidence](https://github.com/Traky12/castuo-evidence) | Bounded public evidence package and replay material | Independent replay and human review remain pending |
| [Cast-o](https://github.com/Traky12/Cast-o) | Software-assurance and testing tooling | Benchmarking is not evidenced; licensing remains under IP review |

For the e3bundle onboarding sequence, adoption gates and the Starstruck visibility milestones, see the [public adoption roadmap](https://github.com/Traky12/castuo-e3-001/blob/main/docs/PUBLIC_ADOPTION_PLAN.md). The roadmap is a work plan, not evidence that its gates have passed.

## Not Claimed

The following are not claimed:

- Independent reproduction of E3-001.
- Field validation.
- Production validation.
- Third-party conformity assessment.
- Regulatory conformity.
- Paid-customer traction.
- Recurring revenue.
- Production AI autonomy.
- Production readiness of the current alpha artefacts.

Capability is not maturity: `DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL`.

## Contribute

Start with one bounded, reproducible contribution:

| Your interest | Useful first step |
|---|---|
| Documentation and accessibility | Describe one confusing step, its location and a proposed correction in a [profile issue](https://github.com/Traky12/Traky12/issues/new). |
| Python and verification | Read the [current evaluation setup](https://github.com/Traky12/castuo-e3-001/blob/main/README.md#install), then choose an [existing scoped issue](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue). |
| Independent review | Read the [review requirements and current gates](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md#level-3--independent-e3-001-review-formal-process) before proposing a review. |

Use synthetic or public data. A first contribution needs no private-repository access or credentials. Check whether an issue is paused before starting; independent-review status changes only after the formal evidence is accepted.

- [Profile contribution guide](CONTRIBUTING.md) · [e3bundle contribution guide](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md)
- [Report vulnerabilities privately](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)
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
