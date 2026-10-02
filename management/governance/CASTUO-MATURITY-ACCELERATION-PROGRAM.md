# CASTÚO-SYSTEM Maturity Acceleration Program

> Programa canónico para pasar de una arquitectura gobernada y parcialmente verificada a un sistema reproducible, operacionalmente probado, independientemente revisable y comercialmente demostrable. El programa dirige trabajo hacia evidencia; no convierte diseño, commits o README en claims de producción.

## Meta y orden de maduración

El objetivo es cerrar la cadena `seguridad → CI remoto → vertical slice → observabilidad/restore → E3 → piloto → pago → repetibilidad → N6`. El orden es normativo para la priorización: una nueva feature sólo se implementa si cierra un gate P0, P1, P2, E3 o G-COMM. Las capas AI, IoT, Quantum, blockchain, MCP, n8n y OpenClaw son enabling technologies y no pueden modificar el claim del producto principal sin su propio passport y gate.

| Frente | Prioridad | Gate de salida | Estado actual | Evidencia requerida |
|---|---|---|---|---|
| CI remoto diagnosticable | P0 | `R1-CI-REMOTE` | `BLOCKED` por permisos/checks/logs | runner, logs, annotations, artifact, SHA, workflow ID, timestamp y fallo reproducible |
| SaaS seguro y vault | P0 | `P0-SECURITY` | `SECURITY_HOLD` | backend-only, provider aprobado, rotación, revocación, least privilege, dual approval y audit completo |
| Vertical slice | P0 | `S-001` | `LOCAL / NO CLAIM` | offline, duplicate, reorder, conflict, recovery, envelope, review y decisión de claim |
| Observabilidad y restore | P1 | `P1-OPS` | `EVIDENCE_REQUIRED` | SLO runtime, métricas, incidentes, backup, restore byte-a-byte, checksum y replay |
| Control plane y autoridad canónica | P1 | `P1-CONTROL` | `GOVERNED` | una autoridad por categoría, read-model sin autoridad y deriva controlada |
| Segunda implementación | P1 | `P1-VENDOR-INDEPENDENCE` | `EVIDENCE_REQUIRED` | mismo contrato, inputs, outputs y evidencia en Adapter A/B |
| Benchmark competitivo | P2 | `P2-S-001` | `EVIDENCE-SCOPED` | 1/0/?/N/A, 1D/1V/1R, sensibilidad, provenance y replay |
| Revisión independiente | E3 | `GATE-R1` | `PENDING` | commit congelado, fixture, instrucciones, negative tests, envelope y resultado reproducible |
| Piloto de campo | G-COMM | `N5` | `PENDING` | PILOT-001, baseline, KPI, incident register, 12 runs, firmas y comparación |
| Mercado repetible | G-COMM | `N6` | `BLOCKED` | paid pilot, renovación, segundo cliente/dominio, vendor replacement, multi-tenant y SLA |

## Control plane canónico

`CASTUO-EVOLUTION` es la autoridad de governance; `Castuo-system` mantiene la implementación core; `goldfish` y `Cast-o` mantienen assurance; `castuo-offline-field-operations` mantiene field; `castuo-agro-edge` mantiene edge; `Traky12` es public read-model; copias, workspaces, laboratorios, sandboxes, experimentos y upstream forks son proyecciones o superficies no canónicas. Esta clasificación debe mantenerse en el inventario y en cada README.

## Vertical slice S-001

El escenario estrella sigue la secuencia: crear organización, registrar operación, capturar evento, desconectar red, generar eventos offline, reconectar, sincronizar, forzar duplicación, reordenación y conflicto, recuperar, generar envelope, revisar y producir una decisión de claim. Las métricas son continuidad, pérdida de eventos, tiempo de recovery, duplicados, reordenación, conflictos, idempotencia, provenance, completeness, hash, replay, review, gate y claim permitido/prohibido. Hasta disponer de replay independiente, el resultado es `LOCAL RESULT / NO CLAIM`.

## Evidence Strength y madurez

| Evidence strength | Significado | Límite de madurez |
|---|---|---|
| E0 | Claimed | No promociona |
| E1 | Documented | No supera N1 |
| E2 | Locally verified | N3 no puede superar E2 |
| E3 | Reproducibly verified | N4 no puede superar E3 |
| E4 | Independently reproduced | Base de E3/GATE-R1 |
| E5 | Field validated | Requerido para N5 |
| E6 | Commercially validated | Requerido para N6 |

La regla es `N3 ≤ E2`, `N4 ≤ E3`, `N5 requiere E5` y `N6 requiere E6`. Un commit o una ejecución local puede ser evidencia dentro de su boundary, nunca sustituto de revisión independiente, campo o economía.

## Roadmap temporal de gates

| Fase | Ventana | Objetivo | Entregables | Resultado esperado |
|---|---|---|---|---|
| Fase 0 | 0–30 días | Desbloquear | CI remoto, logs, SaaS hold, vault, secret scan, boundary y autoridad canónica | P0 green |
| Fase 1 | 30–60 días | Demostrar | S-001, partition/duplicate/reorder/conflict, restore, observabilidad, SLO y segundo adapter | N3→N4 |
| Fase 2 | 60–120 días | Independencia | E3 package, reviewer, reproducibilidad, benchmark y negative evidence review | E3/GATE-R1 |
| Fase 3 | 4–9 meses | Campo | PILOT-001, 12 runs, baseline, KPI, incident register, firmas y review | N5 |
| Fase 4 | 9–18 meses | Mercado | paid pilot, renewal, segundo cliente/dominio, reemplazo de vendor, multi-tenant y SLA | N6/G-COMM |

## KPI de dirección

Los KPI prioritarios son remote CI success rate, mean diagnostic time, test pass rate, restore success, offline event loss, sync recovery, conflict resolution, evidence completeness, reproducibility rate, provenance coverage, claim traceability, stale evidence rate, secrets exposed, critical dependencies, unauthorized mutation, audit completeness, availability, p95, error budget, recovery time, failed sync rate, paid pilot, KPI achieved, renewal, time-to-value y repeatability.

Se añaden dos indicadores de control:

`Evidence-to-Claim Ratio (ECR) = claims backed by reproducible evidence / total claims attempted`. El objetivo es aproximarse a 1.

`Promotion Debt (PD) = required evidence not yet closed for promoted capabilities`. El objetivo es 0; mientras PD sea positivo, el claim permanece bloqueado o limitado al alcance respaldado.

## Producto y soberanía

El producto se mantiene en tres capas: **Evidence Operating System** como core de capabilities, evidence, claims, gates, provenance y passports; **Evidence-Ready Field Operations** como producto de entrada offline/sync/recovery/evidence export; y **CASTÚO Assurance** como capa de reproducibilidad, vendor independence, security, observability y review. Las tecnologías habilitadoras no deben volver a fragmentar el control plane.

## Regla de promoción

> No promover una capacidad porque se haya construido. Promoverla sólo porque la evidencia demuestra que funciona dentro de un alcance definido.

La estrategia adjunta queda integrada como roadmap gobernado. Sus cifras, estados y claims operativos deben permanecer fechados y enlazados a artefactos; cuando el dashboard cambie, el programa debe actualizarse sin transformar una lectura local en evidencia externa.
