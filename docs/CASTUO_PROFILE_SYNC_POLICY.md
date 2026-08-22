# CASTÚO profile synchronization policy

## Scope

The profile README is a public index, not a source of truth for promotion. The canonical control plane remains the authority for vocabulary and gate state. The public E3-001 repository remains the authority for protocol schemas and publication rules. The dashboard is a read-only projection.

## Safe synchronization sequence

1. Read the canonical public status and identify the exact protocol and source commit.
2. Verify that every link added to the profile resolves publicly and that private repositories are not presented as public evidence.
3. Update only public metadata: repository role, protocol link, dashboard link, accepted/rejected/absent snapshot state, hashes and review timestamp when those values are independently verified.
4. Run a diff check and content scan for private keys, tokens, credentials, environment secrets and unredacted operator data.
5. Open a Pull Request against protected `main`; do not bypass required checks or force-push over an existing review.
6. Merge only after the profile checks and required human review pass.

## E3-001 state projection

The profile must use one of these precise labels: `LOCAL FALLBACK`, `REMOTE REJECTED` or `REMOTE ACCEPTED`. `REMOTE ACCEPTED` is allowed only when the public snapshot has passed canonical signature, hash, schema, reviewer-quorum and claim-firewall validation. An available package, local replay, green local test or dashboard simulation is not sufficient.

## Synchronization cadence

The index should be reviewed whenever the E3-001 protocol, accepted snapshot, control-plane state, repository visibility or dashboard URL changes. If no accepted public snapshot exists, the profile must continue to state `PROMOTION-BLOCKED`, preserve `oneR=false`, `oneV=false` and `oneA=false`, and link to the public protocol rather than implying completed external verification.

## Security boundary

No synchronization job may read or write the signing secret. No private key may be committed. No workflow may mark a local candidate as an external runner or transform fallback data into evidence. Any ambiguity must produce a blocked Pull Request rather than an optimistic profile update.
