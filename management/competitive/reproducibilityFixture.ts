import type { BenchmarkMetric, ClaimDecision, CompetitiveAdvantageDecision, EvidenceSemantic } from "./reproducibilityBenchmark";

export type S001Event = { sequence: number; eventType: "CAPTURE" | "RECOVER"; payloadHash: string; provenanceRef: string };

export const s001CanonicalFixture = {
  fixtureId: "S001-FIXTURE-V1",
  operationalTask: "capture-recover-review",
  inputs: [
    { name: "event-001", payloadHash: "fixture:payload-001" },
    { name: "event-002", payloadHash: "fixture:payload-002" },
    { name: "event-003", payloadHash: "fixture:payload-003" },
  ],
  failure: { kind: "CONNECTIVITY_INTERRUPTION", afterSequence: 2, durationMs: 1500 },
  requiredArtifacts: ["eventTrace", "recoveryRecord", "provenance", "evidenceCompleteness", "reviewDecision", "claimDecision"],
} as const;

export type S001Run = {
  implementationId: string;
  evidence: EvidenceSemantic;
  events: S001Event[];
  recoveryMs: number | null;
  artifactIds: string[];
  independentlyReplayed: boolean;
};

export type S001Score = Record<BenchmarkMetric, number | "?"> & { claim: ClaimDecision; competitiveAdvantage: CompetitiveAdvantageDecision };

export function scoreS001Run(run: S001Run): S001Score {
  const required = new Set(s001CanonicalFixture.requiredArtifacts);
  const artifacts = new Set(run.artifactIds);
  const completeness = Math.round((s001CanonicalFixture.requiredArtifacts.filter((id) => artifacts.has(id)).length / required.size) * 100);
  const continuity = run.events.filter((event) => event.eventType === "CAPTURE").length === s001CanonicalFixture.inputs.length ? 100 : 0;
  const recovery = run.recoveryMs === null ? "?" : run.recoveryMs <= 5000 ? 100 : 0;
  const provenance = run.events.length > 0 && run.events.every((event) => Boolean(event.provenanceRef)) ? 100 : 0;
  const reviewability = run.independentlyReplayed ? 100 : "?";
  const claimGeneration = run.evidence === "1R" && run.independentlyReplayed && completeness === 100 ? 100 : "?";
  const claim: ClaimDecision = claimGeneration === 100 ? "ALLOWED" : "BLOCKED";
  const competitiveAdvantage: CompetitiveAdvantageDecision = "EVIDENCE_REQUIRED";
  return { continuity, recovery, provenance, evidenceCompleteness: completeness, reviewability, claimGeneration, claim, competitiveAdvantage };
}
