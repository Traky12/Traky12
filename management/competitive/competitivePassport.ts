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
    limitations: record.limitation,
    nextVerification: record.evidenceStatus === "ATTACHMENT_HYPOTHESIS" ? "Locate and archive a primary source before scoring any capability." : "Independent validation or integration evidence required before N4+ maturity.",
  };
}
