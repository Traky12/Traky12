# CASTÚO-SYSTEM™ — GREEN-STAGING Risk Register

**Scope:** `Traky12/Traky12` profile surface, governed documentation and read-only GitHub validation workflows.  
**Status:** `GREEN-STAGING · EVIDENCE-SCOPED`  
**System-wide promotion:** `BLOCKED · EXTERNAL EVIDENCE REQUIRED`  
**Review date:** 19 August 2026

> GREEN-STAGING here means that the inspected profile surface and its deterministic repository checks are safe and coherent within staging scope. It does not mean production readiness, independent assurance, field validation, commercial validation or universal security.

## Risk and repair register

| ID | Risk / limitation | Severity | Repair or control | Result |
|---|---|---:|---|---|
| R-001 | Scheduled profile sync had write permission and could push generated README changes automatically | High | Changed `public-profile-sync.yml` to `contents: read`; removed commit/push; mismatches now fail closed and require a reviewed PR | `REPAIRED` |
| R-002 | Evidence workflow did not run for governed `docs/**` changes | Medium | Added `docs/**` and `.github/workflows/**` to push/PR paths | `REPAIRED` |
| R-003 | Secret scan scope covered only evidence-center and README | High | Expanded tracked-file scan to evidence, docs, README and workflows; retained private-material rejection | `REPAIRED` |
| R-004 | Claims could drift from the maturity boundary | High | README now declares profile-surface GREEN-STAGING separately from system promotion and preserves `1D YES · 1R NO · 1V NO · 1A NO` | `REPAIRED / BOUNDARY PRESERVED` |
| R-005 | Pending control-plane links could point to non-existent branch paths | Medium | Replaced branch-file URLs with stable PR #27 links; merged evidence links were checked separately | `REPAIRED` |
| R-006 | Private repositories could be mistaken for publicly inspectable components | Medium | Showcase plan records visibility constraints and does not expose private code, workspaces or pilot surfaces | `CONTROLLED` |
| R-007 | GitHub Advanced Security alert APIs returned HTTP 403 in this session | High | Recorded as `NOT_VERIFIED`; no clean security-alert claim is made. Native GitHub settings/results require owner-enabled access | `OPEN · EXTERNAL ACCESS REQUIRED` |
| R-008 | Required human approval and Code Owner review are not present | High | Branch protection remains fail-closed; no bypass used | `OPEN · HUMAN REVIEW REQUIRED` |
| R-009 | Full security baseline, SBOM, dependency audit, backup/restore and incident exercise are not closed | High | Baseline v1 and execution plan define exact evidence, owners and exit criteria | `OPEN · EXECUTION REQUIRED` |
| R-010 | Remote conformance, independent E3, field and commercial evidence remain pending | High | Proof ladder and S-001 protocol define next gates without inflating status | `OPEN · EXTERNAL EVIDENCE REQUIRED` |

## GREEN-STAGING exit criteria for this surface

| Criterion | Result |
|---|---|
| `git diff --check` | `PASS` before publication |
| No tracked private key-like files | `PASS` in local inspection |
| High-risk secret pattern scan | `PASS` for inspected tracked scopes |
| README claim boundary | `PASS` |
| Documentation and workflow paths covered | `PASS` by workflow configuration |
| Public showcase plan present | `PASS` |
| Stable evidence links | `PASS` for profile, evidence and PR surfaces; pending PR artifact links use PR references |
| Workflow writes or pushes automatically | `NO — REPAIRED` |
| Remote evidence validation | `PASS` in latest completed run before the final workflow change; rerun required after this change |
| Human review | `PENDING` |
| Full system production promotion | `BLOCKED` |

## Required next actions

The next safe action is to let GitHub Actions execute the revised read-only workflows on the new PR head. A reviewer must then inspect and approve the workflow permission reduction and README state distinction. The owner must separately enable or authorize access to GitHub Advanced Security results before any alert-free statement can be made.

Remote conformance, E3 independent reproduction, staging vertical slice, field pilot, paid pilot and measured commercial result remain outside what can be legitimately closed by a profile-only PR.

## Non-claims

This register does not claim absence of vulnerabilities, certification, independent review, production operation, field continuity, customer results, payment, federation, vendor exit or commercial validation. A green staging surface is not a production authorization.

## References

[1]: https://github.com/Traky12/Traky12/pull/18 "Profile PR #18"  
[2]: https://github.com/Traky12/castuo-evolution/pull/27 "Control-plane PR #27"  
[3]: https://github.com/Traky12/castuo-evidence/blob/master/evidence/local/EVID-EVT-0002.json "S-001A evidence record"  
[4]: https://github.com/Traky12/castuo-evidence/blob/master/docs/S001A_FOREIGN_REPLAY_PROTOCOL.md "Foreign replay protocol"
