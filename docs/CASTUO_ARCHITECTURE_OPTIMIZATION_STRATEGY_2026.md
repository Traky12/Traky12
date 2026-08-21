# CASTÚO Architecture Optimization & Effectiveness Strategy 2026

## Executive position

CASTÚO should optimize for **verifiable operational independence**, not for repository count, feature breadth or maturity labels. The next stage is a governed transition from a broad architecture target to a small number of repeatable vertical slices that can be inspected by an external operator without trusting CASTÚO's own claims.

The governing rule is:

> Capability is not implementation; implementation is not evidence; evidence is not maturity; maturity is not authority; authority is not production promotion.

The current system is architecturally advanced and evidence-engineering mature, while independent external verification, field validation, commercial validation and production authorization remain separate gates. This strategy improves the system without inflating those claims.

## Current evidence-scoped baseline

| Domain | Current defensible state | Optimization objective | Claim boundary |
|---|---|---|---|
| Architecture | Broad multi-repository ecosystem with control, core, evidence, edge and field surfaces | Reduce critical coupling and make contracts executable | Architecture target / implemented components |
| Governance | Policy, schema, validator and evidence chain exists | Make every critical gate observable and replayable | Governance implemented locally |
| Evidence | E3-001 protocol, validators, firewall and public dashboard exist | Close the external runner and signed review path | Evidence-scoped; external verification pending |
| Resilience | Offline-first and recovery patterns are specified across the ecosystem | Prove durable local operation, recovery and replay under fault | Scenario-scoped; field evidence pending |
| Provider independence | Adapters and exit intent are documented | Execute provider substitution and continued operation | Vendor exit pending |
| Promotion | Binary fail-closed path with `oneA=false` and `promotion=BLOCKED` | Connect signed evidence to a protected staging gate | No production authorization claim |
| Dashboard | Public Field Signal Ledger distinguishes local, candidate, remote and historical states | Make evidence provenance and blocker age immediately inspectable | Read-only public surface |

## Optimization principles

### 1. Freeze horizontal expansion

For each quarter, select no more than two critical vertical slices. The preferred slice is S-001A: fault → policy decision → deny/degrade/buffer/quarantine → durable evidence → recovery → foreign replay → independent review → G2 → protected staging. New modules that do not advance a mandatory gate remain `ARCHITECTURE_TARGET` or `BACKLOG`, not promoted capability.

### 2. Turn every critical interface into a contract

Every cross-repository connection must identify producer, consumer, schema version, compatibility rule, failure behavior, evidence reference, owner, rollback and last verified commit. Documentation-only references are useful context but never close a contract gate.

### 3. Optimize for evidence yield

Use engineering effort where it closes mandatory states:

```text
Evidence Yield = newly verified mandatory states / engineering effort
Promotion Debt Burn = closed mandatory states / outstanding critical states
```

These are internal operating metrics, not commercial scores. They must be accompanied by the underlying evidence IDs, timestamps, commits, hashes and limitations.

### 4. Preserve fail-closed semantics

Unknown, expired, unsigned, replay-incomplete, reviewer-incomplete, provenance-missing or authority-unbounded states resolve to `BLOCKED`, `REVIEW`, `NO_CLAIM` or `RECOVERY_REQUIRED`. No average score may compensate for a missing critical gate.

### 5. Keep authority separate from intelligence

Agents may detect, classify, compare, propose and prepare. They do not change gates, access signing secrets, widen scope, approve their own output or promote production claims. Any controlled action must follow `DETECT → CLASSIFY → PROPOSE → AUTHORIZE → EXECUTE → VERIFY → EVIDENCE`.

## Target operating architecture

```text
Experience / Dashboard
        │ read-only projections
        ▼
Evidence & Claim Surface ─── Public protocol / dossier / signed snapshot
        │ canonical evidence envelope
        ▼
Assurance Control Plane ─── policy → schema → validator → replay → review → G2
        │ governed contracts
        ▼
Core / Domain Services ─── deterministic behavior and recovery
        │ bounded adapters
        ▼
Edge / Offline / Field ─── local identity, policy cache, buffer, sync, conflict
        │ provider exit tests
        ▼
Portable Runtime & Evidence Root
```

The architecture should expose three separate planes. The **execution plane** runs capability behavior. The **assurance plane** verifies behavior, provenance, failure and recovery. The **authority plane** decides whether an action or promotion is allowed. No plane may silently impersonate another.

## Roadmap: N4 → N5 → N6 readiness

### P0 — Control the system vocabulary

Create a canonical repository registry, contract registry, System-Change ID, owner map, dependency criticality D0–D5, CODEOWNERS alignment, required checks and a shared claim-state vocabulary. Acceptance is binary: every critical repository and interface has an owner, contract, status, evidence reference and rollback boundary.

### P1 — Close the S-001A vertical slice

Freeze fixture and source commit; execute an external offline replay; produce a signed runner attestation; obtain two independent human reviews; evaluate G2; run the protected staging handoff; publish a signed snapshot that remains `oneA=false` and `promotion=BLOCKED`. Acceptance requires the foreign verifier to reproduce the result without modifying the system.

### P2 — Make resilience portable

Add capability, sovereignty, evidence and trust passports. Prove durable local events, identity continuity, cached policy, bounded buffer, deduplication, temporal integrity, later synchronization, conflict handling and rollback. Run Provider A → canonical contract → Provider B → replay → equivalent result → continued operation for each D0–D2 dependency.

### P3 — Operationalize field evidence

Run controlled pilots with declared endpoints, signed KPI reports, failure/recovery traces, operator review and retention policy. N5 is a pilot state, not a production claim. Each pilot must identify what was measured, where, for how long, with which version and what remained out of scope.

### P4 — Establish sustained operation

Only after repeatable field evidence, observability, alerting, incident response, rollback and service ownership are demonstrated should a capability approach N6 operational readiness. N6 is not inferred from documentation or test volume.

### P5 — Federation and commercial boundary

Treat federation and commercial validation as independent tracks. Verify export/import, alternative provider operation, trust exchange, legal/operational boundaries and continued evidence portability before claiming federation or vendor exit. Customer interest is not customer evidence.

## Mandatory passports and records

| Record | Minimum purpose | Required closure evidence |
|---|---|---|
| Capability Passport | What the capability does and its contract | Conformance tests, owner, failure behavior |
| Sovereignty Passport | What remains operable and exportable without a provider | Offline run, export, substitution and replay |
| Evidence Passport | What was observed, where and under which scope | Hashes, provenance, retention, review and replay |
| Trust Passport | What authority may act and under what limits | AuthorityObject, expiry, approval and rollback |
| Dependency Exit Record | Whether a critical dependency can be replaced | Provider A/B equivalence and continued operation |
| Change Envelope | How a cross-repository change is traced | System-Change ID, commits, contracts, tests and evidence |

## Operational artifacts

The strategy is executable through versioned control-plane artifacts:

| Artifact | Purpose |
|---|---|
| [`contract-registry.yaml`](https://github.com/Traky12/castuo-evolution/blob/integration/connection-analysis-2026-08/data/architecture/contract-registry.yaml) | Critical producers, consumers, schema versions, owners, failure modes and next gates |
| [`effectiveness-scorecard.yaml`](https://github.com/Traky12/castuo-evolution/blob/integration/connection-analysis-2026-08/data/architecture/effectiveness-scorecard.yaml) | Denominator-safe effectiveness metrics and missing-data decisions |
| [`resilience-scenarios.yaml`](https://github.com/Traky12/castuo-evolution/blob/integration/connection-analysis-2026-08/data/architecture/resilience-scenarios.yaml) | Fault, decision, recovery, replay and promotion impact |
| [`dependency-exit-matrix.yaml`](https://github.com/Traky12/castuo-evolution/blob/integration/connection-analysis-2026-08/data/architecture/dependency-exit-matrix.yaml) | D0–D5 criticality, canonical contracts, substitution and continued operation |
| [`system-change-envelope.yaml`](https://github.com/Traky12/castuo-evolution/blob/integration/connection-analysis-2026-08/templates/system-change-envelope.yaml) | Requirement-to-promotion lineage with evidence, authority and rollback |
| [`validate_architecture_strategy.py`](https://github.com/Traky12/castuo-evolution/blob/integration/connection-analysis-2026-08/scripts/validate_architecture_strategy.py) | Fail-closed package validator |

The package currently validates locally as `EVIDENCE_SCOPED`; it does not authorize production or establish independent verification.

## Operational scorecard

The dashboard should report dimensions rather than one opaque score:

| Dimension | Example indicator | Gate meaning |
|---|---|---|
| Contract integrity | schema and conformance status | `BLOCKED` on mismatch |
| Evidence freshness | age of last accepted evidence | review when expired |
| Replayability | foreign replay and equivalence | required for `oneR` |
| Review independence | distinct signed reviewers | required for G2 |
| Recovery | completion and rollback evidence | required for resilience |
| Provider exit | substitution and continued operation | required for exit claim |
| Authority | bounded, approved, unexpired | required for any side effect |
| Promotion debt | mandatory gates still open | no production shortcut |

## Failure and recovery catalogue

Prioritize failure scenarios by impact, not novelty:

1. Connectivity loss with local operation, buffer, reconciliation and conflict resolution.
2. Evidence store unavailable while local evidence root remains durable.
3. Identity provider unavailable with bounded degraded identity.
4. Policy service unavailable with a cached, expiring policy.
5. AI provider unavailable with deterministic fallback or human route.
6. Corrupt or replayed evidence rejected by hash, sequence and signature checks.
7. Provider substitution with canonical contract and continued operation.
8. Unauthorized promotion attempt rejected by the authority and claim firewalls.

Each scenario must record fault, expected decision, observed decision, evidence event, recovery, replay, equivalence, reviewer state and promotion impact.

## GitHub contribution model

The public profile should show architecture, evidence and limits in one place. Contributions should be small, reviewable and attributable:

| Repository surface | Contribution |
|---|---|
| `Traky12` profile | This strategy, public repository map, maturity/claim baseline and next-gate links |
| `castuo-evolution` | Canonical optimization roadmap, dependency-exit matrix, gate definitions and System-Change records |
| `castuo-e3-001` | Operational runbook, preflight, protocol, schemas, firewall and signed snapshot workflow |
| `Castuo-system` | Architecture boundary, contract map and evidence-scoped integration link |
| `castuo-evidence` | Portable evidence envelopes, negative scenarios and replay references |
| `castuo-live-status-dashboard` | Public read-only projection with current state, evidence ladder and blocker age |

Every contribution must include: purpose, scope, source commit, validation command, claim boundary, known limitations and next gate. Profile copy should link to evidence rather than repeating maturity claims.

## 90-day execution cadence

| Window | Objective | Exit criterion |
|---|---|---|
| Days 0–15 | Vocabulary, registry, ownership, contract and metric baseline | critical graph and blockers published |
| Days 16–30 | S-001A external replay package | validator returns eligible-for-G2 or explicit blocked findings |
| Days 31–45 | Signed reviews and G2 | two independent reviews and G2 decision are replayable |
| Days 46–60 | Protected staging handoff | staging artifacts and rollback are independently inspectable |
| Days 61–75 | Offline/resilience and provider-exit scenarios | at least one D0/D1 dependency has substitution evidence |
| Days 76–90 | Pilot readiness dossier | measured pilot protocol, KPI definitions and claim ceiling published |

## Definition of done

The architecture is optimized when critical paths are smaller, contracts are executable, failure states are observable, recovery is repeatable, evidence is portable, authority is bounded, providers are replaceable where claimed and every public statement maps to an external reader-verifiable artifact. Until those gates close, the correct state remains `EVIDENCE_REQUIRED`, `EXTERNAL_VERIFICATION_PENDING`, `BLOCKED` or `NO_CLAIM`.
