# Supply-chain controls

The dashboard project now exposes two deterministic local controls: `pnpm security:scan` checks governed source roots for credential-shaped literals, and `pnpm security:sbom` generates `artifacts/security/sbom.json` from `package.json` and `pnpm-lock.yaml`. The SBOM declares the project component, direct runtime/development dependencies and lockfile importer count.

These controls prevent regressions in source and dependency declarations; they do not replace GitHub's remote Dependabot, Code Scanning or secret scanning services. A local `pnpm audit` result is evidence for the checked branch and timestamp only. The remote `Security and quality` table remains the authority for branch-level alert closure, and its 403 access limitation is recorded in `docs/security/REMOTE-VERIFICATION-PROTOCOL.md`.

The P0 exit criterion is therefore split into two independently visible parts: **local control green** means secret scan, SBOM generation and dependency audit pass in the governed branch; **remote assurance green** requires authenticated GitHub alert retrieval and a zero result in each protected `main` branch. The dashboard must not collapse these states.

## Express 4 compatibility exception

The dependency gate now reports `advisories=0` for the governed lockfile. The ReDoS fix for `path-to-regexp` is applied as the scoped override `express>path-to-regexp: 0.1.13`, rather than a global replacement. This preserves Express 4's callable CommonJS export while using the patched upstream release. The runtime was revalidated with TypeScript, the integration suite, secret scanning, SBOM generation and the production build.

This is a compatibility control, not a suppression: the advisory remains represented in the dependency graph and is resolved by the patched package version. Remote GitHub `Security and quality` status is still independently pending until authenticated retrieval is available.

## Expected-result registry

| Control | Expected local result | Expected remote result | Evidence |
|---|---|---|---|
| Supply-chain dependency gate | `pnpm security:deps` exits 0 with `advisories=0` | Protected `main` branches show zero open dependency alerts | `package.json`, `pnpm-lock.yaml`, `artifacts/security/sbom.json`, remote verification protocol |
| Secret boundary | Secret scan exits 0 and no provider credential is present in frontend roots | Repository secret scanning reports zero open alerts | `scripts/security-scan.mjs`, connector lifecycle tests, remote verification protocol |
| Runtime compatibility | Express 4 starts without `pathRegexp is not a function` | CI workflow remains green on protected branches | devserver logs, build and test results |

The registry is intentionally split between local evidence and remotely authenticated evidence; local green status cannot be promoted to a remote claim without the corresponding GitHub readout.

<!-- controls: dependency-scan=0; secret-scan=0; sbom=generated; express-path-to-regexp=0.1.13 -->

## Vault provider selection gate

The provider-neutral `SecurityHoldVaultAdapter` remains active. `shared/vaultProviderGate.ts` records four supported candidate providers and requires owner plus security-reviewer approval before selection. Every candidate is backend-only, least-privilege, auditable, timeout-bounded and fail-closed. No provider is activated and no secret is requested until the approved platform and its environment contract are explicitly supplied.
