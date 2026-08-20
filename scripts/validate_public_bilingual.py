from pathlib import Path
import re

FILES = [
    "README.md",
    "README.es.md",
    "EXPERIENCE.md",
    "EXPERIENCE.es.md",
    "CASTUO_PROOF_MATRIX.md",
    "CASTUO_PROOF_MATRIX.es.md",
    "CASTUO_OPERATING_BOUNDARY.md",
    "CASTUO_OPERATING_BOUNDARY.es.md",
    "docs/evidence/CASTUO_EVIDENCE_CENTER_INDEX.md",
    "docs/governance/CASTUO_PUBLIC_STATE.yaml",
]

for filename in FILES:
    if not Path(filename).is_file():
        raise SystemExit(f"FAIL|missing file: {filename}")

combined = "\n".join(Path(filename).read_text() for filename in FILES)
for forbidden in [
    "<(commit|timestamp)>",
    "<commit>",
    "<timestamp>",
    "GDPR compliant",
    "AI Act compliant",
    "NIS2 compliant",
    "CRA compliant",
    "eIDAS compliant",
    "customer traction confirmed",
    "recurring revenue confirmed",
    "production operational",
    "certified compliant",
]:
    if re.search(forbidden, combined, flags=re.IGNORECASE):
        raise SystemExit(f"FAIL|forbidden public claim or placeholder: {forbidden}")

required = [
    "e8a86adb336f2f8280602fe685b9c5904b74162a",
    "2026-08-17T02:56:40Z",
    "EVIDENCE-SCOPED · STAGING-CANDIDATE · PROMOTION-BLOCKED",
    "PUBLIC_ONLY",
    "PUBLIC-SUMMARY",
    "REVIEW-ONLY",
    "PRIVATE",
    "RESTRICTED",
]
for marker in required:
    if marker not in combined:
        raise SystemExit(f"FAIL|required marker missing: {marker}")

missing_links = []
for filename in FILES[:-1]:
    text = Path(filename).read_text()
    for link in re.findall(r"\]\(([^)#]+)\)", text):
        if link.startswith(("http://", "https://", "mailto:")):
            continue
        path = (Path(filename).parent / link).resolve()
        if not path.exists():
            missing_links.append((filename, link))
if missing_links:
    raise SystemExit(f"FAIL|missing relative links: {missing_links}")

print("PASS|public bilingual surface, provenance, boundaries and relative links")
