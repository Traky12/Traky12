# CASTÚO-SYSTEM · Publication and confidentiality boundary

**Public information is a selected read-model, not the private operational authority.** Technical promotion decisions remain in `Traky12/Castuo-system`.

## Safe to publish after review

- Identity, official logo and explanatory audiovisual material with cleared rights.
- Architecture diagrams at functional-layer level, without network topology, infrastructure IPs, tenant IDs or privileged pathways.
- Synthetic demo of the intended **field operation → offline buffer → sync → evidence → report** journey, identifying what is simulated.
- Open-source releases whose provenance, license, third-party attribution and security are reviewed.
- Bounded reproducible tests, including failure cases, with synthetic data and exact source SHA.
- Contact/participation instructions approved for public use.

## Keep private

- Proprietary core, SABIONDA implementation details, private governance registers, critical hardware design and unpublished research.
- Any database password, service_role or secret API key, signing key, access/refresh token, connection string, credential-bearing endpoint or security configuration enabling access.
- Real customer/employee/patient/field information, contracts, quotations, unpublished pilot observations and identifiable telemetry.
- Secrets or paths in history, CI logs, artifacts, screenshots, PDFs or embedded demo files; deleting a later revision does not erase historical public copies.
- Security incidents with exploitable detail until responsibly remediated.

## Supabase API boundary

A Supabase project URL (`https://<PROJECT_REF>.supabase.co`) is an endpoint identifier, not a database password. It may be part of a **reviewed** client application using a publishable key, **but it is not worth advertising as a standalone public README link**. Never publish a Postgres `DATABASE_URL`, service-role/secret key or signing credentials. Exposed application tables require explicit RLS policies and least privilege. Public profile does not claim Supabase production integration.

Guidance: [Supabase securing your data](https://supabase.com/docs/guides/database/secure-data).

## Publishing gate

Before every new public release: (1) identify origin and license; (2) inspect full diff plus binary/assets and repository history; (3) run secret scan and personally identifiable data audit; (4) replace real data with synthetic fixtures; (5) verify claim against exact artifact and tests; (6) request human review; (7) publish only after explicit private canonical Gate decision; (8) document withdrawal/revocation plan.

**Status:** `PUBLICATION_REVIEW_REQUIRED` · `PRODUCTION_NOT_CLAIMED` · `INDEPENDENT_REVIEW_PENDING`.

Publication of this policy itself is documentary and does not satisfy its approval gate.
