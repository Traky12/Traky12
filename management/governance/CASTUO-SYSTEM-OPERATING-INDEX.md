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
| Secure platform | Connectors, auth, audit, rotation, revocation | 62 tests verdes, secret scan sin hallazgos, dependency scan 0 advisories y SBOM local generado |
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
| `CASTUO-COMMIT-LINEAGE.md` | Ledger reproducible de todos los commits locales integrados en el bloque README gobernado |
| `CASTUO-MATURITY-ACCELERATION-PROGRAM.md` | Roadmap G0→N6, frentes P0/P1/P2/E3/G-COMM, S-001, KPI, ECR y Promotion Debt |
| `CASTUO-PUBLIC-NARRATIVE-AND-WEDGE.md` | Posicionamiento canónico, título profesional, wedge Evidence-Ready Field Operations y secuencia de confianza |
| `CASTUO-OSS-REPUTATION-STRATEGY.md` | Reputación OSS basada en contribuciones reales, colaboración, comunidad, documentación y tracción orgánica |
| `CASTUO-INTEGRAL-IMPROVEMENT-AND-SOVEREIGN-STATE.md` | Proceso de mejora integral, arquitectura soberana, estado evidence-scoped y gates pendientes |

## Estado GitHub

Los cambios documentales sobre ramas protegidas se preparan mediante PR, nunca mediante escrituras directas sobre `main`. La PR `Traky12/Castuo-system#347` contiene el bloque README gobernado; las demás PRs de perfil se enumeran en `TRAKY12-README-SYNC-RESULT.json`. El merge no debe ejecutarse automáticamente: requiere checks, revisión y, donde corresponda, aprobación dual.

## Open claims

No se autoriza afirmar que CASTÚO-SYSTEM es mejor que Palantir, Microsoft o IBM; que está validado en producción; que dispone de ventaja competitiva demostrada; que tiene N5/N6; o que los Security and quality remotos están en cero mientras el acceso GitHub requerido siga bloqueado. Estos límites son parte del sistema y deben permanecer en los README y passports.

## Checkpoint operativo

La versión restaurable actual del dashboard es el checkpoint web `3803b849`; `be1938b2`, `0a7e510b` y `adc86618` quedan como referencias anteriores de continuidad. La validación local más reciente registra 30 archivos de prueba y 66 tests verdes, TypeScript correcto, build correcto, secret scan sin hallazgos, dependency scan con 0 advisories y SBOM local de 88 componentes. El dashboard se verificó visualmente en viewport de escritorio y móvil. Los artefactos gobernados se sincronizaron en Castuo-system con la PR #347 y en Traky12 management con la rama `docs/castuo-governed-readme-20260818`; el ledger contiene 60 commits y las 14 PRs README permanecen validadas. El diagnóstico GitHub del 2026-08-18 mantiene `BLOCKED / NOT_VERIFIED` por falta de `security_events`. Estos identificadores describen estados de código/documentación, no evidencia de campo ni aprobación externa.

## Reauditoría integral y Ledger Explorer — 2026-08-18

La reauditoría de `todo.md` separó los pendientes en tres clases: controles locales completados, gates externos bloqueados y tareas dependientes de aprobación. El dashboard incorpora Ledger Explorer con búsqueda por SHA/mensaje/repositorio/PR, filtros por estado y rama, panel interactivo de historial y exportación PDF evidence-scoped del ledger/README.

El lineage actual contiene 60 commits en `CASTUO-COMMIT-LINEAGE.md`, `shared/lineageData.ts` y el bloque README gobernado. Las 14 PRs README están abiertas en la rama gobernada, con validación 14/14, marcadores únicos, 60 SHA y ausencia de claims prohibidos. El checkpoint restaurable más reciente es `3803b849`; la validación local registra 66 tests verdes, TypeScript, build, secret scan, dependency scan 0 advisories, SBOM de 88 componentes y render responsive correcto.

Los gates remotos no cambian: GitHub Security and quality permanece `BLOCKED / NOT_VERIFIED` por `security_events`; el proveedor vault real permanece `SECURITY_HOLD`; restore/diagnóstico remoto y assurance field/económica permanecen `EVIDENCE_REQUIRED`. Ningún estado local se interpreta como evidencia de producción.

## Binary Value Rule v1.0 — 2026-08-18

CASTÚO incorpora una regla binaria de promoción anti-autoengaño. Cada condición vale `0` o `1`; sólo puede valer `1` con evidencia primaria, trazable y reproducible dentro del alcance declarado. El estado conservador actual es **3/12**: B01 arquitectura definida, B02 capacidad implementada y B03 test reproducible local. B04–B12 permanecen en `0` hasta cerrar verificabilidad remota, reproducción independiente, runtime, observabilidad, vault, campo, independencia de proveedor y evidencia comercial.

La secuencia crítica es `B04 → B05 → B07 → B10 → B06 → B08 → B09 → B11 → B12`. Los niveles A–E no se promocionan por promedio: cada binario crítico del nivel debe estar en `1`. El contrato tipado se encuentra en `shared/binaryValueRule.ts`, el panel en `client/src/components/BinaryValueRulePanel.tsx`, las pruebas en `server/binaryValueRule.contract.test.ts` y la especificación canónica en `docs/governance/CASTUO-BINARY-VALUE-RULE.md`.

## Binary Bottleneck and Promotion Debt v1.1 — 2026-08-18

La regla binaria se extiende con dos scopes. El valor externo sigue siendo `B01–B12 = 3/12`; los controles internos `B13–B15 = 3/3` cubren change lineage reproducible, identidad profesional inequívoca y portfolio coherente con límites de claims visibles. Los tres controles internos mejoran la gobernanza, pero no se suman al valor tecnológico externo.

El **Binary Bottleneck** es el primer binario obligatorio que permanece en `0`; el cuello de botella actual es `B04 / Remote verification`. **Promotion Debt** cuenta los ceros externos obligatorios de la ruta (`9`) y **Critical Promotion Debt** cuenta el bloqueo inmediato (`1`). No hay promoción parcial por porcentaje, número de commits, tests, README o densidad documental. El contrato tipado y sus pruebas están en `shared/binaryValueRule.ts` y `server/binaryValueRule.contract.test.ts`.

## Unified strategy and binary progression — 2026-08-18

La estrategia unificada define CASTÚO-SYSTEM como un sistema de operaciones rurales distribuidas con gobernanza de evidencia, assurance, edge y field operations. Sus tres principios operativos son: `no claim without provenance`, `no AI deployment without assurance` y `no scale without security and observability`.

El portfolio gobernado separa superficie pública, control plane, CI/evidence, seguridad/recuperación, edge, operaciones offline-first y núcleo privado. La escalera de valor exige cerrar binarios en orden: existencia (`B01–B03`), verificabilidad (`B04–B05`), operación (`B06–B07+B10`), campo (`B08–B09`) y negocio (`B11–B12`). El estado externo permanece en `3/12`; `B13–B15 = 3/3` son controles internos y no se suman a valor tecnológico. La especificación completa está en `docs/governance/CASTUO-UNIFIED-STRATEGY-AND-BINARY-PROGRESSION.md`.

## Official SaaS identity — 2026-08-18

La marca oficial de CASTÚO se centraliza mediante `client/src/components/BrandLogo.tsx` y `/manus-storage/pasted_file_tFeqhx_Capturadepantallalogotipo_f0a36c2b.png`. La cobertura incluye sidebar, topbar, autenticación, footer, favicon, metadata social y contexto de exportación gobernada. La identidad visual mejora coherencia y accesibilidad, pero no modifica los scopes de evidencia ni convierte actividad documental en valor externo.

## Sovereign Control Plane v1 — 2026-08-18

CASTÚO-SYSTEM queda formalizado como una infraestructura soberana común de control, confianza, datos y evidencia. Educación, biotech, drónica, robótica, medicina y No-GNSS son dominios gobernados que heredan la misma trust architecture y no implementan seguridad paralela.

La fórmula de decisión obligatoria es `ALLOW = I ∧ A ∧ G ∧ D ∧ T ∧ E ∧ R`: identidad, autorización, integridad criptográfica, política del dato, confianza del dispositivo, evidencia y recuperación. Los binarios no sustituyen a la criptografía; el ledger no sustituye al backend; el Digital Twin no es evidencia de campo; y GaiaChain/Trazalia no se presentan como cifrado ni como seguridad total.

Contratos canónicos añadidos: `CASTUO-SOVEREIGN-CONTROL-PLANE-REFERENCE-ARCHITECTURE.md`, `CASTUO-CAPABILITY-CONTRACT.yaml`, `CASTUO-BINARY-SECURITY-ENVELOPE.yaml`, `CASTUO-DATA-SOVEREIGNTY-POLICY.yaml`, `CASTUO-EVIDENCE-GRAPH-CONTRACT.yaml`, `CASTUO-DIGITAL-TWIN-CONTRACT.yaml`, `CASTUO-LEDGER-ANCHOR-POLICY.yaml`, `CASTUO-INCIDENT-RECOVERY-CONTRACT.yaml` y `CASTUO-REPOSITORY-FEDERATION-CONTRACT.yaml`.

La secuencia de incidentes queda especificada como `detect → identity/signature/replay check → policy → deny/quarantine → preserve → alert → rollback/recover → review`. La federación permanece posterior a replay, recovery, interoperabilidad y revisión independiente. La validación local de esta iteración registra 33 archivos de prueba y 75 tests verdes; los gates remotos, Vault real, field evidence, assurance y producción mantienen sus límites anteriores.

El plan ejecutable completo queda persistido en `CASTUO-SOVEREIGN-IMPLEMENTATION-PLAN.md`. La matriz local posterior a la primera implementación registra secret scan sin credenciales, dependency scan con `advisories=0` y SBOM de 88 componentes directos. Estos resultados son locales y no sustituyen la verificación remota de GitHub ni la assurance externa.

La preparación local de restore queda trazada en `shared/restoreReadiness.ts` y `server/restoreReadiness.contract.test.ts`: comprueba manifest, hashes, checkpoint y rollback window, pero mantiene `LOCAL RESTORE READINESS / NO PRODUCTION RESTORE CLAIM` hasta que exista una restauración efímera real revisada.

## Master Architecture Decision and capability packs — 2026-08-18

Los documentos maestros 22/23 consolidan la definición canónica: CASTÚO-SYSTEM es un **Sovereign Evidence & Trust Control Plane for distributed intelligent systems**. `castuo-evolution` mantiene autoridad y gobernanza; `Castuo-system` ejecuta el core; `castuo-progress-dashboard` observa y gestiona; `goldfish` concentra security/recovery/assurance; `Cast-o` concentra CI/release evidence; `castuo-agro-edge` y `castuo-offline-field-operations` operan la fabric edge/offline; y `Traky12` publica un read-model limitado.

Se añadieron `CASTUO-MASTER-ARCHITECTURE-DECISION.md`, `CASTUO-CAPABILITY-PACKS.yaml` y `CASTUO-COMP-METAMODEL.yaml`. Los seis dominios comienzan como capability packs heredando identidad, data policy, criptografía, evidence, audit, recovery y binary gate. No se abre un repositorio vertical sin una frontera independiente de ownership, lifecycle, seguridad, despliegue o cumplimiento.

`CAP-INCIDENT-001` queda implementado localmente como Incident Fabric: una condición inválida se convierte en `DENY → QUARANTINE → INCIDENT-ID → EVIDENCE-HASH → RECOVERY → REVIEW`, con nonce/replay, bloqueo de escritura, recovery y preservación de evidencia. Validación local de esta integración: 38 archivos de prueba y 95 tests verdes; gates externos permanecen sin promoción.

El paquete accionable `CASTUO-EXTERNAL-GATE-EXECUTION-PACK.md` consolida entradas, verificaciones, evidencia esperada, owner y rollback para GitHub remoto, Vault, assurance, field, commercial, restore y federation. El documento es preparatorio: no contiene secretos ni cierra gates externos.

## GitHub ecosystem audit and committee register — 2026-08-18

`GITHUB-ECOSYSTEM-AUDIT-2026-08-18.md` registra el inventario de 14 repositorios propios autorizados, PRs, issues, protección de main y límites del scope remoto. `GITHUB-COMMITTEE-ISSUE-PR-REGISTER-2026-08-18.md` contiene los borradores de comités, issues y PRs; son preparatorios y no representan publicaciones remotas ni aprobaciones. La publicación queda sujeta a confirmación, revisión y ramas protegidas.

## Capability evolution from files 24/25 — 2026-08-18

`CASTUO-CAPABILITY-EVOLUTION-2026-08-18.md` is the canonical update for the dashboard role and capability state. It records `GOVERNED_CONTROL_AND_OBSERVABILITY_SURFACE`, `CAP-INCIDENT-001`, the COMP metamodel, six capability packs, Evidence Graph replay, local validation snapshot and the P0 main-protection governance gap. The distinction remains strict: `Displayed ≠ Executed`, local validation ≠ remote conformance, and capability pack ≠ operational capability. The current snapshot is 101 tests green, TypeScript/build pass, secret scan pass, dependency scan 0 advisories and SBOM 88 direct components; external gates remain pending or not claimed.

## External closure state — 2026-08-18

`CASTUO-EXTERNAL-CLOSURE-STATE-2026-08-18.md` consolidates the nine remaining closures, available evidence, required inputs, owners, decisions and rollback boundaries. It records the six remote security endpoints returning HTTP 403, the partial main-protection observation, provider-neutral Vault `SECURITY_HOLD`, local restore readiness and the absence of field/commercial/federation claims.

## Public profile cleanup — 2026-08-18

`CASTUO-PUBLIC-PROFILE-CLEANUP-2026-08-18.md` defines the governed cleanup for the public Traky12 profile: one identity treatment, bilingual entry points, clean pinned repositories, explicit public links, `14 REPOSITORIES PENDING`, removal of GitHub UI residue and preservation of all non-claim boundaries. It is a PR specification, not a merged-profile claim.


## Registro de sesión y Security Assurance Layer — 2026-08-18

`CASTUO-SESSION-REGISTER-2026-08-18.md` conserva la información procesada en la sesión, sus decisiones, artefactos, validaciones y límites. Se añadió `shared/securityAssurance.ts` como capa superior al Sovereign Control Plane: evalúa integridad de sesión, nonce/replay, expiración, backend boundary, redacción, alcance de evidencia y claim firewall con política fail-closed. El panel `SecurityAssuranceLayerPanel` sólo expone un readout local y redactado: `LOCAL ASSURANCE READOUT / NO PRODUCTION CLAIM`.

La capa no cierra Security and quality remoto, no selecciona un proveedor Vault y no convierte tests locales en evidencia de producción. GitHub `security_events`, Vault real, assurance independiente, field/economic evidence, restore real y federation continúan en los estados externos previamente registrados.


## Política del prompt maestro 28 — 2026-08-18

`CASTUO-MASTER-PROMPT-POLICY-2026-08-18.md` normaliza `pasted_content_28.txt` como política operativa gobernada. Mantiene el wedge `CASTÚO Evidence-Ready Field Operations`, los estados `CURRENT/TARGET/EXPERIMENTAL/PENDING/NOT_CLAIMED`, qualifiers scope-bound, la prioridad P0/P1/P2, la separación entre controles internos y valor externo y el cuello de botella `B04 = remotely verifiable CI = 0`. El baseline conservador queda en `B01–B03 = 1`, `B04–B12 = 0`, `B13–B15 = 1`, valor externo `3/12`, Promotion Debt `9` y Critical Debt `1`, sujetos a los artefactos binarios autoritativos.

El dashboard muestra ahora esta política mediante `MasterPromptGovernancePanel`. La superficie comunica primero el wedge, después la evidencia y los bloqueos; cualquier porcentaje se interpreta como coverage etiquetada y no como madurez global. El prompt maestro no cambia los estados externos: GitHub remoto, Vault, field, assurance independiente, comercial, restore y federation permanecen sin promoción.


## Reparación de integridad operativa — 2026-08-18

La auditoría local detectó una divergencia entre 91 commits Git y 67 entradas en el ledger/proyección. Se regeneraron `CASTUO-COMMIT-LINEAGE.md`, `shared/lineageData.ts` y el bloque README gobernado desde el historial Git autoritativo; ahora reproducen 91 SHAs y 14 PRs. El contrato `shared/operationalIntegrity.ts` añade validación fail-closed de `COMMIT → PR → ARTIFACT → EVIDENCE → GATE → CLAIM`, con owner, timestamp, SHA, estado, evidencia, gate, claim boundary y rollback obligatorios. El readout queda `LOCAL OPERATIONAL INTEGRITY / NO PRODUCTION CLAIM` y los estados `PENDING/BLOCKED` producen `REVIEW_REQUIRED`.

La reparación es local y no modifica la interpretación de GitHub Security and quality, Vault, assurance independiente, field evidence, economic evidence, restore real ni federation. Esos cierres permanecen externos y no verificados.
