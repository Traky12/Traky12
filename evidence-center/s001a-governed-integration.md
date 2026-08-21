# S-001A Governed Integration

## Public scope

This page records the public integration boundary for the S-001A vertical slice across the CASTÚO ecosystem. It is a navigation and claim-boundary record, not an independent review or production authorization.

| Surface | Reference | Public state |
|---|---|---|
| Governance control plane | [castuo-evolution PR #31](https://github.com/Traky12/castuo-evolution/pull/31) | Open and blocked by required review/checks |
| Core implementation | [Castuo-system PR #363](https://github.com/Traky12/Castuo-system/pull/363) | Open and blocked by required review/checks |
| Operational guide | [S001A review gate](https://github.com/Traky12/castuo-evolution/blob/integration/connection-analysis-2026-08/docs/S001A_REVIEW_GATE.md) | Published on integration branch |
| Staging workflow | [RLS-001 workflow](https://github.com/Traky12/Castuo-system/blob/docs/governed-evidence-boundary-2026-08/.github/workflows/rls-001-integration.yml) | Implemented; environment setup pending |

## Capability index

The detailed public capability matrix lives in [`castuo-evolution/docs/CASTUO_CAPABILITY_MATRIX.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/CASTUO_CAPABILITY_MATRIX.md). It is the shared navigation layer for governance, RLS-001, foreign replay, review, adapter validation and promotion authority. It is not a maturity or production certification.

## Evidence boundary

The control plane contains an offline replay candidate runner, a hash-checked review gate, multiple-reviewer quorum support and an explicit Evidence Envelope v2 adapter. These mechanisms are locally tested within declared scope. They do not constitute foreign validation, independent review, production readiness, certification, customer adoption or commercial traction.

```yaml
oneD: true
oneR: false
oneV: false
oneA: false
promotion: BLOCKED
claim_boundary: PUBLIC_NAVIGATION_AND_EVIDENCE_SCOPE_ONLY
```

## Pending external actions

The `staging-rls` environment must be created by an authorized GitHub administrator with real reviewers, an isolated endpoint and secrets stored only in the protected environment. E3-001 foreign replay must be repeated by an independent runner. A human reviewer must inspect the frozen fixture, commands, failure/recovery results and hashes before `oneV` can be changed through a governed evidence PR. A separate signed AuthorityObject and G2 decision are required before `oneA` can become true.


## External verifiability milestone

The next economic-impact milestone is verification by an actor other than the implementation author. The operational sequence is:

```text
independent foreign replay
→ signed human review
→ G2 PASS
→ protected staging-rls handoff
```

The control plane now provides a read-only bundle validator for frozen source commits, fixture/result/envelope hashes, an Ed25519 runner attestation and a quorum of independent signed reviewers. Its output is evidence for G2, not a production authorization. The public status remains:

```yaml
oneR: false
oneV: false
oneA: false
promotion: BLOCKED
claim_boundary: EXTERNAL_VERIFICATION_PENDING
```

See the [external verifiability runbook](https://github.com/Traky12/castuo-evolution/blob/main/docs/EXTERNAL_VERIFIABILITY_RUNBOOK.md) for the operator procedure. No private keys, tokens or environment values are published here.
