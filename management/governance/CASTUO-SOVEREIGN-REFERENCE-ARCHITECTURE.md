# CASTÚO-SYSTEM Sovereign Reference Architecture

> Documento canónico para gobernar la integración de CASTÚO-SYSTEM como un ecosistema referenciado, soberano y evidence-first. Define autoridad, fuentes de verdad, ownership, lineage de commits, límites de promoción y rollback. No constituye por sí mismo evidencia de producción ni autorización de claims.

## Principio rector

CASTÚO-SYSTEM es soberano cuando puede identificar quién decide, qué artefacto es autoritativo, qué evidencia justifica una afirmación, qué dependencia externa limita la decisión y cómo volver a un estado conocido sin destruir historial. La soberanía no significa aislamiento absoluto: significa **autoridad explícita, dependencia visible, datos mínimos, control de cambios y capacidad de recuperación**.

## Jerarquía canónica de autoridad

| Nivel | Fuente de verdad | Autoridad | No puede sustituir |
|---|---|---|---|
| A0 | `todo.md` | Historial operativo de tareas y estado de ejecución | Evidencia primaria o aprobación externa |
| A1 | `CASTUO-SYSTEM-OPERATING-INDEX.md` | Modelo de arquitectura, gates, claims, checkpoints y trazabilidad | Contratos o resultados de pruebas |
| A2 | Contratos tipados, schemas y passports | Semántica ejecutable de capabilities, evidence, maturity y claims | Revisión independiente o evidencia de campo |
| A3 | Tests, scans, SBOM, benchmarks y artefactos firmables | Evidencia reproducible dentro de un boundary definido | Security and quality remoto si el endpoint no es accesible |
| A4 | PR, review, branch protection y merge record | Autoridad de cambio sobre ramas protegidas | Autorización de proveedor o evidencia externa |
| A5 | Evidencia independiente, field y económica | Base para E3/N5 y claims promocionables | — |

Cuando dos fuentes discrepan, prevalece la fuente de mayor nivel sólo dentro de su dominio; una PR no invalida un contrato, un test local no invalida un 403 remoto y un README no puede elevar una capability a claim.

## Ownership y autoridad de cambio

| Objeto | Owner operativo | Aprobación mínima | Rollback |
|---|---|---|---|
| Dashboard y contratos locales | Platform owner | Tests, TypeScript, scans y checkpoint | Restaurar checkpoint nombrado |
| README gobernado e índice | Governance owner | PR revisada, validación 14/14 y cero escrituras directas en main | Revertir la PR o restaurar el commit de rama |
| Claims y passports | Assurance owner | Provenance, gate y revisión según audiencia | Marcar passport stale y retirar claim |
| Conectores SaaS y vault | Security owner | Proveedor aprobado, dual approval y pruebas de rotación/revocación | Volver a `SecurityHoldVaultAdapter` |
| Security and quality remoto | Repository maintainer / GitHub admin | Sesión con `security_events` y lectura timestamped | Revocar OAuth y reabrir remediation |
| S-001, E3 y N5 | Independent reviewer / pilot owner | Replay independiente, firma, KPIs y evidencia económica | Volver a P2 e invalidar evidencia |

Ningún agente o script puede fusionar automáticamente en ramas protegidas, aprobar su propio cambio, registrar secretos, cambiar un estado externo no observado o usar ausencia de acceso como resultado positivo.

## Commit lineage y referencia

Cada cambio gobernado debe ser trazable por la cadena:

`task → artifact → branch → commit → PR → review/checks → merge → checkpoint → evidence passport`.

El manifiesto `CASTUO-RECOVERY-MANIFEST.json` conserva hashes de artefactos críticos, HEAD, checkpoint, PR gobernada y claim boundary. El auditor `TRAKY12-PR-STATUS-AUDIT.json` conserva el estado de las 14 PRs, base/head, revisión, mergeability y límites de checks. Un commit puede ser **referencia de código** sin ser **evidencia de campo**; ambas categorías deben permanecer separadas.

## Soberanía de datos y dependencias

El frontend no recibe secretos. Los conectores sólo exponen intents, referencias, estados y errores redactados. Las dependencias externas —GitHub, vault, proveedores de datos, revisores y pilotos— se registran como límites explícitos con owner, permiso, evidencia necesaria y rollback. Los artefactos locales son reproducibles y exportables; los artefactos remotos se consultan de forma autenticada y se marcan `NOT_VERIFIED` cuando la autorización no existe.

## Gates y promoción

`P0` protege boundaries y supply chain; `P1` protege observabilidad, restore y diagnóstico; `P2` prepara la validación externa. `E3` requiere replay independiente de S-001 y `N5` requiere field/economic evidence. La cadena `CAPABILITY ≠ EVIDENCE ≠ MATURITY ≠ CLAIM ≠ COMPETITIVE ADVANTAGE` es normativa. El estado actual de los gates se mantiene en `OPEN-EXTERNAL-GATES.md` y los procedimientos en `EXTERNAL-GATE-EXECUTION-PACK.md`.

## Regla de continuidad

La integración se realiza mediante PRs idempotentes y checkpoints nombrados. No se utiliza reescritura destructiva de historial para resolver divergencias. Si un commit aparentemente se pierde, se comparan checkpoints, ramas remotas y artefactos; después se reconstruye mediante una nueva rama/PR y se registra el manifiesto de recuperación. Un README sólo declara el estado que puede enlazar a una fuente revisable.
