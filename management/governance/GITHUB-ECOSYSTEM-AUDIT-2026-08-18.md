# GitHub Ecosystem Audit — 2026-08-18

## Scope

Auditoría de lectura del perfil `Traky12`, excluyendo los forks `openclaw` y `n8n` y tratando `castuo-progress-dashboard` como fuente local del control plane. El objetivo es identificar superficies autorizadas, PRs, issues, protección de ramas, oportunidades de corrección y límites de verificación remota.

## Inventory

| Repository | Visibility | Fork | Main | PRs total | PRs open | Issues open | Main protection |
|---|---|---:|---|---:|---:|---:|---|
| `Cast-o` | public | no | main | 15 | 12 | 1 | protected |
| `Traky12` | public | no | main | 9 | 8 | 1 | protected |
| `Castuo-system` | private | no | main | 100 | 7 | 7 | protected |
| `-Prueba-final` | private | no | main | 4 | 4 | 0 | protected |
| `castuo-360-v5.3` | private | no | main | 6 | 4 | 0 | protected |
| `castuo-agro-edge` | public | no | main | 5 | 4 | 0 | protected |
| `castuo-offline-field-operations` | public | no | main | 5 | 4 | 0 | protected |
| `ctaex-iot-pilot` | private | no | main | 4 | 4 | 0 | protected |
| `desktop-tutorial` | private | no | main | 4 | 4 | 0 | protected |
| `goldfish` | private | no | main | 38 | 33 | 7 | protected |
| `agrovision-360` | private | no | main | 4 | 4 | 0 | protected |
| `castuo-evolution` | private | no | main | 9 | 4 | 13 | unavailable / not protected response |
| `castuo-strategy-knowledge-base` | private | no | main | 5 | 3 | 0 | protected |
| `copia-de-cast-o-system-strategy-knowledge-base` | private | no | main | 4 | 2 | 0 | unavailable / not protected response |

`castuo-progress-dashboard` is the local management surface and is not counted in the remote governed README inventory. `openclaw` and `n8n` are forks and remain outside the authorized write scope.

## Priority open PRs and issues

`Castuo-system` has seven open issues covering integration points (#311), repository structure (#310), deployment readiness (#309), validation strategy (#308), security hardening (#307), observability (#306) and API documentation (#305). Its open PR queue includes documentation and feature branches and requires review before merge.

`Traky12` has the governed README PRs #10 and #8, plus prior public-surface and brand PRs. Issue #1 tracks the Evidence Center and its N3–N6 promotion plan.

`Cast-o` has governed README PRs #16 and #15, brand/conformance PRs, and several Dependabot PRs. Issue #12 explicitly tracks security triage before promotion and must remain linked to the security gate rather than being marked complete by local scans.

## Committee and ownership interpretation

The repository state supports three committee workstreams:

| Committee | Primary repositories | Decision scope |
|---|---|---|
| Architecture and Sovereignty | `castuo-evolution`, `Castuo-system`, `castuo-progress-dashboard` | Contracts, ownership, data sovereignty, capability packs and G0–G4 |
| Security and Assurance | `goldfish`, `Cast-o`, `Castuo-system` | Security triage, CI, incident/recovery, checks, logs and G5–G7 |
| Field, Commercial and Federation | `castuo-offline-field-operations`, `castuo-agro-edge`, `Traky12` | Pilots, KPIs, economic evidence, interoperability and G8–G10 |

These committees are governance records and proposed workstreams; no meeting outcome, approval or independent review is claimed until a dated record, owner and evidence artifact exists.

## Access and evidence boundary

This audit used read-only GitHub metadata. It does not verify the remote `Security and quality` tables because the current session lacks the `security_events` scope and previous calls returned 403. Local secret/dependency scans and SBOM results remain local evidence only. No token, credential, secret value or private repository content is copied into this report.

## Required next actions

1. Convert the seven `Castuo-system` issues into a single governed P0/P1 execution sequence, preserving their individual issue history.
2. Link the README PRs to the governed block, master architecture, external gate execution pack and current checkpoint.
3. Triage `Cast-o` Dependabot PRs through checks and issue #12; do not infer their security result from the local dashboard scan.
4. Decide whether the two repositories with unavailable main protection responses require a permissions review or an explicit repository-policy record.
5. Create committee records only after the user confirms whether GitHub issues/PR comments may be posted by this task.
6. Close no remote gate until `security_events`, Vault provider, assurance, restore, field, commercial and federation evidence is available.

## Provenance

The inventory was captured through GitHub CLI read-only queries on 2026-08-18. Counts are point-in-time and must be refreshed before any merge, closure or promotion decision.
