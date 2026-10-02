import type { BinaryState, CompetitiveCapability, CompetitiveRecord } from "./competitiveStudy";

export type CompetitiveMaturity = "N3_IMPLEMENTED" | "N4_INTEGRATED" | "N5_PILOT" | "N6_OPERATIONAL" | "UNVERIFIED";

export type CompetitiveCapabilityPassport = {
  passportId: string;
  competitorId: string;
  name: string;
  segment: CompetitiveRecord["segment"];
  maturity: CompetitiveMaturity;
  provenance: { sourceIds: readonly string[]; evidenceStatus: CompetitiveRecord["evidenceStatus"] };
  capabilityStates: Record<CompetitiveCapability, BinaryState>;
  allowedClaims: readonly string[];
  forbiddenClaims: readonly string[];
  reproducibility: {
    benchmarkId: "S-001";
    gates: readonly ["P2", "E3", "N5"];
    claimBoundary: string;
    competitiveAdvantage: "NOT_ASSESSED" | "EVIDENCE_REQUIRED" | "BLOCKED";
  };
  limitations: string;
  nextVerification: string;
};

const forbiddenClaims = [
  "market leadership without independent market evidence",
  "production outcome without signed operational evidence",
  "superiority over CASTÚO from a vendor description alone",
  "security or compliance certification without an auditable certificate",
] as const;

export function createCompetitivePassport(record: CompetitiveRecord): CompetitiveCapabilityPassport {
  const maturity: CompetitiveMaturity = record.evidenceStatus === "LOCAL_IMPLEMENTATION" ? "N3_IMPLEMENTED" : record.evidenceStatus === "PRIMARY_SOURCE" ? "UNVERIFIED" : "UNVERIFIED";
  return {
    passportId: `CPP-${record.id}`,
    competitorId: record.id,
    name: record.name,
    segment: record.segment,
    maturity,
    provenance: { sourceIds: record.sourceIds, evidenceStatus: record.evidenceStatus },
    capabilityStates: record.capabilities,
    allowedClaims: ["vendor-declared capability within the cited source boundary"],
    forbiddenClaims,
    reproducibility: {
      benchmarkId: "S-001",
      gates: ["P2", "E3", "N5"],
      claimBoundary: "Only a measured S-001 pilot result after N5; no general superiority claim.",
      competitiveAdvantage: "NOT_ASSESSED",
    },
    limitations: record.limitation,
    nextVerification: record.evidenceStatus === "ATTACHMENT_HYPOTHESIS" ? "Locate and archive a primary source before scoring any capability." : "Independent validation or integration evidence required before N4+ maturity.",
  };
}
