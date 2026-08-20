# CASTÚO-SYSTEM Snapshot History UI — 2026-08-19

## Public scope

The Knowledge Base now exposes a bilingual snapshot-history interface and an accessible manual-refresh interaction. This is a public read-model feature; it does not authorize claims, promotion or operational state.

## Implemented interface

- Manual refresh presents a bounded loading state with a disabled control, visible feedback and reduced-motion compatibility.
- Snapshot history can be filtered by declared date range and state.
- The visible states remain `CURRENT`, `EVIDENCE-SCOPED` and `PROMOTION-BLOCKED`.
- Each displayed record retains its snapshot identifier, timestamp, source repository, source SHA and explanatory note.
- Empty results are explicit; no snapshot is fabricated to satisfy a filter.

## Provenance boundary

The current public refresh remains a projection refresh unless an authenticated GitHub integration returns a verifiable remote response. A `403 Resource not accessible by integration` response must remain visible as an integration boundary. The interface must not present local refresh as real-time GitHub truth.

## Governance mapping

`castuo-evolution` defines snapshot semantics and promotion. The Knowledge Base renders the public projection. `Traky12` publishes the public surface. Human review remains required for promotion.

## Validation

The corresponding Knowledge Base change passed Vitest, TypeScript and production build validation. This UI change does not establish production operation, independent review, regulatory conformity, customer evidence or commercial traction.

## Bilingual public wording

English: **Declared versions. Inspectable filters.**

Español: **Versiones declaradas. Filtros verificables.**

> NO CLAIM WITHOUT PROVENANCE · NINGÚN CLAIM SIN PROVENIENCIA
