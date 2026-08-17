export type EvidenceSemantic = "1D" | "1V" | "1R" | 0 | "?" | "N/A";
export type MaturityLevel = "N3" | "N4" | "N5" | "N6";
export type BenchmarkGate = "P2" | "E3" | "N5";
export type ClaimDecision = "ALLOWED" | "BLOCKED";
export type CompetitiveAdvantageDecision = "NOT_ASSESSED" | "BLOCKED" | "EVIDENCE_REQUIRED";

export type BenchmarkMetric =
  | "continuity"
  | "recovery"
  | "provenance"
  | "evidenceCompleteness"
  | "reviewability"
  | "claimGeneration";

export type ReproducibilityBenchmark = {
  id: "S-001";
  title: string;
  objective: string;
  scenario: {
    operationalTask: string;
    inputs: string[];
    failureCondition: string;
    expectedArtifacts: string[];
  };
  implementations: Array<{
    id: string;
    label: string;
    capability: string;
    evidence: EvidenceSemantic;
    maturity: MaturityLevel;
    provenance: string;
  }>;
  metrics: Array<{
    id: BenchmarkMetric;
    unit: string;
    measurement: string;
    requiredFor: BenchmarkGate;
  }>;
  gates: Array<{
    id: BenchmarkGate;
    exitCriteria: string;
    claimBoundary: string;
  }>;
  claimPolicy: {
    decision: ClaimDecision;
    allowedScope: string;
    requiredGate: "N5";
  };
  competitiveAdvantage: {
    decision: CompetitiveAdvantageDecision;
    requiredEvidence: string[];
    prohibitedShortcuts: string[];
  };
  prohibitedClaims: string[];
};

export const reproducibilityBenchmarkS001: ReproducibilityBenchmark = {
  id: "S-001",
  title: "Evidence-Ready Field Operations reproducibility benchmark",
  objective: "Compare one operational task under the same inputs and failure condition without converting comparison into marketing claims.",
  scenario: {
    operationalTask: "Capture an operational event, continue through a connectivity interruption, recover, and emit a reviewable evidence envelope.",
    inputs: ["canonical event fixture", "bounded identity reference", "declared connectivity profile", "failure injection schedule"],
    failureCondition: "Connectivity is interrupted during event capture and restored after a bounded offline interval.",
    expectedArtifacts: ["event trace", "recovery record", "provenance reference", "evidence completeness record", "review decision", "claim decision"],
  },
  implementations: [
    { id: "CASTUO-S001-A", label: "CASTÚO reference implementation", capability: "offline continuity and governed claim generation", evidence: "1V", maturity: "N3", provenance: "local contract and reproducible test fixture; no field claim" },
    { id: "ALTERNATIVE-S001-B", label: "Independent alternative adapter", capability: "same canonical task and failure condition", evidence: "?", maturity: "N3", provenance: "adapter slot reserved; implementation and independent reproduction required" },
  ],
  metrics: [
    { id: "continuity", unit: "percent of required events retained", measurement: "retained events / required events under failure injection", requiredFor: "P2" },
    { id: "recovery", unit: "milliseconds and integrity status", measurement: "time to recovery plus checksum/provenance match", requiredFor: "P2" },
    { id: "provenance", unit: "trace completeness", measurement: "required provenance fields present and linked to commit/fixture", requiredFor: "P2" },
    { id: "evidenceCompleteness", unit: "percent of required artifacts", measurement: "artifacts present / artifacts required; unknown remains unknown", requiredFor: "E3" },
    { id: "reviewability", unit: "independent replay result", measurement: "reviewer can reproduce inputs, failure and output without hidden state", requiredFor: "E3" },
    { id: "claimGeneration", unit: "allowed/blocked decision", measurement: "claim is generated only when evidence and maturity gates pass", requiredFor: "N5" },
  ],
  gates: [
    { id: "P2", exitCriteria: "Canonical fixture, two implementation slots, failure injection and metric definitions are versioned.", claimBoundary: "Design and local reproducibility only; no field or superiority claim." },
    { id: "E3", exitCriteria: "Independent replay reproduces the evidence envelope and records limitations.", claimBoundary: "Reproducible benchmark result for S-001 only; no general market claim." },
    { id: "N5", exitCriteria: "Signed field pilot measures KPIs in a real environment with reviewable evidence and rollback record.", claimBoundary: "Operational claim scoped to the measured pilot and declared period." },
  ],
  claimPolicy: {
    decision: "BLOCKED",
    allowedScope: "Only a measured S-001 pilot result after N5; never a general superiority claim.",
    requiredGate: "N5",
  },
  competitiveAdvantage: {
    decision: "NOT_ASSESSED",
    requiredEvidence: ["independent E3 replay", "signed N5 field pilot", "authorized economic evidence"],
    prohibitedShortcuts: ["single vendor comparison", "primary-source breadth", "unmeasured market language"],
  },
  prohibitedClaims: [
    "best-in-class",
    "better than Palantir, Microsoft or IBM",
    "production validated before a signed field pilot",
    "independent validation before an independent replay",
    "commercial advantage before authorized economic evidence",
  ],
};
