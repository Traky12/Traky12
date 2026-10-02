# CASTÚO Unified Strategy and Binary Progression

## Strategic position

CASTÚO-SYSTEM is governed as a system for distributed rural operations with evidence governance, assurance, edge and field operations. Its purpose is not to appear production-ready; its purpose is to demonstrate capability progressively, controlled and auditable. Every visible advance must map to a binary condition and must remain evidence-scoped until the required gate is closed.

The operating principles are:

> **No claim without provenance.**
>
> **No AI deployment without assurance.**
>
> **No scale without security and observability.**

These principles connect the public portfolio, the private core, the control plane, the evidence chain and the promotion rules without conflating activity with value.

## Governed portfolio architecture

| Surface | Responsibility | Evidence boundary |
|---|---|---|
| Traky12 | Public surface and professional baseline | Public identity and bounded portfolio narrative |
| castuo-evolution | Governance control plane | Vocabulary, gates, decisions and change policy |
| Cast-o | CI, testing and evidence plane | Reproducible tests, provenance and assurance artifacts |
| goldfish | Security, observability, recovery and assurance | Controls and restore contracts; external runtime still required |
| castuo-agro-edge | Edge, MQTT and device evidence | Device/edge scope; field proof remains separate |
| castuo-offline-field-operations | Offline-first field operations | Capability and local replay; field validation remains B08 |
| Castuo-system | Private platform core | Protected implementation boundary |
| Experimental repositories | Labs and bounded validation | No production or commercial claim by repository presence |

The public/private separation protects sensitive implementation while allowing a coherent governed surface. Repository count, commit volume, README coverage and activity are traceability signals; they are not external operational evidence.

## Binary progression

The binary ontology is strict: `0` means not demonstrated, pending or blocked; `1` means demonstrated with sufficient evidence within the declared scope. There is no partial promotion for being nearly complete. The external-value sequence is:

| Phase | Binary conditions | Meaning when closed |
|---|---|---|
| Existence | B01, B02, B03 | Architecture, implementation and local reproducibility |
| Verifiability | B04, B05 | Remote observation and independent reproduction |
| Operation | B06, B07, B10 | Runtime, observability and operational security |
| Field | B08, B09 | Real field validation and vendor independence |
| Business | B11, B12 | Paid proof and repeatable transferability |

The current external state is `3/12`. Internal control state `B13–B15 = 3/3` covers change lineage, identity and portfolio coherence, but it is deliberately excluded from external technology value. The Binary Bottleneck is `B04 / Remote verification`; Promotion Debt is `9`, and Critical Promotion Debt is `1`.

## Value staircase and claim boundary

Closing `B04+B05` changes the asset from locally governed to externally verifiable. Closing `B06+B07+B10` supports an operationally validated asset. Closing `B08+B09` supports field validation and greater transferability. Closing `B11+B12` supports commercial validation. None of these states may be claimed before the corresponding binaries reach `1` with traceable evidence.

The system therefore keeps the following distinctions explicit:

| Can be stated now | Cannot be stated yet |
|---|---|
| Architecture is defined | Production runtime is validated |
| Capabilities are implemented | CI remote is green and fully verified |
| Local fixtures and tests are reproducible | Independent reproduction is complete |
| Claims and ownership are governed | Field, paid pilot or renewal evidence exists |
| Internal lineage is traceable | Competitive advantage is proven |

## Operating rule for new work

Every task should answer one question before implementation: **which binary changes from `0` to `1`, and what evidence proves the change?** If no binary changes, the task may still improve maintainability or readiness, but it is not a priority value closure. Documentation prepares a gate; it does not close a remote, operational, field or commercial gate by itself.

The canonical implementation is distributed across `shared/binaryValueRule.ts`, `client/src/components/BinaryValueRulePanel.tsx`, `docs/governance/CASTUO-BINARY-VALUE-RULE.md`, `docs/governance/OPEN-EXTERNAL-GATES.md` and the governed README block. Commit lineage remains the source for change traceability; it must be regenerated after every checkpoint and synchronized through governed PRs.
