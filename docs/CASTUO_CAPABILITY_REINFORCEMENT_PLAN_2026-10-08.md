# CASTÚO-SYSTEM — Plan transversal de capacidades y refuerzo del ecosistema

**Fecha:** 2026-10-08  
**Rol del documento:** mapa público de capacidades y hoja de ruta de refuerzo.  
**Autoridad:** `Traky12` es el índice público; `Castuo-system` sigue siendo la autoridad técnica privada del núcleo.  
**Regla:** este documento no crea una nueva SSOT, no sustituye `data/capabilities.yaml`, `governance/framework.yaml`, el Evidence Center ni los gates existentes.

## 1. Objetivo

Convertir el ecosistema CASTÚO-SYSTEM en un activo técnico gobernado, transferible y progresivamente demostrable, reforzando de forma coordinada:

`producto → core → datos → edge → campo → evidencia → seguridad → assurance → gobernanza → operación → mercado → valor`

La estrategia no consiste en añadir más repositorios ni más funcionalidades por volumen. Consiste en cerrar las capacidades críticas con contratos, pruebas, evidencia, revisión y límites de claim claros.

## 2. Principios de ejecución

1. **Una autoridad por dominio.**  
   `Castuo-system` gobierna el estado técnico del core. `Traky12` solo representa el estado público.

2. **Capability ≠ Evidence ≠ Maturity ≠ Claim.**

3. **No promoción automática.**  
   Ninguna capacidad cambia de estado por número de commits, edad del código, documentación o actividad de GitHub.

4. **Evidence-first.**  
   Toda capacidad relevante debe poder seguir la cadena:
   `scope → contract → implementation → test → evidence → security → review → promotion`.

5. **No duplicación.**  
   Antes de crear un módulo, registro, dashboard, workflow o repositorio, se comprueba si ya existe una superficie equivalente.

6. **Negative evidence is evidence.**  
   Los blockers, fallos reproducibles y límites conocidos deben quedar registrados y no ocultarse.

7. **Commercial separation.**  
   Precio, previsión, financiación y valoración son hipótesis económicas fechadas; no se convierten en evidencia comercial por estar documentadas.

---

## 3. Mapa transversal de capacidades

> Los identificadores `CAP-TRK-xx` son **identificadores de seguimiento público**, no una nueva taxonomía normativa ni un sustituto del registro canónico de capacidades.

| ID | Capacidad | Resultado buscado | Superficie principal | Estado de referencia | Evidencia mínima para promoción |
|---|---|---|---|---|---|
| CAP-TRK-01 | Producto SaaS | Flujo de valor claro para cliente rural/productivo | `Castuo-system` + product-experience | PREPARED | Vertical slice usable + pruebas + feedback de usuarios/piloto |
| CAP-TRK-02 | Core platform | Núcleo modular y mantenible | `Castuo-system` | IMPLEMENTED / consolidating | Tests, contratos, observabilidad y control de regresión |
| CAP-TRK-03 | Gestión de datos | Operaciones, consumos, costes, incidencias y resultados trazables | `Castuo-system` | IMPLEMENTED / scope-dependent | Schema + persistence test + lineage + integrity evidence |
| CAP-TRK-04 | Identidad y autorización | Acceso deny-by-default y separación de organizaciones/roles | `Castuo-system` | PENDING | OIDC/tenant/role evidence + security review + CI |
| CAP-TRK-05 | Continuidad edge | Captura y continuidad con conectividad irregular | `Castuo-system` + `castuo-agro-edge` | PENDING | OVS-01 end-to-end + zero loss/duplicate/mutation + replay |
| CAP-TRK-06 | Operación offline | Trabajo de campo sin dependencia continua de nube | `castuo-offline-field-operations` | PENDING | Controlled offline scenario + recovery + exportable evidence |
| CAP-TRK-07 | IoT integration | Ingesta y sincronización de dispositivos bajo límites seguros | `castuo-agro-edge` | PENDING | Device contract + broker isolation + credential boundary + tests |
| CAP-TRK-08 | Evidence fabric | Paquetes verificables y replayables | `castuo-evidence` / E3 | IMPLEMENTED / bounded | Manifest + hashes + verifier + reproducible replay |
| CAP-TRK-09 | Independent verification | Reproducción por tercero sin asistencia síncrona | `castuo-e3-001` + foreign-verifier | PENDING | Independent reviewer run + recorded result + scope boundary |
| CAP-TRK-10 | Assurance / testing | Detección de regresión, seguridad y claims | `Cast-o` + `goldfish` | PENDING / partial | Reproducible test sets + report + risk disposition |
| CAP-TRK-11 | Security / supply chain | Dependencias, secrets, Actions y exposición controlados | `Castuo-system` + assurance surfaces | IN PROGRESS | Required security checks + pinned Actions + secret scan + remediation evidence |
| CAP-TRK-12 | Observability | Health, metrics, alerting y SLOs cuando desplegado | `Castuo-system` | PENDING | Deployed instrumentation + telemetry + runbook + observed evidence |
| CAP-TRK-13 | Deployment / rollback | Despliegue reproducible y reversión controlada | `Castuo-system` | PENDING | Clean environment + deployment record + rollback test |
| CAP-TRK-14 | Governance / claim control | Claims coherentes con evidencia | `Castuo-system` + public read-model | CURRENT / consolidating | Registry consistency + gate evidence + dated status |
| CAP-TRK-15 | Compliance / EU readiness | Trazabilidad regulatoria y organizativa | Governance + strategy surfaces | PREPARED | Requirement matrix + ownership + evidence links |
| CAP-TRK-16 | Commercial validation | Convertir utilidad técnica en clientes repetibles | Commercial dossier / product surfaces | NOT CLAIMED | Signed scope + measured KPI + paid pilot + repeatability |
| CAP-TRK-17 | Economic evidence | Vincular inversión, coste, precio y resultados | PIE PLUS / dated valuation memos | PLANNING | Workbook reconciliation + dated assumptions + realised results |
| CAP-TRK-18 | Technical asset / IP | Preservar valor, titularidad, provenance y transferibilidad | Profile + legal/IP records + core | IN PROGRESS | IP inventory + provenance + ownership + independent review |
| CAP-TRK-19 | Ecosystem coherence | Roles, links, names y boundaries consistentes | `Traky12` public map | CURRENT / consolidating | Repository map consistency + automated conformance |
| CAP-TRK-20 | Knowledge transfer | Un tercero puede entender, operar y revisar lo permitido | Docs + runbooks + evidence packages | PENDING | Reproducible onboarding + bounded operational procedure |

---

## 4. Orden de prioridad

### P0 — Cerrar el riesgo de credibilidad técnica

**CAP-TRK-04, 05, 08, 09 y 11**

Estas capacidades forman el núcleo de confianza:

- identidad y autorización;
- continuidad edge;
- evidencia verificable;
- reproducción independiente;
- seguridad y cadena de suministro.

No debe promocionarse una narrativa de producto más avanzada mientras este bloque mantenga blockers críticos sin evidencia.

### P1 — Convertir el núcleo en sistema demostrable

**CAP-TRK-02, 03, 06, 07, 10, 12 y 13**

Objetivo: demostrar un vertical slice completo y reproducible desde operación hasta observación.

La referencia técnica es:

`event → identity → persistence → continuity → recovery → sync → evidence → verify → observe`

### P2 — Convertir capacidad técnica en producto

**CAP-TRK-01, 14, 15, 20**

Objetivo: que un tercero pueda entender el producto, sus límites, sus responsabilidades y la evidencia que respalda cada claim.

### P3 — Convertir producto en negocio demostrable

**CAP-TRK-16 y 17**

Objetivo: reemplazar progresivamente las hipótesis por:

`discovery → pilot scope → paid pilot → KPI → renewal/repeatability`

y:

`planning → realised cost → realised revenue → unit economics → repeatability`

### P4 — Consolidación de valor

**CAP-TRK-18 y 19**

Objetivo: preservar titularidad, provenance, coherencia del ecosistema y transferibilidad del activo técnico.

---

## 5. Contrato común para cada capacidad

Cada capacidad prioritaria debe poder responder, en un único paquete o cadena enlazada:

| Pregunta | Evidencia requerida |
|---|---|
| ¿Qué hace? | Capability contract / scope |
| ¿Dónde vive? | Canonical repository/path |
| ¿Qué estado tiene? | State from canonical authority |
| ¿Cómo se prueba? | Test command / test fixture |
| ¿Qué demuestra el test? | Explicit acceptance criterion |
| ¿Qué evidencia queda? | Manifest, log, hash, artifact or report |
| ¿Quién revisa? | Named role or independent reviewer where required |
| ¿Qué riesgo queda? | Residual risk record |
| ¿Qué NO demuestra? | Claim ceiling / negative evidence |
| ¿Qué permite promover? | Existing canonical gate |

---

## 6. Vertical slice objetivo

El principal objetivo transversal de 2026-Q4 es cerrar **un único vertical slice verificable**, no muchos demostradores paralelos.

### Escenario

Un operador registra una actuación o evento en un entorno rural con conectividad potencialmente irregular.

La cadena deseada es:

`ACTUACIÓN → IDENTIDAD → PERSISTENCIA LOCAL → PÉRDIDA DE CONECTIVIDAD → RECUPERACIÓN → SINCRONIZACIÓN IDEMPOTENTE → HASH/EVIDENCIA → REPLAY → REVIEW`

### Criterios duros

- 0 eventos perdidos.
- 0 duplicados no controlados.
- 0 mutaciones silenciosas.
- Replay reproducible.
- Integridad verificable.
- Clean-environment reproduction.
- Security boundary preserved.
- Claim ceiling respected.

Un PASS de laboratorio no autoriza por sí solo una afirmación de producción, piloto real, certificación o adopción comercial.

---

## 7. Reglas de dependencia entre capacidades

1. **Producto depende de capacidad demostrable.**  
   No se promueve el SaaS sobre capacidades únicamente conceptuales.

2. **Commercial validation depende de producto usable.**  
   No se convierte una conversación comercial en validación.

3. **Operational status depende de deployment evidence.**  
   Código, Docker, dashboards o una health endpoint no equivalen a operación continua.

4. **Independent validation depende de reproducibilidad.**  
   El tercero debe disponer de un procedimiento acotado y suficiente para ejecutar su revisión.

5. **Value depends on evidence.**  
   La actividad de GitHub apoya el historial de ingeniería, pero no crea por sí sola valor de mercado.

---

## 8. Métricas de capacidad

El panel público debe evitar contar únicamente commits o contribuciones.

Métricas principales:

- **Coverage:** % de capacidades prioritarias con contract + test.
- **Evidence readiness:** % con evidencia reproducible enlazada.
- **Security closure:** % de findings críticos cerrados y verificados.
- **Reproducibility:** % de escenarios reproducibles sin asistencia síncrona.
- **Operational readiness:** % con deployment + telemetry + rollback evidence.
- **Commercial evidence:** nº de pilotos pagados, KPIs medidos y repeticiones.
- **Traceability:** % de claims públicos con provenance y claim ceiling.
- **Knowledge transfer:** nº de procedimientos que un tercero puede ejecutar según el alcance autorizado.
- **Value evidence:** coste real, ingresos realizados y resultados observados frente al plan.

**GitHub contributions, commits, PR count y line changes son métricas de actividad, no métricas de madurez.**

---

## 9. Governance of the plan

### `Traky12`

Public read-model:

- mantiene este plan;
- publica el mapa de capacidades;
- enlaza evidencia pública;
- muestra límites y blockers;
- no decide la promoción técnica.

### `Castuo-system`

Canonical technical authority:

- define e implementa capacidades del core;
- mantiene contratos técnicos y gates;
- registra evidencia;
- decide la promoción dentro del alcance autorizado.

### `castuo-evidence` / `castuo-e3-001`

Public evidence and reproduction surfaces:

- exponen evidencia seleccionada;
- permiten reproducción acotada;
- no sustituyen la autoridad técnica privada.

### `Cast-o` / `goldfish`

Assurance surfaces:

- test, security, recovery y verification support;
- no certifican por sí mismos el core.

### External reviewers / pilot owners

Independent evidence:

- reproducción;
- campo;
- KPIs;
- operación;
- resultados económicos.

---

## 10. Definition of Done transversal

Una capacidad prioritaria no se considera cerrada hasta disponer de:

`scope + implementation + test + evidence + security + review + residual risk + claim ceiling`

y, cuando aplique:

`independent reproduction + field result + commercial result + operational telemetry`

La ausencia de un elemento mantiene la capacidad en el estado correspondiente; no se completa por narrativa.

---

## 11. Primera secuencia de ejecución

**Bloque A — OVS-01**

Cerrar la ejecución controlada del gateway canónico y convertir el actual paquete P0 de evidencia en evidencia de ejecución P1.

**Bloque B — Identity / Security**

Cerrar los blockers de identidad, credenciales, broker boundary y checks remotos antes de hablar de producción.

**Bloque C — Independent reproduction**

Hacer que E3-001 pueda ser ejecutado por un tercero de forma independiente y registrar exactamente qué queda demostrado.

**Bloque D — Product vertical slice**

Reducir el producto a un flujo comercial mínimo: actuación → coste/consumo → evidencia → resultado → revisión.

**Bloque E — Commercial dossier**

Preparar un dossier de piloto con scope, baseline, KPI, responsable, tratamiento de datos, seguridad, precio y criterio de éxito.

**Bloque F — Economic / asset evidence**

Mantener separadas las magnitudes:

`420k RCN ≠ 750k technical asset ≠ market value ≠ company valuation`

La valoración técnica de trabajo debe permanecer fechada y revisarse cuando cambien la evidencia, la propiedad intelectual o la tracción comercial.

---

## 12. Target state

El objetivo no es llegar a “muchas capacidades”.

El objetivo es disponer de **pocas capacidades críticas plenamente demostradas**, con evidencia suficiente para que un tercero pueda revisar:

`what exists → how it works → how it was tested → what was observed → what remains unknown`

El estado objetivo del ecosistema es:

**menos promesa, más evidencia; menos duplicación, más coherencia; menos actividad sin criterio, más capacidades cerradas.**

## Claim boundary

Este documento no afirma:

- producción;
- certificación;
- independencia ya conseguida;
- adopción comercial;
- ingresos recurrentes;
- operación industrial;
- validación CTAEX real;
- valor de mercado;
- conformidad regulatoria.

El plan es una hoja de ruta de refuerzo. Su éxito se mide por el cierre verificable de capacidades, no por la cantidad de documentación o actividad de GitHub.
