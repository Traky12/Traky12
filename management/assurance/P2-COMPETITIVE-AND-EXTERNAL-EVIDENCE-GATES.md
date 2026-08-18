# P2 — Competitive, external and commercial evidence gates

## Purpose

P2 converts the competitive capability hypothesis into a reproducible test programme. It does not promote CASTÚO to N5/N6, certify compliance, or assert commercial superiority. Every external claim remains `UNVERIFIED` until the corresponding gate is satisfied.

## Second implementation gate

The vendor-independence benchmark requires two adapters that consume the same canonical event contract and produce the same redacted evidence envelope. The adapters must differ in provider, deployment boundary or transport. The comparison must record latency, delivery rate, conflict handling, error behavior, provenance identity and rollback semantics. A passing result demonstrates portability for the tested contract only; it does not prove general vendor independence.

| Gate | Required artifact | Pass condition | Failure state |
|---|---|---|---|
| P2-ADAPTER-01 | Canonical event fixture and two adapters | Same normalized output and provenance fields | `PROMOTION-BLOCKED` |
| P2-ADAPTER-02 | Replay and fault-injection report | Deterministic replay under timeout, duplicate and partition cases | `PROMOTION-BLOCKED` |
| P2-ADAPTER-03 | Security comparison | No secret in client, equal redaction and least-privilege envelope | `SECURITY-HOLD` |

## AI Security Passport

The AI Security Passport is default-deny. It requires model and tool provenance, data sensitivity, permitted tools, evaluation scope, human approval, red-team status, deployment boundary, retention and forbidden claims. The passport can describe an evaluation package but cannot state that a model is safe, compliant or independent without evidence and human review.

## External review gate

An external reviewer receives a bounded Evidence Pack with the exact commit, schema, fixtures, scripts, negative evidence and reproduction steps. The reviewer must declare independence, scope, limitations and date. A review of documentation is not a field validation and cannot be used as a commercial outcome.

## Field validation gate

Field validation requires a signed pilot protocol, event capture under normal and degraded connectivity, replayable evidence, conflict/rollback observations, SLO measurements and an owner-approved data-retention record. At least one failure path must be included. Until this exists, `offlineField`, `productionRuntime` and `fieldOutcome` remain `?`.

## Commercial evidence gate

Commercial evidence requires a named pilot or customer artefact, agreed baseline, measured result, period, attribution method and permission to cite. Claims such as market leadership, ROI, renewal, customer satisfaction or productivity gain are forbidden without independent or customer-authorized evidence.

## Current status

The second-implementation and AI Passport contracts are documented locally. No P2 gate is currently promoted: there is no signed field pilot, independent review, commercial outcome, real vault provider approval or remote GitHub assurance readout in this checkpoint.
