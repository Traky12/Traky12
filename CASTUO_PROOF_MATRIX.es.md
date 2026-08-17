# Matriz de evidencia CASTUO

Esta matriz separa alcance profesional, implementación, tests, evidencia, revisión y promoción. Una fila no se vuelve operativa porque exista un repositorio, documento o workflow.

| Capacidad / superficie | Implementación | Test / validación | Evidencia | Revisión | Gate | Estado público |
|---|---|---|---|---|---|---|
| Gobernanza de repositorios | Referencias V1.0 y metadata en el alcance candidato declarado | Conformance local | Informes y revisiones fuente | Revisión humana pendiente | G0 | `EVIDENCE-SCOPED` |
| Generación de evidencia | Estructuras de envelope y manifest | Validación local donde se declara | Hashes, manifests y registros acotados | Revisión humana pendiente | G-E | `TESTED_LOCAL` |
| Continuidad offline | Diseñada e implementada localmente donde existe evidencia | Checks locales de workflow | Alcance de evidencia edge/field | Revisión de piloto pendiente | G-L | `IMPLEMENTED_LOCAL` |
| Seguridad y recuperación | Controles y superficies de recuperación documentados | Baseline y negative tests pendientes donde no consten | Documentación de assurance | Revisión pendiente | G-S | `DOCUMENTED` |
| Despliegue remoto | No afirmado | Sin test operativo público | Sin evidencia afirmada | No aplicable | G-R | `NOT_CLAIMED` |
| Operación productiva | No afirmada | Sin evidencia productiva pública | Sin evidencia afirmada | No aplicable | G-P | `NOT_CLAIMED` |
| Piloto comercial | Oferta acotada y PILOT-001 documentados | Ejecución medida pendiente | Evidencia aprobada por cliente pendiente | Revisión comercial/legal pendiente | G-C | `PENDING` |
| Assurance independiente | Alcance E3-001 definido como objetivo | Reproducción independiente pendiente | Revisión externa pendiente | Revisor aún no atribuido | E3 | `PENDING` |

## Clases de evidencia

`CONTRACT → VALIDATION → EXECUTION → REVIEW → PROMOTION`

El contrato define qué puede ocurrir. La validación comprueba la estructura declarada. La ejecución produce un envelope. La revisión evalúa el resultado. La promoción es una decisión autorizada independiente.

## Vocabulario de madurez

| Estado | Significado | Lo que no significa |
|---|---|---|
| `DOCUMENTED` | Un alcance o diseño está descrito públicamente. | No implica que esté implementado. |
| `IMPLEMENTED_LOCAL` | Existe implementación dentro del alcance local declarado. | No implica operación remota o productiva. |
| `TESTED_LOCAL` | Un test o validación local pasó dentro del alcance. | No implica validación independiente. |
| `EVIDENCE-SCOPED` | Las superficies y fronteras de evidencia están identificadas. | No es autorización de promoción. |
| `TARGET` | Una capacidad o gate futuro está definido. | No es una capacidad presente. |
| `PENDING` | Falta ejecución, evidencia o revisión requerida. | No debe presentarse como verde. |
| `NOT_CLAIMED` | El perfil público no formula ese claim. | No es una conclusión sobre trabajo privado. |

## Regla de revisión

`Identity != Documentation != Evidence != Execution != Review != Promotion`
