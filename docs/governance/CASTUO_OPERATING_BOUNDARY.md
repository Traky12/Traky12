# CASTÚO-SYSTEM — Operating Boundary

CASTÚO-SYSTEM distinguishes independent states. A later state cannot be inferred from an earlier one.

| State | Meaning |
|---|---|
| `DOCUMENTED` | Capability or architecture is specified in an authorised document. |
| `IMPLEMENTED_LOCAL` | Implementation exists in the declared local scope. |
| `TESTED` | A bounded test executed successfully in the declared environment. |
| `VALIDATED` | Evidence has been reviewed against a defined validation procedure. |
| `OPERATIONAL` | Remote service, owner, access control, observability, backup/restore, rollback and dated evidence have been verified for a declared period. |
| `COMMERCIAL` | Customer scope, contract/order, accepted result, invoice and payment reconciliation are documented. |
| `REPEATABLE` | The delivery can be repeated without rebuilding the system from scratch. |
| `TARGET` | Intended future capability, not current operational truth. |
| `NOT_CLAIMED` | Explicitly outside the public claims authorised by current evidence. |

## Non-promotion rules

No capability is promoted to `OPERATIONAL` from documentation, code presence, local tests, repository activity, badges or README claims alone. No capability is promoted to `COMMERCIAL` from a proposal, product brief or repository commit alone. Legal or regulatory conformity is `NOT_CLAIMED` until a competent review identifies the applicable scope, source, version, decision and evidence.

## Current public boundary

```text
Brand: CURRENT
Architecture: CURRENT / EVIDENCE-SCOPED
Technical implementation: IMPLEMENTED_LOCAL / TESTED where evidenced
Remote production: NOT_CLAIMED
Commercial operation: NOT_CLAIMED
Federation: TARGET
Sovereign AI: TARGET / EVIDENCE-SCOPED by capability
Regulatory conformity: NOT_CLAIMED
```
