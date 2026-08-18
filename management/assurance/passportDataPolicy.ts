export type PassportDataClass = "PUBLIC_CLAIM" | "EVIDENCE_REFERENCE" | "INTERNAL_OPERATIONAL" | "SECRET_OR_PII";

export type PassportFieldPolicy = {
  field: string;
  dataClass: PassportDataClass;
  allowedInPublicPassport: boolean;
  rule: string;
};

export const passportFieldPolicy: PassportFieldPolicy[] = [
  { field: "capability", dataClass: "PUBLIC_CLAIM", allowedInPublicPassport: true, rule: "Use a stable capability identifier; do not imply production maturity." },
  { field: "contract", dataClass: "EVIDENCE_REFERENCE", allowedInPublicPassport: true, rule: "Reference a versioned contract, never inline credentials or private payloads." },
  { field: "implementation", dataClass: "EVIDENCE_REFERENCE", allowedInPublicPassport: true, rule: "Use repository and path references with commit provenance." },
  { field: "evidence", dataClass: "EVIDENCE_REFERENCE", allowedInPublicPassport: true, rule: "Expose scope and status; redact payloads and personal data." },
  { field: "security", dataClass: "PUBLIC_CLAIM", allowedInPublicPassport: true, rule: "Default to PENDING until independently reproducible." },
  { field: "reproducibility", dataClass: "EVIDENCE_REFERENCE", allowedInPublicPassport: true, rule: "Include test and source references, not environment secrets." },
  { field: "independent_review", dataClass: "EVIDENCE_REFERENCE", allowedInPublicPassport: true, rule: "Reviewer reference remains bounded; status is PENDING until review exists." },
  { field: "operational_scope", dataClass: "PUBLIC_CLAIM", allowedInPublicPassport: true, rule: "Describe declared scope and limitations, not unverified outcomes." },
  { field: "known_limitations", dataClass: "PUBLIC_CLAIM", allowedInPublicPassport: true, rule: "Negative evidence is public and must not be removed to improve appearance." },
  { field: "allowed_claims", dataClass: "PUBLIC_CLAIM", allowedInPublicPassport: true, rule: "Claims require linked evidence and gate status." },
  { field: "forbidden_claims", dataClass: "PUBLIC_CLAIM", allowedInPublicPassport: true, rule: "Keep forbidden claims explicit to preserve default-deny behavior." },
  { field: "credential", dataClass: "SECRET_OR_PII", allowedInPublicPassport: false, rule: "Never serialize, log or store in a public passport." },
  { field: "access_token", dataClass: "SECRET_OR_PII", allowedInPublicPassport: false, rule: "Vault reference only; value must remain server-side." },
  { field: "email", dataClass: "SECRET_OR_PII", allowedInPublicPassport: false, rule: "Do not publish personal identifiers." },
] as const;

export const passportDataPolicyMeta = {
  version: "P1-DATA-POLICY-2026-08-17",
  publicFieldCount: passportFieldPolicy.filter((item) => item.allowedInPublicPassport).length,
  forbiddenFieldCount: passportFieldPolicy.filter((item) => !item.allowedInPublicPassport).length,
  status: "DEFAULT DENY / REDACTION REQUIRED",
} as const;
