# Security Policy

## Scope

This policy covers the public `Traky12` profile and its documentation, workflows and generated public state. It does not disclose private operational evidence, credentials, customer data or restricted security details.

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability, secret exposure, credential disclosure or sensitive evidence leak. Use the repository's private security reporting channel when available. If that channel is unavailable, contact the maintainer through the public contact links in the README and provide a minimal reproducible description without including secrets or personal data.

Reports should include the affected repository or workflow, commit or branch, impact, reproduction steps, and a safe remediation suggestion when available. Do not test physical systems, production systems or third-party infrastructure without explicit authorization.

## Disclosure process

The maintainer will classify the report, preserve relevant evidence, restrict disclosure to the necessary scope, coordinate remediation and record re-test or closure. Public disclosure must not expose credentials, private keys, customer data, sensitive operational evidence or exploitable details before remediation.

## Supported branches

The `main` branch is the public integration branch. Changes must arrive through reviewed pull requests. Feature and governance branches are temporary review surfaces and must not be treated as production or operational branches.

## Dependencies and workflows

Dependencies, GitHub Actions permissions, third-party actions, generated artifacts and external links should be reviewed within the declared scope. Upstream forks must disclose upstream identity, fork status, local modifications, license and version. A green workflow is evidence only for its declared job and does not authorize promotion.

## Secrets rule

Secrets, tokens, credentials, private keys, personal data and restricted operational evidence must never be committed to the repository. If exposure is suspected, stop publication, preserve the minimum necessary forensic context, revoke or rotate the credential through the authorized owner, and record remediation without publishing the secret.

## Evidence handling

Public documentation must remain plaintext, readable, auditable and scope-bound. Sensitive evidence must be stored according to its classification and referenced by a safe manifest or digest where appropriate. A hash proves linkage or integrity of an artifact; it does not prove security, certification, production readiness or legal compliance by itself.

## Promotion boundary

Security documentation is not a security certification. Production, customer, revenue, continuous-operation, autonomous-authority, federation and regulatory claims require separate evidence, human review and an explicit control-plane Gate.
