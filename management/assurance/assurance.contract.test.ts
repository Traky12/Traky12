import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

type TrustPassportTemplate = {
  security: { status: string };
  reproducibility: { status: string };
  independent_review: { status: string };
  current_gate: string;
  allowed_claims: string[];
  forbidden_claims: string[];
};

function readPassportTemplate(): TrustPassportTemplate {
  const path = resolve(process.cwd(), "docs/assurance/capability-trust-passport.template.json");
  return JSON.parse(readFileSync(path, "utf8")) as TrustPassportTemplate;
}

describe("CAP-ASSURANCE-001 contract", () => {
  it("starts default-deny for security, reproducibility and independent review", () => {
    const passport = readPassportTemplate();

    expect(passport.current_gate).toBe("GATE-R1");
    expect(passport.security.status).toBe("PENDING");
    expect(passport.reproducibility.status).toBe("PENDING");
    expect(passport.independent_review.status).toBe("PENDING");
    expect(passport.allowed_claims).toEqual([]);
    expect(passport.forbidden_claims).toEqual([]);
  });

  it("requires explicit claim boundaries instead of treating a demo as assurance", () => {
    const manual = readFileSync(
      resolve(process.cwd(), "docs/assurance/EXTERNAL-ASSURANCE-AND-DUE-DILIGENCE.md"),
      "utf8",
    );

    expect(manual).toContain("NO CLAIM WITHOUT PROVENANCE");
    expect(manual).toContain("GATE-R1 / External Readability");
    expect(manual).toContain("G-COMM / Commercial Evidence");
    expect(manual).toContain("Un prototipo no equivale a validación de mercado");
  });
});
