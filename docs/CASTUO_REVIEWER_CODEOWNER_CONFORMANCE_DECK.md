# CASTÚO-SYSTEM™ — Code Owner, Human Review and Remote Conformance Deck

**Audience:** Code Owners, human reviewers and staging operators.  
**Basis:** `docs/CASTUO_REVIEWER_COMMANDS_CONFORMANCE_SECURITY_DECK.md`  
**Current state:** `GREEN-STAGING · EVIDENCE-SCOPED`; system promotion `BLOCKED`.

## 1. Exact steps to resolve Code Owner and human approval

### PR #18 — `Traky12/Traky12`

The profile repository requires at least one approving review, Code Owner review, approval after the latest push, dismissal of stale reviews and the protected contexts `Validate evidence dossiers` and `sync`.

The author first ensures the branch is current and checks the diff:

```bash
gh pr checkout 18 --repo Traky12/Traky12
cd Traky12
git fetch origin --prune
git fetch origin main
git rebase origin/main
git diff --check
git push --force-with-lease origin HEAD:chore/evidence-scoped-capability-profile
gh pr checks 18 --repo Traky12/Traky12 --watch
```

A different human reviewer with the applicable Code Owner relationship then performs these actions in GitHub:

1. Open the **Files changed** tab and inspect `README.md`, every governed document touched by the PR and both workflows.
2. Confirm that the README distinguishes profile-surface GREEN-STAGING from system promotion and does not claim production, certification, independent validation or absence of vulnerabilities.
3. Confirm the workflow permission is `contents: read`, the synchronization workflow cannot push, and documentation changes trigger validation.
4. Confirm the evidence links and pending PR references are stable.
5. Submit an approval after the latest head commit. The approval must be from a user other than the author.
6. Resolve every review conversation. Any new push dismisses stale approval and requires the reviewer to approve again.
7. Confirm both protected contexts are green. If `sync` does not report, the repository owner must either make the workflow produce that context or adjust protection deliberately; the author must not bypass it.

The reviewer command, executed only by that authorized reviewer, is:

```bash
gh pr review 18 --repo Traky12/Traky12 --approve \
  --body "Reviewed README, governed documents, workflow permissions, claim boundaries and evidence links. Approval is limited to the reviewed head and does not authorize system promotion."
gh pr checks 18 --repo Traky12/Traky12 --watch
gh pr view 18 --repo Traky12/Traky12 --json reviewDecision,mergeStateStatus,mergeable
```

The merge may occur only after GitHub shows the required review and contexts as satisfied:

```bash
gh pr merge 18 --repo Traky12/Traky12 --auto --squash --delete-branch=false
```

### PR #26 — `castuo-evolution`

The control-plane branch requires one approval, Code Owner review, latest-push approval, dismissal of stale reviews and administrator enforcement. The current protection response reports no required status context, but the reviewer must still inspect all checks shown by the PR before approval.

The author updates and validates the freeze branch:

```bash
gh pr checkout 26 --repo Traky12/castuo-evolution
cd castuo-evolution
git fetch origin --prune
git fetch origin main
git rebase origin/main
git diff --check
gh pr diff 26 --repo Traky12/castuo-evolution
gh pr checks 26 --repo Traky12/castuo-evolution --watch
git push --force-with-lease origin HEAD:evos-v13-freeze
```

The Code Owner/reviewer then verifies the EvOS freeze, E3 manifest, expected outputs, negative tests, hashes, environment, limitations and no-production-claim boundary. After the latest push, the reviewer submits:

```bash
gh pr review 26 --repo Traky12/castuo-evolution --approve \
  --body "Reviewed EvOS freeze and E3-001 package, including fixtures, commands, expected outputs, negative tests, hashes, limitations and bounded claim boundary."
gh pr view 26 --repo Traky12/castuo-evolution --json reviewDecision,mergeStateStatus,mergeable
```

Merge is permitted only when the review decision and all visible checks are green:

```bash
gh pr merge 26 --repo Traky12/castuo-evolution --auto --squash --delete-branch=false
```

### PR #27 — `castuo-evolution`

PR #27 should be reviewed after #26 when its capability/profile registers depend on the frozen control-plane baseline. The reviewer verifies `data/capabilities.yaml`, `data/profiles.yaml`, the production gate checklist, readiness assessment and proof ladder.

The author updates and validates:

```bash
gh pr checkout 27 --repo Traky12/castuo-evolution
cd castuo-evolution
git fetch origin --prune
git fetch origin main
git rebase origin/main
git diff --check
gh pr diff 27 --repo Traky12/castuo-evolution
gh pr checks 27 --repo Traky12/castuo-evolution --watch
git push --force-with-lease origin HEAD:chore/align-capability-and-profile-registers
```

The reviewer must confirm that `CURRENT`, `EXPERIMENTAL`, `TARGET`, `VALIDATED_LOCAL`, `EVIDENCE_SCOPED`, `HUMAN_REVIEW_PENDING`, `EXTERNAL_VERIFICATION_PENDING` and `NOT_CLAIMED` are not collapsed into production claims. The approval is then:

```bash
gh pr review 27 --repo Traky12/castuo-evolution --approve \
  --body "Reviewed capability states, profile registers, proof ladder, production gates and explicit no-claims. Approval is limited to evidence-scoped maturity and does not authorize production."
gh pr view 27 --repo Traky12/castuo-evolution --json reviewDecision,mergeStateStatus,mergeable
gh pr merge 27 --repo Traky12/castuo-evolution --auto --squash --delete-branch=false
```

No reviewer should approve their own work, dismiss a required Code Owner review, or use administrative bypass.

## 2. Plan to move remote conformance from 0/14 to 14/14 in staging

### Gate 0 — Freeze the manifest

Create a reviewed manifest containing exactly fourteen repositories, immutable base SHAs, runtime versions, runner image, commands, expected outputs, negative tests, artifact paths, retention and claim boundaries. Hash the manifest and merge it through a PR. A moving branch is not an acceptable test input.

### Gate 1 — Prepare staging

Use a dedicated staging environment with no production secrets, customer data or irreversible actions. Record OS, runner image, language runtimes, dependency lockfile hashes, network policy, clock source and available storage. Create a unique run identifier and checkpoint before execution.

### Gate 2 — Execute the fourteen jobs

Run one deterministic job per repository. Each job must record the immutable repository SHA, workflow run URL, environment, exact commands, test suite, result, artifact path, SHA-256, negative-path result, recovery result and operator.

A result is `PASS` only if the positive path and at least one declared negative/recovery path meet the expected policy. `SKIPPED`, `UNKNOWN`, `BLOCKED` or missing provenance is not `PASS`.

### Gate 3 — Validate evidence objects

For every job, validate the required fields:

| Field | Requirement |
|---|---|
| Identity | Repository and capability identifier |
| Contract | Expected behavior and authority boundary |
| Execution | Run ID, commit, environment and command |
| Evidence | Input/output/artifact hashes and timestamp |
| Failure | Negative test, expected decision and observed decision |
| Recovery | Recovery action, result and rollback boundary |
| Replay | Reproduction command or reference |
| Review | Operator, reviewer, independence and limitations |
| Claim | Exact bounded claim supported |

### Gate 4 — Aggregate without hiding failures

Generate a summary with fourteen rows. The aggregate may be `14/14 PASS REMOTE` only when every row is `PASS`, every artifact is hash-linked, every negative/recovery record is present and no unresolved exception remains. Any missing row keeps the aggregate `PENDING` or `BLOCKED`.

### Gate 5 — Human conformance review

A reviewer who did not execute all jobs verifies the manifest hash, all fourteen workflow links, artifact hashes, environments, negative tests, recovery records, known limitations and claim boundary. The reviewer signs or records the decision in a PR. Only then may the control plane transition from `0/14 · PENDING` to `14/14 PASS REMOTE`.

### Recommended execution matrix

| Batch | Repositories | Evidence checkpoint |
|---|---|---|
| A | Core and control-plane surfaces | Manifest, runtime and schema validation |
| B | Evidence and assurance surfaces | Replay, negative tests and hashes |
| C | Field and edge/IoT surfaces | Offline, buffer, sync and recovery |
| D | Support, research and upstream surfaces | Contract, adapter and bounded-claim validation |
| Final | All fourteen | Aggregate, independent review and control-plane PR |

## 3. Staging exit report

The final staging report must include the run identifier, manifest SHA, all fourteen repository rows, workflow URLs, commit SHAs, artifact SHA-256 values, negative/recovery results, reviewer identity, deviations and a precise claim boundary. It must state whether the result is `14/14 PASS REMOTE`, `PENDING`, `BLOCKED` or `NO_CLAIM`.

A local result cannot be substituted for the remote result. A prepared manifest cannot be described as a completed conformance run.

## 4. Detailed presentation script

### Slide 1 — Review objective

**Title:** “Unlocking governed promotion beyond GREEN-STAGING.”  
**Script:** “The purpose of this review is to remove ambiguity, not to accelerate a claim. We will show exactly what is required for Code Owner approval, what the 14/14 remote conformance gate means and which evidence is still external.”

### Slide 2 — Current state

**Visual:** Two status bands: profile surface green; system promotion blocked.  
**Script:** “The profile surface is GREEN-STAGING within an evidence-scoped boundary. The system is not production-ready by declaration: remote conformance is 0/14, Security Baseline v1 is pending, E3 is pending and field/commercial evidence is not claimed.”

### Slide 3 — Branch protection

**Visual:** Review chain: author → Code Owner → required checks → merge.  
**Script:** “The protected branches require one approval, Code Owner coverage, approval after the latest push, dismissal of stale reviews and administrator enforcement. This is a control, not friction. It prevents an unreviewed claim or workflow change from reaching main.”

### Slide 4 — PR #18

**Visual:** README, workflows and evidence links.  
**Script:** “For PR #18, the reviewer inspects the README, all governed documents and both workflows. The key checks are the read-only synchronization design, secret-pattern rejection, documentation coverage, claim boundary and the required evidence validation context.”

### Slide 5 — PRs #26 and #27

**Visual:** Control-plane dependency chain: freeze baseline → capability registers.  
**Script:** “PR #26 freezes the EvOS/E3 baseline. PR #27 aligns capabilities, profiles, proof ladder and gates. The review order is #26 first when dependent, then #27. Both require an independent human approval after the final push.”

### Slide 6 — What counts as 14/14

**Visual:** Fourteen evidence slots with hashes.  
**Script:** “14/14 is fourteen complete remote records. Each repository needs an immutable SHA, workflow URL, environment, command, positive result, negative test, recovery result, artifact hash, replay reference and reviewer. A summary without those rows is not conformance.”

### Slide 7 — Staging execution

**Visual:** Batch A, B, C, D and final aggregation.  
**Script:** “The run is executed in isolated staging without production secrets or irreversible operations. Batches reduce operational risk, but the final gate is one aggregate over all fourteen repositories. Unknown and missing states fail closed.”

### Slide 8 — Evidence object

**Visual:** `Identity → Contract → Execution → Evidence → Failure → Recovery → Replay → Review → Claim`.  
**Script:** “Each row is an evidence object, not a checkbox. We preserve identity, contract, execution, hashes, failure behavior, recovery, replay and reviewer independence. The claim is only as strong as its weakest missing field.”

### Slide 9 — Security boundary

**Visual:** Security controls around the staging environment.  
**Script:** “The security baseline is separate from conformance. It requires dependency and secret scans, SBOM, code/container scanning where applicable, least privilege, branch protection, OIDC/TLS, audit logs, backup/restore, incident response and disclosure. A permission error from a security API is not proof of zero alerts.”

### Slide 10 — Reviewer action sequence

**Visual:** `Inspect → Check → Approve → Recheck → Merge`.  
**Script:** “The reviewer inspects the final head, confirms checks, approves, verifies the approval is current, confirms conversations are resolved and only then enables or executes merge. Any new push restarts the approval requirement.”

### Slide 11 — Decision boundary

**Visual:** `ALLOW / REVIEW / DENY / QUARANTINE / RECOVERY_REQUIRED`.  
**Script:** “The current decision is REVIEW/BLOCKED. ALLOW requires complete evidence and authority. DENY applies to policy violations. QUARANTINE isolates uncertain artifacts. RECOVERY_REQUIRED governs rollback or active failure.”

### Slide 12 — Closing

**Title:** “Evidence before promotion.”  
**Script:** “The next milestone is not a stronger sentence in the README. It is fourteen reproducible remote records, a complete staging security baseline, independent review and a human decision. Until then, the honest status remains GREEN-STAGING for the surface and promotion blocked for the system.”

## Non-claims

This document does not claim that Code Owner approval exists, that any reviewer has approved the PRs, that remote conformance is already 14/14, that Security Baseline v1 has passed, or that promotion is authorized.

## References

[1]: https://github.com/Traky12/Traky12/pull/18 "Profile PR #18"  
[2]: https://github.com/Traky12/castuo-evolution/pull/26 "EvOS baseline PR #26"  
[3]: https://github.com/Traky12/castuo-evolution/pull/27 "Capabilities and proof ladder PR #27"  
[4]: https://github.com/Traky12/Traky12/blob/chore/evidence-scoped-capability-profile/docs/CASTUO_REVIEWER_COMMANDS_CONFORMANCE_SECURITY_DECK.md "Published reviewer command and conformance document"  
[5]: https://github.com/Traky12/Traky12/actions/runs/32286382050 "Latest profile validation run"
