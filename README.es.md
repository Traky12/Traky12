# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**GREGORIO JIMÉNEZ BODES** · Fundador y arquitecto principal de CASTÚO-SYSTEM™

> **NO CLAIM WITHOUT PROVENANCE**<br>
> **NO AI DEPLOYMENT WITHOUT ASSURANCE**<br>
> **NO SCALE WITHOUT SECURITY AND OBSERVABILITY**<br>
> **NO PROMOTION WITHOUT REPRODUCTION**

CASTÚO-SYSTEM es una **arquitectura de resiliencia gobernada por evidencia** para operaciones distribuidas que deben seguir siendo inspeccionables cuando fallan la conectividad, la infraestructura, los proveedores o los sistemas de IA.

Diseño sistemas resilientes y gobernados por evidencia para operaciones de campo que deben continuar cuando fallan la conectividad, la infraestructura o los servicios de IA. CASTÚO-SYSTEM convierte las operaciones distribuidas en evidencia **inspeccionable, reproducible y revisable**.

**Unidad inicial / entrada de mercado objetivo:** Evidence-Ready Field Operations.

Continuidad offline · provenance · recuperación · replay · assurance · claims acotados.

## ¿Por qué CASTÚO?

La mayoría de los sistemas optimizan la disponibilidad. **CASTÚO optimiza la continuidad, la provenance, la recuperación, el replay, la revisabilidad y los claims acotados.**

> Un sistema no se vuelve confiable porque afirme ser resiliente; se vuelve más confiable cuando su comportamiento bajo fallo puede inspeccionarse y reproducirse.

## Qué he construido

| Capa | Capacidad construida |
|---|---|
| **Control plane de gobernanza** | Vocabulario, contratos de evidencia, gates de promoción, claim firewall y estado de ciclo de vida. |
| **Evidence fabric** | Objetos de evidencia legibles por máquina, hashes, provenance, replay y claims acotados. |
| **Benchmark de resiliencia** | Escenario S-001A de fallo y recuperación para continuidad offline. |
| **Motor de assurance** | Pruebas, casos negativos, trust boundary, rollback y validación de releases. |
| **Field wedge** | Operaciones de campo offline-first y sincronización edge. |
| **Arquitectura soberana** | IA, soberanía de datos, vendor exit y federación como capacidades gobernadas. |

## Para quién está diseñado

CASTÚO está diseñado para operaciones distribuidas de campo, infraestructuras con conectividad poco fiable, entornos edge / IoT, workflows asistidos por IA que requieren autoridad acotada y operaciones reguladas o sensibles a la evidencia.

**Dominio inicial:** operaciones rurales y distribuidas de campo.

## Superficies públicas de prueba

| Superficie | Rol | Enlace |
|---|---|---|
| **Traky12** | Identidad y arquitectura | [Repositorio del perfil](https://github.com/Traky12/Traky12) |
| **castuo-evidence** | Fixtures S-001A congelados, evidencia legible por máquina y especificación de replay | [Capa pública de evidencia](https://github.com/Traky12/castuo-evidence) |
| **Cast-o** | Assurance, testing y benchmarking adversarial | [Repositorio de assurance](https://github.com/Traky12/Cast-o) |
| **castuo-offline-field-operations** | Continuidad de campo offline-first | [Repositorio de operaciones de campo](https://github.com/Traky12/castuo-offline-field-operations) |
| **castuo-agro-edge** | Continuidad y sincronización edge / IoT | [Repositorio edge](https://github.com/Traky12/castuo-agro-edge) |

El control plane y los repositorios de implementación permanecen privados o acotados por evidencia cuando su publicación excedería el claim boundary declarado.

## Prueba en 60 segundos

```text
1. Clonar castuo-evidence
2. Ejecutar la validación local de S-001A
3. Inyectar NETWORK_DOWN en el escenario declarado
4. Observar el estado BUFFERED
5. Recuperar la conectividad
6. Reproducir la ejecución
7. Inspeccionar el objeto de evidencia legible por máquina
8. Observar el claim firewall
```

**Resultado esperado:** un resultado local dentro del alcance de la evidencia. **No es un claim de producción.**

El punto de entrada reproducible es [`scripts/pre_pr_s001a.sh`](https://github.com/Traky12/castuo-evidence/blob/main/scripts/pre_pr_s001a.sh). La capa pública de evidencia declara actualmente `LOCAL_RESULT_WITHIN_DECLARED_SCOPE` como único claim permitido; véase su [claim boundary](https://github.com/Traky12/castuo-evidence/blob/main/docs/claim-boundary.md).

## Límite actual de claims

> **N3 — Implementado / reproducible localmente**

Existe evidencia local dentro del alcance declarado. El siguiente desbloqueo es la **reproducción independiente (E3)**.

| Indicador de alcance | Valor actual |
|---|---:|
| Conformance local gobernada | `14/14 PASS LOCAL` |
| Cartera observada | `19 repositorios` |
| Superficies públicas de evidencia | `5` |
| Claims de producción | `0` |

**Todavía no se afirma:** verificación independiente, validación de campo, operación productiva, certificación independiente, tracción comercial o federación.

## Estado actual del ecosistema

**GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED**

| Dimensión | Estado público actual |
|---|---|
| Conformance local gobernada | `14/14 PASS LOCAL` |
| Conformance remota | `0/14` — `PENDING` |
| Publicación remota | `14 PENDING` |
| Entorno | `STAGING` |
| Baseline de seguridad | `PENDING` |
| Ejecución en staging | `PENDING` |
| Revisión humana | `PENDING` |
| Producción | `NOT_CLAIMED` |
| Validación comercial | `NOT_CLAIMED` |
| E3 independiente | `PENDING` |
| Federación | `PENDING` |

La evidencia local no implica publicación remota, producción, certificación, resultado de cliente, operación continua ni federación.

## Proof ladder

```text
N1  Scope
 ↓
N2  Contract
 ↓
N3  Implementación local          ← ACTUAL
 ↓
N4  Reproducción independiente    ← SIGUIENTE
 ↓
N5  Validación de campo
 ↓
N6  Operación sostenida
```

**Límite actual:** N3.<br>
**Siguiente desbloqueo:** E3 / reproducción independiente.

## Proof path

```text
Scope → Contract → Failure → Recovery → Evidence → Replay
→ Independent Review → Gate → Promotion
```

La actividad no es evidencia. Un commit, issue, README, badge o workflow verde no demuestra producción, adopción de clientes, certificación, autonomía, federación, ingresos recurrentes u operación continua.

## Divulgación financiera

Las cifras financieras se mantienen separadas de los claims técnicos y de evidencia. El workbook oficial PIE PLUS es la fuente autoritativa para las cifras financieras; los activos técnicos, la arquitectura, el código, los escenarios de planificación y la actividad de repositorios no son efectivo, valor de mercado, valor contable, ingresos, financiación, contrato ni resultado de cliente.

La fuente principal en inglés es [`README.md`](README.md). La documentación detallada de evidencia, seguridad, Proof Pack y finanzas permanece en el repositorio de evolución.

> El objetivo no es hacer que CASTÚO parezca seguro. Es hacer que su evidencia sea inspeccionable, su uso entendible y su evolución segura.
