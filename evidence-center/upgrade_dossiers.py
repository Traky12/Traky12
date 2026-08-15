from pathlib import Path
import re
import yaml

ROOT = Path(__file__).resolve().parent

def main() -> None:
    dossiers = [p for p in ROOT.glob('N5-*') if p.is_dir()]
    # Include nested/legacy structures with a capability metadata file.
    dossiers.extend(p.parent for p in ROOT.glob('N5-*/**/capability.yaml'))
    unique = []
    seen = set()
    for path in dossiers:
        path = path.resolve()
        if path not in seen and 'templates' not in path.parts:
            unique.append(path); seen.add(path)
    for path in unique:
        meta_path = path / 'capability.yaml'
        if not meta_path.exists():
            continue
        meta = yaml.safe_load(meta_path.read_text(encoding='utf-8')) or {}
        result_text = '\n'.join(p.read_text(encoding='utf-8', errors='replace') for p in path.glob('*.md'))
        if 'XX%' in result_text or 'XXms' in result_text or 'PENDING' in result_text or meta.get('evidence_state') == 'VALIDATED':
            meta['evidence_state'] = 'DOCUMENTED'
            meta['coverage'] = 'PARTIAL'
        meta_path.write_text(yaml.safe_dump(meta, sort_keys=False, allow_unicode=True), encoding='utf-8')
        conclusion = path / 'conclusion.md'
        if conclusion.exists():
            text = conclusion.read_text(encoding='utf-8')
            text = re.sub(r'\*\*Aprobado por:\*\*.*', '**Revisión:** PENDIENTE — no promoción de madurez sin evidencia completa.', text)
            text = re.sub(r'\*\*Fecha:\*\*.*', '**Fecha de revisión:** PENDIENTE', text)
            if 'No se promueve' not in text:
                text += '\n\n## Estado actual\n\nLa plantilla o el dossier contiene campos pendientes; el estado publicado permanece en `DOCUMENTED` hasta completar provenance, datos reales, hashes y revisión.\n'
            conclusion.write_text(text, encoding='utf-8')
        for name, content in {
            'provenance.yaml': 'schema: castuo.evidence.v1\ncapability_id: "%s"\nrepository: "Traky12/Traky12"\ncommit_or_tag: "PENDING"\nenvironment: "PENDING"\nprotocol_ref: "pilot-protocol.md"\nresults_ref: "results.md"\nartifact_sha256: []\nreviewer: "PENDING"\nreview_date: "PENDING"\nclassification: "PUBLIC"\nrestricted_data_location: "PENDING"\nstatus: "DOCUMENTED"\n' % meta.get('capability_id', 'PENDING'),
            'security.md': '# Seguridad y soberanía\n\nEstado: `PENDING`. No se incluyen secretos, credenciales, datos personales completos ni material restringido.\n\n## Controles pendientes\n\n- Secret scanning: `PENDING`\n- Cifrado y control de acceso: `PENDING`\n- Retención y borrado: `PENDING`\n- Incidentes, rollback y reevaluación: `PENDING`\n\nUn cambio de modelo, proveedor, clave, tenant, esquema o entorno activa `REASSESSMENT_REQUIRED`.\n',
            'CHANGELOG.md': '# Changelog de evidencia\n\n| Fecha | Cambio | Evidencia | Revisor |\n|---|---|---|---|\n| 2026-08-15 | Normalización del dossier y separación entre diseño y validación | Este commit | Manus AI |\n\nLos fallos y resultados negativos se conservan como hallazgos y no se eliminan.\n',
        }.items():
            target = path / name
            if not target.exists():
                target.write_text(content, encoding='utf-8')
        print(path.relative_to(ROOT), meta.get('capability_id'), meta.get('evidence_state'))

if __name__ == '__main__':
    main()
