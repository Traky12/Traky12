# CASTÚO S-001 — Vertical Slice Protocol

**Status:** `READY · STAGING EXECUTION REQUIRED`  
**Scope:** One organization, one workflow, one connectivity-loss scenario and one evidence report.  
**Purpose:** Demonstrate continuity, preservation, synchronization and replay without inflating the claim boundary.

## Scenario

```text
Create organisation → register field operation → create event
→ disconnect network → continue offline → generate local evidence
→ perform declared offline operations → reconnect → synchronise
→ verify integrity → generate report → replay
```

## Required run record

```yaml
scenario_id: S-001
operator:
repository:
commit:
environment:
workflow:
start_utc:
network_loss_utc:
network_restore_utc:
end_utc:
events_generated:
events_preserved:
events_lost:
duplicate_events:
integrity_failures:
synchronization_result:
evidence_hash:
replay_result:
reviewer:
status:
```

## Required assertions

| Assertion | Pass condition |
|---|---|
| Continuity | Workflow continues during declared network loss |
| Preservation | Events preserved equals events generated |
| Loss | `0` lost events |
| Duplication | `0` duplicate events |
| Integrity | `0` integrity failures |
| Recovery | Network restoration produces a recorded recovery event |
| Synchronization | Buffered events synchronize successfully |
| Evidence | Evidence envelope and report are generated |
| Replay | Declared replay operator reproduces the result |

## Evidence package

```text
S-001/
├── README.md
├── protocol.yaml
├── environment.json
├── input/
├── execution/
├── expected/
├── evidence/
├── report/
├── hashes/
└── review.md
```

## Gate boundary

A successful local S-001 run supports `1D` only within its declared scope. It does not establish `1R`, `1V`, `1A`, field validation, customer result, paid pilot or production readiness. Those transitions require independent execution, review or commercial evidence.

## Non-fabrication rule

Targets in this protocol are acceptance conditions, not achieved results. No KPI, percentage, zero-loss statement or replay result may be published until the run record and evidence package exist.
