from pathlib import Path
ROOT = Path(__file__).resolve().parent
for dossier in [p for p in ROOT.iterdir() if p.is_dir() and p.name.startswith('N5-')]:
    for path in dossier.rglob('*'):
        if path.is_file() and path.suffix.lower() in {'.md', '.yaml', '.yml'}:
            text = path.read_text(encoding='utf-8', errors='replace')
            new = text.replace('XX%', 'PENDING').replace('XXms', 'PENDING').replace('[OK/FAIL]', 'PENDING')
            if new != text:
                path.write_text(new, encoding='utf-8')
                print(path.relative_to(ROOT))
