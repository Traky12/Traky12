export type PublicIndexState =
  | "FROZEN"
  | "CANONICAL"
  | "CANDIDATE"
  | "EVIDENCE-SCOPED"
  | "DEFINED"
  | "AUTOMATABLE"
  | "VISIBILITY-SCOPED"
  | "TARGET"
  | "CHECKLIST"
  | "GENERATED"
  | "SCOPE-REVIEWED"
  | "INDEXED"
  | "BLOCKED"
  | "CAPABILITY"
  | "IMPLEMENTATION"
  | "UPSTREAM"
  | "ARTIFACT";

export type PublicRecord = {
  id: number;
  title: string;
  source: string;
  state: PublicIndexState;
  recordType: string;
  limitation: string;
};

export const portfolioUnits = [
  { id: "Traky12", role: "ECOSYSTEM MANAGER", boundary: "public navigation" },
  { id: "castuo-evolution", role: "GOVERNANCE CONTROL PLANE", boundary: "vocabulary, gates and evidence policy" },
  { id: "Castuo-system", role: "CORE PLATFORM", boundary: "implementation; production not claimed" },
  { id: "goldfish", role: "ASSURANCE AND RECOVERY", boundary: "security, recovery and preservation" },
  { id: "Cast-o", role: "CI AND VALIDATION", boundary: "conformance and reproducibility" },
  { id: "castuo-agro-edge", role: "EDGE / IOT", boundary: "offline continuity and synchronization" },
  { id: "castuo-offline-field-operations", role: "FIELD APPLICATION", boundary: "local workflow and evidence export" },
  { id: "castuo-360-v5.3", role: "INTEGRATED WORKSPACE", boundary: "workspace; not production evidence" },
  { id: "ctaex-iot-pilot", role: "LABORATORY PILOT", boundary: "connectivity-loss validation" },
  { id: "agrovision-360", role: "EXPERIMENTAL RESEARCH", boundary: "bounded agro-vision and drift work" },
  { id: "-Prueba-final", role: "EXPERIMENTAL SANDBOX", boundary: "integration experiments only" },
  { id: "n8n", role: "UPSTREAM / FORK", boundary: "upstream integration; not proprietary evidence" },
  { id: "openclaw", role: "UPSTREAM / FORK", boundary: "bounded assistant integration" },
  { id: "desktop-tutorial", role: "TRAINING / SUPPORT", boundary: "repeatable contribution training" },
  { id: "castuo-strategy-knowledge-base", role: "STRATEGY KNOWLEDGE BASE", boundary: "security and quality remediation tracked" },
  { id: "copia-de-cast-o-system-strategy-knowledge-base", role: "STRATEGY COPY", boundary: "duplicate boundary and security parity" },
] as const;

export const publicIndexMeta = {
  version: "1.0",
  snapshot: "2026-08-17",
  portfolioUnits: portfolioUnits.length,
  indexedSurfaces: 14,
  publicRecords: 29,
  authority: "PORTFOLIO CONTROL PLANE",
  releaseState: "STAGING-CANDIDATE",
  gate: "PROMOTION-BLOCKED",
  verifiedProductionClaims: 0,
  boundary: "PUBLIC ONLY",
  humanApproval: "REQUIRED",
} as const;

export const publicRecords: PublicRecord[] = [
  { id: 1, title: "Repository Standard V1.0", source: "castuo-evolution/docs/CASTUO-REPOSITORY-STANDARD-V1.0.md", state: "FROZEN", recordType: "STANDARD", limitation: "Does not prove repository conformance or operational maturity." },
  { id: 2, title: "Master Vocabulary & State Semantics", source: "castuo-evolution/governance/master-vocabulary.yaml", state: "CANONICAL", recordType: "VOCABULARY", limitation: "Defines terms; does not prove implementation." },
  { id: 3, title: "Strategy Integration Register", source: "Traky12/docs/CASTUO_STRATEGY_INTEGRATION_REGISTER.md", state: "CANDIDATE", recordType: "REGISTER", limitation: "Candidate branch, not release authority." },
  { id: 4, title: "Public Claim Boundary", source: "Traky12/PUBLIC_CLAIM_BOUNDARY.md", state: "CANDIDATE", recordType: "BOUNDARY", limitation: "Human approval remains required." },
  { id: 5, title: "Official Brand Identity", source: "Traky12/assets/brand/brand-manifest.yaml", state: "SCOPE-REVIEWED", recordType: "IDENTITY", limitation: "Identity only; no operational claim." },
  { id: 6, title: "GREEN-STAGING Governance", source: "castuo-evolution/governance/green-staging-state.yaml", state: "CANDIDATE", recordType: "GOVERNANCE", limitation: "Staging candidate, not production." },
  { id: 7, title: "Public Evidence Center", source: "castuo-evolution/docs/public-evidence-index.md", state: "EVIDENCE-SCOPED", recordType: "EVIDENCE", limitation: "Evidence scope must remain bounded to its source." },
  { id: 8, title: "Execution Envelope & Traceability", source: "castuo-evolution/docs/EXECUTION_EVIDENCE_ENVELOPE_AND_TRACEABILITY_CONTRACT.md", state: "DEFINED", recordType: "CONTRACT", limitation: "Defined contract; execution requires evidence." },
  { id: 9, title: "Conformance CI/CD Runbook", source: "castuo-evolution/docs/CONFORMANCE_CI_CD_RUNBOOK.md", state: "AUTOMATABLE", recordType: "RUNBOOK", limitation: "Automation does not equal successful conformance." },
  { id: 10, title: "V1 Workflow Run Status", source: "castuo-evolution/docs/CASTUO_V1_WORKFLOW_RUN_STATUS_2026-08-17.md", state: "VISIBILITY-SCOPED", recordType: "STATUS", limitation: "Visibility is scoped to recorded runs." },
  { id: 11, title: "Idempotent Reapply Status", source: "castuo-evolution/docs/CASTUO_IDEMPOTENT_REAPPLY_STATUS_2026-08-17.md", state: "DEFINED", recordType: "STATUS", limitation: "14/14 safe in the declared scope only." },
  { id: 12, title: "Evidence-Ready Field Operations", source: "castuo-evolution/docs/product/CASTUO_EVIDENCE_READY_FIELD_OPERATIONS.md", state: "DEFINED", recordType: "OPERATIONS", limitation: "Documented readiness is not field validation." },
  { id: 13, title: "PILOT-001 Public Scope", source: "castuo-evolution/docs/pilot/PILOT-001_PUBLIC_SCOPE.md", state: "TARGET", recordType: "PILOT", limitation: "Target scope; no field result claimed." },
  { id: 14, title: "Commercial Readiness Gates G0-G8", source: "castuo-evolution/docs/commercial/COMMERCIAL_READINESS_GATES_G0_G8.md", state: "DEFINED", recordType: "COMMERCIAL", limitation: "Defined gates do not prove payment or renewal." },
  { id: 15, title: "Remote Operation Readiness", source: "castuo-evolution/docs/operations/REMOTE_OPERATION_READINESS.md", state: "CHECKLIST", recordType: "OPERATIONS", limitation: "Checklist completion requires independent evidence." },
  { id: 16, title: "Generated Public State", source: "Traky12/docs/governance/CASTUO_PUBLIC_STATE.yaml", state: "GENERATED", recordType: "STATE", limitation: "Generated read-model, not authority." },
  { id: 17, title: "Professional Profile Baseline", source: "Traky12/README.md + README.es.md", state: "SCOPE-REVIEWED", recordType: "PROFILE", limitation: "Profile statements require traceable artifacts." },
  { id: 18, title: "Public Proof Matrix", source: "Traky12/CASTUO_PROOF_MATRIX.md", state: "INDEXED", recordType: "PROOF", limitation: "Indexed proofs retain their original limitations." },
  { id: 19, title: "Operating Boundary", source: "Traky12/CASTUO_OPERATING_BOUNDARY.md", state: "DEFINED", recordType: "BOUNDARY", limitation: "Boundary is not a certification." },
  { id: 20, title: "Evidence Center Index", source: "Traky12/evidence-center/README.md", state: "EVIDENCE-SCOPED", recordType: "NAVIGATION", limitation: "Navigation does not create evidence." },
  { id: 21, title: "Recent Verified Changes", source: "Traky12/docs/governance/CASTUO_RECENT_VERIFIED_CHANGES_2026-08-17.md", state: "DEFINED", recordType: "CHANGELOG", limitation: "Dated changes are not production claims." },
  { id: 22, title: "EU Jurisdiction-Aware Pilot", source: "castuo-evolution/docs/EU_JURISDICTION_AWARE_PILOT_EXECUTION_PLAN_V0.1.md", state: "TARGET", recordType: "PILOT", limitation: "Plan only; no execution result claimed." },
  { id: 23, title: "Staging Promotion Checklist", source: "castuo-evolution/docs/STAGING_PROMOTION_CHECKLIST_14_REPOSITORIES.md", state: "BLOCKED", recordType: "GATE", limitation: "Promotion is blocked until gates close." },
  { id: 24, title: "Offline & Field Continuity", source: "Traky12/castuo-offline-field-operations", state: "CAPABILITY", recordType: "CAPABILITY", limitation: "Capability scope is not field proof." },
  { id: 25, title: "Core Platform & Assurance", source: "Traky12/Castuo-system + Traky12/goldfish", state: "IMPLEMENTATION", recordType: "IMPLEMENTATION", limitation: "Production is not claimed." },
  { id: 26, title: "Upstream Integrations", source: "Traky12/n8n + Traky12/openclaw", state: "UPSTREAM", recordType: "UPSTREAM", limitation: "Upstream activity is not proprietary evidence." },
  { id: 27, title: "Executive Reporting", source: "castuo-evolution/presentations/green-staging-executive", state: "ARTIFACT", recordType: "ARTIFACT", limitation: "Presentation is not operational truth." },
  { id: 28, title: "GitHub Consolidation Audit", source: "castuo-evolution/docs/GITHUB_README_GOVERNANCE_STATUS_2026-08-17.md", state: "SCOPE-REVIEWED", recordType: "AUDIT", limitation: "14/14 README scoped; quality verification remains separate." },
  { id: 29, title: "Remote PR Check Status", source: "castuo-evolution/docs/REMOTE_PR_CHECK_STATUS_2026-08-16.md", state: "VISIBILITY-SCOPED", recordType: "STATUS", limitation: "Remote checks are visible only where authenticated." },
];

export const publicIndexCrossReferences = [
  { id: "SAAS-BOUNDARY", label: "Secure Connectors / SaaS", source: "docs/security/BACKEND-SECURE-CONNECTORS.md", state: "SECURITY HOLD", limitation: "Only intents, permissions and redacted audit metadata are public; provider execution remains blocked." },
  { id: "EVIDENCE-PASSPORT", label: "Evidence Passport", source: "docs/evolution/OPERATIONS-AND-EVOLUTION-MANUAL.md", state: "EVIDENCE-SCOPED", limitation: "A record links to evidence scope; it does not promote a production claim." },
  { id: "TRUST-PASSPORT", label: "Capability Trust Passport", source: "docs/assurance/capability-trust-passport.template.json", state: "PENDING REVIEW", limitation: "Security, reproducibility and independent review default to pending." },
  { id: "GATES-NEGATIVE", label: "Promotion gates / Negative evidence", source: "docs/assurance/negative-evidence.yml", state: "PROMOTION-BLOCKED", limitation: "Known failures and untested scope remain visible and limit allowed claims." },
] as const;
