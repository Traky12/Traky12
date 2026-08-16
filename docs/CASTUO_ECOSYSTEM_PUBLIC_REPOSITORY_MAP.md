# CASTÚO-SYSTEM Public Repository Map

## Purpose

This map is the public entry point for understanding the ecosystem. Each repository answers one primary question. The map does not promote implementation, operational status or assurance; those claims require the evidence chain defined by `CASTUO-REPOSITORY-STANDARD-V1.0`.

> **Traky12 explains what CASTÚO is. `castuo-evolution` defines what may be claimed. Evidence Center shows what evidence exists. Implementation repositories build. `Cast-o` reproduces. `goldfish` assures. Edge and field repositories preserve continuity.**

## One-question repository map

| Repository | V1.0 class | Primary question | Public role | Current boundary |
|---|---|---|---|---|
| `Traky12` | PROFILE | What is CASTÚO and where should a visitor start? | Public profile and entry point | Must remain concise; it is not the control plane |
| `castuo-evolution` | GOV | What may CASTÚO claim, under which Gate and with what evidence? | Governance control plane | Private source of normative and evidence contracts |
| `Castuo-system` | CORE | What is implemented in the core platform? | Core application and business implementation | Implementation does not equal operational validation |
| `goldfish` | ASSURANCE | How are security, recovery and assurance controls tested? | Assurance, security and recovery engineering | Findings require dated evidence and re-test |
| `Cast-o` | CI | Can a declared repository or artifact be reproduced and checked? | CI, validation and release evidence | A green check proves only its declared scope |
| `Evidence Center` | EVIDENCE | What evidence package exists for a declared claim? | Public evidence surface and scoped dossiers | A template is not a pilot or certification |
| `castuo-agro-edge` | EDGE | How does edge telemetry and continuity work under unreliable connectivity? | Rural edge and IoT plane | Field evidence and promotion remain scope-bound |
| `castuo-offline-field-operations` | FIELD | How does a field operator continue work without cloud access? | Offline field continuity and synchronisation | Operational claims require field protocol and results |
| `castuo-360-v5.3` | PILOT | Which integrated application or pilot surface is being tested? | Private or experimental integration surface | Not a generic production claim |
| `ctaex-iot-pilot` | PILOT | What is the declared CTAEX IoT validation scope? | Private pilot and validation environment | Pilot evidence must be dated and scope-bound |
| `agrovision-360` | PILOT | What architecture-governance boundary applies to this experiment? | Private or experimental surface | README should remain a boundary, not a product claim |
| `-Prueba-final` | EXPERIMENTAL | What is the current ecosystem integration experiment? | Private experimental hub | Must not become a second normative control plane |
| `n8n` | UPSTREAM | Which upstream workflow automation capability is integrated? | Fork or upstream-integrated automation | Not proprietary CASTÚO capability; preserve upstream provenance |
| `openclaw` | UPSTREAM | Which upstream assistant capability is integrated or evaluated? | Fork or upstream-integrated assistant | Not proprietary CASTÚO capability; preserve upstream provenance |
| `desktop-tutorial` | SUPPORT | What local tooling or onboarding support exists? | Support and tutorial surface | Must not be used as architecture or assurance evidence |

## Reading order

A new visitor should start at `Traky12`, then move to Evidence Center for scoped public evidence. The next step is `castuo-evolution` when governance, Gates or claim boundaries are needed. `Castuo-system` explains implementation, `Cast-o` explains reproducibility, `goldfish` explains assurance, and edge/field repositories explain continuity. Upstream and support repositories remain clearly separated from CASTÚO-owned capability.

## Boundary rules

The profile must not become a second control plane. `castuo-evolution` must not absorb implementation, upstream code or every ecosystem document. `n8n` and `openclaw` must retain upstream attribution and must never be read as proprietary CASTÚO technology merely because they appear in the repository list. A repository activity signal is not operational truth, and a README is not evidence of production.

## Audit snapshot

The first V1.0 audit inspected 14 remote repository HEADs. All were `BLOCKED` by the same first missing requirement, `repository.yaml_missing`. This is a metadata conformance finding, not a conclusion that the repositories lack code, tests, security or operational value. Each repository requires its own metadata and subsequent validation before further findings can be interpreted.

The audit report is maintained in the control plane as `REPOSITORY_CONFORMANCE_AUDIT_2026-08-16.md`. This public map deliberately does not copy the full normative standard; it references the hierarchy and leaves enforcement to the canonical validator.

## References

1. [CASTÚO-SYSTEM public profile](https://github.com/Traky12/Traky12)
2. [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
3. [Cast-o validation](https://github.com/Traky12/Cast-o)
4. [Public repository list](https://github.com/Traky12?tab=repositories)
