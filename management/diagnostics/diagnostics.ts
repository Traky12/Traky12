export type RedactedDiagnostic = {
  service: "castuo-progress-dashboard";
  generatedAt: number;
  gates: {
    dependencyScan: "PASS" | "UNKNOWN";
    secretScan: "PASS" | "UNKNOWN";
    vault: "SECURITY_HOLD" | "APPROVED";
    remoteAssurance: "BLOCKED" | "VERIFIED";
    productionRestore: "NOT_VERIFIED" | "VERIFIED";
  };
  evidence: {
    localTests: number;
    lastValidatedAt: number | null;
    claimBoundary: "LOCAL_ONLY" | "EXTERNAL_REVIEWED";
  };
  forbiddenFields: readonly string[];
};

export function createRedactedDiagnostic(input: Pick<RedactedDiagnostic, "gates" | "evidence">): RedactedDiagnostic {
  return {
    service: "castuo-progress-dashboard",
    generatedAt: Date.now(),
    gates: input.gates,
    evidence: input.evidence,
    forbiddenFields: ["token", "secret", "apiKey", "authorization", "cookie", "privateKey"],
  };
}
