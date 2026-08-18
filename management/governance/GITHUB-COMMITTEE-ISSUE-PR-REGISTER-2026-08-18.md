# GitHub Committee, Issue and PR Register — Draft

## Publication boundary

Este registro contiene borradores listos para revisión. No crea issues, comentarios ni PRs por sí solo. La publicación remota requiere confirmación explícita y respetará ramas protegidas, PRs auditables y ausencia de secretos.

## Committee records

| Record | Committee | Owner | Repositories | Decision required | Evidence |
|---|---|---|---|---|---|
| ARC-2026-08-18-01 | Architecture and Sovereignty | `castuo-evolution` | `Castuo-system`, `castuo-progress-dashboard` | Accept master architecture, metamodel and capability-pack rule | Master Architecture Decision, COMP metamodel, current checkpoint |
| SEC-2026-08-18-01 | Security and Assurance | `goldfish` / `Cast-o` | `Castuo-system`, `Cast-o` | Triage Dependabot, remote Security and quality, runtime checks and Vault provider | External Gate Execution Pack, issue #12, redacted checks |
| FLE-2026-08-18-01 | Field, Commercial and Federation | Field owner pending | `castuo-offline-field-operations`, `castuo-agro-edge`, `Traky12` | Approve pilot, economic benchmark and federation protocol | S-001, field protocol, KPI pack and interop proof |

## Issue drafts

| Target | Draft title | Scope | Exit criteria |
|---|---|---|---|
| `Traky12/Castuo-system` | `governance: execute Sovereign Control Plane master plan` | Link master architecture, COMP model, capability packs and G0–G10 | Owner assigned, evidence pack linked, no prohibited claim |
| `Traky12/Castuo-system` | `security: close remote Security and quality gate` | Resolve `security_events` access, enumerate findings, remediate and recheck | Remote evidence shows 0 or all residuals explicitly dispositioned |
| `Traky12/Cast-o` | `security: triage Dependabot queue before promotion` | Review open Dependabot PRs and issue #12 | Checks green, reviewer approval, merge/revert record |
| `Traky12/Traky12` | `docs: maintain governed read-model from control plane` | Link README block, audit, gates and checkpoint | README validates 14/14 where applicable and no claim elevation |

## PR drafts

| Target | Branch name | Proposed contents | Base protection |
|---|---|---|---|
| `Castuo-system` | `docs/castuo-master-plan-20260818` | Master architecture, COMP model, capability packs, Incident Fabric and execution pack | PR only; no direct main write |
| `Cast-o` | `docs/castuo-master-plan-20260818` | Governed block, external security boundary and issue #12 linkage | PR only; checks and review required |
| `Traky12` | `docs/castuo-master-plan-20260818` | Public read-model links, limited narrative and claim boundary | PR only; public claims remain evidence-scoped |

## Comment templates

A committee comment must state the commit SHA, scope reviewed, evidence references, limitations, decision, owner and next action. It must not state `validated`, `secure`, `production`, `field-proven`, `best-in-class` or `zero vulnerabilities` unless the corresponding gate evidence is attached.

## Rollback

If a PR introduces duplicate governed blocks, a prohibited claim, a secret-shaped value, a broken check or an ownership conflict, stop the merge, preserve the review record and revert through a new PR. Never rewrite protected main history.

## Published governance actions

The draft register was converted into traceable comments on existing issues and PRs. Security and assurance context was added to `Castuo-system#307`, supply-chain triage to `Cast-o#12`, and N3–N6 Evidence Center guidance to `Traky12#1`. Governed README review notes were added to `Castuo-system#348`, `Traky12#10` and `Cast-o#16`. All comments preserve the evidence boundary and keep remote gates open until their required artifacts exist.
