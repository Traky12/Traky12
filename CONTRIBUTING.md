# Contributing to CASTÚO-SYSTEM

Thank you for contributing to CASTÚO-SYSTEM. Contributions are evaluated as bounded changes to a governed ecosystem, not as permission to expand public claims.

## Before opening a change

Choose the smallest useful route:

- **Profile documentation or accessibility:** open an issue here with the exact page/section, the confusing behaviour, expected behaviour and a proposed correction. English and Spanish contributions are welcome.
- **e3bundle code or reproduction:** use its [current evaluation instructions](https://github.com/Traky12/castuo-e3-001/blob/main/README.md#install) and [contribution guide](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md). Check the target issue's current state before starting; a paused recruitment issue is not an active invitation.
- **Independent assurance:** follow the target project's formal review protocol. A comment, star or successful local run does not count as an accepted independent attestation.

For a reproduction report, include the exact source SHA, OS/runtime versions, commands, exit codes, expected versus actual result, and sanitized output. State which parts were not run. Use synthetic or public data; never attach tokens, private keys, personal data or private operational logs. Send vulnerability details through the affected repository's security policy rather than a public issue.

First contributions require no private-repository invitation or credentials. Contributors retain responsibility for explaining their changes; disclose substantial AI assistance in the PR. Co-authorship records substantive work, never an achievement exchange.

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
