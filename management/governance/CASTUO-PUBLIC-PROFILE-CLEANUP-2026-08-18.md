# CASTÚO-SYSTEM™ Public Profile Cleanup — 2026-08-18

## Purpose

This is the governed cleanup specification for the public `Traky12` profile README. It preserves the current evidence boundary while removing duplicated headings, GitHub interface residue and ambiguous status labels. It is a content specification for a reviewable PR; it is not a claim that the public profile has already been merged.

## Required structure

```text
IDENTITY
  ↓
CURRENT PUBLIC STATE
  ↓
CUSTOMER WEDGE
  ↓
SEMANTIC BOUNDARY
  ↓
EVIDENCE CHAIN
  ↓
REPOSITORY MAP
  ↓
CURRENT GATES
  ↓
PUBLIC EVIDENCE
  ↓
NOT CLAIMED
```

## Identity

```markdown
# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

Founder and lead architect of CASTÚO-SYSTEM™

> **NO CLAIM WITHOUT PROVENANCE**  
> **NO AI DEPLOYMENT WITHOUT ASSURANCE**  
> **NO SCALE WITHOUT SECURITY AND OBSERVABILITY**
```

The profile should use one identity treatment and should not repeat the founder statement in a second format.

## Language entry points

The English profile README remains the primary public language and must include:

```markdown
[🇪🇸 Leer en español](README.es.md)
```

The Spanish companion must include:

```markdown
[🇬🇧 Read in English](README.md)
```

## Pinned repositories

The profile must contain repository content only, never GitHub UI states such as `Pinned Loading` or `Something went wrong, please refresh the page to try again`.

```markdown
## Pinned repositories

- [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) — Offline-first rural edge service for CASTÚO-SYSTEM private-cloud integration, MQTT gateway and device evidence.
- [`Cast-o`](https://github.com/Traky12/Cast-o) — Private CI and test automation toolkit for CASTÚO-SYSTEM: unit, integration, E2E and release evidence.
```

## Public status

| Dimension | Current public status |
|---|---|
| Local conformance | `14/14 PASS LOCAL` |
| Remote conformance | `0/14 — PENDING` |
| Remote publication | `14 REPOSITORIES PENDING` |
| Environment | `STAGING` |
| Security baseline | `PENDING` |
| Staging execution | `PENDING` |
| Human review | `PENDING` |
| Production | `NOT_CLAIMED` |
| Commercial validation | `NOT_CLAIMED` |
| Independent E3 | `PENDING` |
| Federation | `PENDING` |

> Local evidence does not imply remote publication, production, certification, customer result, continuous operation or federation.

The profile must not change `GREEN-STAGING-CANDIDATE` to `GREEN-STAGING` while remote publication, Security baseline, Staging execution and Human review remain pending.

## Public evidence and links

```markdown
## Public evidence and links

- [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
- [Public repository map](https://github.com/Traky12/Traky12/blob/main/docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md)
- [Cast-o validation](https://github.com/Traky12/Cast-o)
- [Public repository list](https://github.com/Traky12?tab=repositories)
- [CASTÚO-SYSTEM™ website](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8)
```

## Non-claim categories

Operational non-claims include production operation, continuous availability, operational autonomy, private-cloud provisioning and operational robotics. Assurance non-claims include certification, independent validation, regulatory conformity and universal interoperability. Commercial non-claims include paid traction, recurring revenue, customer results and commercial repeatability. Ecosystem non-claims include federation, autonomous authority and proprietary ownership of upstream forks.

The financial boundary remains explicit: the official PIE PLUS workbook is authoritative for financial figures. Technical assets, architecture, code, planning scenarios and repository activity are not cash, market value, accounting value, income, funding, contract or customer result.

## Required commit

```text
docs: clean public profile and preserve evidence boundaries
```

The change must remove duplicate headings, remove interface residue, normalize pinned repositories, add explicit links, clarify `14 REPOSITORIES PENDING`, preserve all local/remote/staging/production/commercial boundaries and keep upstream/fork separation. It must not promote production operation, certification, field validation, commercial traction, federation, independent review or continuous operation.
