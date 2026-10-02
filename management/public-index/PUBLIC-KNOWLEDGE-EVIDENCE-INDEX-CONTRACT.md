# Public Knowledge & Evidence Index Contract v1.0

## Authority and boundary

The Public Knowledge & Evidence Index is a **public read-model**. The Portfolio Control Plane remains authoritative for vocabulary, source state, evidence policy and promotion. The index may expose only public, human-approved records; it must exclude secrets, credentials, private infrastructure, unnecessary personal data and unverified production evidence.

The current snapshot contains **29 public records across 14 indexed surfaces**. These are different dimensions: a record is an indexed item, while a surface is a public entry point or bounded repository view. The index declares `STAGING-CANDIDATE` and `PROMOTION-BLOCKED`; it declares zero verified production claims.

## Record envelope

Every record must expose `id`, `title`, `source`, `state`, `recordType` and `limitation`. The `source` points to the canonical or candidate artifact, while `limitation` prevents the read-model from becoming an unsupported claim.

| State | Meaning |
|---|---|
| `FROZEN` / `CANONICAL` | Normative or vocabulary source; not proof of runtime maturity. |
| `EVIDENCE-SCOPED` | Evidence is visible within an explicitly bounded scope. |
| `CANDIDATE` / `TARGET` | Proposed or planned state; not a release claim. |
| `DEFINED` / `AUTOMATABLE` | Contract or runbook exists; execution still requires result evidence. |
| `BLOCKED` / `PROMOTION-BLOCKED` | A gate, review or dependency prevents promotion. |
| `IMPLEMENTATION` / `CAPABILITY` | Technical surface exists; production or field performance is not implied. |

## SaaS integration boundary

The SaaS is represented through the existing vault-first model. Public records may expose connector intents, permission state, redacted audit outcomes, credential-version metadata, approval state and rollback bounds. They must never expose provider secrets, raw payloads, API keys, cookies, bearer tokens or browser storage values. Provider execution remains behind the provider-neutral vault adapter and `SECURITY_HOLD` until an approved vault provider is configured.

## Evidence and trust cross-references

The read-model links four bounded control surfaces: Secure Connectors / SaaS, Evidence Passport, Capability Trust Passport, and Promotion gates / Negative Evidence. These are references, not claims. Evidence Passport links scope and provenance. Trust Passport keeps security, reproducibility and independent review pending by default. Gates determine promotion. Negative Evidence records failure, exclusion and untested scope so the public index cannot smooth over uncertainty.

## Release gate

`G-P0` through `G-P9` require human approval and source review. `GATE-R1 / External Readability` asks whether an independent reader can find the contract, implementation, evidence, reproduction test, limitations and forbidden claims. `G-COMM` remains separate from technical validation and requires customer, KPI, price, payment, delivery, review and repeatability evidence.

The dashboard is allowed to show `EVIDENCE-SCOPED`, `STAGING-CANDIDATE` and `PROMOTION-BLOCKED` simultaneously. It must not replace these with a single confidence score or infer production readiness from a public record count.
