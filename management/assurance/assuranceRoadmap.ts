export type ReinforcementPriority = "P0" | "P1" | "P2";
export type ReinforcementState = "IMPLEMENTED" | "PARTIAL" | "BLOCKED" | "PLANNED" | "SECURITY HOLD" | "NOT CLAIMED" | "NO FIELD EVIDENCE";

export const assuranceRoadmap = [
  { id: "P0-CI-REMOTE", priority: "P0", area: "CI remoto", action: "Checks, logs y annotations autenticados", state: "BLOCKED", exit: "Lectura mínima, evidencia redactada y protocolo 403 cerrado." },
  { id: "P0-SAAS-BOUNDARY", priority: "P0", area: "SaaS", action: "Backend/vault en lugar de localStorage → provider API", state: "SECURITY HOLD", exit: "Proveedor aprobado, no secretos en bundle y ejecución server-side." },
  { id: "P0-CLASSIFICATION", priority: "P0", area: "Clasificación", action: "16 repositorios / 29 records / 14 surfaces", state: "IMPLEMENTED", exit: "Contrato tipado y tests de conteo semántico." },
  { id: "P0-SUPPLY-CHAIN", priority: "P0", area: "Supply chain", action: "Secret scan, dependency scan y SBOM", state: "PARTIAL", exit: "Gates CI reproducibles y cero remoto verificable." },
  { id: "P1-REPO-SENSITIVITY", priority: "P1", area: "Repositorios", action: "Sensibilidad y política proporcional", state: "PLANNED", exit: "Catálogo con owner, datos, exposición y gate mínimo." },
  { id: "P1-IDENTITY", priority: "P1", area: "Identidad", action: "Scopes, owner isolation y autorización", state: "PARTIAL", exit: "Negative tests y separación de aprobadores completos." },
  { id: "P1-OBSERVABILITY", priority: "P1", area: "Observabilidad", action: "SLOs, trazas y alertas runtime", state: "PLANNED", exit: "Métrica verificable y fallo reproducible." },
  { id: "P1-RESTORE", priority: "P1", area: "Backup/restore", action: "Prueba real de restauración", state: "PLANNED", exit: "Restore efímero con checksum y auditoría." },
  { id: "P1-REMOTE-ASSURANCE", priority: "P1", area: "Remote assurance", action: "Capability de diagnóstico remoto", state: "BLOCKED", exit: "CAP-REMOTE-ASSURANCE-001 reproducible." },
  { id: "P2-VENDOR", priority: "P2", area: "Vendor independence", action: "Segunda implementación real", state: "PLANNED", exit: "Paridad y sustitución comprobables." },
  { id: "P2-FIELD", priority: "P2", area: "Field validation", action: "Prueba real de campo", state: "NO FIELD EVIDENCE", exit: "Métricas, incidentes, offline y revisión independiente." },
  { id: "P2-COMMERCIAL", priority: "P2", area: "Commercial evidence", action: "Piloto, pago, renovación y uso", state: "NOT CLAIMED", exit: "KPI, contrato, pago y repeatability autorizados." },
] as const;
