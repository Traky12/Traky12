# CASTÚO Capability Evolution — 2026-08-18

## Role evolution

`castuo-progress-dashboard` is now described as an **Evidence-First Governance, Assurance & Progress Control Surface** and, within its declared local scope, as `GOVERNED_CONTROL_AND_OBSERVABILITY_SURFACE`. This classification reflects implemented contracts, deterministic evaluators, Incident Fabric, capability-pack catalogues, Evidence Graph replay, restore readiness and promotion-gate readouts. It does not make the dashboard an autonomous authority or a production assurance system.

> A displayed state is not automatically an executed runtime result, a verified external fact or a production claim.

## Capability chain

```text
ARCHITECTURE → CAPABILITY → CONTRACT → IMPLEMENTATION → EVIDENCE → GATE → PROMOTION / ROLLBACK
```

The capability register now distinguishes the following implemented or governed surfaces.

| Capability | Current state | Scope | Evidence boundary |
|---|---|---|---|
| `CAP-INCIDENT-001` Incident Fabric | `VERIFIED` | Local contract and deterministic tests | Does not claim production incident response |
| `CAP-COMP-001` COMP metamodel | `MAPPED` | Governed machine-readable model | Does not claim a full production metamodel |
| `CAP-PACK-001` Capability Pack governance | `MAPPED` | Six domain packs inherit common semantics | A defined pack is not an operationally validated capability |
| Evidence Graph replay | `VERIFIED` | Local hashing, provenance and divergence detection | Does not claim field or independent replay |
| Promotion gate evaluator | `VERIFIED` | Local G0–G10 conjunctive decision | Does not close remote gates |
| Restore readiness | `VERIFIED` | Local manifest, hash and rollback-window checks | Does not prove production restore |

## Incident Fabric

`CAP-INCIDENT-001` converts an incident-shaped condition into a governed process:

```text
INCIDENT → NONCE / REPLAY CHECK → DENY → QUARANTINE → WRITE BLOCK → EVIDENCE HASH → RECOVERY → REVIEW
```

The capability is implemented and tested within the declared local scope. It is not described as total intrusion prevention, complete production response or a security certification.

## Capability Pack model

CASTÚO-SYSTEM groups domain-specific functions into bounded capability packs that inherit common governance, identity, data, evidence, security and promotion semantics. The current catalogue includes Learning, Bio, Aerial, Robotics, Clinical Evidence and Resilient Navigation.

> Capability pack defined ≠ capability operationally validated.

## COMP metamodel

The governed COMP model covers Capability, Contract, Implementation, Evidence, Claim, Policy, Risk, Owner, Workflow, GovernanceRule, Lifecycle, Telemetry, Trust, Maturity, DataAsset, Identity, Device, DigitalTwin, LedgerAnchor, Incident and RecoveryAction. Its state remains `GOVERNED / IMPLEMENTED IN DECLARED SCOPE`, not `FULL SYSTEM METAMODEL PRODUCTION`.

## Local validation snapshot

The latest declared local snapshot contains **101 passing tests**, TypeScript/build pass, secret scan pass, dependency scan `0 advisories` and an SBOM with **88 direct components**. These are dated, scope-bound execution results and may change as the branch evolves.

| Dimension | Status | Boundary |
|---|---|---|
| Local secret scan | `VERIFIED` | Governed source roots |
| Local dependency scan | `VERIFIED / 0 ADVISORIES` | Declared dependency tree |
| Local SBOM | `VERIFIED` | Generated local artifact |
| TypeScript/build | `VERIFIED` | Local execution |
| Remote Security and quality | `PENDING / NOT_VERIFIED` | `security_events` required |
| Runtime security assurance | `PENDING` | Runtime evidence required |
| Independent review | `PENDING` | Review not completed |
| Field validation | `NOT_CLAIMED` | No field result asserted |
| Production | `NOT_CLAIMED` | No production claim |
| Commercial validation | `NOT_CLAIMED` | No customer/payment claim |
| Federation | `PENDING` | No federation claim |

## External Gate Execution

```text
EXTERNAL BOUNDARY → REQUIRED INPUT → VERIFICATION → EVIDENCE → OWNER DECISION → PROMOTION / ROLLBACK
```

External gates remain evidence-required until execution results are independently recorded. Local tests, local scans, documentation and UI readouts do not substitute for remote Security and quality, Vault provider approval, independent assurance, production restore, field validation, commercial validation or federation proof.

## Public and repository boundaries

The public profile remains a read-model of the canonical control plane. `castuo-progress-dashboard` is the progress, evidence, lineage and promotion surface; it is not treated as an independent source of production truth. `openclaw` and `n8n` remain upstream/fork/external capability boundaries.

## Governance gap P0

Protection of `main` is a governance gap because the authority of change is not yet demonstrated at the same level as the repository's documented technical authority. The target control sequence is:

```text
MAIN → PR REQUIRED → REVIEW REQUIRED → STATUS CHECKS → CODEOWNERS → NO FORCE-PUSH → NO DELETE
```

The existence of this recommendation does not prove that the repository setting is enabled. The actual state must be verified through repository configuration.

## Claim boundary

The following equivalences remain prohibited:

```text
14/14 PASS LOCAL ≠ REMOTE CONFORMANCE
101 TESTS GREEN ≠ PRODUCTION READINESS
0 ADVISORIES ≠ SECURITY ASSURANCE
SBOM ≠ SUPPLY-CHAIN SECURITY
CAPABILITY PACK ≠ OPERATIONAL CAPABILITY
INCIDENT FLOW ≠ PRODUCTION INCIDENT RESPONSE
GOVERNANCE MODEL ≠ CERTIFICATION
REPOSITORY ACTIVITY ≠ CUSTOMER VALIDATION
```

## Main protection verification snapshot

A read-only GitHub API check on 2026-08-18 confirms that `Traky12/Castuo-system/main` and `Traky12/Cast-o/main` require one pull-request approval and dismiss stale reviews. The response reports no required status checks, no enabled administrator enforcement and no restrictions in the returned protection object. This is partial configuration evidence only; it does not close the governance gap. The target remains PR, review, status checks, CODEOWNERS, no force-push and no branch deletion.
