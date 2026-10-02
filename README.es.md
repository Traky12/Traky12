# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Fundador y arquitecto principal de CASTÚO-SYSTEM™**

[English](README.md) · **Español**

> **NINGUNA AFIRMACIÓN SIN PROCEDENCIA**
>
> **NINGÚN DESPLIEGUE DE IA SIN ASEGURAMIENTO**
>
> **NINGUNA ESCALA SIN SEGURIDAD Y OBSERVABILIDAD**

CASTÚO-SYSTEM™ es una **arquitectura basada en evidencia para operaciones rurales y distribuidas resilientes**.

Su primera dirección de producto es **CASTÚO Evidence-Ready Field Operations**: un modelo operativo offline-first para entornos donde la conectividad es intermitente y la información operativa debe seguir siendo trazable, revisable y recuperable.

La arquitectura combina:

```text
NÚCLEO (CORE)
+
EDGE / IoT
+
OPERACIONES DE CAMPO
+
EVIDENCIA
+
ASEGURAMIENTO
+
SEGURIDAD
+
RECUPERACIÓN
+
OBSERVABILIDAD
+
GOBERNANZA
```

CASTÚO evoluciona mediante una progresión controlada:

```text
Capacidad
→ Integración
→ Prueba
→ Evidencia
→ Revisión
→ Verificación externa
→ Validación
→ Operación
→ Pago
→ Repetibilidad
→ Escala
```

La IA, la federación, la infraestructura soberana, la criptografía avanzada y otras tecnologías experimentales son capas habilitadoras o de investigación hasta que sus capacidades concretas se evidencien por separado.

---

## Modelo del sistema

```text
                         CASTÚO-SYSTEM™
                                │
                ┌───────────────┼───────────────┐
                │               │               │
              NÚCLEO           EDGE           CAMPO
                │               │               │
                └───────────────┼───────────────┘
                                │
                           EVIDENCIA
                                │
                         ASEGURAMIENTO
                                │
               SEGURIDAD · RECUPERACIÓN · OBS
                                │
                           GOBERNANZA
                                │
                              GATES
                                │
                     VALIDACIÓN / REVISIÓN
                                │
                       PILOTO / OPERACIÓN
                                │
                        PAGO / REPETICIÓN
```

El objetivo arquitectónico no es maximizar el número de repositorios ni el volumen de tecnología.

Es conseguir que el sistema sea **integrado, reproducible, observable, recuperable y gobernable**.

---

## Posición de ingeniería actual — 2026-09-30

CASTÚO está en una fase de **consolidación técnica y refuerzo de la evidencia**.

El trabajo de ingeniería reciente se ha centrado en:

* autoridad de gobernanza y trazabilidad de repositorios;
* refuerzo de seguridad y controles fail-closed;
* listas de destinos permitidos y eliminación de rutas externas no controladas;
* reparación de CI/CD y seguridad de los workflows;
* procedencia de la evidencia y límites de las afirmaciones;
* líneas base de seguridad y trazabilidad de los repositorios;
* persistencia de estado y cifrado en reposo;
* recuperación, rollback y salvaguardas operativas;
* trazabilidad de capacidades a repositorios;
* estado generado y vistas de solo lectura del ecosistema;
* preparación de una verificación externa acotada.

Por ello, el perfil público distingue con cuidado entre:

```text
capacidad implementada
≠
capacidad integrada
≠
capacidad probada
≠
capacidad evidenciada
≠
capacidad validada externamente
≠
operación comercial
```

No se afirma operación en producción, despliegue de campo continuo, tracción de clientes de pago, certificación ni autoridad federada a partir de la mera actividad de los repositorios, la documentación, los commits o el estado de los workflows.

---

## Autoridad de la arquitectura

| Superficie | Papel |
| --- | --- |
| `Castuo-system` (privado) | **Autoridad técnica canónica actual** del código, la documentación operativa, las decisiones técnicas y la evolución gobernada |
| `castuo-evolution` (privado) | Superficie experimental o preparada de evolución y gobernanza; **no** es la fuente única de verdad actual, ni un plano de control desplegado, ni una autoridad de gobernanza autónoma |
| `Traky12/Traky12` | Perfil público, navegación y superficie de límites de las afirmaciones |
| Repositorios públicos | Superficies declaradas de implementación, evidencia, verificación o investigación, según su alcance individual |

`Castuo-system` es la autoridad canónica.

El perfil público resume y enlaza; no prevalece sobre la evidencia de los repositorios.

---

## La primera ruta de validación

La cuña comercial y técnica se mantiene acotada a propósito.

```text
Problema
→ Workflow de campo
→ Capacidad
→ Implementación
→ Prueba
→ Evidencia
→ Revisión
→ Piloto
→ Pago
→ Operación
→ Repetibilidad
```

El primer recorrido de usuario es:

```text
Crear organización
→ registrar una operación
→ continuar durante la pérdida de conectividad
→ conservar el estado local
→ sincronizar
→ revisar la evidencia
→ exportar un informe
→ reproducir / verificar
→ decisión de promoción
```

Este recorrido es un **objetivo de validación**.

No se presenta aquí como un despliegue de producción o comercial completado.

---

## Objetivo Golden Path

El objetivo inmediato del sistema es hacer converger los componentes existentes en una única sección vertical reproducible:

```text
NÚCLEO
  ↓
EDGE
  ↓
CAMPO
  ↓
EVIDENCIA
  ↓
ASEGURAMIENTO
  ↓
REVISIÓN
  ↓
RECUPERACIÓN
  ↓
PROMOCIÓN
```

Que un componente supere sus propias pruebas locales no demuestra por sí mismo que la cadena completa funcione de extremo a extremo.

Por tanto, el hito de ingeniería clave es:

> **una ruta acotada, ejecutable de principio a fin, con evidencia reproducible y gestión explícita de fallos.**

---

## Modelo de evidencia

CASTÚO sigue una progresión basada en evidencia:

```text
Afirmación
  ↓
Evidencia
  ↓
Ejecución
  ↓
Artefacto / Hash
  ↓
Reproducción
  ↓
Revisión
  ↓
Gate
  ↓
Promoción / Rollback
```

Las superficies públicas de evidencia están diseñadas para conservar tanto los resultados positivos como los negativos.

Una validación fallida no se reescribe como éxito.

Un registro de evidencia defectuoso se conserva como evidencia histórica y, cuando procede, se vuelve a anclar mediante un nuevo registro controlado.

Esto es intencionado.

---

<a id="taxonomia-publica"></a>

## Taxonomía pública de estado

Todos los repositorios públicos deben usar el mismo vocabulario de afirmaciones:

| Estado | Significado |
| --- | --- |
| `CURRENT` | Implementado y verificable dentro del alcance declarado del repositorio |
| `CURRENT (PARTIAL)` | Implementado en parte, con limitaciones conocidas o integración incompleta |
| `TARGET` | Capacidad futura aprobada; no se presenta como implementación actual |
| `EXPERIMENTAL` | Prototipo, prueba de concepto o investigación acotada; no consolidado |
| `PENDING` | Implementación, integración o evidencia incompletas |
| `NOT_CLAIMED` | No se presenta como capacidad actual de CASTÚO |

La madurez de la evidencia se sigue por separado:

```text
DOCUMENTADO
→ IMPLEMENTADO
→ PROBADO
→ INTEGRADO
→ EVIDENCIADO
→ VALIDADO
→ OPERATIVO
```

La madurez comercial es otra dimensión distinta:

```text
USADO POR CLIENTE
→ PAGADO
→ REPETIDO
→ RECURRENTE
```

Ninguno de estos estados debe deducirse de otro.

---

## Gates

La promoción se controla mediante gates de evidencia definidos y gobernados en la autoridad técnica canónica, no en este perfil.

Las reglas que se aplican públicamente son:

* cada gate tiene criterios de aceptación explícitos y un responsable con nombre;
* un gate solo se cierra mediante una decisión humana registrada y respaldada por evidencia válida; ningún modelo de IA ni automatismo cierra un gate;
* el primer requisito no cumplido detiene la promoción;
* la aparición de un artefacto no cierra un gate por sí misma;
* la madurez nunca se promueve automáticamente.

Lo desconocido permanece como:

```text
UNKNOWN
```

hasta que la evidencia lo resuelva.

---

## Dominios de capacidad principales

### Núcleo

La plataforma canónica privada y la arquitectura de dominio.

```text
Lógica de dominio
APIs
Estado
Contratos
Integración
Documentación operativa
Evolución gobernada
```

### Edge / IoT

Frontera de operación desconectada y telemetría.

```text
MQTT
Persistencia local
Buffering
Sincronización
Ejecución en gateway
Frontera del dispositivo
```

### Operaciones de campo

Operación orientada a personas con conectividad degradada.

```text
Workflows offline
Asistencia local
SIG / navegación
Captura de evidencia
Comunicaciones resilientes
Recuperación
```

### Evidencia

Superficies públicas de evidencia y verificación acotada.

```text
Objetos de evidencia
Esquemas
Validadores
Escenarios negativos
Reproducibilidad
Límites de las afirmaciones
Paquetes de reproducción
```

### Aseguramiento

Herramientas técnicas de aseguramiento y validación.

```text
Pruebas
Validación en CI
Pruebas de rutas de fallo
Comprobaciones de seguridad
Generación de evidencia
Diagnóstico
```

### Seguridad / Recuperación / Observabilidad

Capacidades de control transversales.

```text
Control de secretos
Comportamiento fail-closed
Listas de destinos permitidos
Cifrado
Auditabilidad
Copia de seguridad
Restauración
Rollback
Salud / telemetría
Visibilidad operativa
```

### Gobernanza

Control a nivel de sistema de las afirmaciones, los cambios y la promoción.

```text
Autoridad
Trazabilidad
Estado
Gates
Impacto de los cambios
Vinculación con la evidencia
Promoción
Rollback
```

---

<a id="mapa-publico"></a>

## Mapa público de repositorios

Los repositorios públicos siguientes representan la superficie pública revisable del ecosistema. No representan la plataforma privada completa, la gobernanza interna, las operaciones de seguridad, los materiales comerciales ni los espacios de investigación restringidos.

| Repositorio | Papel público | Límite público |
| --- | --- | --- |
| [`Traky12`](https://github.com/Traky12/Traky12) | Perfil público y punto de entrada al ecosistema | No representa la plataforma privada completa |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | Pruebas, aseguramiento y validación | Herramienta de ingeniería acotada a su alcance |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Edge / IoT / continuidad offline | La federación de extremo a extremo sigue siendo un objetivo |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Operaciones de campo offline | Capacidad local y flujos operativos preparados |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Evidencia pública reproducible | Solo evidencia acotada; no implica producción |
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | Protocolo de reproducción y revisión | La verificación independiente es un gate separado |

Los forks de terceros y los repositorios archivados no cuentan como capacidad propia de CASTÚO salvo que su propio alcance lo establezca explícitamente.

---

## Por qué la arquitectura se separa así

El ecosistema separa intencionadamente:

```text
IMPLEMENTACIÓN
```

La fuente principal en inglés es [`README.md`](README.md). La documentación detallada de evidencia, seguridad, Proof Pack y finanzas permanece en el repositorio de evolución.

## Promotion closure / Cierre de promoción

The current CASTÚO posture remains **`PROMOTION = BLOCK` / `LOCAL_RESULT_NO_CLAIM`** until the bounded S-001A slice has an executable contract, portable evidence envelope, independent replay, human review and rollback evidence.

La ruta priorizada, los gaps, los riesgos P0 y los gates de salida están documentados en [`docs/CASTUO_PROMOTION_CLOSURE_PLAN.md`](docs/CASTUO_PROMOTION_CLOSURE_PLAN.md). Este repositorio debe conservar estados evidence-scoped y no elevar `LOCAL`, `PENDING` o `EVIDENCE_REQUIRED` a claims de producción, independencia de proveedor o validación independiente.

