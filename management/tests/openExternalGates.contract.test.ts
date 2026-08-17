import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("Open external gates", () => {
  it("keeps unresolved assurance and infrastructure gates actionable", () => {
    const document = readFileSync(resolve(process.cwd(), "docs/governance/OPEN-EXTERNAL-GATES.md"), "utf8");
    for (const required of ["Vault provider selection", "GitHub security_events access", "Main-branch Security and quality", "Remote diagnostics", "Production restore", "External assurance", "Field/economic validation"]) {
      expect(document).toContain(required);
    }
    expect(document).toContain("Exit criterion");
    expect(document).toContain("Rollback");
    expect(document).toContain("No credential, token or personal information");
  });
});
