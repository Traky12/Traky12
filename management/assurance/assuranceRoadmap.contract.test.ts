import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { assuranceRoadmap } from "../shared/assuranceRoadmap";

describe("P0/P1/P2 assurance roadmap", () => {
  it("contains blocking P0 controls before maturity work", () => {
    const p0 = assuranceRoadmap.filter((item) => item.priority === "P0");
    const p1 = assuranceRoadmap.filter((item) => item.priority === "P1");
    const p2 = assuranceRoadmap.filter((item) => item.priority === "P2");

    expect(p0.length).toBeGreaterThan(0);
    expect(p1.length).toBeGreaterThan(0);
    expect(p2.length).toBeGreaterThan(0);
    expect(p0.some((item) => item.state === "BLOCKED" || item.state === "SECURITY HOLD")).toBe(true);
  });

  it("keeps an explicit expected-result registry in the governance matrix", () => {
    const matrix = readFileSync(resolve(process.cwd(), "docs/governance/PRIORITIZED-ASSURANCE-ROADMAP-P0-P2.md"), "utf8");
    expect(matrix).toContain("Expected result registry");
    expect(matrix).toContain("P0-SAAS-BOUNDARY");
    expect(matrix).toContain("P2-COMMERCIAL");
  });

  it("keeps field and commercial claims explicitly unearned", () => {
    const field = assuranceRoadmap.find((item) => item.id === "P2-FIELD");
    const commercial = assuranceRoadmap.find((item) => item.id === "P2-COMMERCIAL");

    expect(field?.state).toBe("NO FIELD EVIDENCE");
    expect(commercial?.state).toBe("NOT CLAIMED");
    expect(field?.exit).toContain("Métricas");
    expect(commercial?.exit).toContain("KPI");
  });
});
