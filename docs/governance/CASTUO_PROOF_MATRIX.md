# CASTÚO-SYSTEM — Public Proof Matrix

## Reading rule

This matrix is an assurance index, not a certification. `PASS LOCAL` means that the declared local test or checkout scope passed. It does not mean remote execution, production readiness, legal conformity, customer validation or independent review.

| Capability | Implementation | Test | Evidence | Review | Gate | Current state |
|---|---|---|---|---|---|---|
| Repository governance | V1.0 metadata and role model across declared repositories | Local conformance checks | Local conformance summary and repository metadata | Human review pending | G0 | `IMPLEMENTED_LOCAL / TESTED` |
| Offline field continuity | Edge and field repositories | Repository-specific tests and bounded fixtures | Evidence-scoped artifacts | Review pending | G2 | `EVIDENCE_SCOPED` |
| Evidence generation | Evidence envelopes, manifests and hashes | Envelope, negative, replay and tamper tests | Dated evidence package | Technical review pending | G1/G5 | `TESTED_LOCAL` |
| Security assurance | Cast-o and goldfish controls | Security, RBAC, crypto and recovery tests | Dated test reports and findings | Security review pending | G3/G4 | `TESTED_LOCAL / REVIEW_REQUIRED` |
| Core execution | Castuo-system APIs and orchestration | Core test suites and bounded replay tests | Candidate branch and execution records | Review pending | G2/G3 | `IMPLEMENTED_LOCAL / TESTED` |
| Remote deployment | Target service architecture | Remote baseline not complete | No complete remote evidence | Not available | G3 | `PENDING` |
| Continuous operation | Health, monitoring, backup, restore and rollback | No customer-period operation yet | No operational dossier | Not available | G6 | `NOT_CLAIMED` |
| Commercial pilot | PILOT-001 public scope | No customer execution claimed | No customer evidence | Not available | G5/G7 | `PENDING` |
| Billing and payment | Commercial process definition only | No invoice or payment claimed | No financial evidence in public repository | Fiscal review required | G7 | `NOT_CLAIMED` |
| Independent E3 review | Review contract and target package | Not completed | No independent review record | Pending | E3 | `PENDING` |
| Federation | Target architecture and boundaries | No promoted multi-node evidence | No federation promotion package | Pending | G8 | `TARGET` |

## Claim chain

```text
CLAIM → CAPABILITY → IMPLEMENTATION → TEST → EVIDENCE → REVIEW → GATE → STATE
```

## Public exclusions

This matrix does not publish secrets, credentials, customer identity, tax identifiers, bank details, private contracts, raw operational logs or unverified claims. Identity, documentation, evidence, execution, review and promotion remain separate dimensions.


## Professional scope and objective boundary

Professional descriptions in the profile are public scope statements. They are not independent employment verification, customer references, financial results or certification records unless a dated public source is linked.

| Area | Public classification | Evidence rule | Current state |
|---|---|---|---|
| Systems architecture | Professional scope and CASTÚO work | Repository documentation and dated architectural artifacts | `DOCUMENTED / EVIDENCE-SCOPED` |
| AI governance and assurance | Capability and governance scope | Contracts, policy registries, tests and review records | `DOCUMENTED / TESTED_LOCAL` |
| Edge / IoT and field systems | Architecture and bounded project scope | Repository-specific implementation and declared fixtures | `EVIDENCE-SCOPED` |
| Security and recovery | Assurance capability | Cast-o/goldfish tests, findings and re-test records | `TESTED_LOCAL / REVIEW_REQUIRED` |
| Agro-tech, CTAEX / FoodLab and incubation | Research, prototyping or pilot context | Public source or permission-specific project record required | `TARGET / PENDING` unless linked |
| Business development and funding preparation | Planning and preparation activity | Public plan only; no funding, customer or revenue claim without evidence | `DOCUMENTED / NOT_CLAIMED` |
| Education and training | Learning or structured training scope | Named credential may be published only with an authorised public source | `NOT_CLAIMED` unless linked |
| Publications and identifiers | Public links intentionally published by the owner | Link verification and ownership/context review | `PUBLIC / SCOPE-REVIEWED` |

Objectives such as a paid pilot, commercial operation, E3 review, remote deployment, federation or recurring revenue remain targets until their own evidence, review and promotion gates are complete.

> **Experience statement ≠ project existence ≠ implementation ≠ test ≠ customer result ≠ legal conformity.**
