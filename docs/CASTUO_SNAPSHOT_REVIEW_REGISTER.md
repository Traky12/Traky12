# CASTÚO snapshot review register

This register records public snapshot review decisions. It is an audit index, not an authorization ledger. A missing or rejected remote snapshot must never be interpreted as external verification.

| Review date (UTC) | Snapshot state | Source | E3-001 | Review quorum | G2 | oneR | oneV | oneA | Promotion | Boundary |
|---|---|---|---|---:|---|---|---|---|---|---|
| 2026-08-22 | `LOCAL FALLBACK` / remote snapshot absent | Dashboard fallback | Not accepted | 0/2 | `BLOCKED` | `false` | `false` | `false` | `BLOCKED` | `NO_CLAIM` |

## Review rule

A row may use `REMOTE ACCEPTED` only when the canonical public artifact has passed signature, hash, schema, reviewer-quorum and claim-firewall validation. The row must identify the exact source commit, protocol identifier, snapshot hash, review expiry and verification timestamp. A package being available, a local replay passing or a dashboard simulation succeeding is not sufficient.

## Human review record

For each accepted remote snapshot, append two independent signed review records containing the exact source commit, evidence-envelope hash, replay-result hash, runner-attestation hash, reviewer identity, independence decision, approval decision, signed timestamp, expiry and Ed25519 signature. Do not place private keys, tokens or credentials in this file.

## Current decision

The current row intentionally remains `LOCAL FALLBACK`, with `REMOTE SNAPSHOT REJECTED` / `SIGNATURE PENDING` visible in the dashboard. This is the only permitted public conclusion while the external E3-001 bundle, independent reviews, protected signing secret and accepted snapshot are absent.
