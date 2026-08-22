# CASTÚO-SYSTEM™ — Reviewer Package v2

**Purpose:** provide a single review package for PR merge, remote conformance and capability-claim boundaries.  
**Current surface:** `GREEN-STAGING · EVIDENCE-SCOPED`.  
**System promotion:** `BLOCKED · EXTERNAL EVIDENCE REQUIRED`.

## 1. Identity and claim boundary

> CASTÚO-SYSTEM is an evidence-driven engineering and assurance platform for resilient distributed operations, with offline-first execution, Edge/IoT continuity, traceable evidence and governed AI.

AgTech is a first application domain, not the limit of the architecture. The public profile can claim architecture, offline-first continuity design, local evidence capture, synchronization, an Edge/IoT layer, assurance mechanisms, gates and bounded public evidence. It cannot claim production operation, field continuity, paying customers, recurring revenue, autonomous authority, certification, independent validation, universal interoperability, federation, absence of vulnerabilities, remote 14/14 conformance or a real end-to-end operational chain.

## 2. Exact commands to unblock and merge PRs

### Common preconditions

```bash
gh auth status
gh pr view 18 --repo Traky12/Traky12 --json state,mergeable,mergeStateStatus,reviewDecision,headRefName,baseRefName,url
gh pr view 26 --repo Traky12/castuo-evolution --json state,mergeable,mergeStateStatus,reviewDecision,headRefName,baseRefName,url
gh pr view 27 --repo Traky12/castuo-evolution --json state,mergeable,mergeStateStatus,reviewDecision,headRefName,baseRefName,url
```

The author updates a branch; the reviewer is a different human and must not approve their own work. Every update must be reviewed after the final push because stale reviews are dismissed.

### PR #18 — profile

```bash
gh pr checkout 18 --repo Traky12/Traky12
cd Traky12
git fetch origin --prune
git fetch origin main
git rebase origin/main
git diff --check
grep -q 'GREEN-STAGING · EVIDENCE-SCOPED — PROFILE SURFACE' README.md
grep -q 'PROMOTION BLOCKED' README.md
python3 - <<'PY'
from pathlib import Path
import yaml
for p in [Path('.github/workflows/evidence-center-validation.yml'),Path('.github/workflows/public-profile-sync.yml')]:
    assert isinstance(yaml.safe_load(p.read_text()),dict)
print('workflow YAML: PASS')
PY
git push --force-with-lease origin HEAD:chore/evidence-scoped-capability-profile
gh pr checks 18 --repo Traky12/Traky12 --watch
```

A Code Owner and human reviewer inspect the final README, governed docs and workflows, then approve:

```bash
gh pr review 18 --repo Traky12/Traky12 --approve \
  --body "Reviewed final README, evidence links, read-only workflows, claim boundary and GREEN-STAGING scope. Approval is limited to this head and does not authorize system promotion."
gh pr checks 18 --repo Traky12/Traky12 --watch
gh pr view 18 --repo Traky12/Traky12 --json reviewDecision,mergeStateStatus,mergeable
gh pr merge 18 --repo Traky12/Traky12 --auto --squash --delete-branch=false
```

### PR #26 — EvOS/E3 baseline

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
gh pr review 26 --repo Traky12/castuo-evolution --approve \
  --body "Reviewed EvOS freeze, E3 manifest, fixtures, commands, expected outputs, negative tests, hashes, limitations and bounded claims."
gh pr merge 26 --repo Traky12/castuo-evolution --auto --squash --delete-branch=false
```

### PR #27 — capabilities and profile registers

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
gh pr review 27 --repo Traky12/castuo-evolution --approve \
  --body "Reviewed capability states, profile registers, proof ladder, gates and explicit no-claims. Approval is limited to evidence-scoped maturity."
gh pr merge 27 --repo Traky12/castuo-evolution --auto --squash --delete-branch=false
```

These commands do not bypass protection. The merge is valid only after the authorized human review, Code Owner requirement, latest-push approval, resolved conversations and all required contexts are green.

## 3. Remote conformance plan: 0/14 → 14/14

### Gate A — freeze

Create and review a manifest for exactly fourteen repositories. Each row contains owner/name, immutable commit SHA, runtime, runner image, command, expected result, negative test, recovery action, artifact path, retention, reviewer and claim boundary. Hash the manifest and prevent silent movement to a different branch head.

### Gate B — staging

Use a dedicated staging environment with no production secrets, customer data or irreversible actions. Record OS, runner image, runtime/dependency versions, network policy, clock and storage. Create a run identifier and checkpoint before execution.

### Gate C — execute

Run one remote deterministic job per repository. Each job records commit, workflow URL, environment, command, positive result, negative result, recovery result, artifact, SHA-256, replay reference and operator.

### Gate D — validate

Validate each evidence object for identity, contract, authority boundary, execution, timestamp, input/output/artifact hashes, negative test, recovery, replay, reviewer independence and claim boundary. `SKIPPED`, `UNKNOWN`, `BLOCKED`, missing provenance or unresolved failure is not `PASS`.

### Gate E — aggregate

Create a fourteen-row result table. The aggregate becomes `14/14 PASS REMOTE` only when all fourteen rows are complete and reviewed. Publish the aggregate through a PR and update the control plane only from that evidence. A local `14/14 PASS LOCAL` does not close this gate.

| Batch | Scope | Required result |
|---|---|---|
| A | Core/control plane | Contract, runtime and schema checks |
| B | Evidence/assurance | Replay, negative tests and hashes |
| C | Field/edge/IoT | Offline, buffer, sync and recovery |
| D | Support/research/upstream | Adapter and bounded-claim checks |
| Final | All 14 | Aggregate, independent review and control-plane PR |

## 4. Capability matrix

| ID | Capability | Visible implementation | Evidence now | Correct state | Next gate | Allowed claim |
|---|---|---|---|---|---|---|
| CAP-001 | Offline continuity | `castuo-offline-field-operations` | Local tests and docs | `IMPLEMENTED / VALIDATION PENDING` | Remote replay | Offline flow implemented within scope |
| CAP-002 | Edge/IoT buffering | `castuo-agro-edge` | Laboratory tests | `EXPERIMENTAL / LABORATORY` | Core integration | Experimental Edge runtime |
| CAP-003 | Reproducible evidence | `castuo-evidence` | Fixtures, real hashes and local replay | `CURRENT · LOCAL EVIDENCE` | Independent review | Bounded public evidence package |
| CAP-004 | Adversarial assurance | `Cast-o` | Harness and local tests | `CURRENT · VALIDATION PENDING` | Remote candidate execution | Automatable validation tooling |
| CAP-005 | Governance and promotion | `castuo-evolution` | States, gates and contracts | `CONTROL-PLANE DEFINED` | Remote evidence | Defined control plane |
| CAP-006 | Governed AI | Profile policy and limits | Declared boundaries | `TARGET / IMPLEMENTATION PENDING` | AI case with human review | Governed AI design |
| CAP-007 | Recovery | `goldfish` private | Private code; evidence required | `PRIVATE / EVIDENCE REQUIRED` | Restore test | Recovery layer in development |
| CAP-008 | Production operation | Private core | Insufficient public evidence | `NOT_CLAIMED` | Staging and pilot | No operational claim |

## 5. Detailed presentation script

### Slide 1 — Review objective

“Today we are reviewing the evidence path, not launching a production claim. The profile surface is GREEN-STAGING within a bounded scope. The purpose is to show how reviewers can validate the PRs, execute 14/14 remote conformance and decide what remains blocked.”

### Slide 2 — System identity

“CASTÚO-SYSTEM is an evidence-driven engineering and assurance platform for resilient distributed operations. Offline-first execution, Edge/IoT continuity, traceable evidence, assurance and governed AI are architectural capabilities, not automatic production claims.”

### Slide 3 — Integrated control flow

“Field workflow moves through local buffering, offline execution, synchronization, core processing, evidence packaging, assurance, governance and finally promotion or rollback. AI is transversal but bounded: defined scope, evidence, human review, safety gate and only then promotion.”

### Slide 4 — Public capability map

“The capability matrix separates implementation, evidence, state, next gate and allowed claim. This prevents a laboratory Edge runtime or a local evidence package from being described as a production capability.”

### Slide 5 — PR portfolio

“PR #18 governs the public profile and validation workflows. PR #26 freezes EvOS and E3. PR #27 aligns capabilities, profiles, proof ladder and gates. Evidence PRs #1 and #2 are merged, but merged evidence packages do not equal independent replay.”

### Slide 6 — Code Owner and human approval

“Each protected branch requires a human reviewer distinct from the author, Code Owner coverage, approval after the latest push, resolved conversations and green required contexts. The commands are deliberately fail-closed; no administrator bypass is part of the process.”

### Slide 7 — Remote conformance 14/14

“14/14 means fourteen complete remote records. Every row requires immutable commit, workflow, environment, command, positive result, negative path, recovery, artifact hash, replay and reviewer. Missing provenance or an unknown result leaves the aggregate pending.”

### Slide 8 — Staging execution

“Staging has no production secrets, customer data or irreversible actions. Four batches reduce operational risk, but the final result is one aggregate over all fourteen repositories. Local conformance is evidence preparation, not remote conformance.”

### Slide 9 — Security and recovery

“Security is separate from conformance. The baseline requires dependency and secret review, SBOM, code/container scanning where applicable, permissions, branch protection, OIDC/TLS, audit logs, backup/restore, incident response and disclosure. A permission error is not a clean security result.”

### Slide 10 — Vertical slice

“The next high-value proof is one complete journey: create an operation, continue without connectivity, capture local evidence, recover, synchronize, verify integrity, review, export and replay the result. This is the smallest path that can convert architecture into integrated evidence.”

### Slide 11 — Decision boundary

“The current state is `1D YES · 1R NO · 1V NO · 1A NO`. That means a local deterministic path exists, while remote, independent, field and authorization gates remain open. The correct decision is REVIEW/BLOCKED, not ALLOW.”

### Slide 12 — Closing

“The public profile is strongest when it remains precise. CASTÚO can claim a coherent architecture, bounded implementations, local evidence and governed promotion. It cannot claim production, customers, certification, universal interoperability, federation, absence of vulnerabilities or 14/14 remote conformance until those gates are actually evidenced.”

## 6. Final state

```text
SYSTEM_IDENTITY: CLEAR
ARCHITECTURE: COHERENT
CAPABILITY_MAP: AVAILABLE
LOCAL_IMPLEMENTATION: SUBSTANTIAL
PUBLIC_EVIDENCE: AVAILABLE_BUT_BOUNDED
REMOTE_CONFORMANCE: 0/14 · PENDING
STAGING: GREEN FOR PROFILE SURFACE
INDEPENDENT_REVIEW: PENDING
COMMERCIAL_VALIDATION: NOT_CLAIMED
PRODUCTION: NOT_CLAIMED
PROMOTION: BLOCKED_UNTIL_GATES_CLOSE
```

## Non-claims

This package does not claim that any human approval has already been submitted, that 14/14 remote conformance has been executed, that Security Baseline v1 has passed, or that the system is authorized for production.

## References

[1]: https://github.com/Traky12/Traky12/pull/18 "Profile PR #18"  
[2]: https://github.com/Traky12/castuo-evolution/pull/26 "EvOS and E3 PR #26"  
[3]: https://github.com/Traky12/castuo-evolution/pull/27 "Capabilities and proof ladder PR #27"  
[4]: https://github.com/Traky12/Traky12/blob/chore/evidence-scoped-capability-profile/docs/CASTUO_REVIEWER_CODEOWNER_CONFORMANCE_DECK.md "Code Owner and conformance deck"  
[5]: https://github.com/Traky12/Traky12/actions/runs/32286765619 "Latest profile validation run"
