# CASTÚO-SYSTEM™ — Profile Review and desktop-tutorial Recovery Deck

**Audience:** human reviewers, Code Owners and staging operators.  
**Current profile state:** `GREEN-STAGING · EVIDENCE-SCOPED`.  
**System promotion:** `BLOCKED · EXTERNAL EVIDENCE REQUIRED`.

## 1. Exact PR #18 merge procedure

The profile PR is currently `OPEN · MERGEABLE · BLOCKED · REVIEW_REQUIRED`. The block is governance, not a code conflict. The branch protection requires one approving review, Code Owner coverage, approval of the latest push, dismissal of stale reviews, required status contexts and administrator enforcement.

### Author commands

```bash
gh auth status
gh pr checkout 18 --repo Traky12/Traky12
cd Traky12
git fetch origin --prune
git fetch origin main
git rebase origin/main
git status --short
git diff --check
grep -q 'GREEN-STAGING · EVIDENCE-SCOPED — PROFILE SURFACE' README.md
grep -q 'PROMOTION BLOCKED' README.md
grep -q 'CAP-001' README.md
grep -q 'Live GitHub status' README.md
python3 - <<'PY'
from pathlib import Path
import yaml
for p in [Path('.github/workflows/evidence-center-validation.yml'),Path('.github/workflows/public-profile-sync.yml')]:
    assert isinstance(yaml.safe_load(p.read_text()), dict)
print('workflow YAML: PASS')
PY
git push --force-with-lease origin HEAD:chore/evidence-scoped-capability-profile
gh pr checks 18 --repo Traky12/Traky12 --watch
```

### Reviewer and Code Owner steps

A reviewer other than the author opens **Files changed** and confirms the final head. The reviewer checks the README capability claims, the live GitHub snapshot, the read-only profile-sync workflow, the evidence validation workflow, links and the distinction between profile-surface GREEN-STAGING and system promotion. The Code Owner confirms that no `CURRENT`, `EXPERIMENTAL` or `TARGET` label has been silently converted into production truth.

The reviewer resolves every conversation and submits approval only after the last push:

```bash
gh pr review 18 --repo Traky12/Traky12 --approve \
  --body "Reviewed final README, capability matrix, live GitHub snapshot, governed documents, workflow permissions and claim boundary. Approval is limited to the current head and does not authorize system promotion."
gh pr checks 18 --repo Traky12/Traky12 --watch
gh pr view 18 --repo Traky12/Traky12 --json reviews,reviewDecision,mergeStateStatus,mergeable
```

The maintainer merges only when the required contexts are green and the approval is current:

```bash
gh pr merge 18 --repo Traky12/Traky12 --auto --squash --delete-branch=false
```

No self-approval, stale approval, conversation bypass or administrator bypass is valid. If the branch advances after review, the author must rebase, push with `--force-with-lease`, rerun checks and obtain a new approval because stale reviews are dismissed.

## 2. desktop-tutorial failure analysis

The current repository snapshot shows five open PRs, each `BLOCKED · REVIEW_REQUIRED`. The latest observed workflow runs for `CASTUO V1 repository conformance` and `CASTUO Brand Surface` concluded with `failure` on the relevant branches. This is a red conformance state, not a claim about every historical or future run.

| Observed surface | Current finding | Correct interpretation |
|---|---|---|
| PR #1 | `BLOCKED · REVIEW_REQUIRED`; V1 conformance run failed | Baseline metadata is not yet accepted |
| PR #2 | `BLOCKED · REVIEW_REQUIRED`; Brand Surface runs failed | Brand validation does not pass on the observed branch |
| PR #3/#4 | `BLOCKED · REVIEW_REQUIRED` | Governance/traceability changes remain unreviewed |
| PR #5 | `BLOCKED · REVIEW_REQUIRED` | Governance boundary change remains unreviewed |
| Main branch recent run | No passing conformance evidence was observed in the inspected recent runs | Do not call repository green |

The exact root-cause log must be obtained from the failed run UI or API by a repository owner with access. The failure conclusion is verified; the specific failing assertion is not inferred from the conclusion alone.

## 3. Technical recovery plan for desktop-tutorial

### Phase 0 — Preserve evidence

Do not delete or rewrite failed runs. Export the run URL, run ID, commit SHA, workflow name, job name, logs, artifacts and timestamps. Create an issue or recovery branch that references the immutable failed run.

```bash
gh run view 32209020646 --repo Traky12/desktop-tutorial --log-failed
gh run view 31985963558 --repo Traky12/desktop-tutorial --log-failed
gh run view 31982417433 --repo Traky12/desktop-tutorial --log-failed
```

If logs are restricted, a repository owner must download them from the GitHub Actions UI. A `failure` status without logs is insufficient for root-cause classification.

### Phase 1 — Reproduce locally

```bash
gh pr checkout 1 --repo Traky12/desktop-tutorial
cd desktop-tutorial
git fetch origin --prune
git status --short
git diff --check
find .github -maxdepth 3 -type f -print
sed -n '1,240p' .github/workflows/* 2>/dev/null
```

Run the repository-native commands exactly as defined by the workflow. Capture command, runtime, dependency versions, exit code and output. Do not replace a failing test with a weaker test just to obtain green.

### Phase 2 — Classify the failure

Classify each failure as one of: workflow syntax, missing dependency, runtime mismatch, fixture/schema mismatch, permission failure, secret/configuration failure, conformance assertion, artifact upload, or governance/required-review failure. Each classification must reference a log line and a reproducer.

### Phase 3 — Repair the smallest safe surface

Apply the smallest fix that restores the intended contract. Pin action versions and runtime versions where drift caused the failure; correct fixtures or schemas only when the contract changed; use least-privilege permissions; remove secrets from logs; retain negative tests; and ensure artifacts include commit, environment, timestamp and SHA-256. Do not weaken assertions or suppress failure paths.

### Phase 4 — Add a deterministic validation workflow

The workflow should run on `pull_request` and `push` to `main`, use read-only permissions unless a specific upload permission is required, fail closed on missing artifacts, validate Markdown/YAML and required governance markers, and publish a compact artifact manifest. It should not claim remote conformance until the remote run records all required fields.

### Phase 5 — Re-run and review

```bash
git diff --check
git status --short
git add .
git commit -m "fix: restore desktop tutorial conformance contract"
git push --force-with-lease

gh pr checks 1 --repo Traky12/desktop-tutorial --watch
gh pr checks 2 --repo Traky12/desktop-tutorial --watch
gh pr checks 5 --repo Traky12/desktop-tutorial --watch
```

The Code Owner reviews the corrected workflow, logs, artifacts and negative paths. A green workflow alone is not enough: the reviewer must confirm that the failure was fixed without reducing the conformance contract.

### Exit criteria for desktop-tutorial green

`desktop-tutorial` may be labelled `GREEN-STAGING · EVIDENCE-SCOPED` only after the relevant PR has a passing workflow, no unresolved conversations, Code Owner approval, current human approval, complete artifact provenance and a documented claim boundary. It must not be labelled `14/14 PASS REMOTE` unless it is one row in a complete fourteen-repository remote run.

## 4. Updated profile capability state

| Capability | State | Evidence boundary | Next proof |
|---|---|---|---|
| Offline continuity | `IMPLEMENTED / VALIDATION PENDING` | Local tests and documentation | Remote replay |
| Edge/IoT buffering | `EXPERIMENTAL / LABORATORY` | Laboratory tests | Core integration |
| Reproducible evidence | `CURRENT · LOCAL EVIDENCE` | Fixtures, real hashes and local replay | Independent review |
| Adversarial assurance | `CURRENT · VALIDATION PENDING` | Harness and local tests | Remote candidate execution |
| Governance and promotion | `CONTROL-PLANE DEFINED` | States, gates and contracts | Remote evidence |
| Governed AI | `TARGET / IMPLEMENTATION PENDING` | Declared boundaries | Human-reviewed AI case |
| Recovery | `PRIVATE / EVIDENCE REQUIRED` | Private implementation | Restore test |
| Production operation | `NOT_CLAIMED` | Insufficient public evidence | Staging and pilot |

## 5. Detailed slide presentation script

### Slide 1 — Review objective

“Today we are reviewing two things: the exact controls required to merge the profile PR and the recovery plan for a repository with failed conformance runs. The profile surface is GREEN-STAGING within scope; the system is not promoted.”

### Slide 2 — Current profile state

“The README now exposes a live snapshot of PR and Actions states. A passing profile validation workflow is a bounded hygiene result. It does not imply that every repository is green, that security alerts are absent or that remote conformance is complete.”

### Slide 3 — Capability envelope

“The public capability register separates implementation, evidence, maturity, next gate and allowed claim. Offline continuity is implemented but validation is pending; Edge/IoT is experimental; evidence is local; governance is defined; production remains not claimed.”

### Slide 4 — PR #18 merge path

“The merge path is author update, diff and workflow validation, human Code Owner inspection, current approval after the latest push, resolved conversations, green protected contexts and only then an auto-squash merge. No administrator bypass is part of this path.”

### Slide 5 — Human review checklist

“The reviewer must examine README claims, the live status table, workflows, evidence links, permission scopes and the distinction between profile-surface GREEN-STAGING and system promotion. A new push dismisses stale reviews, so approval must match the final head.”

### Slide 6 — desktop-tutorial observed failure

“desktop-tutorial currently has five open blocked PRs. The observed V1 conformance and Brand Surface runs concluded with failure. We preserve those runs as evidence and do not infer a root cause without the failed log lines.”

### Slide 7 — Recovery sequence

“The recovery starts with preserving failed runs, reproducing locally, classifying the failure, applying the smallest safe repair, adding deterministic validation and rerunning the checks. Assertions must not be weakened to force green.”

### Slide 8 — Evidence required for green staging

“A green staging state requires a passing workflow, complete artifact provenance, negative-path coverage, Code Owner approval, current human approval, resolved conversations and an explicit claim boundary. It is not the same as 14/14 remote conformance.”

### Slide 9 — Conformance boundary

“Remote conformance is an aggregate of fourteen complete rows. Each row needs commit, workflow, environment, command, positive result, negative test, recovery, artifact hash, replay reference and reviewer. desktop-tutorial is one row, not the entire gate.”

### Slide 10 — Security and claims

“Security remains evidence-scoped. We do not claim zero vulnerabilities, production operation, autonomy, certification, customer results or universal interoperability. A red or restricted check remains red or not verified until its owner supplies evidence.”

### Slide 11 — Decision

“The current decision is REVIEW/BLOCKED. The profile can progress after human approval; desktop-tutorial requires root-cause repair and review; the system requires remote conformance, Security Baseline, independent E3, field evidence and authorized promotion.”

### Slide 12 — Closing

“The objective is not to make the profile appear certain. It is to make failures inspectable, fixes reproducible, claims bounded and promotion reversible. Evidence comes before promotion.”

## Non-claims

This plan does not claim that PR #18 has been approved, that desktop-tutorial is green, that the specific failure root cause is known without logs, that remote conformance is 14/14, or that system promotion is authorized.
