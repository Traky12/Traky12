export type PassportSensitivity = "PUBLIC" | "INTERNAL" | "RESTRICTED" | "SECRET_OR_PII";
export type PassportAudience = "PUBLIC_READ" | "GOVERNANCE" | "AUTHORIZED_OPERATORS";
export type PassportRetention = "PUBLIC_ARCHIVE" | "GOVERNANCE_RECORD" | "EPHEMERAL_REVIEW";

export type EvidenceTrustPassport = {
  capability: string;
  contract: string;
  implementation: string[];
  evidence: string[];
  security: { status: "PENDING" | "VERIFIED"; references: string[] };
  reproducibility: { status: "PENDING" | "VERIFIED"; test: string; source_commit: string };
  independent_review: { status: "PENDING" | "VERIFIED"; reviewer: string; reviewed_at: string };
  operational_scope: string;
  known_limitations: string[];
  current_gate: string;
  allowed_claims: string[];
  forbidden_claims: string[];
  sensitivity: PassportSensitivity;
  provenance: { source_repository: string; source_commit: string; generated_at: string };
  audience: PassportAudience[];
  retention: PassportRetention;
  redaction: { applied: boolean; excluded_fields: string[]; policy_version: string };
};

export function validateEvidenceTrustPassport(input: unknown): input is EvidenceTrustPassport {
  if (!input || typeof input !== "object") return false;
  const passport = input as Partial<EvidenceTrustPassport>;
  if (typeof passport.capability !== "string" || typeof passport.contract !== "string") return false;
  if (!Array.isArray(passport.implementation) || !Array.isArray(passport.evidence)) return false;
  if (!Array.isArray(passport.allowed_claims) || !Array.isArray(passport.forbidden_claims)) return false;
  if (!["PUBLIC", "INTERNAL", "RESTRICTED", "SECRET_OR_PII"].includes(passport.sensitivity ?? "")) return false;
  if (!passport.provenance || typeof passport.provenance.source_repository !== "string" || typeof passport.provenance.source_commit !== "string" || typeof passport.provenance.generated_at !== "string") return false;
  if (!Array.isArray(passport.audience) || passport.audience.length === 0) return false;
  if (!["PUBLIC_ARCHIVE", "GOVERNANCE_RECORD", "EPHEMERAL_REVIEW"].includes(passport.retention ?? "")) return false;
  if (!passport.redaction || passport.redaction.applied !== true || !Array.isArray(passport.redaction.excluded_fields) || typeof passport.redaction.policy_version !== "string") return false;
  return true;
}
