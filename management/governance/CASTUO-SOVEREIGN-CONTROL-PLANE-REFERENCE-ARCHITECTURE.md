# CASTUO Sovereign Control Plane Reference Architecture

## Status and scope

| Field | Value |
|---|---|
| Status | `DESIGNED / EVIDENCE-SCOPED` |
| Owner | CASTÚO-SYSTEM control plane |
| Source | `pasted_content_20.txt` and `pasted_content_21.txt`, consolidated 2026-08-18 |
| Promotion boundary | No production, field, regulatory or commercial claim without its own evidence |

CASTÚO-SYSTEM is a **sovereign control, trust, data and evidence infrastructure**. Education, biotechnology, drones, robotics, medicine and No-GNSS operations are governed capability domains. They inherit the same trust architecture and do not implement parallel identity, cryptography, vault, evidence, audit or gate systems.

> Every capability inherits the same trust architecture.

## Architectural planes

| Plane | Shared responsibility | Domain contribution |
|---|---|---|
| Sovereign control plane | Governance, IAM, policy, binary rules, owners, lifecycle, claims and gates | Capability contracts, risk profile and workflows |
| Security fabric | Identity, PKI, cryptographic integrity, secrets/vault, device trust, incident and recovery | Required controls per domain |
| Data sovereignty plane | Locality, authority, classification, retention, jurisdiction, transformation and export policy | Data models and lawful purpose |
| Evidence/trust plane | Evidence Graph, passports, provenance, replay, trust state and Digital Twin boundaries | Evidence-producing events and domain semantics |
| Ledger layer | Hashes, pseudonymous IDs, timestamps, states and multipartite anchors | Anchor requests; never raw sensitive data |
| Capability fabric | Shared interfaces and promotion rules | Education, biotech, drones, robotics, medicine and No-GNSS adapters |
| Edge/offline fabric | Local-first events, cache, signed messages, mesh, reconciliation and safe modes | Device and operational adapters |

## Non-substitution rules

Binary controls decide authorization or promotion. Cryptography protects confidentiality, authenticity and integrity. The ledger provides anchoring and traceability. The Digital Twin represents state, relationships, simulation and replay. Evidence supports decisions and claims. Blockchain, GaiaChain or Trazalia must not be described as encryption or as a complete security solution.

For mandatory controls:

```text
ALLOW = I ∧ A ∧ G ∧ D ∧ T ∧ E ∧ R
```

`I` is validated identity, `A` authorization, `G` cryptographic integrity, `D` data policy, `T` device trust, `E` required evidence and `R` available recovery. Domain-specific controls such as location, model trust, human approval or GNSS state become mandatory only when the domain risk profile requires them. A mandatory `0` results in `DENY`, `REVIEW`, `QUARANTINE` or `RECOVERY_REQUIRED`; no average score authorizes a critical operation.

## Data and evidence sovereignty

Data locality follows `EDGE → REGIONAL → PRIVATE CLOUD → EU CLOUD`, with explicit policy required for every escalation. Every DataAsset records owner, controller, processor, purpose, classification, retention, jurisdiction, allowed transformations, export policy and deletion conditions.

The provenance chain is:

```text
DATA → HASH → EVENT → EVIDENCE → CLAIM → LEDGER ANCHOR
```

The original data remains under sovereign control. The ledger receives only minimum integrity proofs: hashes, pseudonymous identifiers, timestamps, states and cryptographic verification material.

## Incident process

```text
event → identity check → signature check → replay check → policy evaluation
      → deny/quarantine → incident evidence → alert
      → rollback/recovery → review
```

Incidents are expressed as concrete policy outcomes, for example `SEC-POL-014 = 0 → operation denied → asset quarantined → evidence preserved → recovery required`. This improves detection, classification, auditability and replay without claiming security perfection.

## Digital Twin boundary

The private twin may contain device state, telemetry, events, relationships, simulations and sensitive policies. The public twin may expose only approved capabilities, versions, hashes, evidence states, limitations, releases, lineage and aggregated results. A twin representation is not proof of field validation or production operation.

Allowed maturity states are `DESIGNED`, `IMPLEMENTED`, `LOCALLY_TESTED`, `REMOTELY_VERIFIED`, `FIELD_VALIDATED`, `PRODUCTION_OPERATIONAL` and `COMMERCIALLY_REPEATABLE`.

## Gate model

```text
G0 BASELINE → G1 CONTRACT → G2 IDENTITY → G3 INTEGRITY → G4 DATA SOVEREIGNTY
→ G5 RUNTIME → G6 EVIDENCE → G7 INDEPENDENT REVIEW → G8 FIELD
→ G9 COMMERCIAL → G10 FEDERATION
```

```text
PROMOTE = G0 ∧ G1 ∧ G2 ∧ ... ∧ G10
```

Every gate records result `0/1`, scope, evidence, owner, date, commit, limitations and next action. Local tests, documentation and commit volume do not close runtime, independent review, field, commercial or federation gates by themselves.

## Repository and ownership rule

A new repository is justified only by an independent boundary of ownership, lifecycle, security, deployment or compliance. Candidate boundaries are `castuo-identity`, `castuo-data-sovereignty`, `castuo-security`, `castuo-evidence`, `castuo-ledger`, `castuo-digital-twin`, `castuo-resilient-edge` and domain adapters. They may remain modules in the core until an operational reason for extraction is evidenced.

## Claims boundary

This architecture does not authorize claims of absolute security, unlimited autonomy, encryption by blockchain, external validation, production operation, N5/N6 maturity, clinical functionality, regulatory compliance or competitive advantage. Each claim requires a provenance-linked capability passport, implementation evidence, appropriate maturity and a closed gate.

## Linked contracts

- `CASTUO-CAPABILITY-CONTRACT.yaml`
- `CASTUO-BINARY-SECURITY-ENVELOPE.yaml`
- `CASTUO-DATA-SOVEREIGNTY-POLICY.yaml`
- `CASTUO-EVIDENCE-GRAPH-CONTRACT.yaml`
- `CASTUO-DIGITAL-TWIN-CONTRACT.yaml`
- `CASTUO-LEDGER-ANCHOR-POLICY.yaml`
- `CASTUO-INCIDENT-RECOVERY-CONTRACT.yaml`
- `CASTUO-REPOSITORY-FEDERATION-CONTRACT.yaml`
