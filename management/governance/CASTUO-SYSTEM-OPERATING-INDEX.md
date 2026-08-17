# CASTÚO-SYSTEM Operating Index

> Este índice convierte el trabajo evolutivo de CASTÚO-SYSTEM en una operación gobernada y repetible. El documento organiza contratos, evidencia, tareas, PRs y límites de promoción; no sustituye la evidencia primaria ni autoriza claims por sí mismo.

## Propósito operativo

CASTÚO-SYSTEM funciona como un **Evidence Operating System** para capacidades de operaciones distribuidas, edge, field operations y sistemas habilitados por IA. La cadena normativa es: detectar capacidad, capturar evidencia, asignar madurez, autorizar claim y controlar promoción. El estudio competitivo, el dashboard y los repositorios son superficies conectadas de esa misma cadena.

## Arquitectura de tres planos

| Plano | Responsabilidad | Artefactos de referencia |
|---|---|---|
| Control plane interno | Capabilities, evidence, claims, gates, passports, SLOs, permisos y rollback | Assurance Roadmap, Trust Passport, AI Security Passport, Secure Connectors |
| Competitive intelligence | Matriz 1/0/?/N/A, scoring, escenarios, sensibilidad y passports competitivos | Competitive Study, Competitive Capability Passports, `coverage proven` y `evidence completeness` |
| Validación externa | Revisión independiente, benchmark reproducible, piloto real, KPIs y evidencia económica | S-001, P2/E3/N5 gates, Due Diligence Evidence Pack |

## Estado de las capacidades

| Capability | Implementado | Evidencia permitida | Estado de promoción |
|---|---:|---|---|
| Secure SaaS Connectors | Sí, backend boundary y pruebas | Intents, rotación, revocación, owner isolation, scopes mínimos, auditoría redactada | `SECURITY_HOLD` hasta proveedor vault aprobado |
| Quantum Decision Lab | Sí, determinista y local | Readouts de evidencia, confianza heurística y factores | `LOCAL RESULT / NO CLAIM` |
| P0/P1/P2 assurance | Sí, contratos, roadmap y gates | Matrices, pruebas, SLO/observability, redacción, AI Passport | Externa/producción pendiente cuando el gate lo exige |
| Competitive Study | Sí, 17 registros y passports | Fuentes primarias, hipótesis separadas, 1/0/?/N/A, scoring ponderado | No competitive advantage sin evidencia externa/económica |
| S-001 benchmark | Sí, fixture y evaluador determinista | Continuity, recovery, provenance, completeness, reviewability y claim generation | P2 fixture; E3 replay independiente; N5 field/economic evidence |
| Traky12 README integration | Sí, 14 PRs autorizadas | Bloque común, inventario, mapa de trazabilidad y validación remota 14/14 | Merge sujeto a checks y review de cada repositorio |

## Semántica de evidence y claims

La semántica de la matriz competitiva es normativa: `1D` significa declaración de una fuente primaria; `1V`, verificación reproducible; `1R`, reproducción independiente; `?`, incertidumbre; `0`, ausencia dentro del límite probado; y `N/A`, alcance no comparable. La puntuación de **coverage proven** se mantiene separada de **evidence completeness** para que `?` no sea tratado como `0`.

`CAPABILITY ≠ EVIDENCE ≠ MATURITY ≠ CLAIM ≠ COMPETITIVE ADVANTAGE`. Un claim sólo puede promoverse si su passport, provenance, madurez y gate lo autorizan. La ventaja competitiva permanece `NOT_ASSESSED / EVIDENCE_REQUIRED` hasta contar con benchmark independiente, evidencia económica y revisión externa.

## Gates y límites

| Gate | Criterio de salida | Estado operativo |
|---|---|---|
| P0 | Boundary backend, secrets scan, supply-chain, permisos y control de exposición | Localmente validado; vault real y assurance remoto permanecen abiertos |
| P1 | Sensibilidad, observabilidad runtime, SLOs, redacción, restore y diagnóstico | Contratos y smoke local validados; producción pendiente |
| P2 | Segunda implementación, AI Passport, revisión, field validation y economía | Protocolo default-deny documentado |
| E3 | Replay independiente del benchmark S-001 | No promovido sin revisor independiente |
| N5 | Piloto firmado con KPIs y evidencia económica | No promovido |

El registro `OPEN-EXTERNAL-GATES.md` es la fuente operativa para vault, GitHub `security_events`, alertas remotas, restore de producción, diagnóstico remoto, assurance externa y validación field/económica.

## Recuperación y continuidad de commits

El estado recuperable se reconstruye desde tres fuentes independientes: checkpoints del dashboard, commits y ramas PR remotos, y artefactos contractuales locales. La auditoría actual conserva HEAD local `cb02a49`, la PR `Traky12/Castuo-system#347` con README, índice y gates, y los artefactos de inventario, validación y trazabilidad. Una tarea no se considera perdida hasta comparar estas tres fuentes.

La política de continuidad exige que cada cambio documental se publique mediante una rama y PR idempotente, que los checkpoints incluyan la lista de gates y que `todo.md` conserve las tareas abiertas. Nunca se usa `git reset --hard` para resolver divergencias; se restaura desde un checkpoint identificable o se reconstruye mediante una nueva PR.

## Plan evolutivo y tareas

| Fase | Resultado | Evidencia actual |
|---|---|---|
| Foundation | Repositorios, contratos, dashboard y límites | Dashboard checkpoint `a08bf249` |
| Secure platform | Connectors, auth, audit, rotation, revocation | 60 tests y secret/dependency gates locales |
| Evidence system | Passports, public index, assurance roadmap, S-001 | Artefactos persistidos y contratos tipados |
| Competitive system | Matrix, scoring, passports, reproducibility benchmark | 17 records; 10 fuentes primarias; 14 README PRs |
| External promotion | GitHub remote zero, vault real, E3/N5 | Bloqueado hasta autorización/evidencia requerida |

El backlog vivo se mantiene en `todo.md`. Cada tarea debe conservar owner, entrada, salida, criterio de cierre, evidencia y rollback. No se elimina una tarea histórica: se marca como completada o se mantiene explícitamente bloqueada. Las tareas pendientes de GitHub Security and quality, proveedor vault, restore/diagnóstico remoto y validación externa siguen siendo trabajo operativo y no evidencia de producción.

## Trazabilidad y repositorios

| Artefacto | Función |
|---|---|
| `TRAKY12-README-INVENTORY.json` | 16 repositorios remotos, README, superficie escribible, sensibilidad y estado de evidencia |
| `TRAKY12-TRACEABILITY-MAP.json` | Enlace repositorio → passport → fuente → gate → checkpoint |
| `TRAKY12-README-SYNC-RESULT.json` | 14 PRs abiertas y ramas documentales |
| `TRAKY12-README-CONTENT-VALIDATION.json` | Validación remota 14/14 de marcadores, contenido y claims |
| `OPEN-EXTERNAL-GATES.md` | Bloqueos operativos y criterios de salida |
| `Competitive Capability Passports` | Estado de capability, provenance, madurez y claims prohibidos |
| `S-001 benchmark` | Protocolo reproducible y boundary P2→E3→N5 |
| `CASTUO-RECOVERY-MANIFEST.json` | HEAD, checkpoint, hashes de artefactos críticos, PR gobernadas y claim boundary sin secretos |
| `TRAKY12-PR-STATUS-AUDIT.json` | Estado de 14 PRs, base/head, revisión, mergeability, checks visibles y límites de permisos |
| `EXTERNAL-GATE-EXECUTION-PACK.md` | Procedimientos seguros, evidencia requerida y rollback para gates externos |
| `CASTUO-SOVEREIGN-REFERENCE-ARCHITECTURE.md` | Jerarquía de autoridad, ownership, soberanía de datos, commit lineage y rollback |
| `CASTUO-COMMIT-GOVERNANCE-POLICY.json` | Política ejecutable de commits, PRs, ownership, checks, claims y rollback |
| `CASTUO-MATURITY-ACCELERATION-PROGRAM.md` | Roadmap G0→N6, frentes P0/P1/P2/E3/G-COMM, S-001, KPI, ECR y Promotion Debt |
| `CASTUO-PUBLIC-NARRATIVE-AND-WEDGE.md` | Posicionamiento canónico, título profesional, wedge Evidence-Ready Field Operations y secuencia de confianza |

## Estado GitHub

Los cambios documentales sobre ramas protegidas se preparan mediante PR, nunca mediante escrituras directas sobre `main`. La PR `Traky12/Castuo-system#347` contiene el bloque README gobernado; las demás PRs de perfil se enumeran en `TRAKY12-README-SYNC-RESULT.json`. El merge no debe ejecutarse automáticamente: requiere checks, revisión y, donde corresponda, aprobación dual.

## Open claims

No se autoriza afirmar que CASTÚO-SYSTEM es mejor que Palantir, Microsoft o IBM; que está validado en producción; que dispone de ventaja competitiva demostrada; que tiene N5/N6; o que los Security and quality remotos están en cero mientras el acceso GitHub requerido siga bloqueado. Estos límites son parte del sistema y deben permanecer en los README y passports.

## Checkpoint operativo

La versión restaurable actual del dashboard es `cb02a49` en git local y el checkpoint web `cb02a495`; `a08bf249` queda como checkpoint anterior de la actualización integral de README. Los artefactos gobernados se sincronizaron en Castuo-system con la PR #347 y en Traky12 management con la rama `feature/ecosystem-management-layer`. Estos identificadores describen estados de código/documentación, no evidencia de campo ni aprobación externa.
