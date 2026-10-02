import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("Traky12 governed README artifacts", () => {
  it("covers every remote repository with complete traceability", () => {
    const map = JSON.parse(readFileSync(resolve(process.cwd(), "docs/governance/TRAKY12-TRACEABILITY-MAP.json"), "utf8")) as { records: Array<{ repository: string; passport: string; source: string; gate: string; checkpoint: string; sensitivity: string; evidenceStatus: string }> };
    expect(map.records).toHaveLength(16);
    expect(new Set(map.records.map((record) => record.repository)).size).toBe(16);
    expect(map.records.every((record) => Object.values(record).every(Boolean))).toBe(true);
    expect(map.records.filter((record) => record.sensitivity === "EXTERNAL_FORK")).toHaveLength(2);
  });

  it("consolidates README integration as reviewable PRs", () => {
    const sync = JSON.parse(readFileSync(resolve(process.cwd(), "docs/governance/TRAKY12-README-SYNC-RESULT.json"), "utf8")) as { summary: { writableRepositories: number; pullRequestsOpen: number; mainBranchesModifiedDirectly: number }; results: Array<{ repo: string; status: string; pr?: { url: string } }> };
    expect(sync.summary.writableRepositories).toBe(14);
    expect(sync.summary.pullRequestsOpen).toBe(14);
    expect(sync.summary.mainBranchesModifiedDirectly).toBe(0);
    expect(sync.results).toHaveLength(14);
    expect(sync.results.every((item) => item.status === "PR_OPEN" && item.pr?.url.startsWith("https://github.com/Traky12/"))).toBe(true);
    expect(sync.results.some((item) => item.repo === "Traky12" && item.pr?.url.endsWith("/pull/8"))).toBe(true);
  });
});
