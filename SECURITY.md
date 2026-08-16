# Security Policy

## Scope

This profile is the public entry point for CASTÚO-SYSTEM. It may contain documentation, public evidence indexes, governance references and identity assets. Sensitive execution envelopes, credentials, private endpoints, personal data and protected operational artifacts must not be published here.

## Reporting a vulnerability

Do not open a public issue for credentials, exploitable details, personal data or active infrastructure weaknesses. Use the private security-reporting channel configured for the affected repository, or contact the repository owner through the verified profile channels. Include the affected repository, commit or version, bounded reproduction steps, impact, evidence and a safe mitigation proposal.

## Evidence and security boundaries

Security evidence must identify its scope, environment, commit, tool version, result, reviewer status and handling classification. A security workflow passing in one repository does not certify the ecosystem, a deployment or a production environment.

The following remain denied by default in the initial CASTÚO dry-run scope: payment execution, production database administration, identity administration, direct PostgreSQL, MQTT or Vault access, physical actuation and unrestricted external-system access.

## Public claims

Do not report a vulnerability fix as proof of certification, legal compliance, operational readiness or production security unless the corresponding evidence and review exist. The public claim boundary is defined in [`PUBLIC_CLAIM_BOUNDARY.md`](PUBLIC_CLAIM_BOUNDARY.md) and its Spanish counterpart [`PUBLIC_CLAIM_BOUNDARY.es.md`](PUBLIC_CLAIM_BOUNDARY.es.md).

## Retention

Failed checks, negative tests and blocked promotion attempts are preserved as classified evidence. They are not deleted to create a cleaner public narrative. Secrets must never be committed; if a secret is exposed, revoke it first, then document the incident within the appropriate private channel.
