# CASTÚO External Closure State — 2026-08-18

## Purpose

This document is the operational readout for the remaining external closures in CASTÚO-SYSTEM. It prevents local implementation, remote metadata, evidence, maturity and claim from being conflated. It is a decision-support artifact, not a production approval.

## Executive state

The local control plane is validated and documented. Remote security alert tables remain unreadable because the six tested security endpoints returned `HTTP/2.0 403 Forbidden` for `Traky12/Castuo-system` and `Traky12/Cast-o`. The GitHub session therefore cannot prove `0` remote alerts. The Vault adapter remains provider-neutral in `SECURITY_HOLD`; no real provider has been approved. Restore readiness, assurance, field, commercial and federation remain evidence-required.

## Closure matrix

| Closure | Current state | Evidence available | Required input | Owner / decision | Rollback or safety boundary |
|---|---|---|---|---|---|
| Main-branch zero findings | `BLOCKED` | Local scans pass; remote endpoints return 403 | `security_events`-capable GitHub session | Repository maintainer / security owner | Do not state zero remote findings |
| Security and quality tables | `NOT_VERIFIED` | `code-scanning`, `secret-scanning`, `dependabot` each returned 403 on two repos | Authorized read access and timestamped query | Security owner | Preserve evidence-required state |
| Residual remote remediation | `PENDING` | No remote alert payload is readable | Alert export or authorized API response | Repository maintainer | Do not close or suppress unknown alerts |
| GitHub authorization | `PENDING USER ACTION` | Scope is not available to current session | Authorize `security_events` or use approved authenticated route | Account owner | Never store or print token |
| SaaS Vault provider | `SECURITY_HOLD` | Vault-first boundary, rotation/revocation contracts and provider-neutral adapter | Select HashiCorp Vault or AWS Secrets Manager | Security owner + dual approval | Keep neutral adapter; no provider activation |
| Remote assurance | `EVIDENCE_REQUIRED` | Local tests, scans, SBOM and redacted diagnostics | Checks, logs, annotations and independent review | Assurance owner | Local green does not become remote assurance |
| Production restore | `EVIDENCE_REQUIRED` | Manifest/hash/checkpoint/rollback readiness verifier | Isolated restore execution and review | Operations owner | No production restore claim |
| Field validation | `NOT_CLAIMED` | S-001 fixture and local replay only | Signed pilot packets, KPIs and incident register | Field/pilot owner | Keep N5 blocked |
| Commercial/federation | `NOT_CLAIMED / PENDING` | Capability packs and repository federation contract | Paid pilot, second domain, interoperability proof | Commercial/federation owners | Keep G-COMM/N6 blocked |

## Verified local baseline

The latest local validation contains 104 passing tests across 41 test files, TypeScript and production build pass, secret scan pass, dependency scan `advisories=0`, and an SBOM with 88 direct components. This baseline is reproducible within the declared branch and is not a substitute for remote, runtime, field or commercial evidence.

## Main protection observation

A read-only GitHub API observation reports one required pull-request approval and stale-review dismissal for `Traky12/Castuo-system/main` and `Traky12/Cast-o/main`. It reports no required status checks, no administrator enforcement and no restrictions in the returned protection object. The target control remains `PR REQUIRED → REVIEW REQUIRED → STATUS CHECKS → CODEOWNERS → NO FORCE-PUSH → NO DELETE`; the target is not proof that the configuration is enabled.

## Decision protocol

No external closure is valid until the required input is present, the verification is reproducible, the evidence is linked to a commit or timestamp, the owner approves the decision and rollback is defined. Any missing input keeps the status at `BLOCKED`, `SECURITY_HOLD`, `EVIDENCE_REQUIRED`, `NOT_VERIFIED` or `NOT_CLAIMED`.

## Claim boundary

```text
LOCAL GREEN ≠ REMOTE ZERO
403 ≠ ZERO ALERTS
VAULT-FIRST ≠ APPROVED PROVIDER
RESTORE READINESS ≠ PRODUCTION RESTORE
S-001 LOCAL REPLAY ≠ FIELD VALIDATION
CAPABILITY PACK ≠ OPERATIONAL CAPABILITY
GOVERNANCE MODEL ≠ CERTIFICATION
```
