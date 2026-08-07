# CASTÚO-SYSTEM Evidence Center

Este repositorio/directorio es el núcleo de la credibilidad técnica de **CASTÚO-SYSTEM**. Aquí se almacena la evidencia inmutable de que cada capacidad técnica ha sido implementada, desplegada y validada en entornos reales.

## Estructura de Madurez (Niveles)
- **N3 (Implemented):** Código completo y tests unitarios superados.
- **N4 (Validated):** Validado en entorno de integración/staging.
- **N5 (Pilot):** Desplegado y medido en un entorno real con KPIs.
- **N6 (Operational):** Operación continua con observabilidad y SLA.

## Cómo usar las plantillas
1. Copia la carpeta `/templates/N5-CAPABILITY-TEMPLATE` a la raíz del Evidence Center.
2. Renómbrala con el ID de la capacidad (ej. `N5-MQTT-INGESTION`).
3. Completa los archivos siguiendo las guías internas.
4. Vincula la carpeta a una **Release** específica en GitHub.

## Trazabilidad (Digital Thread)
Cada dossier de evidencia debe apuntar a:
- Un **Commit/Tag** específico.
- Un **Protocolo de Piloto**.
- Un **Informe de Resultados**.

---
*Gobernanza de Evidencia para Infraestructura Digital Rural.*
