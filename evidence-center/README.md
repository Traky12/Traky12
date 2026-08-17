# CASTÚO-SYSTEM™ Evidence Center

## Propósito

El **Evidence Center** es el núcleo público de credibilidad técnica de CASTÚO-SYSTEM™. Organiza dossiers reproducibles para demostrar qué capacidad existe, en qué entorno se probó, qué resultados obtuvo y qué falta para promoverla. No es un registro contable, no sustituye contratos o facturas y no convierte una previsión comercial en un hecho.

> **Un dossier demuestra un alcance concreto. No demuestra más de lo que su commit, artefactos, pruebas y revisión permiten afirmar.**

## Modelo de madurez operativo

| Nivel | Significado | Evidencia mínima | No significa |
|---|---|---|---|
| **N3 — Implemented** | Código/configuración ejecutable en alcance definido | Commit, versión, tests unitarios y manifest | No significa piloto real |
| **N4 — Validated** | Validación en integración o staging | Protocolo, logs, resultados reproducibles y revisión | No significa operación continua |
| **N5 — Pilot** | Despliegue piloto en entorno real delimitado | Alcance, baseline, KPIs, datos brutos, informe y decisión | No significa cliente recurrente ni producción |
| **N6 — Operational** | Operación continua bajo métricas y responsabilidades | Runbook, observabilidad, SLA/SLO, alertas, rollback, incidentes y revisión periódica | No significa certificación legal |

La etiqueta del dossier debe reflejar el nivel realmente probado. `target_maturity` es un objetivo y nunca puede utilizarse como evidencia de madurez alcanzada.

## Digital Thread

Cada dossier debe conservar la cadena:

```text
Capability ID → Repository → Commit/Tag → Environment → Protocol
→ Baseline → KPI Definitions → Raw Results → Hashes
→ Review → Gate Decision → Current Status → Reassessment
```

Un enlace a un README no sustituye un commit/tag. Un hash demuestra integridad del artefacto recibido, no la veracidad de los datos de origen. Una prueba verde demuestra el alcance de esa prueba, no la operación completa del sistema.

## Estructura de un dossier

Cada capacidad se organiza como `N{level}-{CAPABILITY-ID}` y contiene, como mínimo:

```text
N5-CAPABILITY-ID/
├── capability.yaml
├── baseline.md
├── pilot-protocol.md
├── kpi-definition.yaml
├── results.md
├── conclusion.md
├── provenance.yaml
├── security.md
├── CHANGELOG.md
├── artifacts/
│   └── .gitkeep
└── hashes/
    └── manifest.sha256
```

Los datos personales, credenciales, secretos, imágenes sensibles y datos de explotación no deben incluirse en un repositorio público. El dossier público debe utilizar referencias cifradas, agregadas o pseudonimizadas, y declarar dónde se conserva el material restringido.

## Estados de evidencia

| Estado | Uso permitido |
|---|---|
| `DOCUMENTED` | Diseño, protocolo o capacidad descrita |
| `IMPLEMENTED` | Código o configuración existe en el commit indicado |
| `TESTED` | Prueba reproducible ejecutada en alcance declarado |
| `VALIDATED` | Revisión o validación delimitada por entorno y fecha |
| `PILOT` | Ensayo real con baseline, KPIs y resultados |
| `OPERATIONAL` | Operación continua con owner, métricas y runbook |
| `REASSESSMENT_REQUIRED` | Cambio de modelo, datos, entorno, clave, dependencia o riesgo |

Los estados no se saltan. Un dossier no puede pasar de `DOCUMENTED` a `OPERATIONAL` solo por completar una plantilla.

## KPIs y resultados

Cada KPI debe declarar unidad, fórmula, objetivo, periodo, fuente, método de medición, tamaño de muestra, tolerancia y limitaciones. Los objetivos de plantilla no son resultados. Los campos `Real` deben permanecer vacíos o marcados `PENDING` hasta disponer de datos.

Los resultados negativos se conservan. La secuencia de mejora es:

```text
FAILURE → FINDING → REMEDIATION → RE-TEST → GATE DECISION
```

## Seguridad y soberanía

El Evidence Center aplica mínimo privilegio, separación de datos públicos y restringidos, secret scanning, hashes SHA-256 de artefactos, cifrado fuera del repositorio y revisión de cambios. Un hash o un registro GaiaChain puede aportar integridad y trazabilidad, pero no sustituye control de acceso, retención, borrado lógico, evaluación de impacto o respuesta a incidentes.

Las integraciones con IA deben registrar modelo, versión, política, alcance de evaluación y revisión humana cuando corresponda. Un cambio de modelo o proveedor activa `REASSESSMENT_REQUIRED`.

## Gates de promoción

| Gate | Pregunta | Evidencia requerida |
|---|---|---|
| G0 | ¿La capacidad está identificada y tiene owner? | `capability.yaml` completo |
| G1 | ¿Existe implementación reproducible? | Commit/tag, manifest y tests |
| G2 | ¿Funciona en integración/staging? | Protocolo, logs y resultados |
| G3 | ¿El piloto real está autorizado y medido? | Alcance, baseline, KPIs y datos brutos |
| G4 | ¿La operación tiene controles y recuperación? | Runbook, observabilidad y rollback |
| G5 | ¿Existe revisión independiente o decisión externa? | Informe delimitado por alcance |

La promoción se registra en `conclusion.md` e incluye decisión, revisor, fecha, alcance, riesgos abiertos y condiciones de reevaluación.

## Cómo crear una capacidad

Ejecuta `create_capability.py` únicamente para generar una estructura inicial. Después completa la metadata, reemplaza objetivos de ejemplo, enlaza el commit/tag real, añade hashes y somete el dossier al validador. La plantilla no otorga por sí misma el nivel N5.

## Límites de publicación

El Evidence Center no prueba por sí mismo financiación recibida, clientes contratados, cobros, ayudas concedidas, cumplimiento legal, certificaciones, soberanía completa, producción continua ni rentabilidad. Esas afirmaciones requieren fuentes específicas y deben mantenerse fuera del perfil técnico salvo que estén documentadas por separado.

---
**Gobernanza de Evidencia para Infraestructura Digital Rural · Build · Validate · Preserve · Reassess.**

## Public navigation and authority boundary

This Evidence Center is a reviewer-first public navigation layer. The `castuo-evolution` control plane remains authoritative; this repository is a read-model and evidence index, not an operational authority.

```text
CAPABILITY → CLAIM → TEST → EXECUTION → ARTIFACT → HASH
→ REVIEW → GATE → PROMOTION
```

A public record may establish only the scope stated by its source, commit, artifact, hash, environment and review status. Public visibility is not official promotion.

## Disclosure levels

| Level | Publication rule |
|---|---|
| `PUBLIC` | Authorised public summary, manifest, scope or review state. |
| `INTERNAL` | Excluded from the public profile and index. |
| `CONFIDENTIAL` | Protected commercial, personal or technical material. |
| `RESTRICTED` | Secrets, credentials, private endpoints and sensitive operational evidence. |

The public surface excludes raw logs, customer identity, contracts, tax or bank records, private infrastructure topology and unverified operational evidence.

## Current public state

`EVIDENCE-SCOPED · STAGING-CANDIDATE · PROMOTION-BLOCKED`

The current state is generated from the control plane and must not be manually upgraded in this README. Production, recurring revenue, customer traction, certification, regulatory conformity and continuous operation remain `NOT_CLAIMED` unless separately evidenced and reviewed.

- [Public state](../docs/governance/CASTUO_PUBLIC_STATE.yaml)
- [Public Proof Matrix](../CASTUO_PROOF_MATRIX.md)
- [Public Operating Boundary](../CASTUO_OPERATING_BOUNDARY.md)
- [Evidence Center Index](../docs/evidence/CASTUO_EVIDENCE_CENTER_INDEX.md)
- [Public Knowledge & Evidence Index](https://castuo-system.es/)

`Identity != Documentation != Evidence != Execution != Review != Promotion`
