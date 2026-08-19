# CASTÚO-SYSTEM™ — Public GitHub Showcase Plan

**Status:** `IMPLEMENTED IN PROFILE · METADATA NORMALIZATION IN PROGRESS`  
**Purpose:** Make the public journey legible: profile → core → evidence → assurance → field operations → edge/IoT.

## Public reading order

```text
Traky12
  ↓
CASTÚO-SYSTEM
  ↓
Core
  ↓
Governance
  ↓
Evidence
  ↓
Assurance
  ↓
Field operations
  ↓
Edge / IoT
```

Governance crosses all layers. It is represented by `castuo-evolution`, but the profile remains the public entry point and does not become a second control plane.

## Recommended showcase order

GitHub profile highlighting is subject to repository visibility and owner review. The recommended narrative is:

| Order | Repository | Public function | Visibility constraint |
|---|---|---|---|
| 1 | `Traky12` | Profile, architecture and ecosystem entry point | Public |
| 2 | `Castuo-system` | Protected platform core | Currently private; do not imply public inspectability |
| 3 | `castuo-evidence` | Replayable evidence and bounded S-001A claims | Public |
| 4 | `Cast-o` | Assurance, benchmarking and adversarial validation | Public |
| 5 | `castuo-offline-field-operations` | Offline-first field workflow capability | Public |
| 6 | `castuo-agro-edge` | Edge/IoT and telemetry continuity | Public |

If the private core cannot serve the public showcase, use `goldfish` only if it is intentionally made public and its security boundary is reviewed. Do not create `castuo-system-public` unless the profile and existing public map cannot provide a sufficient entry point.

## Public architecture taxonomy

| Layer | Canonical surfaces | Boundary |
|---|---|---|
| Core | `Castuo-system` | Protected implementation; production not claimed |
| Governance | `castuo-evolution` | Capabilities, contracts, claims, evidence, risks, gates, promotion and rollback |
| Assurance | `castuo-evidence`, `Cast-o`, `goldfish` | Evidence, evaluation, security and recovery; each claim remains scope-bound |
| Operations | `castuo-offline-field-operations`, `castuo-agro-edge` | Offline continuity, synchronization and telemetry; field evidence pending |
| Support/research | Documentation, dashboard, knowledge base, pilots and experiments | Secondary surfaces; not normative control planes |
| Upstream | `openclaw`, `n8n` | Fork/integration provenance; upstream capability is not proprietary CASTÚO capability |

## Common README contract

Relevant repositories should expose the following block, populated only with current evidence:

```markdown
## Capability status

- Role:
- Layer:
- State:
- Evidence:
- Environment:
- Maintainer:
- Dependencies:
- Next gate:
- Last reviewed:
- Not claimed:
```

The contract is descriptive, not a replacement for the canonical control plane. A README must explain purpose, useful boundary, start path, evidence entry point, support path and non-claims.

## Recommended public descriptions

| Repository | Description |
|---|---|
| `castuo-evidence` | Public replayable evidence package for CASTÚO-SYSTEM S-001A, including frozen fixtures, execution envelopes, hashes and bounded claims; does not imply production or field validation. |
| `Cast-o` | Automated assurance and adversarial benchmarking engine for evidence-governed systems: testing, failure injection, replay validation and bounded-claim challenge. |
| `goldfish` | CASTÚO assurance, security and recovery layer for observability, incident containment, evidence preservation and service recovery. |
| `castuo-offline-field-operations` | Offline-first field workflow runtime for continuity, local evidence capture, synchronization and recovery under intermittent connectivity. |
| `castuo-agro-edge` | Offline-first edge and IoT runtime for CASTÚO-SYSTEM, with local buffering, synchronization and telemetry continuity. |

## Safe repository actions

| Surface | Action | State |
|---|---|---|
| Public descriptions/topics | Normalize to evidence-scoped language and demonstrable topics | `EXECUTABLE` |
| Private workspaces | Keep private; mark their role in the profile map | `IMPLEMENTED` |
| Research/pilot repositories | Label as experimental/laboratory; do not promote to production claims | `IMPLEMENTED IN MAP` |
| Upstream forks | Preserve attribution and mark as upstream/integration | `IMPLEMENTED IN MAP` |
| Duplicate knowledge-base repository | Archive, rename or privatize only after owner confirmation and issue/PR review | `REQUIRES HUMAN DECISION` |
| `-Prueba-final` | Keep private or rename to `castuo-integration-sandbox`; remove from showcase | `REQUIRES HUMAN DECISION` |
| Pinned repositories | Reorder manually in GitHub profile after visibility review | `REQUIRES PROFILE UI ACTION` |

## Topics policy

Use only topics supported by the declared scope:

```text
offline-first
assurance
ai-governance
field-operations
resilient-systems
evidence-engineering
castuo-system
edge-computing
iot
synchronization
observability
reproducible-research
software-assurance
```

Do not use `production`, `enterprise`, `autonomous`, `federation` or `certified` until evidence gates authorize those claims.

## Three-click test

A new visitor should reach a scoped public evidence artifact in three clicks or fewer:

```text
Profile → Public evidence → S-001A record/protocol
```

The profile links directly to `castuo-evidence`, `castuo-evolution` proof materials, the S-001 vertical slice protocol and the consolidated record.

## Non-claims

The showcase does not claim that the private core is publicly inspectable, that public repositories are production systems, that upstream forks are proprietary technology, that research repositories are field pilots or that a highlighted repository proves certification, customer results or continuous operation.
