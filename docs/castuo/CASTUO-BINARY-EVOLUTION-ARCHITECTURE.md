# CASTÚO-SYSTEM — Binary Evolution Architecture

## Purpose

This document integrates the evidence-first binary evolution model into the CASTÚO-SYSTEM core architecture. It defines how field/offline operation, evidence, security, recovery, trust and promotion interact without turning local validation into an operational claim.

## Architecture layers

| Layer | Core surfaces | Binary-evolution responsibility |
|---|---|---|
| Experience and API | `frontend`, API services and routers | Expose declared capabilities without granting gate authority |
| Domain and runtime | `services`, `infrastructure`, event and resilience modules | Execute contracts, buffer events, preserve identity and policy |
| Edge and offline | `services/iot/offline_buffer.py`, gateway services | Continue locally, deduplicate, reconcile and recover connectivity |
| Evidence | `governance/evidence`, `evidence/`, evidence services | Emit canonical envelopes, hashes, replay records and provenance |
| Security | `infrastructure/security`, `packages/security`, trust policy | Detect, contain, preserve, verify, recover and fail closed |
| Governance | `gates`, `governance/contracts`, registries | Evaluate binary predicates and control claim boundaries |
| Operations | deployment, backup, monitoring and recovery runbooks | Execute authorized staging rollback and operational recovery |

## Canonical control flow

```text
CAPABILITY
  → CONTRACT
  → IMPLEMENTATION
  → FAILURE TEST
  → OBSERVABILITY
  → EVIDENCE ENVELOPE
  → HASH / SIGNATURE
  → REPLAY
  → REVIEW
  → ROLLBACK
  → PROMOTION GATE
  → CLAIM
```

The control plane does not infer a promotion from a healthy build, an existing module, a signed artifact or a local test alone. Every mandatory state is explicit and any unknown state remains blocking.

## S-001A vertical slice

The first integrated slice is evidence-preserving local continuity under loss of connectivity:

```text
NETWORK_DOWN
  → LOCAL IDENTITY + CACHED POLICY
  → BUFFER / DEDUPLICATE / PRESERVE EVIDENCE
  → NETWORK_RESTORED
  → RECONCILE / REPLAY / VERIFY
  → RECOVERY EVIDENCE
  → REVIEW
```

The frozen fixture and replay package are under `governance/evidence/E3-001-S001A/`. The canonical contract is `governance/contracts/CAP-S001A-OFFLINE-CONTINUITY.yaml`.

## Binary promotion kernel

```text
PROMOTE = capability ∧ evidence ∧ replay ∧ security
          ∧ sovereignty ∧ resilience ∧ review ∧ rollback
```

The current core state remains `BLOCKED / LOCAL_RESULT_NO_CLAIM`. Local negative tests and a controlled rollback simulator are evidence-producing components, not automatic production promotion.

## Trust and signing boundary

The trust root is an offline or HSM-controlled authority. The repository may contain public certificates, fingerprints, trust policy, signed manifests and verification output, but never private keys. The verifier pins the root fingerprint, validates the signer chain, verifies the detached signature and blocks on mismatch, expiry, revocation uncertainty or manifest alteration.

The exact procedure is documented in `docs/architecture/BINARY_TRUST_ROOT_AND_SIGNING_RUNBOOK.md`, and the policy is `governance/trust-policy.yaml`.

## Rollback boundary

The rollback simulator is intentionally restricted to an explicitly authorized staging sandbox. It requires an authorization record with owner, change window, scope `S-001A`, `environment: staging` and `remote_side_effects: false`. It must refuse production-like paths and does not use credentials or remote side effects.

Operational rollback remains a separate evidence state. A local simulator can prove algorithmic behavior, but only an authorized environment-representative exercise can close the operational rollback requirement.

## Claim states

| State | Meaning |
|---|---|
| `VALIDATED_LOCAL` | Executed in the local controlled environment |
| `EVIDENCE_SCOPED` | Evidence package is complete for its declared scope |
| `HUMAN_REVIEW_PENDING` | Independent reviewer has not completed attestation |
| `EXTERNAL_VERIFICATION_PENDING` | Reproduction outside the originating operator is pending |
| `FIELD_EVIDENCE_REQUIRED` | Field or representative operational evidence is missing |
| `PROMOTION_BLOCKED` | At least one mandatory binary predicate is false or unknown |
| `NOT_CLAIMED` | No production, field, N5/N6 or sovereignty claim is permitted |

## Safety invariants

Historical evidence must not be overwritten during recovery. Recovery creates a new execution and links it to the previous execution. AI and automation may detect, classify, propose and prepare actions, but they cannot independently promote a claim, extend authority, access secrets or perform an irreversible action without the relevant policy, approval, evidence and rollback boundary.
