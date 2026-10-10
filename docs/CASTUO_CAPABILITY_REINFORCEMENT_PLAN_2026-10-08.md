# CASTÚO-SYSTEM — Estrategia maestra de capacidades y cierre demostrable

**Fecha de elaboración:** 2026-10-08  
**Estado actualizado:** 2026-10-09  
**Rol:** mapa público de capacidades, ruta crítica y control de refuerzo del ecosistema.  
**Autoridad:** `Traky12` es el public read-model; `Castuo-system` conserva la autoridad técnica del core.  
**Regla estructural:** este documento no crea una SSOT, una taxonomía normativa, un nuevo maturity enum ni nuevos promotion gates.

## Posición ejecutiva

Este plan no afirma que todas las capacidades enumeradas estén implementadas.
Distingue entre capacidades documentadas, parcialmente implementadas, probadas,
revisadas de forma independiente, validadas en piloto y validadas comercialmente.

El objetivo inmediato no es ampliar la arquitectura, sino cerrar un único vertical
slice reproducible, validarlo con un usuario externo y convertir la evidencia resultante
en un producto, un expediente de financiación y una oferta comercial.

---

## 1. Cambio de estrategia

CASTÚO-SYSTEM entra en una fase distinta.

Hasta ahora, la prioridad ha sido construir arquitectura, capacidades, seguridad, gobernanza y superficies de evidencia. La siguiente etapa debe reducir la incertidumbre mediante **cierre demostrable**.

El objetivo no es desarrollar más superficie. Es demostrar una unidad técnica completa que pueda ser:

`ejecutada → observada → reproducida → verificada → revisada → promovida`

La estrategia pasa de:

`capability accumulation`

a:

`evidence closure`

La primera unidad de prueba será un único vertical slice de operación rural/productiva con continuidad frente a pérdida de conectividad.

---

## 2. Objetivo inmediato

> **Cerrar un único vertical slice de CASTÚO-SYSTEM que pueda ejecutarse, probarse, auditarse y explicarse sin depender de promesas futuras.**

Ese slice debe demostrar una cadena concreta:

`EVENTO DE SENSOR → IDENTIDAD DE EVENTO → EDGE GATEWAY → PERSISTENCIA LOCAL → PÉRDIDA DE CONECTIVIDAD → REINICIO → RECUPERACIÓN → SINCRONIZACIÓN IDEMPOTENTE → EVIDENCIA → REPLAY → REVIEW`

El alcance de ese slice (OVS-01) es el definido en PR #435 de `Castuo-system`; ver §9.

No se abrirá un segundo gran flujo hasta que el primero haya alcanzado su criterio de cierre.

---

## 3. Arquitectura de control

La estrategia se organiza en cinco planos, que no sustituyen los artefactos canónicos existentes:

| Plano | Pregunta | Autoridad / superficie |
|---|---|---|
| **Core** | ¿Qué sistema existe? | `Castuo-system` |
| **Evidence** | ¿Qué puede demostrarse? | Evidence Center / `castuo-evidence` / E3 |
| **Assurance** | ¿Qué controles y pruebas lo respaldan? | `Cast-o` / `goldfish` |
| **Public read-model** | ¿Qué puede decirse públicamente? | `Traky12` |
| **External proof** | ¿Qué confirma un tercero/cliente? | Reviewer / pilot owner / evidence commercial |

Regla:

`Traky12 representa; Castuo-system decide técnicamente; evidence demuestra; assurance controla; terceros validan.`

---

## 4. Ruta crítica única

### CP-0 — Restaurar la capacidad de validación remota

Antes de interpretar el estado de los cambios como evidencia de integración, debe funcionar el mecanismo que los valida.

**Referencia actual:** issue #439 de `Castuo-system`.

Cierre:

- required PR checks arrancan;
- workflow execution es observable;
- raíz de fallos comunes identificada;
- al menos un PR validado end-to-end;
- branch protection preservada;
- ningún bypass de checks;
- ningún auto-merge basado únicamente en ausencia de resultados.

**Stop rule:** mientras la validación remota obligatoria esté rota, no se declara CI verde por inferencia.

### CP-1 — Estabilizar el contrato de evidencia

**Referencia:** PR #469 de `Castuo-system`.

Objetivo:

- contrato de continuidad;
- bundle portable;
- verifier independiente del core;
- integrity checks;
- claim ceiling;
- regression tests.

El PASS estructural del verifier demuestra consistencia del paquete, no operación de producción ni independencia del revisor.

### CP-2 — Ejecutar OVS-01 contra el gateway canónico

**Referencia:** issue #468 y PR #474 de `Castuo-system`.

La aceptación técnica sigue siendo:

`lost_events = 0` · `duplicate_events = 0` · `silent_mutations = 0` · `replay_mismatch = 0` · `evidence/hash mismatch = 0`

El registro de ejecución del autor informa:

- CP-2A controlado: **PASS**.
- CP-2B E2E local (gateway, SQLite, broker Mosquitto, backend FastAPI y PostgreSQL en loopback): **PASS ×3**.
- Bundles y replay: verificados localmente en el alcance declarado.
- CI remoto de la rama de #474: **BLOCKED**, porque GitHub Actions no inicia los jobs por el aviso de facturación/límite de gasto registrado en #439.
- CP-3, segunda persona en entorno limpio: **PENDING**.
- Revisión externa independiente: **NOT ESTABLISHED**.

Por ello, OVS-01 **no está cerrado**. Los PASS locales documentan ejecuciones del lado del autor; no reemplazan CI remoto ejecutado, reproducción por segundo operador, revisión ni evidencia de campo.

### CP-3 — Reproducción en entorno limpio

El autor debe dejar de ser el único camino de ejecución.

Una persona distinta del autor debe poder:

1. preparar el entorno;
2. ejecutar el escenario;
3. generar la evidencia;
4. verificar el bundle;
5. obtener el mismo resultado esperado;
6. registrar las diferencias y límites.

Esto es reproducción controlada. No se convierte automáticamente en validación independiente.

### CP-4 — Product vertical slice

Solo después de CP-2/CP-3. Este recorrido de producto queda fuera de OVS-01 (ver §9) y no amplía su alcance.

El producto mínimo debe concentrarse en:

`actuación → dato → coste/consumo → evidencia → resultado → revisión`

Debe existir un recorrido usable y una salida verificable.

No se incorporan nuevas verticales hasta cerrar este flujo.

### CP-5 — Commercial proof

Solo después de disponer de un slice usable.

Secuencia:

`discovery → scoped pilot → paid pilot → KPI baseline → measured result → renewal/repeatability`

Una demo, LOI, conversación, visita o interés no equivale por sí mismo a validación comercial.

### CP-6 — Operational proof

Solo cuando el sistema tenga un escenario técnicamente reproducible y un contexto real autorizado.

Secuencia:

`deployment → telemetry → runbook → failure test → recovery → rollback → observation`

Una health endpoint o un contenedor arrancado no constituyen evidencia de operación continua.

### CP-7 — Value evidence

La valoración se actualiza después de aumentar evidencia, no antes.

Mantener separados:

`coste de reposición ≠ valoración técnica del activo ≠ valor de mercado ≠ valoración societaria`

Este documento público no publica cifras económicas. Cualquier valoración técnica de trabajo se mantiene fechada en superficies privadas y requiere además evidencia comercial y financiera.

### Correspondencia orientativa CP ↔ gates existentes

Los checkpoints CP-0…CP-7 son **hitos de ejecución**, no gates. La promoción se decide únicamente en los gates canónicos de `Castuo-system`: G1–G4 de operación (`gates/`, declarados por SEV) y, para producto SaaS, `docs/SAAS-LAUNCH-GATES.md`. La madurez de capacidad sigue siendo N0–N6 (`data/capabilities.yaml`).

| CP | Aporta evidencia a | No cierra por sí mismo |
|---|---|---|
| CP-0 | Prerrequisito de G1 (procedencia CI/SEV) | Ningún gate |
| CP-1 | G1 Procedencia · G2 Integridad | G2 seguridad completa |
| CP-2 | G2 Integridad · G3 en entorno controlado | G3 dato real E2E de campo |
| CP-3 | G1/G2 reproducibilidad | Validación independiente formal |
| CP-4 | `SAAS-LAUNCH-GATES.md` (producto) | G1–G4 |
| CP-5 | Ninguno técnico (evidencia comercial) | Ningún gate técnico |
| CP-6 | G4 Operación | G4 cumplimiento |
| CP-7 | Ninguno técnico (evidencia de valor) | Ningún gate técnico |

---

## 5. Bloqueadores actuales que afectan la ruta

La ruta crítica queda condicionada por los blockers ya abiertos en el core:

| Referencia | Problema | Efecto |
|---|---|---|
| #439 | Validación remota de PR/CI | **BLOCKED** (actualización registrada 2026-10-08): jobs sin iniciar por facturación/límite de gasto de Actions. No es PASS ni evidencia de fallo de código. Requiere actuación del owner en Billing; después, reejecutar checks sobre el SHA final. |
| #468 | Cierre OVS-01 | CP-2A PASS y CP-2B E2E PASS ×3 local, según el registro del autor; **CP-3 y revisión pendientes**. OVS-01 continúa NOT CLOSED. |
| #474 | Integración OVS-01 + migración de recibos | Incluye protocolo CP-2 y una migración Alembic acotada a `ingestion_receipts`; cambio propuesto, sin CI remoto válido ni aplicación de migración a ningún entorno. |
| #457 | Portabilidad de salida de evidencia en Windows | PR #472 sigue abierto; el cierre requiere merge autorizado y ejecución reproducible en Windows. |
| Seguridad P1 / #459 / #440 | Credenciales, exposición histórica y rotación | Impide elevar claims de seguridad sin cierre verificable; rotación y verificación externa siguen siendo responsabilidad del owner. |

Estos elementos no deben esconderse al presentar el estado. Forman parte del evidence ledger.

### Referencias de autoridad

| Ámbito | Autoridad (`Castuo-system`) |
|---|---|
| Alcance de OVS-01 | PR #435 |
| Ejecución y cierre de OVS-01 | Issue #468 |
| Contrato de continuidad y ubicación de evidencia | PR #469 |
| Estado y recuperación del CI remoto | Issue #439 |
| Corrección de salida de evidencia en Windows | PR #472 (cierra #457 solo tras merge y ejecución en Windows) |
| Estrategia transversal de ejecución | Este plan (Traky12 PR #52) |

Este plan coordina esas superficies, pero no redefine su alcance.

---

## 6. Modelo de capacidades

Se mantienen los identificadores `CAP-TRK-xx` como **tracking público solamente**.

No tienen autoridad sobre el estado técnico.

Cada capacidad prioritaria debe tener exactamente:

`
owner
canonical_surface
scope
current_state
dependency
next_gate
acceptance_criterion
evidence_artifact
security_check
residual_risk
claim_ceiling
`

Una capacidad sin `next_gate` no está lista para ejecución.

Una capacidad sin `acceptance_criterion` no está lista para cierre.

Una capacidad sin `evidence_artifact` no está lista para promoción.

---

## 7. Priorización real

### P0 — Trust kernel

Solo:

- identidad/autorización;
- continuidad;
- evidencia;
- seguridad;
- validación remota.

**Meta:** eliminar incertidumbre crítica.

### P1 — Demonstrable system

Solo lo necesario para:

- operación;
- datos;
- offline;
- sync;
- verifier;
- observabilidad;
- despliegue controlado.

**Meta:** cerrar OVS-01 y el vertical slice.

### P2 — Productization

- UX;
- onboarding;
- documentación de uso;
- gestión de recursos;
- reporting;
- integración comercial.

**Meta:** producto mínimo utilizable.

### P3 — Market proof

- piloto;
- KPI;
- precio;
- pago;
- repetibilidad.

**Meta:** transformar hipótesis comercial en evidencia.

### P4 — Scale and value

- ampliaciones de edge/IoT;
- nuevas verticales;
- infraestructura industrial;
- expansión territorial;
- optimización económica;
- valoración actualizada.

**Meta:** escalar únicamente después de demostrar.

---

## 8. Regla de expansión

Cada nueva feature, repositorio o componente debe responder:

**¿Es necesario para cerrar el vertical slice?**

Si no:

**¿Elimina un blocker crítico?**

Si tampoco:

**¿Genera evidencia que reduzca incertidumbre material?**

Si la respuesta sigue siendo no:

> **NO ENTREGAR EN EL CICLO ACTUAL.**

Esto convierte la disciplina de alcance en una herramienta de productividad, no en una restricción.

### Candidato de backlog posterior a OVS-01 — trazabilidad de bioinsumos

**Estado:** candidato de diseño; fuera del ciclo actual. No abre un segundo vertical slice mientras OVS-01 siga sin cerrar.

Posible valor: vincular producto y lote declarados, dosis/unidad, método y timestamps de aplicación con contexto medido y observaciones posteriores, preservando la procedencia y la verificabilidad de un paquete de evidencia. La observación de una diferencia no demuestra causalidad ni eficacia del tratamiento.

**Gates antes de priorizarlo:** cierre y reproducción independiente de OVS-01; capacidad de CI restaurada; aprobación del contrato y del versionado de esquemas; validación automatizada positiva/negativa; revisión de privacidad y normativa aplicable; protocolo agronómico predefinido; revisión humana. No asignar ID de capacidad ni elevar madurez hasta que se cumplan los procedimientos canónicos del repositorio privado.

Lectura pública del alcance y límites: [Trazabilidad de bioinsumos — exploración de diseño](BIOINPUT-TRACEABILITY.md).


---

## 9. Contrato operativo del vertical slice

### Alineación de alcance (OVS-01)

Esta estrategia adopta el alcance canónico definido en **PR #435** de `Castuo-system`: continuidad de eventos de sensores en el escenario del gateway del invernadero CTAEX, reutilizando E3-001-S001A dentro de su límite declarado. Este plan no redefine ese alcance.

El cierre se sigue en **issue #468** e incluye: ejecución del edge gateway canónico (`apps/edge-gateway/main.py`), pérdida de red controlada, reinicio, persistencia local, inyección/detección de duplicados, verificación de los cinco contadores a cero, generación de evidencia y replay por un segundo operador.

**Fuera del alcance de OVS-01** (direcciones futuras válidas, para un slice posterior tras cerrar OVS-01):

- FIELD-001;
- flujos de actuación de operador humano;
- OperationEvent;
- autorización y permisos offline;
- contabilidad de coste/consumo;
- escenarios Golden Path no incluidos en PR #435.

### Escenario

Un evento de sensor llega al edge gateway durante un periodo de conectividad inestable.

### Entrada

- evento de sensor con identidad estable de evento;
- timestamp de origen;
- datos de medida;
- procedencia del dispositivo/gateway.

### Ejecución

- recepción en edge gateway;
- persistencia local;
- caída de red;
- nuevos eventos durante la caída;
- reinicio del gateway;
- recuperación de conectividad;
- reconciliación/sincronización;
- inyección deliberada de duplicados.

### Verificación

- identidad de evento;
- orden;
- idempotencia;
- integridad;
- hash;
- replay.

### Salida

- secuencia de eventos reconstruida;
- paquete de evidencia;
- manifest;
- resultado de verifier;
- claim permitido;
- claim ceiling;
- riesgo residual.

---

## 10. Criterios de aceptación

El vertical slice no queda cerrado porque “funciona en mi máquina”.

Debe cumplir:

| Criterio | Estado de cierre |
|---|---|
| Captura | ejecutada |
| Persistencia offline | demostrada |
| Network loss | reproducible |
| Restart recovery | reproducible |
| Idempotency | demostrada con duplicados |
| Integrity | verificable |
| Replay | reproducible |
| Evidence bundle | portable |
| Clean environment | reproducible |
| Second operator | ejecutado |
| Security checks | documentados y aprobados según alcance |
| Residual risk | registrado |
| Claim ceiling | explícito |

La ausencia de cualquiera de los criterios obligatorios mantiene el slice bloqueado para promoción.

---

## 11. Evidence package mínimo

Cada cierre de capacidad crítica debe poder empaquetarse en una estructura como:

`
evidence/
  <capability>/
    README.md
    scenario.yaml
    environment.yaml
    commands.md
    results/
    logs/
    artifacts/
    hashes/
    review/
    residual-risk.md
    claim.md
`

`README.md` debe indicar:

- versión exacta;
- commit;
- entorno;
- prerequisitos;
- ejecutor;
- fecha;
- resultado;
- artefactos;
- limitaciones.

No se publicarán credenciales, datos sensibles ni implementación privada innecesaria.

**Ubicación en `Castuo-system`:** la estructura anterior describe contenido, no un árbol nuevo. `evidence/01–10` está reservado a los expedientes SEV; la evidencia de continuidad sigue el contrato de PR #469 (`governance/evidence/<escenario>/`, verificable con `scripts/castuo.py verify`); los bundles de OVS-01 están en `governance/evidence/OVS-01/runs/` (PR #474). No se crean directorios `evidence/<capability>/` paralelos.

---

## 12. Claim discipline

El modelo público será:

`
DOCUMENTED
    ↓
IMPLEMENTED
    ↓
TESTED
    ↓
EVIDENCE_READY
    ↓
VERIFIED
    ↓
PILOT_READY
    ↓
OPERATIONAL
`

Solo deben usarse los estados que ya estén respaldados por la autoridad y gates correspondientes.

No crear un nuevo enum paralelo.

Nunca convertir:

`
README → evidence
PASS local → production
protocol → independent result
commit → market value
activity → maturity
planning revenue → actual revenue
`

---

## 13. Métricas de gestión

Las métricas principales dejan de ser “cuánto se ha escrito”.

### Engineering

- % de capacidades críticas con tests.
- % con evidencia reproducible.
- defectos críticos abiertos/cerrados.
- tiempo de resolución de blockers.
- regresiones detectadas antes de merge.

### Assurance

- % de claims con provenance;
- % de evidence bundles verificables;
- reproducibilidad por segundo operador;
- integrity failures;
- security findings por severidad.

### Operations

- successful controlled deployments;
- recovery success;
- rollback tests;
- telemetry coverage;
- unresolved operational blockers.

### Commercial

- scoped pilots;
- paid pilots;
- KPI completion;
- renewal/repeatability;
- realised revenue.

### Value

- realised development cost;
- IP ownership evidence;
- technical asset evidence;
- realised revenue;
- valuation update date.

**GitHub contributions, commits, PRs y líneas modificadas se conservarán como métricas de actividad e historial, nunca como sustituto de madurez o valor de mercado.**

---

## 14. Cadencia de gestión

### Revisión semanal de evidencia

Cada semana se revisan solamente:

`new evidence → failed evidence → blockers → risks → promotion decisions`

### Revisión de arquitectura

Solo cuando una modificación:

- cambia un contrato;
- añade dependencia estructural;
- modifica identidad;
- altera persistencia;
- altera sincronización;
- modifica boundary de seguridad.

### Revisión comercial

Separada de la técnica.

Un posible cliente no puede elevar el estado técnico.

Una prueba técnica tampoco implica demanda de mercado.

### Revisión económica

Mensual o ante cambio material de:

- financiación;
- precio;
- costes;
- propiedad intelectual;
- ingresos;
- valoración.

---

## 15. Cadencia de 30 días

### Días 1–5 — Control

- cerrar diagnóstico de #439;
- reparar ejecución de checks;
- resolver la portabilidad reproducible de #457;
- revisar #469;
- congelar el alcance de OVS-01.

### Días 6–15 — Ejecución

- ejecutar OVS-01 contra el gateway canónico;
- demostrar pérdida de conectividad;
- recovery;
- idempotent sync;
- evidence bundle;
- verifier.

### Días 16–22 — Reproducción

- entorno limpio;
- segundo operador;
- replay;
- revisión del paquete;
- residual risk;
- claim ceiling.

### Días 23–27 — Producto

- recorrido SaaS mínimo;
- actuación;
- dato;
- coste/consumo;
- evidencia;
- resultado.

### Días 28–30 — Decisión

Solo una de estas salidas:

**PASS:** continuar al siguiente gate.

**PARTIAL:** mantener capacidad y corregir únicamente el gap.

**FAIL:** congelar promoción y abrir remediación.

**BLOCKED:** documentar causa, owner y condición de desbloqueo.

No existe una quinta categoría basada en percepción positiva.

---

## 16. Lo que queda deliberadamente fuera

Durante esta fase no deben convertirse en prioridades del core:

- nuevas verticales;
- expansión industrial;
- federación;
- despliegue multi-site;
- automatización física avanzada;
- nuevas capas de blockchain;
- nuevos agentes AI;
- nuevas plataformas de dashboard;
- duplicación de repositorios;
- reescritura del sistema por preferencia tecnológica;
- un segundo vertical slice de actuación humana con identidad y permisos offline (FIELD-001 / OperationEvent), que queda aplazado hasta cerrar OVS-01 y requerirá su propio alcance canónico.

Podrán volver a la agenda cuando la evidencia del núcleo reduzca suficientemente el riesgo.

---

## 17. Resultado objetivo

El resultado de esta estrategia no es “tener más CASTÚO”.

Es conseguir que un tercero pueda responder, con evidencia:

1. **Qué existe.**
2. **Dónde existe.**
3. **Cómo se ejecuta.**
4. **Cómo se prueba.**
5. **Qué ocurrió.**
6. **Qué puede reproducirse.**
7. **Qué permanece desconocido.**
8. **Qué claim está permitido.**

El activo técnico aumenta su valor defendible cuando aumenta su **verificabilidad, transferibilidad y utilidad**, no cuando aumenta el número de repositorios.

---

## 18. Target state

La fase de consolidación termina cuando:

- existe un core canónico;
- los blockers críticos están registrados y controlados;
- OVS-01 tiene ejecución documentada;
- existe replay reproducible;
- un segundo operador puede reproducir el escenario;
- el claim ceiling coincide con la evidencia;
- el producto mínimo tiene un flujo demostrable;
- las hipótesis comerciales permanecen separadas de los hechos;
- la evidencia económica del activo está fechada;
- el siguiente ciclo se decide sobre resultados, no sobre volumen de desarrollo.

### Principio rector

> **No construir para parecer maduro. Construir lo necesario para demostrarlo.**

> **No reclamar lo que el sistema podría hacer. Reclamar únicamente lo que la evidencia permite afirmar.**

## 19. Anexo operativo — vocabulario de estado y fichas de cierre

Este anexo convierte la estrategia en unidades ejecutables sin sustituir los estados, gates ni autoridades canónicas de `Castuo-system`.

### 19.1 Vocabulario de estado controlado

Para el **tracking público de este documento** se permite únicamente:

`specified | in_progress | implemented | tested | evidenced | reviewed | pilot_validated | commercially_validated | blocked | deferred`

Estas etiquetas:

- describen el estado de trabajo observable;
- no crean un nuevo maturity enum;
- no autorizan promoción por sí mismas;
- no sustituyen los gates o registros canónicos de `Castuo-system`.

La madurez canónica de cada capacidad sigue siendo **N0–N6** en `data/capabilities.yaml`. Cada ficha CP cita el nivel N vigente de las capacidades afectadas; si la etiqueta de tracking y el nivel N discrepan, prevalece el nivel N y la discrepancia se registra.

Reglas:

- `implemented` no implica `tested`.
- `tested` no implica `evidenced`.
- `evidenced` no implica `reviewed`.
- `reviewed` no implica validación independiente.
- `pilot_validated` requiere evidencia de un piloto autorizado y no equivale a operación general.
- `commercially_validated` requiere resultado comercial observable y no eleva automáticamente el estado técnico.
- `blocked` exige causa, owner y condición de desbloqueo.
- `deferred` exige motivo y condición de reentrada.

### 19.2 Ficha cerrable de cada checkpoint

Todos los CP de la ruta crítica deben conservar esta estructura mínima:

```
id
name
owner
scope
inputs
preconditions
execution_steps
acceptance_criteria
required_evidence
security_checks
known_failures
residual_risks
claim_ceiling
exit_decision
```

`exit_decision` utiliza únicamente el conjunto ya establecido por esta estrategia:

`PASS | PARTIAL | FAIL | BLOCKED`

No existe promoción implícita por ausencia de errores visibles.

#### CP-0 — Restaurar validación remota

- **Owner:** responsable técnico actual del proyecto; revisión por una persona distinta cuando el gate lo requiera.
- **Scope:** validación remota de PR/CI del core.
- **Inputs:** issue #439, workflows requeridos, branch protection, PR de prueba.
- **Preconditions:** permisos/repositorio accesibles; configuración requerida observable.
- **Execution:** reproducir fallo → identificar causa común → corregir → ejecutar PR de prueba end-to-end → verificar checks y protección.
- **Acceptance:** checks obligatorios ejecutados y visibles; causa común identificada; PR de prueba validado; sin bypass; sin auto-merge por ausencia de resultados.
- **Required evidence:** run IDs, logs, resultado de PR de prueba, configuración de protección y registro de remediación.
- **Security checks:** permisos mínimos; secretos fuera de logs; workflows sin bypass de controles.
- **Known failures:** workflows fallidos o no ejecutados; checks ausentes; billing/quota que impida ejecución.
- **Residual risks:** dependencia de infraestructura GitHub o límites de cuenta.
- **Claim ceiling:** “validación remota restaurada en el alcance probado”; no “CI siempre verde”.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

#### CP-1 — Estabilizar contrato de evidencia

- **Owner:** responsable técnico actual del proyecto.
- **Scope:** contrato P0 de evidencia y verifier de #469.
- **Inputs:** PR #469, schema, verifier independiente, bundle portable.
- **Preconditions:** artefactos del contrato disponibles; tests ejecutables.
- **Execution:** revisar contrato → ejecutar tests → generar bundle → verificar manifest/hashes → comprobar regresiones.
- **Acceptance:** schema y verifier coherentes; bundle portable; integridad verificable; regresiones cubiertas en el alcance definido.
- **Required evidence:** commit, tests, schema, bundle de ejemplo, verifier output, hashes.
- **Security checks:** no secretos; validación de entradas; separación entre evidencia y credenciales.
- **Known failures:** test incompleto, bundle no portable, mismatch de hash, parser ambiguo.
- **Residual risks:** cobertura limitada a los escenarios implementados.
- **Claim ceiling:** “contrato/verifier verificables en el alcance probado”; no “operación independiente demostrada”.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

#### CP-2 — Ejecutar OVS-01

- **Owner:** responsable técnico actual del proyecto.
- **Scope:** `apps/edge-gateway/main.py` como implementación canónica.
- **Inputs:** issue #468, escenario OVS-01, datos de prueba y entorno controlado.
- **Preconditions:** CP-0/CP-1 en estado suficiente para ejecutar y verificar; alcance congelado.
- **Execution:** captura → pérdida de conectividad → persistencia offline → nuevas operaciones → reinicio → recuperación → sincronización → inyección de duplicados → hash → replay → bundle.
- **Acceptance:** `lost_events = 0`; `duplicate_events = 0`; `silent_mutations = 0`; `replay_mismatch = 0`; `evidence/hash mismatch = 0`.
- **Required evidence:** logs de ejecución, eventos, estados de persistencia, sync results, duplicate injection, manifest, hashes, replay output y bundle portable.
- **Security checks:** identidad/autorización; secretos ausentes de logs; integridad; permisos sobre almacenamiento y sincronización.
- **Known failures:** reinicio no recuperable, duplicación, orden temporal ambiguo, mutation silenciosa, serialización inconsistente.
- **Residual risks:** límites del entorno controlado y dependencias no ejercitadas.
- **Claim ceiling:** “continuidad edge reproducida en OVS-01 en entorno controlado”; no “operación industrial”.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

#### CP-3 — Reproducción limpia

- **Owner:** responsable técnico actual del proyecto; **segundo operador obligatorio para la ejecución de cierre**.
- **Scope:** reproducción completa de OVS-01 sin depender de la máquina habitual del autor.
- **Inputs:** instrucciones, versiones fijadas, datos generables, bundle y comandos.
- **Preconditions:** CP-2 con evidencia portable y procedimiento de ejecución definido.
- **Execution:** preparar entorno desde cero → instalar dependencias → configurar variables → ejecutar → recoger logs/artefactos → verificar bundle → registrar diferencias.
- **Acceptance:** ejecución completa mediante comandos documentados; resultado inequívoco; misma salida esperada dentro de tolerancias definidas; discrepancias registradas; ningún resultado ausente tratado como PASS.
- **Required evidence:** environment manifest, versiones, comandos, logs, artefactos, verifier output y registro del segundo operador.
- **Security checks:** secretos excluidos; variables documentadas sin valores sensibles; dependencias fijadas.
- **Known failures:** diferencia de plataforma, dependencia no fijada, encoding, rutas locales, configuración implícita.
- **Residual risks:** diferencias de hardware/OS no cubiertas.
- **Claim ceiling:** “escenario reproducible por segundo operador en el entorno declarado”; no “validación independiente” salvo que el proceso cumpla sus requisitos.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

#### CP-4 — Vertical slice de producto

- **Owner:** responsable técnico/producto actual del proyecto.
- **Scope:** recorrido mínimo `actuación → dato → coste/consumo → evidencia → resultado → revisión`.
- **Inputs:** OVS-01 cerrado o suficientemente estable; requisitos mínimos de uso.
- **Preconditions:** flujo técnico demostrable y datos de prueba controlados.
- **Execution:** configurar usuario → registrar actuación → generar/consultar dato → asociar coste/consumo → generar evidencia → revisar resultado.
- **Acceptance:** recorrido usable de extremo a extremo; salida verificable; errores diagnosticables.
- **Required evidence:** versión de la aplicación, escenario, logs, capturas o artefactos mínimos y resultado.
- **Security checks:** autenticación/autorización en el alcance; gestión segura de secretos; trazabilidad de cambios.
- **Known failures:** UX incompleta, integración frágil, persistencia no conectada al flujo.
- **Residual risks:** no equivalencia con producto comercial general.
- **Claim ceiling:** “vertical slice demostrable”; no “producto plenamente validado”.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

#### CP-5 — Prueba comercial

- **Owner:** responsable comercial actual del proyecto.
- **Scope:** evidencia de necesidad, uso, pago y repetibilidad del caso concreto.
- **Inputs:** vertical slice usable, cliente/usuario objetivo y KPI predefinido.
- **Preconditions:** producto demostrable y consentimiento/acuerdo apropiado.
- **Execution:** discovery → piloto acotado → piloto pagado cuando proceda → baseline KPI → medición → resultado → repetición/renovación.
- **Acceptance:** evidencia observable del resultado y del comportamiento comercial acordado.
- **Required evidence:** alcance, fecha, KPI, baseline, resultado, precio/pago cuando aplique, feedback y decisión.
- **Security checks:** tratamiento de datos, acceso autorizado, confidencialidad y no exposición de información del cliente.
- **Known failures:** interés sin conversión, KPI no medible, piloto no pagado, alcance ambiguo.
- **Residual risks:** muestra pequeña y dependencia del contexto del cliente.
- **Claim ceiling:** no elevar a “validación comercial” por una demo, LOI o conversación aislada.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

#### CP-6 — Prueba operativa

- **Owner:** responsable técnico/operativo actual del proyecto.
- **Scope:** despliegue controlado, observabilidad, fallo, recuperación y rollback.
- **Inputs:** escenario autorizado, runbook y telemetría mínima.
- **Preconditions:** CP-3 cerrado y contexto de operación autorizado.
- **Execution:** deployment → telemetry → failure test → recovery → rollback test → observation.
- **Acceptance:** cada paso ejecutado y registrado; recuperación y rollback verificables; incidentes y límites documentados.
- **Required evidence:** deployment record, telemetry, logs, runbook, recovery/rollback outputs y review.
- **Security checks:** control de acceso, secretos, exposición de interfaces, logging seguro.
- **Known failures:** falta de observabilidad, rollback incompleto, dependencia manual no documentada.
- **Residual risks:** duración limitada del escenario; no equivale a operación continua.
- **Claim ceiling:** “prueba operativa controlada”; no “operación 24/7” sin evidencia correspondiente.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

#### CP-7 — Evidencia de valor

- **Owner:** responsable económico/comercial actual del proyecto.
- **Scope:** evidencia económica y de utilidad posterior a la evidencia técnica.
- **Inputs:** resultados técnicos, KPI de uso, costes, precio, ingresos reales y evidencia de propiedad intelectual.
- **Preconditions:** no mezclar hipótesis financieras con resultados observados.
- **Execution:** consolidar resultados → medir tiempo/coste/beneficio observable → actualizar hipótesis → fechar valoración de trabajo si procede.
- **Acceptance:** evidencia técnica y evidencia de valor separadas; cada cifra tiene fuente, periodo y naturaleza.
- **Required evidence:** KPI de valor, resultados de uso, ingresos realizados, costes relevantes, ownership/IP evidence y fecha de actualización.
- **Security checks:** confidencialidad financiera y de terceros.
- **Known failures:** usar actividad de GitHub como valor; sumar RCN con activo técnico; presentar planificación como ingreso.
- **Residual risks:** ausencia de mercado suficiente o muestra limitada.
- **Claim ceiling:** “valoración técnica/económica de trabajo respaldada por el conjunto de evidencias declarado”; no “valor de mercado”.
- **Exit:** `PASS | PARTIAL | FAIL | BLOCKED`.

### 19.3 Definición operativa de idempotencia

Para OVS-01:

> **Repetir la misma operación de sincronización con la misma identidad de evento no cambia el resultado lógico final ni crea un nuevo registro equivalente.**

La prueba mínima debe incluir:

1. una ejecución original;
2. una repetición deliberada;
3. verificación del mismo `event_id`/`idempotency_key`;
4. conteo antes/después;
5. evidencia de que el estado final es equivalente;
6. registro explícito del resultado.

Una sincronización “sin error” no demuestra idempotencia por sí sola.

### 19.4 Cierre de CP-3: reproducción limpia mínima

El paquete debe incluir, como mínimo:

- instrucciones desde cero;
- versiones fijadas;
- instalación reproducible;
- variables de entorno descritas sin secretos;
- datos de prueba incluidos o generables;
- un comando o secuencia inequívoca de ejecución;
- logs;
- artefactos;
- hashes/manifiesto;
- resultado `PASS | FAIL | BLOCKED | INCONCLUSIVE` de la ejecución real.

`INCONCLUSIVE` puede aparecer como resultado de una ejecución experimental o de diagnóstico, pero **no es un PASS ni un estado de cierre**. Debe convertirse en remediación, bloqueo o repetición.

### 19.5 Separación obligatoria de evidencia técnica y evidencia de valor

**Evidencia técnica** responde: “¿funciona y puede verificarse?”

Incluye:

- identidad y autorización;
- operación registrada;
- persistencia offline;
- pérdida de conectividad;
- recuperación;
- sincronización;
- idempotencia;
- integridad;
- replay;
- revisión;
- seguridad dentro del alcance probado.

**Evidencia de valor** responde: “¿aporta utilidad económica u operativa?”

Incluye:

- tiempo ahorrado;
- incidencias o duplicados evitados;
- mejora de trazabilidad;
- reducción del esfuerzo de auditoría;
- mejora de una decisión operativa;
- KPI de resultado;
- disposición a pagar;
- ingresos realizados;
- continuidad/renovación.

Un PASS técnico **no** constituye un PASS comercial. Un resultado comercial positivo **no** sustituye la evidencia técnica.

### 19.6 Regla de cierre

Un CP puede avanzar únicamente si:

`preconditions satisfied → execution recorded → acceptance criteria met → evidence stored → security checks reviewed → residual risk recorded → claim ceiling updated → exit decision issued`

Si falta cualquiera de esos elementos, el checkpoint permanece `PARTIAL`, `FAIL` o `BLOCKED` según la causa.

## 20. Checklist final antes de promover #52

`[ ]` Cada capability tiene estado real y no inferido.  
`[ ]` Cada capability tiene owner identificable.  
`[ ]` Cada capability tiene un único next gate.  
`[ ]` Cada CP tiene ficha cerrable.  
`[ ]` Cada CP tiene criterio de salida y evidencia requerida.  
`[ ]` Los blockers están enlazados y no ocultos.  
`[ ]` OVS-01 mantiene alcance congelado.  
`[ ]` Idempotencia incluye prueba deliberada de duplicados.  
`[ ]` CP-3 exige entorno limpio y segundo operador.  
`[ ]` Un resultado ausente o inconcluso nunca se interpreta como PASS.  
`[ ]` Evidencia técnica y evidencia de valor permanecen separadas.  
`[ ]` RCN, activo técnico, valor de mercado y valoración societaria no se mezclan.  
`[ ]` `Traky12` sigue siendo read-model público y `Castuo-system` autoridad técnica.  
`[ ]` No se crean SSOT, taxonomías normativas, maturity enums o promotion gates paralelos.  
`[ ]` Las stop rules siguen visibles.  
`[ ]` El documento no afirma implementación, validación, producción o mercado sin evidencia.



## 21. Aplicación transversal a commits y repositorios

La estrategia se aplica transversalmente a las superficies CASTÚO activas mediante un control de revisión común en sus PR templates.

### Regla

Los **commits históricos no se reescriben** para aparentar madurez. A partir de esta baseline, cada nuevo conjunto de cambios debe poder responder, como mínimo:

`work reference → scope → acceptance → tests/CI → evidence → security → residual risk → claim ceiling → next gate`

Cada commit incluido en un PR debe tener propósito único y trazable. La plantilla de PR es un control de revisión; no constituye por sí misma evidencia de funcionamiento, validación, operación o valor.

### Cobertura aplicada

La baseline se ha **propuesto** mediante PRs de plantilla (`chore(governance): align PR closure…`) en las superficies CASTÚO activas del inventario del 2026-10-08. A esa fecha los 20 PRs están **abiertos y sin merge**; la baseline no rige en un repositorio hasta que su PR se fusione. Superficies:

- core técnico: `Castuo-system`;
- public read-model: `Traky12`;
- edge/offline/evidence: `castuo-agro-edge`, `castuo-offline-field-operations`, `castuo-evidence`, `castuo-e3-001`;
- assurance/security: `Cast-o`, `goldfish`, `castuo-foreign-verifier`, `castuo-vendor-exit-lab`;
- producto/piloto: `castuo-product-experience`, `ctaex-iot-pilot`, `castuo-360-v5.3`, `agrovision-360`;
- gobierno/visibilidad: `castuo-evolution`, `castuo-strategy-knowledge-base`, `castuo-progress-dashboard`, `castuo-live-status-dashboard`;
- soporte conceptual: `castuo-link`, `castuo-neurocompanion`.

Los repositorios archivados y forks no se incluyen en esta aplicación.

### Límite

Esta propagación no crea un nuevo gate de promoción, un nuevo maturity enum ni una segunda fuente de verdad. Su función es hacer que la disciplina de cierre sea visible en cada futuro PR y, por extensión, revisable sobre cada commit incluido en él.

---

## Claim boundary

Este plan no afirma:

- producción;
- certificación;
- independencia ya conseguida;
- validación CTAEX real;
- adopción comercial;
- ingresos recurrentes;
- conformidad regulatoria;
- operación industrial multi-site;
- valor de mercado.

El plan es una estrategia de consolidación y cierre demostrable. Su éxito se mide por **reducción de incertidumbre y evidencia reproducible**, no por actividad de GitHub.

---

## 13. Actualización de ejecución — 2026-10-09

Este bloque actualiza el estado operativo del mapa público, sin crear autoridad nueva:

| Tema | Estado observado | Próxima prueba |
|---|---|---|
| OVS-01 local | CP-2A PASS; CP-2B PASS ×3 según registro del autor | Reproducción CP-3 por otra persona, desde clon limpio |
| GitHub Actions | BLOCKED por problema de facturación/límite de gasto, según #439 | Owner resuelve Billing; reejecutar workflows en el SHA candidato |
| Persistencia de idempotencia | Migración Alembic `ingestion_receipts` en #474; incluye `event_time` y adopción no destructiva de una tabla antigua válida | Se añadieron cuatro pruebas de contrato SQLite y Alembic a `requirements/dev.txt`; CI remoto y validación PostgreSQL continúan pendientes. No aplicar a un entorno compartido sin backup y aprobación |
| Credenciales y entornos | Cierre externo pendiente en #459 | Rotación/revocación real, inspección de runtime y evidencia fechada |
| Perfil público | Read-model únicamente | Reflejar únicamente estados y artefactos verificables; no convertir plan o actividad en madurez |

**Claim ceiling actual:** ejecución local controlada/E2E documentada; independencia no establecida, operación de producción no demostrada, validación de campo y validación comercial no reclamadas.

