export type RepositorySensitivity = "PUBLIC" | "INTERNAL" | "RESTRICTED" | "CRITICAL";
export type ExposureBoundary = "PUBLIC_READ" | "AUTHENTICATED" | "BACKEND_ONLY" | "VAULT_ONLY";
export type ObservabilityState = "DESIGNED_NO_RUNTIME_CLAIM" | "RUNTIME_EVIDENCE_PENDING";

export type RepositorySensitivityRecord = {
  repository: string;
  sensitivity: RepositorySensitivity;
  exposure: ExposureBoundary;
  minimumGate: "G0" | "G1" | "G2" | "G3";
  ownerBoundary: string;
  rationale: string;
};

export const repositorySensitivityCatalog: RepositorySensitivityRecord[] = [
  { repository: "Castuo-system", sensitivity: "RESTRICTED", exposure: "AUTHENTICATED", minimumGate: "G2", ownerBoundary: "core-platform", rationale: "Control plane, connector contracts and protected runtime paths." },
  { repository: "castuo-evolution", sensitivity: "INTERNAL", exposure: "PUBLIC_READ", minimumGate: "G1", ownerBoundary: "governance", rationale: "Evidence vocabulary and promotion policy; no secrets." },
  { repository: "Cast-o", sensitivity: "INTERNAL", exposure: "AUTHENTICATED", minimumGate: "G1", ownerBoundary: "assurance", rationale: "Validation and provenance assets require controlled contribution." },
  { repository: "castuo-agro-edge", sensitivity: "RESTRICTED", exposure: "BACKEND_ONLY", minimumGate: "G2", ownerBoundary: "edge-platform", rationale: "Device and offline continuity surfaces can carry operational telemetry." },
  { repository: "castuo-offline-field-operations", sensitivity: "RESTRICTED", exposure: "AUTHENTICATED", minimumGate: "G2", ownerBoundary: "field-operations", rationale: "Field workflows and evidence exports require scoped access." },
  { repository: "goldfish", sensitivity: "RESTRICTED", exposure: "AUTHENTICATED", minimumGate: "G2", ownerBoundary: "assurance-recovery", rationale: "Recovery and preservation controls affect integrity and availability." },
  { repository: "ctaex-iot-pilot", sensitivity: "INTERNAL", exposure: "AUTHENTICATED", minimumGate: "G1", ownerBoundary: "pilot-lab", rationale: "Experimental connectivity evidence must remain bounded and reviewable." },
  { repository: "agrovision-360", sensitivity: "INTERNAL", exposure: "AUTHENTICATED", minimumGate: "G1", ownerBoundary: "research", rationale: "Research artifacts are not production claims and require provenance." },
  { repository: "castuo-strategy-knowledge-base", sensitivity: "INTERNAL", exposure: "PUBLIC_READ", minimumGate: "G1", ownerBoundary: "strategy", rationale: "Public strategy records must exclude credentials and private operational data." },
  { repository: "copia-de-cast-o-system-strategy-knowledge-base", sensitivity: "INTERNAL", exposure: "PUBLIC_READ", minimumGate: "G1", ownerBoundary: "strategy-copy", rationale: "Duplicate boundary requires parity checks and canonicality control." },
  { repository: "castuo-360-v5.3", sensitivity: "RESTRICTED", exposure: "AUTHENTICATED", minimumGate: "G2", ownerBoundary: "workspace", rationale: "Integrated workspace may combine operational contexts." },
  { repository: "-Prueba-final", sensitivity: "INTERNAL", exposure: "AUTHENTICATED", minimumGate: "G1", ownerBoundary: "sandbox", rationale: "Integration sandbox is non-production and must not receive real secrets." },
  { repository: "desktop-tutorial", sensitivity: "PUBLIC", exposure: "PUBLIC_READ", minimumGate: "G0", ownerBoundary: "enablement", rationale: "Training material has no runtime credentials or protected data." },
  { repository: "n8n", sensitivity: "RESTRICTED", exposure: "BACKEND_ONLY", minimumGate: "G2", ownerBoundary: "upstream-integration", rationale: "Workflow automation can execute external side effects." },
  { repository: "openclaw", sensitivity: "RESTRICTED", exposure: "BACKEND_ONLY", minimumGate: "G2", ownerBoundary: "upstream-integration", rationale: "Assistant integration requires bounded tools and server-side identity." },
  { repository: "Traky12", sensitivity: "INTERNAL", exposure: "PUBLIC_READ", minimumGate: "G1", ownerBoundary: "ecosystem-manager", rationale: "Management index is public-facing but governs internal boundaries." },
] as const;

export type SloDefinition = {
  id: string;
  signal: "availability" | "latency" | "audit-completeness" | "error-rate";
  target: string;
  window: string;
  alertWhen: string;
  state: ObservabilityState;
};

export const observabilitySloDefinitions: SloDefinition[] = [
  { id: "SLO-CONNECTOR-AVAILABILITY", signal: "availability", target: ">=99.5% successful bounded requests", window: "30d", alertWhen: "below target for two consecutive windows", state: "DESIGNED_NO_RUNTIME_CLAIM" },
  { id: "SLO-CONNECTOR-LATENCY", signal: "latency", target: "p95 < 750ms excluding provider timeouts", window: "24h", alertWhen: "p95 exceeds target for 15m", state: "DESIGNED_NO_RUNTIME_CLAIM" },
  { id: "SLO-AUDIT-COMPLETENESS", signal: "audit-completeness", target: "100% of mutations have redacted audit events", window: "7d", alertWhen: "any mutation lacks an audit event", state: "RUNTIME_EVIDENCE_PENDING" },
  { id: "SLO-ERROR-BUDGET", signal: "error-rate", target: "<1% bounded request failures", window: "24h", alertWhen: "budget burn >2x for 30m", state: "DESIGNED_NO_RUNTIME_CLAIM" },
] as const;

export const p1GovernanceMeta = {
  catalogVersion: "P1-2026-08-17",
  repositoryCount: repositorySensitivityCatalog.length,
  sloCount: observabilitySloDefinitions.length,
  status: "DESIGN CONTRACT / NO RUNTIME CLAIM",
} as const;
