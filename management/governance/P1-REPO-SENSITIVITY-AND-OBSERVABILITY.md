# P1 — Repository Sensitivity and Runtime Observability

## Scope

This control package classifies the 16-repository CASTÚO-SYSTEM portfolio by sensitivity, exposure boundary, owner boundary and minimum promotion gate. It also defines runtime observability for the secure connector lifecycle. The implementation is intentionally evidence-first: the catalog is an enforceable design contract, while runtime snapshots are produced only by exercised connector requests.

## Sensitivity policy

| Sensitivity | Minimum boundary | Promotion expectation |
|---|---|---|
| PUBLIC | `PUBLIC_READ` | G0/G1 evidence and no protected data |
| INTERNAL | `PUBLIC_READ` or `AUTHENTICATED` | G1 provenance, contribution control and claim limits |
| RESTRICTED | `AUTHENTICATED` or `BACKEND_ONLY` | G2 authorization, owner isolation and negative tests |
| CRITICAL | `VAULT_ONLY` | G3 operational proof and explicit approval |

The current catalog contains no `CRITICAL` repository because the provider-execution path remains held behind `SECURITY_HOLD`. A future vault-backed execution surface must be reclassified before promotion.

## Runtime observability

`ConnectorRuntimeObservability` records only connector identity, outcome, bounded duration and a stable request-id hash. It never records vault references, scopes, credential versions or provider payloads. The runtime snapshot exposes request counts, accepted/rejected/error counts, error rate, p95 latency and deterministic alert identifiers.

| Alert | Trigger | Meaning |
|---|---|---|
| `ERROR_BUDGET_BURN` | At least five requests and error rate above 1% | Connector error budget is burning and requires investigation |
| `LATENCY_P95_BREACH` | p95 duration above 750 ms | Runtime latency target is breached |

The four SLO definitions in `shared/p1Governance.ts` are targets, not historical claims. The reproducible tests in `server/observability.runtime.test.ts` exercise accepted, rejected and vault-error paths and verify that traces remain redacted.

## Exit criteria

P1 observability is marked implemented because metrics, redacted traces, alert conditions and reproducible failure tests exist in the governed codebase. It does not imply production availability, field validation or independent review. Those claims remain blocked by the P0/P2 gates and must be evidenced separately.
