# CASTÚO-SYSTEM™ — Reviewer Commands, Conformance Plan and Security Presentation

**Audience:** reviewers, Code Owners and staging operators.  
**Scope:** PRs #18, #26 and #27; remote conformance 14/14; Security Baseline v1.  
**Current state:** `GREEN-STAGING · EVIDENCE-SCOPED`; system promotion `BLOCKED`.

> The commands below are intentionally fail-closed. They do not bypass branch protection, fabricate approvals or turn local validation into independent evidence.

## 1. Preconditions and identity checks

Run these commands before touching any branch:

```bash
gh auth status
gh repo view Traky12/Traky12
gh repo view Traky12/castuo-evolution
gh repo view Traky12/castuo-evidence

gh pr view 18 --repo Traky12/Traky12 --json state,mergeable,mergeStateStatus,reviewDecision,headRefName,baseRefName,url
gh pr view 26 --repo Traky12/castuo-evolution --json state,mergeable,mergeStateStatus,reviewDecision,headRefName,baseRefName,url
gh pr view 27 --repo Traky12/castuo-evolution --json state,mergeable,mergeStateStatus,reviewDecision,headRefName,baseRefName,url
```

Inspect the protections and required contexts:

```bash
gh api repos/Traky12/Traky12/branches/main/protection \
  --jq '{reviews:.required_pull_request_reviews,checks:.required_status_checks,enforce_admins}'

gh api repos/Traky12/castuo-evolution/branches/main/protection \
  --jq '{reviews:.required_pull_request_reviews,checks:.required_status_checks,enforce_admins}'
```

For the profile, the required contexts are currently `Validate evidence dossiers` and `sync`. The reviewer must ensure that both appear for the current head. The workflow change that made profile synchronization read-only must not be weakened to make a status green.

## 2. Update and validate PR #18 — profile

The author or maintainer updates the branch; the reviewer does not approve their own work:

```bash
gh pr checkout 18 --repo Traky12/Traky12
cd Traky12

git fetch origin --prune
git status --short
git diff --check
git log -1 --oneline --decorate

grep -q 'GREEN-STAGING · EVIDENCE-SCOPED — PROFILE SURFACE' README.md
grep -q 'PROMOTION BLOCKED' README.md
grep -q 'docs/CASTUO_MASTER_PROGRESS_PROTOCOL.md' README.md
grep -q 'docs/CASTUO_PROMOTION_PR_SECURITY_PRESENTATION_REPORT.md' README.md
test "$(grep -c '^## Current position$' README.md)" -eq 1

python3 - <<'PY'
from pathlib import Path
import yaml
for p in [Path('.github/workflows/evidence-center-validation.yml'),
          Path('.github/workflows/public-profile-sync.yml')]:
    assert isinstance(yaml.safe_load(p.read_text()), dict)
print('workflow YAML: PASS')
PY

git diff --check
gh pr checks 18 --repo Traky12/Traky12 --watch
```

If `main` advanced, update the PR branch through a reviewed branch update:

```bash
git fetch origin main
git rebase origin/main
git diff --check
git push --force-with-lease origin HEAD:chore/evidence-scoped-capability-profile
```

After any push, wait for the checks again:

```bash
gh pr checks 18 --repo Traky12/Traky12 --watch
gh pr view 18 --repo Traky12/Traky12 --json mergeable,mergeStateStatus,reviewDecision
```

### Human approval for PR #18

A reviewer who is not the author runs:

```bash
gh pr review 18 --repo Traky12/Traky12 --approve --body "Reviewed README, workflow permissions, evidence links, claim boundary and GREEN-STAGING scope. No production or independent-review claim is introduced."
```

Then confirm review and conversations:

```bash
gh pr view 18 --repo Traky12/Traky12 --json reviews,latestReviews,reviewDecision,mergeStateStatus
```

If a review comment exists, the author resolves it in GitHub after the reviewer confirms the fix. The author must not self-approve. Because stale reviews are dismissed, any new push requires a fresh approval.

Merge only after all required contexts and review rules are satisfied:

```bash
gh pr merge 18 --repo Traky12/Traky12 --squash --delete-branch=false
```

If the repository is intentionally configured for auto-merge, the non-bypass alternative is:

```bash
gh pr merge 18 --repo Traky12/Traky12 --auto --squash --delete-branch=false
```

## 3. Update and validate PR #26 — EvOS/E3 baseline

```bash
gh pr checkout 26 --repo Traky12/castuo-evolution
cd castuo-evolution

git fetch origin --prune
git status --short
git diff --check

gh pr checks 26 --repo Traky12/castuo-evolution --watch
```

Run the repository-native validation defined by the PR, then inspect the exact diff:

```bash
gh pr diff 26 --repo Traky12/castuo-evolution

gh pr view 26 --repo Traky12/castuo-evolution --json files,commits,reviews,reviewDecision,mergeStateStatus
```

A reviewer who is not the author approves after verifying the EvOS freeze, E3 manifest, negative tests, hashes, limitations and claim boundary:

```bash
gh pr review 26 --repo Traky12/castuo-evolution --approve --body "Reviewed EvOS freeze, E3 manifest, negative tests, hashes, limitations and bounded claim boundary. Approval is limited to the reviewed diff."
gh pr merge 26 --repo Traky12/castuo-evolution --auto --squash --delete-branch=false
```

If auto-merge is not enabled, replace the final command with:

```bash
gh pr merge 26 --repo Traky12/castuo-evolution --squash --delete-branch=false
```

## 4. Update and validate PR #27 — capability and profile registers

Merge #26 first if #27 depends on its baseline. Then update and inspect #27:

```bash
gh pr checkout 27 --repo Traky12/castuo-evolution
cd castuo-evolution

git fetch origin --prune
git status --short
git diff --check
gh pr diff 27 --repo Traky12/castuo-evolution
gh pr checks 27 --repo Traky12/castuo-evolution --watch
```

Review `data/capabilities.yaml`, `data/profiles.yaml`, the production gate checklist, readiness assessment and proof ladder. Approve only if `CURRENT`, `EXPERIMENTAL`, `TARGET`, `VALIDATED_LOCAL`, `EVIDENCE_SCOPED` and `NOT_CLAIMED` remain distinct:

```bash
gh pr review 27 --repo Traky12/castuo-evolution --approve --body "Reviewed capability states, profiles, proof ladder, production gates and explicit no-claims. Approval is limited to evidence-scoped maturity; no production or independent-validation claim is authorized."
gh pr merge 27 --repo Traky12/castuo-evolution --auto --squash --delete-branch=false
```

## 5. Remote conformance 14/14 plan

### Phase A — Freeze the input set

Create a manifest containing the exact 14 repositories, base commit, branch, runtime versions, commands, expected outputs, negative tests, environment and claim boundary. Freeze the manifest in a reviewed commit. The suite must not silently follow moving `main`.

### Phase B — Execute one deterministic job per repository

Each job records:

| Field | Required value |
|---|---|
| Repository | Full `owner/name` |
| Commit | Immutable SHA |
| Workflow run | GitHub Actions run and job URL |
| Environment | Runner image, OS, runtime and dependency versions |
| Command | Exact command line, including flags |
| Result | `PASS`, `FAIL`, `BLOCKED` or `NOT_APPLICABLE` |
| Artifact | Path and immutable artifact identifier |
| Hash | SHA-256 of the artifact and input fixture |
| Negative test | Failure or deny path and expected policy |
| Recovery | Recovery command/result and rollback boundary |
| Reviewer | Human reviewer and review timestamp |

The result is `14/14 PASS REMOTE` only when all fourteen records are independently present, reproducible and free of unresolved `FAIL` or `BLOCKED` entries. A local replay cannot satisfy this gate.

### Phase C — Negative and recovery coverage

For each repository or declared capability, run at least one bounded negative path: invalid input, denied authority, unavailable dependency, connectivity loss, corrupted evidence or rollback request. Record expected decision, observed decision, evidence event and recovery result. Missing negative or recovery evidence keeps the gate blocked.

### Phase D — Close the conformance gate

Publish a signed or reviewed summary with the manifest SHA, all fourteen result hashes, workflow run links, known limitations and a human decision. Update the control plane only through a PR. Do not replace `PENDING` with `PASS` based on documentation alone.

## 6. Security Baseline v1 in staging

### Control sequence

| Order | Control | Evidence required | Exit condition |
|---:|---|---|---|
| 1 | Dependency inventory | Lockfiles, dependency graph and dated scan | Critical/high issues remediated or explicitly accepted with owner and expiry |
| 2 | Secret controls | Secret scan result, tracked-file scan and rotation record | No unreviewed secret exposure; exceptions documented |
| 3 | SBOM | Versioned SBOM per candidate repository/image | SBOM hash linked to commit and scan |
| 4 | Code scanning | Enabled workflow and alert export | Alerts triaged; no unaccepted blocking finding |
| 5 | Container scanning | Image digest and scan, where applicable | Digest pinned; findings handled |
| 6 | Permissions | Repository, environment, token and deployment matrix | Least privilege and no unbounded write path |
| 7 | Branch protection | Required review, Code Owner, stale-review and status rules | Protection verified on every candidate repository |
| 8 | OIDC/TLS | Short-lived identity and endpoint/certificate evidence, where applicable | No long-lived cloud credential in workflow or repository |
| 9 | Audit logging | Retention, access and review procedure | Reviewer confirms log coverage and retention |
| 10 | Backup/restore | Backup scope, restore execution, RTO/RPO and hashes | Restore is successful and independently reviewed |
| 11 | Incident response | Tabletop or real incident record | Owners, escalation and follow-up actions are recorded |
| 12 | Disclosure | Security contact, triage owner and response targets | Disclosure path is public or controlled and tested |

### Staging execution order

Run the baseline in a dedicated staging environment with no production secrets, irreversible actions or customer data. Save a checkpoint before each control family. At the end, create a `security-baseline-v1.yaml` or equivalent evidence object containing scope, commit, environment, control results, exceptions, hashes, reviewer and claim boundary.

The Security Baseline gate is closed only when every applicable control is `PASS` or an explicitly reviewed, time-bounded exception exists. HTTP 403 access to GitHub Advanced Security is not a pass; it is `NOT_VERIFIED` and requires owner-enabled review.

## 7. Review decision matrix

| Decision | Allowed when |
|---|---|
| `ALLOW` | Required evidence, authority and review are complete |
| `REVIEW` | Evidence or authority is incomplete but bounded human review can resolve it |
| `DENY` | Policy, security or claim boundary is violated |
| `QUARANTINE` | Artifact or dependency is isolated pending analysis |
| `RECOVERY_REQUIRED` | Failure or rollback condition is active |

## 8. Detailed presentation script

### Slide 1 — Title: “From GREEN-STAGING to Authorized Promotion”

**Visual:** A horizontal gate sequence from profile surface to production decision.  
**Speaker script:** “This review is not a marketing launch. It is a gate review. The profile surface is GREEN-STAGING within a bounded evidence scope; the full system remains promotion-blocked until remote, security, independent and field evidence closes.”

### Slide 2 — Current evidence boundary

**Visual:** Two columns: `PROFILE SURFACE: GREEN-STAGING` and `SYSTEM: BLOCKED`.  
**Speaker script:** “The distinction is intentional. The profile README, governed documents and deterministic validation checks are green. That does not mean production, certification, customer validation or absence of security vulnerabilities.”

### Slide 3 — PR portfolio

**Visual:** A table with #18, #26, #27, #1 and #2, showing open/blocked or merged.  
**Speaker script:** “PR #18 carries the public profile and workflow protections. PR #26 carries the EvOS and E3 baseline. PR #27 carries capability and profile registers. Evidence PRs #1 and #2 are merged, but merged evidence packages do not equal independent replay.”

### Slide 4 — What blocks merge today

**Visual:** Branch protection checklist.  
**Speaker script:** “The merge blockers are governance controls: one human approval, Code Owner coverage, approval after the latest push, resolved conversations and every required status context. We do not bypass these controls. If the branch advances, strict update requires the PR branch to be synchronized again.”

### Slide 5 — Commands and reviewer responsibilities

**Visual:** Three command lanes: inspect, validate, review/merge.  
**Speaker script:** “The author updates and validates the branch. A different reviewer inspects the diff and approves. The merge command is only executed after GitHub reports the required checks and reviews as satisfied. The commands in this report are fail-closed and do not fabricate approval.”

### Slide 6 — Remote conformance 14/14

**Visual:** Fourteen evidence slots, each with commit, workflow, environment, result and SHA-256.  
**Speaker script:** “Fourteen of fourteen means fourteen immutable records, not one summary sentence. Each repository must run on a remote head, exercise a negative path, show recovery and publish a hash-linked artifact. Any missing record keeps the gate pending.”

### Slide 7 — Security Baseline v1

**Visual:** Control rings for dependencies, secrets, SBOM, permissions, identity, logging, recovery and incident response.  
**Speaker script:** “The Security Baseline is a dated, scope-bound control package. We need dependency and secret scans, SBOM, code and container scanning where applicable, least privilege, branch protection, OIDC/TLS, audit logs, backup/restore and an incident exercise. A 403 from an API is not a pass.”

### Slide 8 — S-001 staging slice

**Visual:** `FAULT → POLICY → BUFFER/DEGRADE → EVIDENCE → RECOVERY → REPLAY`.  
**Speaker script:** “The vertical slice is intentionally small. We provoke connectivity loss, observe the policy decision, preserve evidence, recover, synchronize and replay. The result must be independently reproducible before it can support a stronger claim.”

### Slide 9 — Independent E3 and field gates

**Visual:** Separate lanes for independent reviewer, field operator and customer.  
**Speaker script:** “An independent E3 reviewer must run the frozen package without founder knowledge. Field validation requires a real operator and real workflow. Commercial validation requires an organization, payment, acceptance and a measured KPI. None can be inferred from repository activity.”

### Slide 10 — Decision and next actions

**Visual:** Decision tree with `ALLOW`, `REVIEW`, `DENY`, `QUARANTINE`, `RECOVERY_REQUIRED`.  
**Speaker script:** “The current decision is REVIEW/BLOCKED, not ALLOW. The immediate next actions are protected PR review, remote conformance manifest, owner-enabled security review, staging S-001 execution and independent E3 scheduling.”

### Slide 11 — Closing claim contract

**Visual:** The invariant `1D YES · 1R NO · 1V NO · 1A NO → PROMOTION BLOCKED`.  
**Speaker script:** “The README is a public claims contract. It states what is implemented within scope, what evidence exists, what is next and what is not claimed. Promotion happens only when evidence, authority and review converge.”

## Non-claims

This document does not claim that the PRs are already approved, that Security Baseline v1 is complete, that remote conformance is 14/14, that E3 is independent and verified, or that production promotion is authorized.

## References

[1]: https://github.com/Traky12/Traky12/pull/18 "Profile PR #18"  
[2]: https://github.com/Traky12/castuo-evolution/pull/26 "EvOS baseline PR #26"  
[3]: https://github.com/Traky12/castuo-evolution/pull/27 "Capabilities and proof ladder PR #27"  
[4]: https://github.com/Traky12/Traky12/actions/runs/32285576388 "Latest profile evidence validation run"  
[5]: https://github.com/Traky12/castuo-evidence/pull/1 "S-001A implementation PR #1"  
[6]: https://github.com/Traky12/castuo-evidence/pull/2 "S-001A hashes and replay protocol PR #2"
