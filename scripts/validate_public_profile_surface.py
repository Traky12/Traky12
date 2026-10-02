#!/usr/bin/env python3
"""Documentation regression gate for the Traky12 public profile surface.

Checks the profile README (EN/ES), the public claim boundary (EN/ES) and the
public repository map for authority-boundary regressions: forbidden
vocabulary, local paths, links to non-public repositories, castuo-evolution
or Traky12 presented as an authority, retired public figures, unqualified
claims and EN/ES drift.

This is a regression control, not a status authority. Claim terms are matched
per sentence; a sentence with a negation ("not", "does not", "no", "sin" ...)
or a line inside a "Not Claimed" / "No se declara" / "CANNOT CLAIM" section is
treated as a non-claim, so explanatory negative wording passes.

Usage:
    python3 scripts/validate_public_profile_surface.py [--root .]
    python3 scripts/validate_public_profile_surface.py --self-test
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

README_EN = "README.md"
README_ES = "README.es.md"
BOUNDARY_EN = "PUBLIC_CLAIM_BOUNDARY.md"
BOUNDARY_ES = "PUBLIC_CLAIM_BOUNDARY.es.md"
REPO_MAP = "docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md"
SURFACES = (README_EN, README_ES, BOUNDARY_EN, BOUNDARY_ES, REPO_MAP)

PUBLIC_REPOS = {
    "traky12",
    "castuo-evidence",
    "castuo-e3-001",
    "cast-o",
    "castuo-agro-edge",
    "castuo-offline-field-operations",
}

# Always forbidden on a current public surface.
FORBIDDEN_TOKENS = (
    (r"CASTUO:STATE", "CASTUO:STATE marker"),
    (r"control[ -]plane", "control plane"),
    (r"\bSSOT\b", "SSOT"),
    (r"/manus-storage/", "/manus-storage/"),
    (r"scratchpad", "scratchpad"),
    (r"/home/", "/home/"),
    (r"\b[A-Za-z]:\\", "local Windows path"),
    (r"github\.com/Traky12/Castuo-system", "link to private Castuo-system"),
    (r"castuo-evolution is the authority", "castuo-evolution authority assertion"),
    (r"castuo-evolution como autoridad", "castuo-evolution authority assertion"),
    (r"CASTUO-EVOLUTION for governance", "castuo-evolution authority assertion"),
    (r"GREEN-STAGING-CANDIDATE", "retired state GREEN-STAGING-CANDIDATE"),
    (r"Current lineage contains 57 commits", "retired figure (57 commits)"),
    (r"101 tests green", "retired figure (101 tests)"),
    (r"14/14 README", "retired figure (14/14 README)"),
)
CLAIM_TERMS = re.compile(
    r"production[- ]validated|validated in production"
    r"|independent validation completed|independently validated"
    r"|\bcertified\b|real pilot|customer traction|recurring[- ]revenue",
    re.IGNORECASE,
)
NEGATION = re.compile(
    r"\b(not|no|never|nor|without|non|cannot|pending|NOT_CLAIMED|"
    r"sin|ni|nunca|pendiente)\b|\bno se\b|\bmust not\b|\bno debe\b",
    re.IGNORECASE,
)
NON_CLAIM_SECTION = re.compile(
    r"^#{1,6}\s*(not claimed|no se declara|no se afirma|cannot claim|no puede afirmarse)\b",
    re.IGNORECASE,
)
EVOLUTION_ROLE = re.compile(
    r"authority|autoridad|source of truth|fuente de verdad|\bgate\b", re.IGNORECASE
)
TRAKY12_ROLE = re.compile(
    r"technical authority|autoridad t[eé]cnica|control mechanism|mecanismo (interno )?de control"
    r"|decides? (gates|promotion)|decide (gates|promoci[oó]n)",
    re.IGNORECASE,
)
GITHUB_URL = re.compile(r"github\.com/Traky12/([A-Za-z0-9_.-]+)", re.IGNORECASE)
REL_LINK = re.compile(r"\]\((?!https?://|mailto:|#)([^)\s#]+)")
INLINE_CODE = re.compile(r"`([^`\n]+)`")
CANONICAL_AUTHORITY = re.compile(
    r"Castuo-system\W[^.\n]*\b(is|es|remains)\b[^.\n]*\b(canonical|can[oó]nica)\b[^.\n]*\b(authority|autoridad)\b"
    r"|Castuo-system\W[^.\n]*\b(es|sigue siendo)\b[^.\n]*\bautoridad\b[^.\n]*\bcan[oó]nica\b"
    r"|\b(canonical|can[oó]nica)\b[^.\n]*\b(authority|autoridad)\b[^.\n]*Castuo-system",
    re.IGNORECASE,
)
EVOLUTION_NON_CANONICAL = re.compile(
    r"castuo-evolution[^\n]*\b(non-canonical|no can[oó]nico|not a canonical authority|no es una autoridad can[oó]nica)",
    re.IGNORECASE,
)

README_REQUIRED = {
    README_EN: (
        (r"^## Current Public Status", "section 'Current Public Status'"),
        (r"CONSOLIDATION-1\.0 = BLOCKED", "CONSOLIDATION-1.0 = BLOCKED"),
        (r"read-model|public representation", "Traky12 as public read-model"),
        (r"E3-001[\s\S]{0,1500}?`PENDING`", "E3-001 as PENDING"),
        (r"^## Not Claimed", "section 'Not Claimed'"),
    ),
    README_ES: (
        (r"^## Estado público actual", "sección 'Estado público actual'"),
        (r"CONSOLIDATION-1\.0 = BLOCKED", "CONSOLIDATION-1.0 = BLOCKED"),
        (r"read-model|representación pública", "Traky12 como read-model público"),
        (r"E3-001[\s\S]{0,1500}?`(PENDING|PENDIENTE)`", "E3-001 como PENDIENTE"),
        (r"^## (No se declara|No se afirma)", "sección 'No se declara'"),
    ),
}


def sentences(text: str) -> list[str]:
    return [s for s in re.split(r"(?<=[.!?])\s+|\n", text) if s.strip()]


def claim_lines(text: str) -> list[str]:
    """Lines outside Not Claimed / No se declara / CANNOT CLAIM sections."""
    kept, skip = [], False
    for line in text.splitlines():
        if line.startswith("#"):
            skip = bool(NON_CLAIM_SECTION.match(line))
        if not skip:
            kept.append(line)
    return kept


def common_findings(text: str) -> list[str]:
    findings = []
    for pattern, label in FORBIDDEN_TOKENS:
        if re.search(pattern, text, re.IGNORECASE):
            findings.append(f"forbidden: {label}")
    for match in GITHUB_URL.finditer(text):
        if match.group(1).lower() not in PUBLIC_REPOS:
            findings.append(f"link to non-public repository: {match.group(1)}")
    for sentence in sentences(text):
        lowered = sentence.lower()
        if "castuo-evolution" in lowered and EVOLUTION_ROLE.search(sentence) and not NEGATION.search(sentence):
            findings.append(f"castuo-evolution with an authority role: {sentence.strip()[:120]}")
        if "traky12" in lowered and TRAKY12_ROLE.search(sentence) and not NEGATION.search(sentence):
            findings.append(f"Traky12 with an authority/control role: {sentence.strip()[:120]}")
    for sentence in sentences("\n".join(claim_lines(text))):
        term = CLAIM_TERMS.search(sentence)
        if term and not NEGATION.search(sentence):
            findings.append(f"unqualified claim '{term.group(0)}': {sentence.strip()[:120]}")
    return findings


def check_surface(name: str, text: str, root: Path | None = None) -> list[str]:
    findings = common_findings(text)
    if name in README_REQUIRED:
        for pattern, label in README_REQUIRED[name]:
            if not re.search(pattern, text, re.MULTILINE):
                findings.append(f"missing: {label}")
    if name in (README_EN, README_ES, BOUNDARY_EN, BOUNDARY_ES):
        if not CANONICAL_AUTHORITY.search(text):
            findings.append("missing: Castuo-system as private canonical authority")
        if not EVOLUTION_NON_CANONICAL.search(text):
            findings.append("missing: castuo-evolution as non-canonical")
    if root is not None:
        base = (root / name).parent
        for target in REL_LINK.findall(text):
            if not (base / target).exists():
                findings.append(f"broken relative link: {target}")
    return findings


def check_boundary_parity(en: str, es: str) -> list[str]:
    """EN/ES parity: every governed inline token of one version appears in the
    text of the other (formatting may differ); ES keeps at least the EN sections."""
    findings = []
    for token in sorted(set(INLINE_CODE.findall(en))):
        if token not in es:
            findings.append(f"parity: '{token}' in {BOUNDARY_EN} but not in {BOUNDARY_ES}")
    for token in sorted(set(INLINE_CODE.findall(es))):
        if token not in en:
            findings.append(f"parity: '{token}' in {BOUNDARY_ES} but not in {BOUNDARY_EN}")
    sections_en = len(re.findall(r"^## ", en, re.MULTILINE))
    sections_es = len(re.findall(r"^## ", es, re.MULTILINE))
    if sections_es < sections_en:
        findings.append(f"parity: {BOUNDARY_ES} has {sections_es} sections, {BOUNDARY_EN} has {sections_en}")
    return findings


def run(root: Path) -> dict[str, list[str]]:
    texts: dict[str, str] = {}
    results: dict[str, list[str]] = {}
    for name in SURFACES:
        try:
            texts[name] = (root / name).read_text(encoding="utf-8")
        except OSError as exc:
            results[name] = [f"unreadable: {exc}"]
            continue
        results[name] = check_surface(name, texts[name], root)
    if BOUNDARY_EN in texts and BOUNDARY_ES in texts:
        results["boundary-parity"] = check_boundary_parity(texts[BOUNDARY_EN], texts[BOUNDARY_ES])
    return results


def self_test() -> int:
    base = (
        "Castuo-system is the private canonical authority for current technical state.\n"
        "castuo-evolution is a non-canonical workspace. It is not a canonical authority.\n"
        "Traky12 is the public read-model. It does not decide gates.\n"
    )
    cases = [
        ("ok", check_surface(BOUNDARY_EN, base), False),
        ("negated evolution", check_surface(BOUNDARY_EN, base + "castuo-evolution is not a canonical authority.\n"), False),
        ("evolution authority", check_surface(BOUNDARY_EN, base + "castuo-evolution is the authority and governance layer.\n"), True),
        ("traky12 control", check_surface(BOUNDARY_EN, base + "Traky12 is the internal control mechanism.\n"), True),
        ("control plane", check_surface(BOUNDARY_EN, base + "It is not the control plane.\n"), True),
        ("state marker", check_surface(BOUNDARY_EN, base + "<!-- CASTUO:STATE -->\n"), True),
        ("private link", check_surface(BOUNDARY_EN, base + "[x](https://github.com/Traky12/Castuo-system)\n"), True),
        ("private repo", check_surface(BOUNDARY_EN, base + "[x](https://github.com/Traky12/goldfish)\n"), True),
        ("claim", check_surface(BOUNDARY_EN, base + "The platform is certified.\n"), True),
        ("negated claim", check_surface(BOUNDARY_EN, base + "It does not claim recurring revenue.\n"), False),
        ("not-claimed list", check_surface(BOUNDARY_EN, base + "## Not Claimed\n\n- Recurring revenue.\n- Certified operation.\n"), False),
        ("claim after list", check_surface(BOUNDARY_EN, base + "## Not Claimed\n\n- Recurring revenue.\n## Status\n\nWe have recurring revenue.\n"), True),
        ("retired figure", check_surface(BOUNDARY_EN, base + "101 tests green\n"), True),
        ("missing authority", check_surface(BOUNDARY_EN, base.replace("private canonical authority", "core")), True),
        ("parity ok", check_boundary_parity("## A\n`X` and Castuo-system\n", "## A\n## B\n`X`\n`Castuo-system`\n"), False),
        ("parity drift", check_boundary_parity("## A\n`X`\n`Y`\n", "## A\n`X`\n"), True),
        ("parity formatting", check_boundary_parity("## A\nA PASS here\n", "## A\nUn `PASS` aqui\n"), False),
        ("spanish authority", check_surface(BOUNDARY_ES, base.replace("is the private canonical authority", "es la autoridad privada canónica")), False),
    ]
    failures = [name for name, findings, expect_fail in cases if bool(findings) != expect_fail]
    print(json.dumps({"self_test": "FAIL" if failures else "PASS", "cases": len(cases), "failures": failures}, indent=2))
    return 1 if failures else 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        return self_test()
    results = run(args.root)
    blocked = {name: findings for name, findings in results.items() if findings}
    if blocked:
        print(json.dumps({"status": "BLOCKED", "findings": blocked}, indent=2, ensure_ascii=False))
        return 1
    print(json.dumps({"status": "PASS", "checked": sorted(results)}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
