# Competitive Reproducibility Benchmark S-001

## Strategic role

CASTÚO converts competitive comparison into a governed function of the Evidence Operating System. The purpose is not to prove that CASTÚO is better than Palantir, Microsoft, IBM or another vendor. The purpose is to compare one bounded operational scenario, preserve uncertainty, collect reproducible evidence, assign maturity and authorize only claims that pass the relevant gate.

> **Strategic thesis:** CASTÚO provides an interoperable evidence, assurance and promotion layer for distributed operations and AI-enabled systems. “Evidence-Ready Field Operations” is the commercial wedge beneath that architecture, not a substitute for it.

## Three-plane architecture

| Plane | Responsibility | Evidence boundary |
|---|---|---|
| Internal control plane | Capabilities, evidence, claims, gates, passports and N3/N4/N5/N6 maturity | Authoritative local contracts and governed records |
| Competitive intelligence | 1/0/?/N/A, 1D/1V/1R semantics, scenarios, sensitivity and capability passports | Comparable records with provenance and limitations |
| External validation | Independent review, reproducible benchmark, field pilot, KPI and economic evidence | Signed/reviewable external evidence only |

## Normative separation

`CAPABILITY` is what a system may do. `EVIDENCE` is what is declared, reproduced or independently reproduced. `MATURITY` is the level earned by implementation or validation. `CLAIM` is a bounded statement authorized by a gate. `COMPETITIVE ADVANTAGE` is a strategic conclusion that requires independent benchmark evidence, a signed field pilot and authorized economic evidence. These objects must never be collapsed into a single score.

| Semantic | Meaning | Example | What it does not prove |
|---|---|---|---|
| `1D` | Declared by a primary source | Offline-first is described by a vendor | Reproducibility or field performance |
| `1V` | Verified by a reproducible local/integration test | Offline recovery passes the canonical fixture | Independent validation or production value |
| `1R` | Reproduced independently under the same protocol | Alternative implementation reproduces S-001 | Market leadership or economic advantage |
| `?` | Evidence is insufficient | No independent replay available | It must not be silently converted to `0` |
| `0` | The capability is absent in the tested boundary | Required artifact is not emitted | It does not explain why without a limitation |
| `N/A` | The capability is not comparable for the record | Offline metric does not apply to a hosted-only scope | It must be excluded from the weighted denominator |

## Scenario S-001

S-001 runs the same operational task through CASTÚO and an alternative implementation: capture an event, continue through a bounded connectivity interruption, recover, and emit a reviewable evidence envelope. Inputs, failure schedule and required artifacts are versioned in `shared/reproducibilityFixture.ts`.

The required output is an event trace, recovery record, provenance reference, evidence-completeness record, review decision and claim decision. A local fixture run is labelled `LOCAL REPRODUCTION / NO FIELD CLAIM`. The alternative implementation remains `?` until it is actually built and independently replayed; no simulated alternative result is inserted.

## Metrics and gates

| Metric | Definition | Gate |
|---|---|---|
| Continuity | Required events retained under failure injection | P2 |
| Recovery | Time to recovery plus integrity/provenance match | P2 |
| Provenance | Required provenance fields linked to fixture/commit | P2 |
| Evidence completeness | Required artifacts present; unknown remains unknown | E3 |
| Reviewability | Independent reviewer can replay without hidden state | E3 |
| Claim generation | Claim decision follows evidence and maturity rules | N5 |

`P2` means the protocol and fixture are versioned. `E3` means an independent replay reproduces the evidence envelope and records limitations. `N5` requires a signed real-world pilot with KPIs, rollback evidence and reviewable artifacts. Passing S-001 can authorize only a scoped operational claim; it cannot authorize “best-in-class”, general superiority or commercial advantage.

## Current status

The canonical S-001 contract, deterministic fixture, scoring rules, Passport linkage and dashboard readout are implemented locally and tested. CASTÚO has a local `1V`/`N3` reference status for the fixture, while the alternative implementation remains `?`/`N3`. The current claim decision is blocked before independent replay, and competitive advantage is `NOT_ASSESSED`/`EVIDENCE_REQUIRED` until independent, field and economic evidence exist.

## References

The benchmark uses the governed local contracts and does not fabricate production or competitor measurements. The competitive comparison remains linked to the primary-source registry in `shared/competitiveStudy.ts` and to the persisted Competitive Capability Passports.
