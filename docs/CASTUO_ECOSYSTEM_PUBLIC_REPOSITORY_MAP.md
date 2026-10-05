# CASTUO-SYSTEM — Public Repository Map

## Purpose

This public map is the entry point for understanding the CASTUO-SYSTEM ecosystem.

Its purpose is to identify repository roles, authority classes and public
boundaries without promoting implementation, operation, certification or
commercial claims.

> Traky12 is the public read-model. Castuo-system is the private canonical
> authority for current technical state, governance decisions and promotion
> decisions. castuo-evolution is a non-canonical workspace. Public evidence and
> reproduction surfaces expose only their declared scope. Assurance and
> upstream components remain separately classified.

## Authority classes

CASTUO-SYSTEM uses one authority class per surface:

| Class | Meaning |
|---|---|
| **Canonical** | Technical source of truth for the system |
| **Derived** | Generated or projected from a canonical source |
| **Candidate** | Declared surface not yet promoted |
| **Public** | Public read-model or selected public evidence surface |
| **Objective** | Planned frontier; not an implementation claim |
| **Upstream** | External dependency or third-party source |

A repository may also have a functional role, but functional role does not
change its authority class.

## One-question repository map

| Repository | Authority class | Primary question | Public role | Current boundary |
|---|---|---|---|---|
| Traky12 | **Public** | Where should a visitor start? | Public read-model, repository map and evidence index | Does not decide technical state or promotion |
| Castuo-system (private) | **Canonical** | What is the current technical system? | Private canonical authority | Code existence does not equal operational validation |
| castuo-evolution (private) | **Derived** | Where is prepared or historical evolution material kept? | Non-canonical evolution workspace | Does not replace the canonical authority or determine promotion |
| Evidence Center | **Public** | What selected evidence is available publicly? | Public evidence index | An index or template is not a pilot or certification |
| [castuo-evidence](https://github.com/Traky12/castuo-evidence) | **Public** | Which evidence units are public? | Selected evidence and bounded reproducibility artefacts | Claims remain scope-bound |
| [castuo-e3-001](https://github.com/Traky12/castuo-e3-001) | **Public** | How can a bounded scenario be reproduced? | Public reproduction protocol | A protocol is not an independent result |
| [Cast-o](https://github.com/Traky12/Cast-o) | **Candidate** | Which assurance checks can be reproduced? | Public validation and assurance tooling | A PASS is limited to its declared scope |
| goldfish (private) | **Candidate** | How are recovery and assurance mechanisms explored? | Assurance, security and recovery workspace | Does not certify the private core |
| [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge) | **Candidate** | Which Edge/IoT components are being evaluated? | Public Edge/IoT technical surface | Field and production claims remain unpromoted |
| [castuo-offline-field-operations](https://github.com/Traky12/castuo-offline-field-operations) | **Candidate** | Which offline field workflow is being evaluated? | Public offline workflow experiments | Operational claims require field evidence |
| ctaex-iot-pilot (private) | **Candidate** | What is the declared IoT validation workspace? | Controlled validation workspace | No current field or institutional claim is promoted |
| castuo-360-v5.3 (private) | **Candidate** | Which earlier integrated application surface exists? | Historical integration surface | No current production claim |
| agrovision-360 (private) | **Candidate** | Which experimental architecture surface remains? | Experimental workspace | No current capability or product claim |
| n8n | **Upstream** | Which external automation technology is evaluated? | Third-party/upstream source | Not proprietary CASTUO capability |

## OVS-01 relationship

The current technical consolidation focus is:

**OVS-01 — CASTUO-SYSTEM Edge Continuity**

OVS-01 is defined as a controlled engineering scenario for event identity,
offline persistence, recovery, synchronization, evidence and replay.

The public profile may describe OVS-01 as a **defined validation objective**.

It must not describe OVS-01 as production, real CTAEX operation, independent
validation, certification or commercial validation until those states have
their own evidence and review.

## Reading order

A new visitor should start at Traky12, then review the public evidence and
reproduction surfaces. The canonical technical authority remains the private
Castuo-system repository.

The public surfaces do not modify or promote the canonical technical state.

## Boundary rules

1. A repository activity signal is not operational truth.
2. A README is not production evidence.
3. A test result is not independent validation unless independently reproduced.
4. A digest demonstrates integrity of the stated representation; it does not
   by itself prove origin, authorship, certification or field operation.
5. Third-party or upstream repositories retain their upstream provenance.
6. castuo-evolution remains non-canonical.
7. Private repositories must not be linked publicly as though their contents
   were public evidence.
8. Missing authoritative data is represented as NOT_PROVIDED, PENDING or
   NOT_CLAIMED according to the applicable public boundary.

## Historical snapshot

Older repository inventories and validation snapshots remain in repository
history for traceability. Historical states do not override the current
public status and must not be reused as current operational evidence without
a new dated verification.

## References

1. [CASTUO-SYSTEM public profile](https://github.com/Traky12/Traky12)
2. [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
3. [castuo-evidence](https://github.com/Traky12/castuo-evidence)
4. [castuo-e3-001](https://github.com/Traky12/castuo-e3-001)
5. [Cast-o](https://github.com/Traky12/Cast-o)
6. [Public repository list](https://github.com/Traky12?tab=repositories)
