# Supply-chain controls

The dashboard project now exposes two deterministic local controls: `pnpm security:scan` checks governed source roots for credential-shaped literals, and `pnpm security:sbom` generates `artifacts/security/sbom.json` from `package.json` and `pnpm-lock.yaml`. The SBOM declares the project component, direct runtime/development dependencies and lockfile importer count.

These controls prevent regressions in source and dependency declarations; they do not replace GitHub's remote Dependabot, Code Scanning or secret scanning services. A local `pnpm audit` result is evidence for the checked branch and timestamp only. The remote `Security and quality` table remains the authority for branch-level alert closure, and its 403 access limitation is recorded in `docs/security/REMOTE-VERIFICATION-PROTOCOL.md`.

The P0 exit criterion is therefore split into two independently visible parts: **local control green** means secret scan, SBOM generation and dependency audit pass in the governed branch; **remote assurance green** requires authenticated GitHub alert retrieval and a zero result in each protected `main` branch. The dashboard must not collapse these states.
