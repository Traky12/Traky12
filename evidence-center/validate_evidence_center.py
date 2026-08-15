#!/usr/bin/env python3
"""Validate public Evidence Center dossiers without treating templates as proof."""
from __future__ import annotations

from pathlib import Path
import hashlib
import re
import sys

import yaml

ROOT = Path(__file__).resolve().parent
TEMPLATE = ROOT / "templates" / "N5-CAPABILITY-TEMPLATE"
ALLOWED_LEVELS = {"N3", "N4", "N5", "N6"}
ALLOWED_STATES = {
    "DOCUMENTED",
    "IMPLEMENTED",
    "TESTED",
    "VALIDATED",
    "PILOT",
    "OPERATIONAL",
    "REASSESSMENT_REQUIRED",
}
REQUIRED_METADATA = {
    "capability_id",
    "name",
    "version",
    "maturity_level",
    "target_maturity",
    "evidence_state",
    "owner",
    "last_update",
}
REQUIRED_DOSSIER_FILES = {
    "capability.yaml",
    "baseline.md",
    "pilot-protocol.md",
    "kpi-definition.yaml",
    "results.md",
    "conclusion.md",
    "provenance.yaml",
    "security.md",
    "CHANGELOG.md",
}
PLACEHOLDER_RE = re.compile(r"\b(XX%|XXms|TODO|TBD|PENDING|Nombre de la Capacidad|CAP-XXX)\b", re.I)


def yaml_map(path: Path) -> dict:
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    return data if isinstance(data, dict) else {}


def validate_dossier(path: Path) -> list[str]:
    errors: list[str] = []
    meta_path = path / "capability.yaml"
    if not meta_path.exists():
        return [f"{path.name}: missing capability.yaml"]
    meta = yaml_map(meta_path)
    missing = REQUIRED_METADATA - set(meta)
    if missing:
        errors.append(f"{path.name}: missing metadata {sorted(missing)}")
    level = str(meta.get("maturity_level", ""))
    if level not in ALLOWED_LEVELS:
        errors.append(f"{path.name}: invalid maturity_level {level!r}")
    state = str(meta.get("evidence_state", ""))
    if state not in ALLOWED_STATES:
        errors.append(f"{path.name}: invalid evidence_state {state!r}")
    target = str(meta.get("target_maturity", ""))
    if target not in ALLOWED_LEVELS:
        errors.append(f"{path.name}: invalid target_maturity {target!r}")
    if level == "N6" and state != "OPERATIONAL":
        errors.append(f"{path.name}: N6 requires OPERATIONAL evidence_state")
    if state == "OPERATIONAL" and level != "N6":
        errors.append(f"{path.name}: OPERATIONAL requires maturity_level N6")
    if state in {"PILOT", "OPERATIONAL"}:
        for required in ("provenance.yaml", "security.md"):
            if not (path / required).exists():
                errors.append(f"{path.name}: {state} requires {required}")
    for name in REQUIRED_DOSSIER_FILES:
        if not (path / name).exists():
            errors.append(f"{path.name}: missing {name}")
    # A DOCUMENTED dossier may explicitly contain PENDING fields; higher states may not.
    if state != "DOCUMENTED":
        for file in path.rglob("*.md"):
            text = file.read_text(encoding="utf-8", errors="replace")
            if PLACEHOLDER_RE.search(text):
                errors.append(f"{path.name}: placeholder found in {file.relative_to(path)}")
    return errors


def validate_template() -> list[str]:
    if not TEMPLATE.exists():
        return ["template directory missing"]
    # Templates intentionally contain placeholders; real dossiers do not.
    errors: list[str] = []
    meta_path = TEMPLATE / "capability.yaml"
    if not meta_path.exists():
        errors.append("template: missing capability.yaml")
        return errors
    meta = yaml_map(meta_path)
    missing = REQUIRED_METADATA - set(meta)
    if missing:
        errors.append(f"template: missing metadata {sorted(missing)}")
    if meta.get("maturity_level") not in ALLOWED_LEVELS:
        errors.append("template: invalid maturity_level")
    if meta.get("evidence_state") != "DOCUMENTED":
        errors.append("template: evidence_state must be DOCUMENTED")
    for name in REQUIRED_DOSSIER_FILES:
        if not (TEMPLATE / name).exists():
            errors.append(f"template: missing {name}")
    return errors


def validate_hashes() -> list[str]:
    errors: list[str] = []
    for manifest in ROOT.glob("N*/*/hashes/manifest.sha256"):
        for line in manifest.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            parts = line.split(maxsplit=1)
            if len(parts) != 2 or not re.fullmatch(r"[0-9a-f]{64}", parts[0]):
                errors.append(f"{manifest}: invalid hash line")
                continue
            target = manifest.parent.parent / parts[1].lstrip("*/")
            if target.exists() and hashlib.sha256(target.read_bytes()).hexdigest() != parts[0]:
                errors.append(f"{manifest}: hash mismatch for {parts[1]}")
    return errors


def main() -> int:
    errors = validate_template() + validate_hashes()
    dossiers = [p for p in ROOT.iterdir() if p.is_dir() and p.name.startswith("N") and p.name != "templates"]
    for dossier in dossiers:
        errors.extend(validate_dossier(dossier))
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1
    print(f"Evidence Center validation: PASS ({len(dossiers)} dossier(s))")
    return 0


if __name__ == "__main__":
    sys.exit(main())
