# Repository README Role Contract

Each repository README should answer one primary question before presenting details. This contract is a documentation interface, not a replacement for `CASTUO-REPOSITORY-STANDARD-V1.0`.

## Required opening

The first screen should state the repository name, its V1.0 class, its primary question, its owner or responsible scope, and whether it is public, private, upstream or experimental.

## Required status

The README should distinguish `DOCUMENTED`, `IMPLEMENTED`, `TESTED`, `VALIDATED`, `OPERATIONAL`, `REPEATABLE` and `FEDERATED`. A repository may state only the highest status supported by dated evidence in its declared scope.

## Required evidence link

The README should link to the relevant Evidence Center, Evidence Pack, test report or control-plane record. A README claim without provenance is incomplete.

## Required boundaries

The README should state what the repository does not prove. In particular, code, CI, a fork, a roadmap, a pilot template or repository activity does not by itself prove production, certification, customer adoption, revenue, autonomy or federation.

## Upstream rule

Forks and upstream-integrated repositories must preserve project attribution and describe the CASTÚO relationship as integration, evaluation or adaptation. They must not be presented as proprietary CASTÚO capability solely because they are listed in the ecosystem.

## Scope rule

The README should point to deeper documents instead of copying the control plane. `Traky12` remains the public entry point; `castuo-evolution` remains the governance authority; Evidence Center remains the public evidence surface.

## Minimal template

```markdown
# Repository name

> Class: GOV | CORE | ASSURANCE | CI | EVIDENCE | EDGE | FIELD | PILOT | EXPERIMENTAL | UPSTREAM | SUPPORT
>
> Primary question: [one question]

## Role
[What this repository is for.]

## Current state
[Highest status supported by evidence, with scope and date.]

## Evidence
[Links to the relevant evidence or control-plane record.]

## Boundaries
[What this repository does not prove.]
```
