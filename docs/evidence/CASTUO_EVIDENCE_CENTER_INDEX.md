# CASTÚO-SYSTEM — Evidence Center Index

## Purpose

This index is the public navigation layer for bounded assurance. It helps a reviewer identify what is demonstrated, what is only documented and what remains blocked without exposing private operational evidence.

| Section | Public source | Interpretation |
|---|---|---|
| Current state | [`CASTUO_PUBLIC_STATE.yaml`](../governance/CASTUO_PUBLIC_STATE.yaml) | Generated state with source SHA, scope and timestamp |
| Proof Matrix | [`CASTUO_PROOF_MATRIX.md`](../governance/CASTUO_PROOF_MATRIX.md) | Capability-to-state mapping |
| Operating boundary | [`CASTUO_OPERATING_BOUNDARY.md`](../governance/CASTUO_OPERATING_BOUNDARY.md) | State definitions and non-promotion rules |
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
