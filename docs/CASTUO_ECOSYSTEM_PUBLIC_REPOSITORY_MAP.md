# CASTUO-SYSTEM — Public Repository Map

## Purpose

This is the public index for understanding repository roles and boundaries. It is a read-model, not a source of canonical technical state.

**Technical authority:** Traky12/Castuo-system  
**Ecosystem control plane:** Traky12/castuo-evolution  
**Public read-model:** Traky12/Traky12

## Canonical surfaces

| Repository | Role | Authority class | State |
|---|---|---|---|
| Castuo-system (private) | Core platform | Canonical technical authority | ACTIVE |
| castuo-evolution (private) | Ecosystem governance/control plane | Canonical ecosystem governance | ACTIVE |
| castuo-evidence | Evidence packages | Canonical evidence surface | ACTIVE |
| castuo-e3-001 | Replay/reproduction protocol | Canonical protocol | ACTIVE / PENDING EXTERNAL EXECUTION |
| castuo-foreign-verifier (private) | Portable verifier | Verification executor | ACTIVE |
| Cast-o | Testing and assurance tooling | Canonical assurance tooling | ACTIVE |
| castuo-agro-edge | Edge/IoT | Canonical edge surface | ACTIVE |
| castuo-offline-field-operations | Field operations | Canonical field surface | ACTIVE |
| goldfish (private) | Security/recovery | Canonical security surface; migrating slug | MIGRATING |
| castuo-vendor-exit-lab (private) | Continuity scenarios | Specialized laboratory | EXPERIMENTAL |
| castuo-product-experience (private) | Demo/product experience | Canonical product surface; migrating slug | MIGRATING |

## Read-model surfaces

| Repository | Role | Boundary |
|---|---|---|
| castuo-live-status-dashboard (private) | Ecosystem status | Derived; target castuo-control-center not yet present |
| castuo-progress-dashboard (private) | Maturity reporting | Derived; must not own canonical state |
| castuo-strategy-knowledge-base (private) | Strategy/state documentation | Migration source; target castuo-docs not yet present |
| Traky12 | Public profile | Read-model only; target castuo-site not yet present |

## Experimental / specialized

ctaex-iot-pilot, castuo-link, agrovision-360 and castuo-neurocompanion remain bounded workspaces. None becomes production proof through naming.

## Historical and external

Archived repositories remain in Git history for provenance. External forks retain upstream identity.

## OVS-01

OVS-01 remains a controlled validation objective for event identity, offline persistence, recovery, synchronization, evidence and replay.

The public profile may expose the protocol and state boundaries; it must not present OVS-01 as production, CTAEX operation, independent validation, certification or commercial proof without separate evidence and review.

## Boundary rules

1. README content does not override repository authority.
2. Tests are not independent validation unless independently reproduced.
3. A digest establishes integrity of the stated representation, not origin or certification.
4. A target repository name does not prove repository existence.
5. Public and private boundaries must remain explicit.
6. Dashboard surfaces consume canonical data and do not redefine it.
7. Historical states do not override current dated status.

## Consolidation status

Repository naming and ownership are being consolidated through the private ecosystem control plane. No repository rename, deletion or archival action is assumed from the map alone.

The intended path is:

inventory → canonical ownership → public map → derived control center → evidence interoperability → legacy migration → security consolidation → automated integrity
