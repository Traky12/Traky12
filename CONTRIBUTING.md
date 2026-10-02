# Contributing to CASTÚO-SYSTEM

Thank you for contributing to CASTÚO-SYSTEM. Contributions are evaluated as bounded changes to a governed ecosystem, not as permission to expand public claims.

## Before opening a change

Read the [public operating model](docs/CASTUO_PUBLIC_OPERATING_MODEL.md), the [public claim boundary](PUBLIC_CLAIM_BOUNDARY.md), the [repository map](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) and the repository-specific `docs/CASTUO_BRAND_SURFACE.md` where applicable.

Every change should identify its repository role, scope, owner, intended environment, expected evidence and rollback or removal path. A README, issue, roadmap or workflow must not describe a planned capability as implemented or operational.

## Required distinctions

Use the following vocabulary precisely:

| Term | Required meaning |
|---|---|
| `DOCUMENTED` | Described in a versioned contract or document |
| `IMPLEMENTED` | Code or configuration exists in the declared scope |
| `TESTED` | A declared test has executed and produced evidence |
| `VALIDATED` | Results were checked against the stated acceptance criteria |
| `OPERATIONAL` | Evidence exists for the declared operational environment |
| `REVIEW_REQUIRED` | Human decision is still required |
| `PROMOTION_BLOCKED` | A required gate or artifact is incomplete |

Repository activity never equals operational truth. A local PASS never substitutes for remote checks, staging execution, replay, security evidence or human review.

## Pull request expectations

A pull request should contain a concise scope statement, affected repositories or surfaces, test commands, evidence paths, claim impact, security impact and reviewer requirements. Changes involving promotion, identity, production administration, payments, physical actuation or sensitive data are denied by default unless a separate approved contract exists.

Brand assets may be used for identity and navigation only. They must not be presented as evidence of maturity, certification, compliance or production readiness.

## Review and merge

Merging requires the repository's protected checks and the required human review. Do not bypass branch protection, rewrite historical evidence or delete failed runs. If a check is unavailable, record the missing check as a blocker rather than treating the change as green.
