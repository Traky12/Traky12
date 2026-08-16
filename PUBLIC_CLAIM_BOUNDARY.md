# CASTÚO Public Claim Boundary

## Purpose

This file defines the public boundary for claims made by the `Traky12` profile. It is a public presentation of the control plane, not a replacement for `CASTUO-REPOSITORY-STANDARD-V1.0` or private operational evidence.

## CAN CLAIM

The public profile may claim, within a declared scope, that CASTÚO has documented architecture, implemented repository metadata, conformance tooling, governed evidence contracts, bounded AI governance specifications, security and recovery designs, and reproducible technical work when the corresponding artifact is linked.

The profile may describe **CASTÚO Evidence-Ready Field Operations** as the first commercial wedge or intended customer journey. This describes positioning and scope; it is not proof of a paid customer, recurring revenue, production operation or measured customer result.

## CANNOT CLAIM

The profile must not claim production operation, autonomous authority, physical actuation, financial execution, customer adoption, paid revenue, recurring revenue, certification, regulatory conformity, independent validation, continuous operation, universal interoperability, federation, universal security or guaranteed recovery unless each claim has separate dated and reviewable evidence.

Upstream or fork capabilities from `n8n` and `openclaw` must not be presented as proprietary CASTÚO capabilities without explicit integration evidence and disclosure of upstream status, fork status, local modifications, license and version.

## CLAIM REQUIRES

Every promoted public claim requires, at minimum:

| Requirement | Required content |
|---|---|
| Scope | Repository, component, tenant/node boundary and declared period |
| Commit | Exact source commit or immutable artifact identifier |
| Environment | Local, CI, staging, pilot or other declared environment |
| Evidence | Linked manifest, execution envelope, test, report or result |
| Review | Named or attributable human review with date and decision |
| Gate | Control-plane Gate authorizing the wording |
| Rollback | Revocation, correction or retraction path |

A local conformance PASS is not remote conformance, staging execution, production evidence or commercial evidence.

## Public state vocabulary

The public profile uses the control-plane vocabulary only:

`DOCUMENTED → IMPLEMENTED → TESTED → VALIDATED → OPERATIONAL → REPEATABLE → FEDERATED`

and the promotion vocabulary:

`CANDIDATE → CONFORMANCE → TEST → SECURITY → EVIDENCE → STAGING_EXECUTION → REVIEW → GREEN-STAGING`

`CURRENT`, `TARGET`, `EXPERIMENTAL`, `PENDING` and `NOT_CLAIMED` are presentation labels mapped to those governed states; they are not a parallel taxonomy.

## NEXT PROMOTION

The next valid promotion path is:

```text
14/14 PASS LOCAL
→ PR REVIEW / MERGE
→ REMOTE CONFORMANCE
→ SECURITY BASELINE
→ VERTICAL SLICE
→ EVIDENCE PASSPORT
→ REPLAY / REPRODUCTION
→ HUMAN REVIEW
→ GREEN-STAGING
```

Current global state remains:

```text
GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED · PROMOTION BLOCKED
```
