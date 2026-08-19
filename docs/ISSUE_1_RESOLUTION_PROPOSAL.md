# Propuesta de resolución del Issue #1

**Issue:** [Evidence Center — plan de promoción N3–N6 por capacidad](https://github.com/Traky12/Traky12/issues/1)  
**Estado recomendado:** `OPEN` hasta completar los artefactos y la revisión independiente.  
**Objetivo:** convertir el Evidence Center en una superficie pública de evidencia técnica con promoción controlada, sin elevar capacidades `DOCUMENTED` a `VALIDATED`, `PILOT` u `OPERATIONAL` mientras existan placeholders, provenance incompleta, datos sin hash o ausencia de revisión.

## Decisión propuesta

Adoptar el plan de promoción por capacidad, no por conjunto global de repositorios. Cada capacidad debe tener un identificador estable, un owner, un alcance declarado, un estado actual, una lista de artefactos requeridos y un gate explícito para avanzar. El estado público sólo podrá avanzar cuando el paquete de evidencia correspondiente sea reproducible y haya sido revisado dentro del alcance indicado.

La regla de claim queda definida así:

> Ninguna capacidad se promociona por la existencia de código, commits, documentación, badges o workflows verdes. Sólo puede promocionarse mediante un paquete de evidencia completo, reproducible, revisado y compatible con su claim boundary.

## Estado de partida

Las cuatro capacidades N5 existentes permanecen en `DOCUMENTED`. El objetivo inmediato no es declararlas validadas, sino completar los campos pendientes y convertir cada registro en un Evidence Pack auditable.

| Estado | Significado | Acción |
|---|---|---|
| `DOCUMENTED` | Existe documentación, pero faltan pruebas o revisión suficientes | Completar manifest, provenance, seguridad y criterios de reproducción |
| `EVIDENCE_READY` | El paquete está completo dentro de un alcance declarado | Ejecutar validación local y solicitar revisión |
| `N3_IMPLEMENTED_LOCAL` | Implementación local reproducible con tests y artefactos | Mantener claim local y preparar integración/staging |
| `N4_INDEPENDENTLY_REPRODUCED` | Un reviewer independiente reproduce el resultado | Registrar identidad, entorno, commit, logs y divergencias |
| `N5_FIELD_VALIDATED` | Piloto autorizado con baseline, KPIs y datos trazables | Publicar resultados acotados, no generalizar fuera del piloto |
| `N6_OPERATIONAL` | Operación sostenida con owner, observabilidad y rollback | Exigir revisión periódica e incidentes registrados |
| `BLOCKED` | Falta una condición obligatoria o existe una contradicción | No promocionar; documentar el bloqueo |

## Artefactos mínimos por capacidad

Cada capacidad deberá añadir o enlazar un paquete con los siguientes elementos:

| Artefacto | Contenido mínimo |
|---|---|
| `manifest` | ID de capacidad, nombre, owner, repositorio, commit/tag, entorno y alcance |
| `provenance` | Origen de datos y código, fecha, actor, herramientas y dependencias |
| `security` | Secret scanning, permisos, límites de datos, trust boundary y riesgos conocidos |
| `tests` | Tests positivos, negativos, invariantes y resultado reproducible |
| `execution envelope` | Entradas, configuración, versión, timestamps, logs y resultado |
| `hashes` | Hash de fixtures, datos de entrada, salida y paquete publicado |
| `replay contract` | Procedimiento para reproducir el resultado sin interpretación manual oculta |
| `claim boundary` | Claim permitido, claims excluidos y condiciones de promoción |
| `review record` | Reviewer, fecha, alcance revisado, decisión, observaciones y resolución |
| `changelog` | Cambios desde el paquete anterior y efecto sobre la reproducibilidad |

## Gates de promoción

### Gate N3 — Implementación local

Una capacidad puede solicitar N3 cuando existe un commit o tag identificable, un manifest, tests positivos y negativos, un paquete de evidencia con hashes, y una ejecución local repetible. El resultado debe permanecer dentro del claim `LOCAL_RESULT_WITHIN_DECLARED_SCOPE` o equivalente explícito.

### Gate N4 — Reproducción independiente

N4 requiere que una persona distinta del autor reproduzca el resultado usando el contrato de replay. El registro debe incluir entorno, commit, comandos, logs, hashes, resultado, divergencias y decisión del reviewer. Una reproducción que no coincide debe mantener la capacidad en `BLOCKED` o devolverla a N3.

### Gate N5 — Validación de campo

N5 requiere un piloto autorizado y acotado, con baseline previa, KPIs definidos, datos brutos preservados, hashes, consentimiento o autorización aplicable, conclusión limitada al escenario probado y revisión humana. N5 no autoriza claims universales ni demuestra por sí solo operación productiva o resultado comercial.

### Gate N6 — Operación sostenida

N6 requiere owner operativo, observabilidad, alertas, runbook, rollback, gestión de incidentes, revisión periódica, control de cambios y evidencia de continuidad durante el periodo declarado. La ausencia de incidentes registrados no equivale a evidencia de ausencia de incidentes.

## Plan de ejecución

| Fase | Entregable | Criterio de cierre |
|---|---|---|
| 1. Normalización | Completar los cuatro registros N5 y eliminar placeholders no justificados | Cada registro tiene owner, scope, estado y campos pendientes explícitos |
| 2. Evidence Packs | Generar manifest, provenance, security, tests, hashes y replay contract | El validador acepta cada paquete y `claims_promoted = false` se mantiene hasta revisión |
| 3. Reproducción | Ejecutar replay local y solicitar reproducción independiente E3 | Existe review record con resultado y divergencias resueltas |
| 4. Staging | Ejecutar integración acotada con logs y rollback | El resultado está fechado, versionado y limitado al escenario |
| 5. Campo | Autorizar piloto, recoger baseline/KPIs/datos brutos y revisar | Sólo se promociona la capacidad que cumple el gate N5 |
| 6. Operación | Añadir owner, runbook, observabilidad, incidentes y revisión periódica | Se demuestra operación sostenida dentro del periodo declarado |

## Cambios concretos recomendados

Primero, mantener las cuatro capacidades en `DOCUMENTED` y añadir a cada una un campo `promotion_blockers` con los placeholders, hashes, provenance o revisiones que faltan. Segundo, hacer que el validador rechace estados `VALIDATED`, `PILOT` u `OPERATIONAL` cuando falte cualquiera de los artefactos obligatorios. Tercero, añadir una prueba negativa que demuestre que una capacidad con provenance incompleta no puede atravesar el gate. Cuarto, guardar cada decisión de revisión junto al paquete, con commit, fecha, reviewer y alcance. Quinto, enlazar desde el Evidence Center a la claim boundary y al replay contract de cada capacidad.

## Criterios de aceptación del issue

El Issue #1 podrá cerrarse cuando se cumplan todas estas condiciones:

1. Las cuatro capacidades tienen registros normalizados y ningún placeholder ambiguo.
2. Cada capacidad declara owner, scope, estado, claim permitido y blockers.
3. El validador comprueba manifest, provenance, seguridad, changelog, hashes y resultado.
4. Existe al menos un caso negativo que impide una promoción con evidencia incompleta.
5. El replay contract permite reproducir una ejecución dentro del alcance declarado.
6. La revisión independiente queda registrada para cualquier promoción posterior a N3.
7. El Evidence Center publica una matriz de estado y no presenta `DOCUMENTED` como `VALIDATED`.

## Resultado esperado

La resolución no consiste en elevar artificialmente la madurez. Consiste en que cada capacidad tenga un camino de promoción verificable y reversible, con evidencia portable y claims limitados al comportamiento realmente observado. Hasta que se cumplan los criterios anteriores, el estado público correcto es `DOCUMENTED` o `BLOCKED`, no `VALIDATED`, `PILOT` ni `OPERATIONAL`.
