# CASTUO Proof Matrix

This public matrix separates professional scope, implementation, testing, evidence, review and promotion. A row is not operational merely because a repository, document or workflow exists.

| Capability / surface | Implementation | Test / validation | Evidence | Review | Gate | Public state |
|---|---|---|---|---|---|---|
| Repository governance | V1.0 references and metadata in declared candidate scope | Local conformance | Reports and source revisions | Human review pending | G0 | `EVIDENCE-SCOPED` |
| Evidence generation | Execution-envelope and manifest structures | Local validation where declared | Hashes, manifests and bounded records | Human review pending | G-E | `TESTED_LOCAL` |
| Offline continuity | Designed and implemented locally where evidenced | Local workflow checks | Field/edge evidence scope | Pilot review pending | G-L | `IMPLEMENTED_LOCAL` |
| Security and recovery | Documented controls and recovery surfaces | Baseline and negative tests pending where not recorded | Assurance documentation | Review pending | G-S | `DOCUMENTED` |
| Remote deployment | Not claimed | No public operational test | None claimed | Not applicable | G-R | `NOT_CLAIMED` |
| Production operation | Not claimed | No public production evidence | None claimed | Not applicable | G-P | `NOT_CLAIMED` |
| Commercial pilot | Bounded offer and PILOT-001 scope documented | Measured execution pending | Customer-approved evidence pending | Commercial/legal review pending | G-C | `PENDING` |
| Independent assurance | Target E3-001 scope documented | Independent reproduction pending | External review pending | Reviewer not yet attributed | E3 | `PENDING` |

## Evidence classes

`CONTRACT → VALIDATION → EXECUTION → REVIEW → PROMOTION`

A contract defines what may happen. Validation checks the declared structure. Execution produces an evidence envelope. Review assesses the result. Promotion is a separate authorised decision.

## Maturity vocabulary

| State | Meaning | What it does not mean |
|---|---|---|
| `DOCUMENTED` | A scope or design is publicly described. | It is not necessarily implemented. |
| `IMPLEMENTED_LOCAL` | Implementation exists within declared local scope. | It is not remote or production operation. |
| `TESTED_LOCAL` | A local test or validation run passed within scope. | It is not independent validation. |
| `EVIDENCE-SCOPED` | Evidence surfaces and boundaries are identified. | It is not a promotion approval. |
| `TARGET` | A future capability or gate is defined. | It is not present capability. |
| `PENDING` | Required execution, evidence or review is incomplete. | It must not be presented as green. |
| `NOT_CLAIMED` | The public profile intentionally makes no claim. | It is not a negative finding about private work. |

## Review rule

`Identity != Documentation != Evidence != Execution != Review != Promotion`

The authoritative source, current revision and public scope are recorded in [`docs/governance/CASTUO_PUBLIC_STATE.yaml`](docs/governance/CASTUO_PUBLIC_STATE.yaml).
