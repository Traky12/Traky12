# CASTÚO public snapshot review policy

## Purpose

This policy defines the minimum human-review contract before an E3-001 result can be described as accepted in a public snapshot. It does not authorize production, commercial, regulatory or customer claims.

## Required state sequence

A public snapshot must distinguish the following states:

| State | Meaning | Permitted claim |
|---|---|---|
| `LOCAL FALLBACK` | Local or candidate data is displayed because no accepted remote snapshot is available | No external verification claim |
| `REMOTE REJECTED` | A remote artifact was fetched but failed signature, hash, schema or firewall validation | No verification claim |
| `REMOTE ACCEPTED` | A remote artifact passed canonical validation and signed reviewer quorum | E3/G2 scope only; `oneA=false` unless separately authorized |

Availability of a package is not acceptance. A local candidate never counts as independent verification.

## Human-review contract

At least two reviewers must be independent of the producer, runner operator and promotion authority. Each review must be signed over the canonical review payload and must include:

```text
independence: true
decision: APPROVE | REJECT
source_commit: <exact 40-character commit>
evidence_hash: <lowercase SHA-256>
replay_result_hash: <lowercase SHA-256>
attestation_hash: <lowercase SHA-256>
protocol_id: E3-001-S001A-FOREIGN-REPLAY
reviewed_at: <RFC3339 UTC timestamp>
expires_at: <RFC3339 UTC timestamp>
signature: <Ed25519 signature>
```

The validator must reject duplicate reviewer identities, missing signatures, divergent hashes, expired reviews, non-approval decisions, producer/authority overlap and any review whose scope does not match the bundle.

## Snapshot publication rules

The private signing key must remain outside repositories, browsers and chat. The public snapshot may expose only status metadata, canonical hashes, source commit, protocol identifier, reviewer count, review expiry and claim boundary. It must never expose private keys, tokens, credentials, raw secret material or unredacted operator data.

The public status must remain `PROMOTION-BLOCKED` until the full gate chain passes. G2 confirms external evidence and review scope; it does not set `oneA=true`. Any rejected, absent or expired snapshot must fall back to a no-claim state.

## Audit trail

Every accepted snapshot should link to a public immutable artifact or content address, record the verification time and retain the previous snapshot state for comparison. If any input changes, the snapshot must be revalidated rather than silently updated.
