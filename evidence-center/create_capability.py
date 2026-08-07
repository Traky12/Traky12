import os
import shutil
import datetime
import yaml

def create_capability():
    # Configuración de rutas
    base_dir = os.path.dirname(os.path.abspath(__file__))
    template_dir = os.path.join(base_dir, "templates", "N5-CAPABILITY-TEMPLATE")
    
    if not os.path.exists(template_dir):
        print(f"Error: No se encuentra la plantilla en {template_dir}")
        return

    # Solicitar información al usuario
    print("--- Generador de Capacidades CASTÚO-SYSTEM ---")
    cap_name = input("Nombre de la capacidad (ej. MQTT Ingestion): ").strip()
    cap_id = input("ID de la capacidad (ej. EDGE-001): ").strip()
    
    # Crear nombre de carpeta amigable
    folder_name = f"N5-{cap_name.replace(' ', '-').upper()}"
    target_dir = os.path.join(base_dir, folder_name)

    if os.path.exists(target_dir):
        print(f"Error: La carpeta {folder_name} ya existe.")
        return

    # Copiar estructura de plantilla
    print(f"Creando estructura en {folder_name}...")
    shutil.copytree(template_dir, target_dir)

    # Actualizar capability.yaml
    yaml_path = os.path.join(target_dir, "capability.yaml")
    if os.path.exists(yaml_path):
        with open(yaml_path, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
        
        data['capability_id'] = cap_id
        data['name'] = cap_name
        data['last_update'] = datetime.date.today().isoformat()
        
        with open(yaml_path, 'w', encoding='utf-8') as f:
            yaml.dump(data, f, sort_keys=False, allow_unicode=True)

    # Actualizar títulos en archivos Markdown
    md_files = ["pilot-protocol.md", "results.md", "conclusion.md", "baseline.md"]
    for md_file in md_files:
        path = os.path.join(target_dir, md_file)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Personalizar el título principal
            new_content = content.replace("Nombre de la Capacidad", cap_name)
            new_content = f"ID: {cap_id} | " + new_content
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)

    print(f"\n¡Éxito! Capacidad '{cap_name}' creada en: {target_dir}")
    print("Siguientes pasos: Completa los archivos .md y añade tus datos en las carpetas correspondientes.")

if __name__ == "__main__":
    create_capability()
