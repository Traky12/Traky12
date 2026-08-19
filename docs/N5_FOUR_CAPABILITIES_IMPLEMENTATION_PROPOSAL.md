# Propuesta detallada para los cuatro registros N5

**Repositorio:** `Traky12/Traky12`  
**Área:** `evidence-center/`  
**Estado actual común:** `maturity_level: N5`, `target_maturity: N6`, `evidence_state: DOCUMENTED`  
**Regla de publicación:** ningún dossier avanzará a `VALIDATED`, `PILOT` u `OPERATIONAL` mientras conserve placeholders, provenance incompleta, resultados sin hash o ausencia de revisión independiente.

## Alcance de la propuesta

Los cuatro dossiers existentes ya tienen una estructura común con `capability.yaml`, baseline, KPIs, protocolo de piloto, resultados, conclusión, provenance, seguridad y changelog. La propuesta no rellena valores desconocidos. En su lugar, define para cada capacidad qué evidencia debe recogerse, qué pruebas deben ejecutarse, qué campos siguen pendientes y qué gate permite avanzar.

Los cuatro registros son:

| ID | Dossier | Capacidad |
|---|---|---|
| `OFFLINE-001` | `N5-KIWIX-(KNOWLEDGE-LAYER)` | Capa de conocimiento offline |
| `OFFLINE-002` | `N5-AI-LOCAL-RAG-OFFLINE-ASSISTANCE-LAYER` | Asistencia local AI/RAG offline |
| `OFFLINE-003` | `N5-ORGANIC-MAPS-(VISUAL-FIELD-LAYER)` | Capa visual de campo y mapas offline |
| `OFFLINE-004` | `N5-MESHTASTIC-(COMMUNICATION-LAYER)` | Comunicación distribuida y continuidad de mensajes |

## Estado de transición común

Cada dossier debe mantener el siguiente estado hasta cerrar sus blockers:

```yaml
maturity_level: N5
target_maturity: N6
evidence_state: DOCUMENTED
claims_promoted: false
promotion_status: BLOCKED
```

`DOCUMENTED` significa que existe una descripción estructurada, no que la capacidad haya sido validada en campo. El validador debe seguir aceptando placeholders explícitos en este estado, pero debe impedir cualquier promoción mientras permanezcan.

## Registro OFFLINE-001 — Kiwix, capa de conocimiento

### Propósito y alcance

Validar de forma acotada el acceso local a un corpus de conocimiento previamente seleccionado cuando no existe conectividad. El claim permitido debe limitarse a la disponibilidad y consulta local del corpus concreto, en el dispositivo y versión declarados.

Quedan fuera del alcance la exactitud universal del contenido, la actualización automática, la cobertura completa del dominio, la autorización para tomar decisiones de alto impacto y cualquier claim de sustitución de expertos.

### Evidencia requerida

| Artefacto | Contenido que debe completarse |
|---|---|
| Baseline | Dispositivo, sistema operativo, tamaño del corpus, versión del contenido, espacio disponible y tiempo de carga. |
| Provenance | Fuente exacta del corpus, licencia, fecha de descarga, hash del archivo, versión de Kiwix y commit del harness. |
| KPIs | Tiempo de apertura, tasa de consulta local, consumo de almacenamiento y resultado ante corpus ausente o corrupto. |
| Resultados | Datos brutos, número de consultas, entradas válidas/no válidas, errores y hash del dataset de prueba. |
| Seguridad | Licencia, integridad del corpus, control de acceso, datos sensibles, retención y procedimiento de sustitución. |
| Replay | Comando o runbook para reconstruir el entorno y repetir una consulta fija con el mismo resultado esperado. |

### Pruebas mínimas

Debe probarse una consulta válida sin red, una consulta no encontrada, un corpus con hash incorrecto, almacenamiento insuficiente y recuperación después de reemplazar el corpus. El resultado debe registrar qué parte es observación local y qué parte es interpretación humana.

### Gate de promoción

El dossier podrá solicitar `E3` sólo cuando una persona independiente reproduzca la instalación y las consultas con el mismo corpus o documente cualquier divergencia. Para N5 será necesario además un piloto autorizado con baseline y KPIs de uso; hasta entonces permanecerá `DOCUMENTED`.

## Registro OFFLINE-002 — AI Local / RAG offline

### Propósito y alcance

Validar un flujo de asistencia local basado en recuperación aumentada con un modelo y un corpus declarados, operando sin conectividad y con autoridad estrictamente acotada. El claim permitido debe limitarse a la ejecución local del escenario, la recuperación de fuentes y la presentación de respuestas con provenance dentro del corpus probado.

Quedan fuera del alcance la autonomía, la exactitud general, la seguridad clínica o jurídica, la sustitución de supervisión humana, el entrenamiento continuo y cualquier despliegue productivo no revisado.

### Evidencia requerida

| Artefacto | Contenido que debe completarse |
|---|---|
| Baseline | Modelo, cuantización, hardware, sistema operativo, corpus, embedding model, límites de contexto y temperatura/configuración. |
| Provenance | Hash del modelo y corpus, commit del pipeline, versión de dependencias, origen de documentos y entorno de ejecución. |
| KPIs | Latencia, tasa de recuperación de fuentes, respuestas sin soporte, consumo de memoria, comportamiento sin red y tasa de abstención. |
| Resultados | Dataset de preguntas versionado, respuestas, citas recuperadas, errores, casos adversariales y hash de los outputs. |
| Seguridad | Trust boundary, prompt injection, fuga de datos, aislamiento del modelo, permisos, logs y rollback. |
| Claim firewall | Regla que impida presentar una respuesta sin fuentes como evidencia o acción autorizada. |

### Pruebas mínimas

Debe ejecutarse una batería fija que incluya preguntas respondibles, preguntas fuera del corpus, instrucciones conflictivas, prompt injection, corpus vacío, pérdida de red y recuperación. Debe verificarse que el sistema se abstiene o marca incertidumbre cuando no puede aportar provenance suficiente.

### Gate de promoción

N3 exige ejecución local reproducible y casos negativos. E3 exige reproducción independiente del mismo modelo, corpus y configuración. N5 exige un piloto autorizado con revisión humana, datos brutos, KPIs y límites explícitos para evitar que el resultado se interprete como autonomía o validación universal.

## Registro OFFLINE-003 — Organic Maps, capa visual de campo

### Propósito y alcance

Validar navegación y consulta cartográfica local con un paquete de mapas versionado, en un escenario de campo acotado y sin depender de conectividad durante la ejecución declarada.

Quedan fuera del alcance la precisión universal de rutas, la disponibilidad de todos los caminos, la seguridad del desplazamiento, la actualización permanente del mapa y cualquier garantía operativa sobre terceros o infraestructura real.

### Evidencia requerida

| Artefacto | Contenido que debe completarse |
|---|---|
| Baseline | Región, paquete de mapas, fecha de descarga, dispositivo, sistema operativo, GPS disponible y ruta de prueba. |
| Provenance | Fuente y licencia del mapa, versión, hash del paquete, configuración de la aplicación y commit del procedimiento. |
| KPIs | Tiempo de arranque offline, disponibilidad de teselas, error de localización observado, duración de navegación y consumo energético. |
| Resultados | Tracks o logs anonimizados, puntos de control, desviaciones, interrupciones GPS y hash de los artefactos. |
| Seguridad | Privacidad de localización, retención, exportación, acceso al dispositivo y borrado de tracks. |
| Replay | Ruta sintética o conjunto de puntos de control que permita repetir la prueba sin exponer ubicaciones sensibles. |

### Pruebas mínimas

Debe probarse el arranque sin red, navegación por una ruta incluida, búsqueda de un punto existente, búsqueda de un punto ausente, mapa incompleto, pérdida temporal de GPS y exportación controlada de resultados.

### Gate de promoción

La reproducción independiente debe usar la misma versión del paquete cartográfico o declarar la divergencia. El paso a N5 requiere un piloto autorizado con una región y periodo definidos; no debe convertirse en un claim de cobertura general ni de seguridad física.

## Registro OFFLINE-004 — Meshtastic, capa de comunicación

### Propósito y alcance

Validar el intercambio de mensajes en una topología y configuración de nodos declaradas durante una interrupción de conectividad convencional. El claim permitido debe limitarse a la entrega, almacenamiento y recuperación observados en ese escenario concreto.

Quedan fuera del alcance la entrega garantizada, la cobertura universal, la confidencialidad absoluta, la interoperabilidad con cualquier red y la continuidad de operación sin límites de batería, alcance, regulación o densidad de nodos.

### Evidencia requerida

| Artefacto | Contenido que debe completarse |
|---|---|
| Baseline | Hardware, firmware, región/frecuencia permitida, topología, distancia, energía, antenas y condiciones ambientales. |
| Provenance | Commit o tag del harness, firmware, configuración de nodos, entorno, fecha, reviewer y ubicación restringida de datos sensibles. |
| KPIs | Tasa de entrega, latencia P95, autonomía offline, reintentos, mensajes duplicados, pérdida y recuperación tras reconexión. |
| Resultados | Logs de nodos, timestamps sincronizados, identificadores anonimizados, secuencia de fallos, resultados y hashes. |
| Seguridad | Claves y gestión de secretos, cifrado, control de acceso, rotación, retención, incidentes y rollback. |
| Replay | Topología sintética o datos anonimizados, comandos de configuración y procedimiento de reproducción. |

### Pruebas mínimas

Debe probarse un mensaje con conectividad normal, `NETWORK_DOWN`, nodo intermedio ausente, batería o nodo degradado, duplicación, reinicio, recuperación y replay de la secuencia. Cada resultado debe distinguir entre mensaje enviado, almacenado, retransmitido, recibido y confirmado.

### Gate de promoción

E3 requiere una reproducción independiente con el mismo perfil de nodos o divergencias registradas. N5 exige un piloto autorizado, baseline de cobertura y KPIs, sin convertir el resultado en una promesa de entrega garantizada ni de disponibilidad universal.

## Plan común de ejecución

| Fase | Acción | Salida verificable |
|---|---|---|
| 1. Congelación | Etiquetar el commit y declarar el alcance de cada dossier | Manifest con commit, versión y scope |
| 2. Seguridad | Completar secret scanning, permisos, retención y trust boundary | `security.md` revisable y sin secretos publicados |
| 3. Instrumentación | Ejecutar pruebas positivas y negativas | Logs y resultados versionados |
| 4. Hashing | Generar hashes de inputs, outputs, fixtures y paquetes | Manifest de hashes reproducible |
| 5. Replay | Ejecutar el runbook desde un entorno limpio | Replay record con resultado y divergencias |
| 6. Revisión | Reviewer independiente revisa el alcance declarado | Review record con decisión y fecha |
| 7. Promoción | Actualizar estado sólo si el gate se cumple | Cambio de estado auditable o `BLOCKED` |

## Criterios de aceptación

La propuesta estará implementada cuando los cuatro dossiers tengan un `promotion_blockers` explícito, provenance sin `PENDING` para el nivel solicitado, resultados con hashes, pruebas negativas, seguridad revisada, replay contract y decisión independiente. La ausencia de datos reales no se resolverá sustituyéndolos por cifras estimadas: el estado correcto seguirá siendo `DOCUMENTED` o `BLOCKED`.

El primer incremento seguro consiste en añadir los blockers y contratos de replay, no en promover las capacidades. El segundo consiste en ejecutar las pruebas locales. El tercero consiste en obtener E3 independiente. Sólo después debe considerarse un piloto N5 real.
