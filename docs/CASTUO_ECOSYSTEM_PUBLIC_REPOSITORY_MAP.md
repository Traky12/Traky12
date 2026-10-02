# CASTÚO-SYSTEM Public Repository Map

## Purpose

This map is the public entry point for understanding the ecosystem. Each repository answers one primary question. The map does not promote implementation, operational status or assurance; those claims require the evidence chain defined by `CASTUO-REPOSITORY-STANDARD-V1.0`.

> **Traky12 explains what CASTÚO is. `Castuo-system` is the private canonical authority for current technical state, governance decisions and promotion decisions. `castuo-evolution` is a non-canonical evolution and governance workspace. Evidence Center, `castuo-evidence` and `castuo-e3-001` show selected evidence and reproduction protocols. `Cast-o` reproduces. `goldfish` assures. Edge and field repositories explore continuity.**

## One-question repository map

| Repository | V1.0 class | Primary question | Public role | Current boundary |
|---|---|---|---|---|
| `Traky12` | PROFILE | What is CASTÚO and where should a visitor start? | Public read-model: representation, repository map and evidence index | Does not decide technical state, gates or promotion |
| `Castuo-system` *(private)* | CORE | What is implemented in the core platform? | Canonical authority for current technical state, governance and promotion decisions | Implementation does not equal operational validation |
| `castuo-evolution` *(private)* | EXTERNAL | Where is historical, prepared or working governance material kept? | Non-canonical evolution and governance workspace | Not a canonical authority, not a synchronised source of truth and does not determine promotion state |
| `Evidence Center` | EVIDENCE | What evidence package exists for a declared claim? | Evidence index and scoped dossiers in this profile | A template is not a pilot or certification |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | EVIDENCE | Which selected evidence units and manifests are public? | Public evidence surface | Evidence within declared scope; does not decide promotion |
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | EVIDENCE | How can a third party reproduce a bounded scenario? | Public reproduction protocol | E3-001 remains `PENDING`; a protocol is not an independent result |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | CI | Can a declared repository or artifact be reproduced and checked? | Assurance and validation tooling | A green check proves only its declared scope |
| `goldfish` *(private)* | ASSURANCE | How are security, recovery and assurance controls tested? | Assurance, security and recovery engineering | Findings require dated evidence and re-test |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | EDGE | How does edge telemetry and continuity work under unreliable connectivity? | Edge/IoT research components | Field evidence and promotion remain scope-bound |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | FIELD | How does a field operator continue work without cloud access? | Bounded offline workflow experiments | Operational claims require field protocol and results |
| `ctaex-iot-pilot` *(private)* | PILOT | What is the declared IoT and connectivity-loss validation scope? | Validation workspace | Inactive since 2026-08; no current capability, field or institutional claim |
| `castuo-360-v5.3` *(private)* | PILOT | Which earlier integrated application surface exists? | Earlier integration surface | Inactive since 2026-08; no current capability or production claim |
| `agrovision-360` *(private)* | EXPERIMENTAL | Which architecture-governance boundary applies to this experiment? | Experimental surface | Inactive; no current capability or product claim |
| `n8n` | UPSTREAM | Which upstream workflow automation capability is evaluated? | Fork of upstream automation | Not proprietary CASTÚO capability; preserve upstream provenance |

Archived repositories are excluded from this map. Other private experimental, research or product-experience repositories are not public capabilities and are not listed.

## Reading order

A new visitor should start at `Traky12`, then move to Evidence Center, `castuo-evidence` and `castuo-e3-001` for scoped public evidence. Governance, gates and claim boundaries are governed in `Castuo-system` (private). `Castuo-system` explains implementation, `Cast-o` explains reproducibility, `goldfish` explains assurance, and edge/field repositories explain continuity experiments. Upstream repositories remain clearly separated from CASTÚO-owned capability.

## Boundary rules

The profile is a public representation; it does not decide technical state, gates or promotion. `castuo-evolution` must not be presented as an authority and must not absorb implementation, upstream code or every ecosystem document. `n8n` must retain upstream attribution and must never be read as proprietary CASTÚO technology merely because it appears in the repository list. A repository activity signal is not operational truth, and a README is not evidence of production.

## Historical audit snapshot — 2026-08-16

The first V1.0 audit inspected 14 remote repository HEADs. All were `BLOCKED` by the same first missing requirement, `repository.yaml_missing`. This is a metadata conformance finding, not a conclusion that the repositories lack code, tests, security or operational value. It describes the state on 2026-08-16 and does not define the current state of any repository.

This public map deliberately does not copy the full normative standard; it references the hierarchy and leaves enforcement to the canonical validator.

## References

1. [CASTÚO-SYSTEM public profile](https://github.com/Traky12/Traky12)
2. [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
3. [castuo-evidence](https://github.com/Traky12/castuo-evidence)
4. [castuo-e3-001](https://github.com/Traky12/castuo-e3-001)
5. [Cast-o validation](https://github.com/Traky12/Cast-o)
6. [Public repository list](https://github.com/Traky12?tab=repositories)
