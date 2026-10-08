# CASTÚO-SYSTEM — Estrategia maestra de capacidades y cierre demostrable

**Fecha:** 2026-10-08  
**Rol:** mapa público de capacidades, ruta crítica y control de refuerzo del ecosistema.  
**Autoridad:** `Traky12` es el public read-model; `Castuo-system` conserva la autoridad técnica del core.  
**Regla estructural:** este documento no crea una SSOT, una taxonomía normativa, un nuevo maturity enum ni nuevos promotion gates.

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

`ACTUACIÓN → IDENTIDAD → EVENTO → PERSISTENCIA LOCAL → PÉRDIDA DE CONECTIVIDAD → RECUPERACIÓN → SINCRONIZACIÓN IDEMPOTENTE → EVIDENCIA → REPLAY → REVIEW`

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

**Referencia:** issue #468.

La evidencia anterior no basta. Debe ejecutarse el flujo contra la implementación canónica:

`apps/edge-gateway/main.py`

Cierre:

- pérdida de conectividad reproducible;
- reinicio/recuperación reproducible;
- persistencia local demostrada;
- sincronización idempotente;
- duplicate injection;
- hash verification;
- replay;
- portable evidence bundle.

Criterios duros:

`lost_events = 0`  
`duplicate_events = 0`  
`silent_mutations = 0`  
`replay_mismatch = 0`  
`evidence/hash mismatch = 0`

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

Solo después de CP-2/CP-3.

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

`420k RCN ≠ 750k technical asset ≠ market value ≠ company valuation`

La cifra del activo tecnológico es una valoración técnica de trabajo; la empresa necesita además evidencia comercial y financiera.

---

## 5. Bloqueadores actuales que afectan la ruta

La ruta crítica queda condicionada por los blockers ya abiertos en el core:

| Referencia | Problema | Efecto |
|---|---|---|
| #439 | Validación remota de PR/CI | Impide usar CI remoto como evidencia hasta restaurarlo |
| #468 | OVS-01 no ejecutado end-to-end | Impide cerrar continuidad canónica |
| #457 | fallo del test de evidencia en Windows | Mantiene una deuda de portabilidad reproducible |
| Seguridad P1 / #459 / #440 | Credenciales, exposición histórica y rotación | Impide elevar claims de seguridad sin cierre verificable |

Estos elementos no deben esconderse al presentar el estado. Forman parte del evidence ledger.

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

---

## 9. Contrato operativo del vertical slice

### Escenario

Un operador registra una actuación rural sin conectividad estable.

### Entrada

- identidad autorizada;
- operación;
- timestamp;
- datos operativos;
- coste/consumo cuando aplique.

### Ejecución

- captura;
- persistencia local;
- desconexión;
- nuevas operaciones;
- reinicio;
- recuperación;
- sincronización.

### Verificación

- identidad;
- orden;
- idempotencia;
- integridad;
- hash;
- replay.

### Salida

- operación reconstruida;
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
- reescritura del sistema por preferencia tecnológica.

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
