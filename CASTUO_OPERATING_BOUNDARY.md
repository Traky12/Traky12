# CASTUO Operating Boundary

CASTÚO-SYSTEM distinguishes public identity, declared capability, implementation, testing, evidence, review and promotion. No lower layer substitutes for a higher one.

## State chain

```text
DOCUMENTED
→ IMPLEMENTED_LOCAL
→ TESTED_LOCAL
→ VALIDATED
→ OPERATIONAL
→ REPEATABLE
→ PROMOTED
```

Each transition requires scope, source, result, evidence and the applicable review or gate. A README, commit, pull request, repository activity or green workflow does not promote a capability to `OPERATIONAL`.

## Public boundary

The public profile publishes only `PUBLIC` and `PUBLIC-SUMMARY` information. The following remain excluded unless separately authorised and reviewed:

- secrets, credentials, tokens and private keys;
- private infrastructure routes, topology and access details;
- raw logs, sensitive evidence and personal data not necessary for the public purpose;
- customer identity, contracts, invoices, bank or tax information;
- unverified production, legal, regulatory, financial or commercial claims.

## Operational boundary

`STAGING-CANDIDATE` means that the candidate is prepared for a possible staging execution. It does not mean that staging has executed. `PROMOTION-BLOCKED` remains the correct state while required remote checks, security, evidence, staging execution or human review are incomplete.

`OPERATIONAL` requires an explicit execution environment, bounded owner and scope, observability, reproducible evidence, acceptance criteria, review and an authorised promotion decision.

## Commercial boundary

A documented product direction, engagement model or pilot scope is not a customer, contract, invoice, payment, recurring revenue or measured market result. Public commercial language must remain labelled as `DOCUMENTED`, `TARGET` or `PENDING` until the corresponding evidence exists.

## Legal and regulatory boundary

CASTÚO-SYSTEM documentation is not legal advice and does not claim conformity with GDPR, the EU AI Act, NIS2, CRA, eIDAS or any other regulatory instrument without a defined jurisdiction, source, version, scope, assessment and authorised review.

## Canonical references

- [Generated public state](docs/governance/CASTUO_PUBLIC_STATE.yaml)
- [Proof Matrix](CASTUO_PROOF_MATRIX.md)
- [Public Claim Boundary](PUBLIC_CLAIM_BOUNDARY.md)
- [Evidence Center](docs/evidence/CASTUO_EVIDENCE_CENTER_INDEX.md)

> A failure is retained as evidence: `FAILURE → FINDING → REMEDIATION → RE-TEST`.
