import { describe, expect, it } from "vitest";
import { publicIndexMeta, publicRecords } from "../shared/publicIndex";

describe("Public Knowledge & Evidence Index contract", () => {
  it("keeps the public read-model bounded and non-authoritative", () => {
    expect(publicIndexMeta.publicRecords).toBe(29);
    expect(publicRecords).toHaveLength(29);
    expect(publicIndexMeta.authority).toBe("PORTFOLIO CONTROL PLANE");
    expect(publicIndexMeta.boundary).toBe("PUBLIC ONLY");
    expect(publicIndexMeta.verifiedProductionClaims).toBe(0);
    expect(publicIndexMeta.humanApproval).toBe("REQUIRED");
  });

  it("does not expose credential-shaped material or private boundary claims", () => {
    const serialized = JSON.stringify(publicRecords).toLowerCase();
    expect(serialized).not.toMatch(/api[_-]?key|bearer|password|secret|token|localstorage/);
    expect(serialized).not.toContain("production validated");
    expect(publicRecords.some((record) => record.state === "BLOCKED")).toBe(true);
    expect(publicRecords.some((record) => record.state === "EVIDENCE-SCOPED")).toBe(true);
  });
});
