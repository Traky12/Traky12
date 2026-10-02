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

de:

```text
ASEGURAMIENTO
```

y:

```text
EVIDENCIA
```

de:

```text
GOBERNANZA
```

Esto permite cuestionar una afirmación con independencia del componente que la produjo.

También reduce el riesgo de que:

```text
la documentación
→ se tome por capacidad
```

o:

```text
un CI en verde
→ se tome por producción
```

o:

```text
un prototipo
→ se tome por producto
```

---

## Verificación externa

`castuo-e3-001` define una ruta de verificación separada:

```text
congelar el paquete
→ ejecutor independiente
→ reproducción
→ atestación del ejecutor
→ revisión humana
→ validación del paquete
→ evaluación del gate
→ entrega a staging
```

El primer requisito no cumplido bloquea la promoción.

El objetivo es hacer posible la revisión externa sin conceder al verificador autoridad sobre CASTÚO.

---

## Limitaciones actuales

Varias capacidades importantes siguen explícitamente acotadas o pendientes, incluidas combinaciones de:

```text
ejecución E2E completa Núcleo → Edge → Campo
conformidad remota
reproducción externa
revisión independiente
re-anclaje determinista de la evidencia
despliegue en producción
servicio continuo
validación de campo
validación comercial
federación
```

Estas limitaciones forman parte del registro técnico público.

---

## Estrategia de evolución

CASTÚO evoluciona de forma sistemática y no por acumulación descontrolada de funciones.

Cada capacidad nueva debe responder:

```text
¿Qué aporta?
¿De qué capacidad existente depende?
¿Qué riesgo introduce?
¿Cómo se prueba?
¿Qué evidencia produce?
¿Cómo se puede reproducir?
¿Cómo puede fallar?
¿Cómo puede recuperarse?
¿Qué gate la promueve?
```

Solo deben crearse repositorios nuevos cuando una superficie existente no pueda albergar la capacidad sin crear un acoplamiento o una ambigüedad inaceptables.

El objetivo no es tener menos repositorios a cualquier precio.

El objetivo es **menos ambigüedad arquitectónica y menos dependencia de conocimiento no documentado**.

---

## Secuencia de prioridades

La progresión actual es:

```text
1. Integridad de la línea base
2. Refuerzo de seguridad
3. Convergencia de la integración
4. Golden Path E2E
5. Evidencia reproducible
6. Verificación externa
7. Piloto
8. Primer pago
9. Repetibilidad
10. Escala
```

El trabajo de investigación y experimental queda subordinado a las carencias críticas de integración y evidencia.

---

## Límite entre evidencia y valor

CASTÚO distingue cuatro conceptos diferentes:

```text
Capacidad técnica
        ≠
Coste de reconstrucción
        ≠
Valor económico
        ≠
Valoración de mercado
```

El número de repositorios, el número de contribuciones, las pruebas, la complejidad arquitectónica y el esfuerzo de ingeniería no son en sí mismos valor de mercado.

Cualquier valoración del activo técnico debe quedar sujeta a due diligence técnica, titularidad de la propiedad intelectual, reproducibilidad, estado de integración, evidencia de despliegue y validación comercial.

La fuente financiera oficial sigue siendo la autoridad para las cifras financieras.

---

## Licencias y titularidad

Un repositorio público no se considera open source por el mero hecho de ser visible.

Cuando ningún archivo `LICENSE` concede derechos, se aplica el copyright por defecto.

Los forks de terceros siguen sujetos a sus proyectos y licencias originales.

La capacidad propia de CASTÚO no debe deducirse de software de terceros por el mero hecho de que un repositorio original se cite, se bifurque o se integre de forma experimental.

---

## Evidencia pública y navegación

* [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
* [Política de seguridad](https://github.com/Traky12/Traky12/blob/main/SECURITY.md)
* [Mapa público de repositorios](#mapa-publico)
* [Cronología técnica pública](EVOLUTION_TIMELINE_PUBLIC.md)
* [Cast-o](https://github.com/Traky12/Cast-o)
* [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge)
* [castuo-offline-field-operations](https://github.com/Traky12/castuo-offline-field-operations)
* [castuo-evidence](https://github.com/Traky12/castuo-evidence)
* [castuo-e3-001](https://github.com/Traky12/castuo-e3-001)
* [CASTÚO-SYSTEM™](https://castuo-system.es/)
* [ORCID](https://orcid.org/0009-0007-3489-0565)
* [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b/)

La fuente principal en inglés es [`README.md`](README.md).

---

## No se afirma

Este perfil no afirma:

```text
operación continua a escala de producción
autoridad autónoma
despliegue federado
certificación
conformidad regulatoria solo por arquitectura
tracción de clientes de pago sin evidencia
ingresos recurrentes
interoperabilidad universal
robótica operativa
fabricación de semiconductores
ni ninguna otra capacidad cuyo límite de evidencia no se haya alcanzado
```

El material histórico, experimental y de objetivos no debe interpretarse como capacidad de producción actual.

---

> **El objetivo no es que CASTÚO parezca seguro.**
>
> **El objetivo es que sus capacidades sean inspeccionables, sus limitaciones explícitas, su evidencia reproducible y su evolución segura.**
