# CASTÚO-SYSTEM Master Architecture Decision

## Canonical definition

> **CASTÚO-SYSTEM is a Sovereign Evidence & Trust Control Plane for distributed intelligent systems.**

Los dominios se modelan como **capability packs gobernados** que heredan una fabric común de identidad, datos, criptografía, evidencia, gemelo digital, ledger, incidentes y recuperación. Esta definición integra los documentos maestros 22/23 con la arquitectura soberana existente, sin convertir las capacidades verticales en plataformas de seguridad independientes.

## Responsibility map

| Component | Canonical role | Boundary |
|---|---|---|
| `castuo-evolution` | Authority and governance | Contracts, maturity, claims, gates and roadmap |
| `Castuo-system` | Core execution | Runtime orchestration and control-plane execution |
| `castuo-progress-dashboard` | Observability and management UI | Evidence-scoped readout, filtering, exports and local evaluators |
| `goldfish` | Security, recovery and assurance | Security controls, restoration and assurance inputs |
| `Cast-o` | CI, tests and release evidence | Validation, provenance and release checks |
| `castuo-agro-edge` | Edge, devices and connectivity | Local cache, MQTT/IoT and device-facing adapters |
| `castuo-offline-field-operations` | Offline operations and continuity | Local workflows, deferred sync and recovery operations |
| `Traky12` | Public read-model and limited narrative | Governed README blocks and evidence-scoped public projection |

Esta tabla es un modelo de ownership y no afirma que cada frontera esté operativa o remotamente validada. El estado permitido de cada componente se determina mediante su capability contract y los gates G0-G10.

## Trust model

Cada operación crítica debe satisfacer los controles obligatorios del Binary Security Envelope:

```text
ALLOW = IDENTITY ∧ AUTHORIZATION ∧ DEVICE_TRUST ∧ DATA_POLICY
      ∧ CRYPTOGRAPHIC_INTEGRITY ∧ EVIDENCE ∧ RECOVERY_PATH
```

Según el perfil de riesgo pueden añadirse `AI_POLICY`, `HUMAN_APPROVAL`, `LOCATION_OR_MODE` y `GNSS_STATE`. Un `0` obligatorio no puede compensarse con un promedio. La secuencia operacional es `DENY → QUARANTINE → INCIDENT-ID → EVIDENCE-HASH → RECOVERY → REVIEW`.

La vulnerabilidad no se convierte en una promesa de invulnerabilidad. La afirmación permitida es más limitada: una condición inválida debe poder detectarse, clasificarse, bloquearse, aislarse, recuperarse y demostrarse dentro de un proceso gobernado.

## Separation of functions

| Function | Responsibility | Prohibited interpretation |
|---|---|---|
| Binary policy | Decides authorization or promotion | Not encryption |
| Cryptography | Protects confidentiality, integrity and authenticity | Not a business gate |
| Evidence Graph | Links data, events, tests, claims and decisions | Not field validation by itself |
| Digital Twin | Represents state, events, dependencies, replay and simulation | Not proof of production operation |
| Trazalia | Provisional internal traceability layer | Not an externally validated product |
| GaiaChain/ledger | Hash, timestamp, anchor and multi-party verification | Not primary database or total security |
| Incident Fabric | Detect, block, quarantine, preserve, recover and review | Not a claim of impossible intrusion |

Original clinical, biometric, experimental or industrial data remains under sovereign control. Ledger anchors may contain hash, timestamp, pseudonymous identifier and proof of anchoring, never raw sensitive data.

## COMP metamodel extension

The governed metamodel now includes:

```text
Capability + CapabilityContract + Implementation + Evidence + Claim + Policy
+ Risk + Dependency + Owner + Workflow + GovernanceRule + Lifecycle
+ Telemetry + Cost + Trust + Maturity + DataAsset + Identity + Device
+ DigitalTwin + LedgerAnchor + Incident + RecoveryAction + SecurityPolicy
+ ModelIdentity + LocationState
```

This is a vocabulary extension, not a claim that every entity has production storage or runtime support. Each entity requires an owner, lifecycle, evidence scope and appropriate gate.

## Capability packs

| Pack | Initial model | First maturity boundary |
|---|---|---|
| Learning Fabric | Identity, curriculum, competency, assessment and evidence | Local contract/reproduction only |
| Bio Fabric | Sample, batch, process, custody and provenance | Chain-of-custody evidence required |
| Aerial Fabric | Mission, device, telemetry, geofence and navigation | Device/location/human-override policy required |
| Robotics Fabric | Task, perception, action, safe state and override | Firmware/device/safe-stop evidence required |
| Clinical Evidence Fabric | Interoperability, audit, provenance and workflow | Regulatory gate before clinical functionality |
| Resilient Navigation | Offline, mesh, sync, degraded modes and recovery | Safe stop/hold/return and recovery evidence required |

Capability packs remain modules or adapters until a real ownership, lifecycle, security, deployment or compliance boundary justifies a repository.

## Promotion and claims

The promotion path is:

```text
G0 BASELINE → G1 CONTRACT → G2 IDENTITY → G3 DATA SOVEREIGNTY → G4 SECURITY
→ G5 RUNTIME → G6 EVIDENCE → G7 INDEPENDENT REVIEW → G8 FIELD
→ G9 COMMERCIAL → G10 FEDERATION
```

```text
PROMOTE = G0 ∧ G1 ∧ G2 ∧ ... ∧ G10
```

No claim of field validation, production operation, commercial repeatability, clinical use, external zero vulnerabilities or federation is authorized by this document. Local contracts and tests remain `LOCAL / EVIDENCE-SCOPED` until the relevant external gate is closed.

## Canonical artifact map

| Concern | Current canonical artifact |
|---|---|
| Architecture | `CASTUO-SOVEREIGN-CONTROL-PLANE-REFERENCE-ARCHITECTURE.md` |
| Master decision | `CASTUO-MASTER-ARCHITECTURE-DECISION.md` |
| Capability | `CASTUO-CAPABILITY-CONTRACT.yaml` |
| Binary security | `CASTUO-BINARY-SECURITY-ENVELOPE.yaml` |
| Data sovereignty | `CASTUO-DATA-SOVEREIGNTY-POLICY.yaml` |
| Evidence | `CASTUO-EVIDENCE-GRAPH-CONTRACT.yaml` |
| Twin | `CASTUO-DIGITAL-TWIN-CONTRACT.yaml` |
| Ledger | `CASTUO-LEDGER-ANCHOR-POLICY.yaml` |
| Incident/recovery | `CASTUO-INCIDENT-RECOVERY-CONTRACT.yaml` |
| Federation | `CASTUO-REPOSITORY-FEDERATION-CONTRACT.yaml` |

The names from the source documents are mapped to the current canonical names to avoid duplicate contract families. `CASTUO-BINARY-SECURITY-CONTRACT.yaml`, `CASTUO-DATA-SOVEREIGNTY-CONTRACT.yaml` and `CASTUO-LEDGER-ANCHOR-CONTRACT.yaml` are aliases in the source vocabulary, not additional security implementations.
