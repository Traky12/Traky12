# CASTÚO-SYSTEM — Prioritized Assurance Roadmap P0/P1/P2

## Purpose and promotion rule

This matrix turns the systematic reinforcement review into governed work. **P0 is blocking**: affected capabilities remain at `G0/G1`, and no SaaS promotion is permitted until the security boundary and remote assurance path are closed. P1 strengthens repeatability and operational evidence. P2 prepares external credibility and commercial maturity; it must not be used to bypass P0.

> A documented control is not an operational claim. A local passing test is not remote assurance. A public index is not the control plane.

| Priority | Area | Action | Motivo | Criterio de salida | Estado |
|---|---|---|---|---|---|
| P0 | CI remoto | Resolver acceso a checks, logs y annotations con un scope mínimo y trazable. | Sin diagnóstico remoto, los fallos no pueden cerrarse con assurance completa. | Endpoint autenticado de sólo lectura, captura de run/job/annotation, evidencia redactada y protocolo 403 actualizado. | BLOCKED / credential pending |
| P0 | SaaS | Eliminar el patrón API key → localStorage → provider API. | Expone secretos y elimina el boundary de control. | Browser sólo maneja intent; backend/vault ejecuta; secret scan y prueba negativa pasan. | SECURITY HOLD |
| P0 | Secret management | Mantener secretos server-side, con allowlist, scopes mínimos, timeout, redacción y rotación. | Reduce fuga y acceso difuso. | Vault provider aprobado, rotación/revocación auditables, no secretos en bundle/logs. | PROVIDER PENDING |
| P0 | Clasificación | Formalizar `portfolio_units`, `public_records` e `indexed_surfaces`. | Evita confundir universos de conteo. | Contrato tipado: 16 portfolio repositories, 29 public records y 14 indexed surfaces, con definiciones y tests. | IMPLEMENTED |
| P0 | Seguridad global | Ejecutar secret scanning, dependency scanning y SBOM. | Hace fiable el estado de seguridad. | Gates CI reproducibles, artifact SBOM, baseline Dependabot documentado y cero local verificable. | PARTIAL / remote pending |
| P1 | Repositorios | Clasificar cada repo por sensibilidad y política proporcional. | No todas las superficies requieren el mismo control. | Catálogo con sensibilidad, datos, exposición, owner, controles y gate mínimo. | PLANNED |
| P1 | Identidad | Consolidar autenticación y autorización de APIs/conectores. | Evita accesos difusos entre sistemas. | Owner isolation, roles, scopes, separación de aprobadores y negative tests. | PARTIAL / core implemented |
| P1 | Observabilidad | Convertir monitoreo documental en métricas runtime. | Documentar no equivale a evidenciar. | SLOs, trazas redactadas, alertas, dashboard y prueba de fallo reproducible. | PLANNED |
| P1 | Evidencia | Normalizar clasificación y redacción en Evidence/Trust Passports. | Evita exponer evidencia sensible. | Schema de sensibilidad, provenance, audience, retention y redaction test. | PARTIAL |
| P1 | Backup/restore | Ejecutar una prueba real de restauración. | La continuidad debe demostrarse. | Fixture de backup, restore en entorno efímero, checksum y auditoría del resultado. | PLANNED |
| P1 | Remote assurance | Crear capability específica para diagnóstico remoto. | Reduce revisión manual dispersa. | `CAP-REMOTE-ASSURANCE-001`, protocolo autenticado y resultado reproducible. | BLOCKED / 403 |
| P2 | Vendor independence | Añadir una segunda implementación real del contrato. | Evita dependencia de un proveedor. | Paridad de contrato, pruebas de sustitución y evidencia comparable. | PLANNED |
| P2 | AI security passport | Definir límites de uso, datos y exposición de IA. | La IA requiere gobernanza propia. | Passport con datos permitidos, retención, redacción, modelo, revisión y claims prohibidos. | PLANNED |
| P2 | Revisión independiente | Solicitar revisión externa de seguridad/evidencia. | Reduce sesgo interno. | Reviewer identificado, scope, findings, remediations y decisión independiente. | PENDING |
| P2 | Field validation | Ejecutar pruebas reales de campo. | Sin campo no hay claim operacional. | Pilot scope, métricas, incidentes, offline continuity, signed evidence y revisión. | NO FIELD EVIDENCE |
| P2 | Commercial evidence | Medir piloto, pago, renovación o uso continuado. | La comercialización exige evidencia distinta. | KPI, precio, contrato, pago, delivery, review y repeatability con datos autorizados. | NOT CLAIMED |

## Gate mapping

| Gate | Required work | Promotion effect |
|---|---|---|
| G0 | Control plane, contracts, local tests and negative evidence. | Opens bounded exploration. |
| G1 | Traceable implementation, provenance and reproducibility. | Allows internal capability mapping. |
| G-R1 | External readability: independent reader can reproduce scope and limits. | Required before assurance-facing promotion. |
| G-COMM | Customer, KPI, price, payment, delivery and repeatability evidence. | Required before commercial claims. |
| G-FIELD | Field metrics, incidents, offline/recovery evidence and independent review. | Required before operational claims. |

## Decision sequence

The sequence is deliberate. Close P0 security and remote diagnosis first; stabilize asset classification; then implement P1 identity, runtime observability, evidence hygiene and restore; only afterward pursue P2 independence, external review, field and commercial evidence. Until P0 closes, affected systems remain `PROMOTION-BLOCKED` and the dashboard must display the reason rather than infer readiness.

## Expected result registry

The matrix uses `exit` for the gate condition and the following registry for the **expected result** delivered by each work item.

| ID | Expected result |
|---|---|
| P0-CI-REMOTE | Remote workflow failures expose reproducible run, job and annotation evidence without secret disclosure. |
| P0-SAAS-BOUNDARY | The browser contains no provider key or execution path; backend/vault owns provider calls. |
| P0-CLASSIFICATION | Audits distinguish 16 portfolio units, 29 public records and 14 indexed surfaces. |
| P0-SUPPLY-CHAIN | Source scan, dependency audit and SBOM are reproducible locally, with remote status separated. |
| P1-REPO-SENSITIVITY | Every repository has an owner, sensitivity class, data boundary and minimum gate. |
| P1-IDENTITY | Every API action is owner/role/scope checked and auditable. |
| P1-OBSERVABILITY | Runtime health is represented by metrics, SLOs, traces and reproducible alerts. |
| P1-RESTORE | A fresh environment can restore a verified backup and produce checksum evidence. |
| P1-REMOTE-ASSURANCE | Remote diagnostics become a governed, repeatable capability rather than manual inspection. |
| P2-VENDOR | A second implementation passes the same contract and substitution suite. |
| P2-FIELD | Field evidence contains metrics, incidents, continuity data and independent review. |
| P2-COMMERCIAL | Commercial claims are backed by authorized KPI, payment, delivery and repeatability evidence. |
