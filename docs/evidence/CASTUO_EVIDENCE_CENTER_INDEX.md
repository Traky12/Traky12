# CASTÚO-SYSTEM — Evidence Center Index

## Purpose

This index is the public navigation layer for bounded assurance. It helps a reviewer identify what is demonstrated, what is only documented and what remains blocked without exposing private operational evidence.

| Section | Public source | Interpretation |
|---|---|---|
| Current state | [`CASTUO_PUBLIC_STATE.yaml`](../governance/CASTUO_PUBLIC_STATE.yaml) | Generated state with source SHA, scope and timestamp |
| Professional experience | [`EXPERIENCE.md`](../../EXPERIENCE.md) · [`ES`](../../EXPERIENCE.es.md) | Declared practice scope, not external accreditation |
| Proof Matrix | [`CASTUO_PROOF_MATRIX.md`](../../CASTUO_PROOF_MATRIX.md) · [`ES`](../../CASTUO_PROOF_MATRIX.es.md) | Capability-to-state mapping |
| Operating boundary | [`CASTUO_OPERATING_BOUNDARY.md`](../../CASTUO_OPERATING_BOUNDARY.md) · [`ES`](../../CASTUO_OPERATING_BOUNDARY.es.md) | State definitions and non-promotion rules |
| Repository map | [`CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](../CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) | Public role and boundary of each repository |
| Pilot scope | [`PILOT-001 public scope`](https://github.com/Traky12/castuo-evolution/blob/chore/refresh-integration-status-20260816/docs/pilot/PILOT-001_PUBLIC_SCOPE.md) | Bounded customer-pilot template |
| Commercial gates | [`G0–G8 commercial gates`](https://github.com/Traky12/castuo-evolution/blob/chore/refresh-integration-status-20260816/docs/commercial/COMMERCIAL_READINESS_GATES_G0_G8.md) | Technical-to-commercial promotion model |
| Security and recovery | [`goldfish`](https://github.com/Traky12/goldfish) | Assurance repository; findings remain visible until re-test |
| CI and validation | [`Cast-o`](https://github.com/Traky12/Cast-o) | Validation and provenance tooling |
| Change history | [`CASTUO_RECENT_VERIFIED_CHANGES_2026-08-17.md`](../governance/CASTUO_RECENT_VERIFIED_CHANGES_2026-08-17.md) | Dated public integration changes |
| Independent review | E3 target | Not completed; `PENDING` |

## Evidence classes

```text
contract → validation → execution → review → promotion
```

A public index or link is not itself execution evidence. Raw customer data, private logs, credentials, tax records, contracts and payment records remain outside this public repository unless specifically authorised and redacted.


## Experience, objectives and public evidence

The profile distinguishes professional scope, research and prototyping, innovation or incubation context, architecture work, governance work, business preparation, education and public identifiers. These categories are not interchangeable with operational evidence.

| Record type | Meaning | Public treatment |
|---|---|---|
| `VERIFIED` | A dated source or test supports the declared statement within scope | May be presented with provenance |
| `DOCUMENTED` | A contract, plan, architecture or policy exists | Must not be presented as execution |
| `TARGET` | Intended future capability, pilot or promotion | Must be labelled as target |
| `PENDING` | Required execution, evidence or review is incomplete | Must remain visible as pending |
| `NOT_CLAIMED` | Deliberately outside the authorised claim boundary | Must not be inferred from activity |

Public release controls are linked from the control plane: `PUBLIC_RELEASE_STATUS`, `PUBLIC_RELEASE_GATE`, `PUBLIC_DATA_BOUNDARY`, `IP_AND_LICENSE_BOUNDARY`, `REGULATORY_CLAIM_BOUNDARY` and `FRESHNESS_POLICY`. Human approval remains separate from technical validation.

The public Evidence Center excludes secrets, credentials, private infrastructure details, unnecessary personal data, customer identity, tax records, bank details, private contracts, raw logs and unverified operational evidence. It is an index of proof surfaces, not proof that every listed objective has been completed. The profile publishes only `PUBLIC` and `PUBLIC-SUMMARY`; `REVIEW-ONLY`, `PRIVATE` and `RESTRICTED` material remains excluded.
