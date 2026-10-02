import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
const env = { ...process.env, GH_FORCE_TTY: "0", GH_PAGER: "cat", NO_COLOR: "1" };
const sync = JSON.parse(readFileSync("docs/governance/TRAKY12-README-SYNC-RESULT.json", "utf8"));
const seen = new Set();
const checks = sync.results.map((item) => {
  const unique = !seen.has(item.pr.url); seen.add(item.pr.url);
  try {
    const state = execFileSync("gh", ["pr", "view", item.pr.url, "--json", "state,baseRefName,headRefName,url"], { encoding: "utf8", env });
    return { repo: item.repo, url: item.pr.url, unique, ok: true, state: JSON.parse(state) };
  } catch {
    return { repo: item.repo, url: item.pr.url, unique, ok: false };
  }
});
const result = { checked: checks.length, uniqueUrls: new Set(checks.map((item) => item.url)).size, allReachable: checks.every((item) => item.ok), allUnique: checks.every((item) => item.unique), checks };
writeFileSync("docs/governance/TRAKY12-GOVERNANCE-VALIDATION.json", `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify(result, null, 2));
if (!result.allReachable || !result.allUnique) process.exit(1);
