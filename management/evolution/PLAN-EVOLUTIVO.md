# Plan evolutivo de ingeniería para CASTÚO-SYSTEM

## 1. Objetivo y alcance

El objetivo es convertir el conjunto actual de repositorios de CASTÚO-SYSTEM en un **ecosistema de producto gobernado, trazable y evolutivo**, capaz de operar en escenarios rurales o industriales con conectividad intermitente, integrando operaciones offline-first, edge/IoT, servicios de nube privada, inteligencia artificial asistida y un sistema verificable de evidencia.

El plan se basa exclusivamente en el inventario aportado. No presupone que las capacidades descritas por los nombres o README estén implementadas, integradas o validadas. Toda afirmación técnica se tratará inicialmente como **hipótesis pendiente de evidencia**.

El alcance incluye la arquitectura de repositorios, límites de servicio, modelo de madurez, seguridad, observabilidad, CI/CD, operación offline, integración IoT/edge, IA gobernada, pilotos y documentación de evidencia. No incluye todavía modificar código, desplegar servicios, migrar datos ni realizar cambios en GitHub.

## 2. Situación de partida e hipótesis de trabajo

El inventario muestra una plataforma con varios repositorios públicos y privados, plantillas, espacios experimentales y forks de terceros. Las piezas principales parecen agruparse en: plataforma core y nube privada (`Castuo-system`, `castuo-360-v5.3`), gobierno y evolución (`castuo-evolution`, `castuo-strategy-knowledge-base`), seguridad y aseguramiento (`goldfish`, `Cast-o`), operación offline y edge (`castuo-offline-field-operations`, `castuo-agro-edge`), piloto IoT (`ctaex-iot-pilot`), visión agro (`agrovision-360`) y prototipos o integraciones experimentales.

| Área | Repositorios o activos observados | Riesgo inicial a confirmar |
|---|---|---|
| Producto y dominio | `Castuo-system`, `castuo-360-v5.3` | Solapamiento de responsabilidades y límites de servicio no formalizados |
| Gobierno y estrategia | `castuo-evolution`, `castuo-strategy-knowledge-base` y copia | Duplicidad de fuente de verdad y decisiones no vinculadas a commits/releases |
| Operación offline/edge | `castuo-offline-field-operations`, `castuo-agro-edge` | Sincronización, conflictos, identidad de dispositivos y tolerancia a fallos |
| IoT y pilotos | `ctaex-iot-pilot`, `agrovision-360` | Confusión entre experimental, piloto y capacidad operacional |
| Calidad y seguridad | `Cast-o`, `goldfish` | Controles dispersos o sin aplicación uniforme al ciclo de entrega |
| Dependencias externas | forks `openclaw` y `n8n` | Riesgo de divergencia, licencias, seguridad de cadena de suministro y mantenimiento |
| Documentación pública | `Traky12` y repositorios públicos | Exposición de claims no evidenciados o diferencias entre estado real y público |

Estas hipótesis deberán validarse mediante una auditoría técnica de solo lectura antes de proponer refactorizaciones.

## 3. Principios rectores

1. **Evidencia antes que madurez declarada.** Una capacidad no avanzará de nivel por existir código; deberá aportar pruebas, métricas, protocolo de validación y vínculo a commit o tag.
2. **Contratos antes que integraciones.** Las APIs, eventos, esquemas de datos, identidad y sincronización se definirán antes de multiplicar conectores.
3. **Offline-first como propiedad del dominio.** La aplicación deberá poder registrar, consultar y proteger operaciones esenciales sin conectividad, con sincronización explícita y auditable.
4. **Seguridad y observabilidad por defecto.** Identidad, autorización, secretos, auditoría, métricas, logs y trazas formarán parte de la plataforma base.
5. **Separación entre producto, experimento y piloto.** Cada repositorio tendrá un estado y una política de promoción claros: Planned, Implemented, Validated, Pilot u Operational.
6. **Evolución reversible.** Las decisiones deberán permitir rollback, coexistencia temporal de contratos y migraciones graduales.
7. **Gobernanza ligera pero ejecutable.** El sistema de decisiones debe poder aplicarse mediante CI, plantillas, revisiones y gates, no solo mediante documentación.

## 4. Fases propuestas

### Fase 0 — Descubrimiento, inventario y línea base

Se realizará una auditoría de todos los repositorios y forks, sin modificar su contenido. Se recogerán lenguajes, ramas, tags, workflows, dependencias, cobertura de tests, licencias, secretos accidentalmente expuestos, imágenes de despliegue, endpoints, esquemas y documentación existente. Se construirá un mapa de dependencias y un registro de capacidades.

El resultado será una **línea base reproducible**: matriz de repositorios, clasificación por capa, propietario técnico, estado, criticidad, dependencias, riesgos y evidencias disponibles. Cada claim se marcará como confirmado, parcialmente confirmado, no confirmado o contradicho.

**Criterio de salida:** 100 % de los repositorios inventariados, una fuente de verdad de ownership definida, riesgos críticos registrados y ningún repositorio clasificado como operacional sin evidencia mínima.

### Fase 1 — Arquitectura de referencia y límites del ecosistema

Se consolidará una arquitectura de referencia por capas: experiencia/API, dominio y servicios core, inteligencia/IA, edge/IoT y evidencia. Se definirán los bounded contexts, los flujos principales, el catálogo de APIs/eventos, las fronteras de datos y el modelo de despliegue para nube privada, edge y dispositivo.

Se decidirá qué repositorios son productos, librerías compartidas, plantillas, pilotos, laboratorios o documentación. `castuo-strategy-knowledge-base` y su copia deberán tener una relación explícita: una única fuente canónica, una copia archivada o un proceso de sincronización controlado. Los forks de `openclaw` y `n8n` se someterán a una decisión de consumir upstream, mantener fork con política de sincronización o sustituir la dependencia.

**Criterio de salida:** diagramas de contexto y contenedores, ADRs para decisiones estructurales, contratos versionados y una matriz clara de responsabilidades por repositorio.

### Fase 2 — Fundación de ingeniería y gobernanza técnica

Se unificarán convenciones de repositorio, ramas, commits, versionado semántico, changelogs, revisiones, CODEOWNERS, plantillas de incidencias y pull requests. Se establecerá una pipeline común para lint, análisis estático, tests unitarios, tests de integración, análisis de dependencias, escaneo de secretos, generación de artefactos y publicación de evidencia.

`Cast-o` se posicionará como toolkit de calidad y automatización, mientras que `goldfish` se enfocará en seguridad, observabilidad, recuperación y assurance, evitando duplicidades. Los gates deberán distinguir fallos bloqueantes, advertencias y excepciones con caducidad y responsable.

**Criterio de salida:** todos los repositorios activos disponen de pipeline mínima, artefactos versionados, control de dependencias, política de revisión y resultado de calidad visible por commit.

### Fase 3 — Seguridad, identidad, datos y operación confiable

Se diseñará el modelo de identidad para usuarios, servicios, dispositivos y operadores de campo. Se definirán autorización por roles o atributos, rotación de credenciales, gestión de secretos, cifrado en tránsito y reposo, auditoría inmutable y clasificación de datos. Se analizará el modelo de amenazas incluyendo pérdida o robo de dispositivos, redes hostiles, mensajes duplicados, replay, nodos comprometidos y corrupción local.

Se establecerán SLOs iniciales para disponibilidad, latencia de sincronización, durabilidad de evidencias, recuperación y entrega de mensajes. Se documentarán backup, restore, disaster recovery, retención, RPO/RTO y procedimientos operativos.

**Criterio de salida:** threat model aprobado, controles de identidad y auditoría definidos, pruebas de recuperación ejecutadas en entorno controlado y SLOs medibles para el primer piloto.

### Fase 4 — Núcleo offline-first y sincronización

Se implementará una estrategia de datos local-first para las operaciones esenciales: almacenamiento local transaccional, cola de cambios, identificadores idempotentes, versionado, timestamps confiables, resolución de conflictos, reintentos con backoff y estados de sincronización visibles para el operador.

Se especificará qué datos son autoritativos en dispositivo, edge o nube, qué operaciones requieren confirmación online y cómo se preserva la trazabilidad cuando existen ediciones concurrentes. Las opciones de conocimiento y conectividad offline —por ejemplo, base documental local, asistente RAG local, mapas offline o malla— se evaluarán como capacidades independientes, sin asumir que una tecnología concreta es necesaria hasta medir restricciones de hardware, licencia, cobertura y consumo.

**Criterio de salida:** pruebas automatizadas de desconexión, duplicación, reordenación, conflicto, recuperación y sincronización parcial; protocolo de consistencia aprobado; y demostración de las operaciones críticas sin red.

### Fase 5 — Edge/IoT, protocolos y evidencia de campo

Se normalizarán los contratos MQTT/LoRaWAN u otros protocolos usados, incluyendo topics, payloads, esquema, QoS, retención, timestamps, calidad de señal, batería, firmware, identidad y telemetría. Se establecerá un gateway edge con buffer duradero, validación de mensajes, deduplicación, control de versiones y reenvío seguro.

`ctaex-iot-pilot` será tratado como entorno de validación, `castuo-agro-edge` como candidato a componente reusable y `agrovision-360` como workspace experimental hasta que cada uno aporte evidencia. Los dossiers deberán enlazar protocolo, dataset, configuración, logs, métricas, commit/tag y conclusión firmada.

**Criterio de salida:** piloto instrumentado con KPIs de delivery rate, latencia, autonomía, pérdida de datos, recuperación y coste operativo; resultados reproducibles y límites documentados.

### Fase 6 — IA gobernada y capacidades asistidas

Se definirá el catálogo de casos de uso de IA, diferenciando recomendación, clasificación, extracción, generación y automatización. Para cada caso se establecerán datos permitidos, evaluación, umbral de confianza, revisión humana, trazabilidad de prompts/modelos, protección de datos, fallback sin IA y prohibiciones de decisión autónoma.

La IA se incorporará como capacidad desacoplada del dominio, con interfaces versionadas y posibilidad de ejecutar modelos locales o remotos según conectividad y criticidad. Cada resultado deberá poder asociarse con fuentes, versión del modelo, contexto y decisión del operador cuando corresponda.

**Criterio de salida:** conjunto de pruebas de calidad y seguridad, evaluación contra casos representativos, métricas de falsos positivos/negativos, mecanismo de fallback y registro de uso auditable.

### Fase 7 — Piloto controlado y promoción operacional

Se seleccionará un único flujo de alto valor y bajo riesgo para un piloto limitado. Se definirá protocolo previo, población de prueba, criterios de éxito, criterios de abortar, soporte, formación, plan de contingencia y consentimiento o requisitos regulatorios aplicables.

La promoción de N3 a N4 exigirá integración reproducible; de N4 a N5 exigirá despliegue medido en campo; y de N5 a N6 exigirá operación continua con observabilidad, gestión de incidentes, backup/restore, seguridad, runbooks y cumplimiento de SLOs durante un periodo acordado.

**Criterio de salida:** dossier de evidencia completo, revisión independiente de resultados, backlog de defectos priorizado y decisión explícita de promover, mantener, limitar o retirar la capacidad.

## 5. Modelo de madurez y gates

| Nivel | Significado | Evidencia mínima | Decisión permitida |
|---|---|---|---|
| N1 | Idea o necesidad | Problema, usuario y hipótesis | Investigar |
| N2 | Diseño | ADR, modelo de amenazas preliminar y contrato | Autorizar prototipo |
| N3 | Implemented | Código, tests unitarios, pipeline y documentación | Integrar |
| N4 | Validated | Tests de integración/E2E y entorno reproducible | Preparar piloto |
| N5 | Pilot | KPIs en campo, protocolo, resultados y límites | Promover o corregir |
| N6 | Operational | SLA/SLO, observabilidad, seguridad, DR, runbooks e incidentes gestionados | Operar |

Ningún repositorio o capacidad deberá elevarse de nivel automáticamente por actividad, número de commits o existencia de una demo. El gate debe exigir artefactos verificables, firma o aprobación responsable y enlace a una versión concreta.

## 6. Priorización inicial

La prioridad recomendada es **P0: inventario, fuente de verdad, seguridad de cadena de suministro, backups y pipeline mínima**; **P1: arquitectura de referencia, contratos, identidad, observabilidad y sincronización offline**; **P2: edge/IoT y piloto medido**; y **P3: IA avanzada, optimizaciones y expansión de integraciones**.

La regla de priorización combinará valor de campo, reducción de riesgo, dependencia técnica, esfuerzo y reversibilidad. Se evitará desarrollar simultáneamente varios productos experimentales hasta cerrar un flujo vertical completo desde dispositivo o interfaz hasta evidencia y operación.

## 7. Entregables de la ejecución posterior

La ejecución deberá producir, como mínimo, un inventario técnico, mapa de dependencias, arquitectura de referencia, ADRs, catálogo de contratos, matriz de madurez, threat model, política de seguridad, pipeline base, esquema de observabilidad, modelo offline/sync, protocolo de piloto, dossiers N5 y un roadmap versionado.

También se prepararán un registro de decisiones, un registro de riesgos, un RACI por repositorio, runbooks de operación y un README público que diferencie de forma inequívoca capacidades **Planificadas**, **Implementadas**, **Validadas**, **Piloto** y **Operacionales**.

## 8. Estrategia de verificación

La verificación se ejecutará por capas: análisis estático y unitario; integración de contratos; pruebas E2E; pruebas de resiliencia y desconexión; pruebas de seguridad; pruebas de recuperación; pruebas con datos sintéticos y, finalmente, medición en campo. Cada prueba generará artefactos fechados y vinculados al commit, entorno y configuración.

Los criterios cuantitativos de éxito se fijarán antes del piloto. Como mínimo se medirán disponibilidad, latencia extremo a extremo, tasa de entrega, duplicados, conflictos, pérdida de datos, tiempo de recuperación, consumo energético, defectos, intervenciones manuales, calidad de IA si aplica y coste por operación.

## 9. Dependencias y riesgos abiertos

Los principales riesgos son la falta de acceso al contenido real de los repositorios, duplicidades de producto y documentación, claims no evidenciados, divergencia de forks, exposición de secretos, ausencia de ownership, integración prematura de IA, dependencia de conectividad y dificultad para reproducir condiciones rurales.

La ejecución deberá confirmar además los requisitos regulatorios y de privacidad, la topología real de despliegue, hardware objetivo, protocolos efectivos, usuarios y roles, presupuesto operativo, ventanas de mantenimiento y definición de éxito empresarial. Si alguno de estos datos cambia, se actualizará el roadmap mediante ADR en lugar de alterar silenciosamente el alcance.

## 10. Primera iteración ejecutable tras la aprobación

La primera iteración se limitará a una auditoría técnica y de gobernanza de lectura, seguida de un taller de decisiones. El resultado será un backlog priorizado de no más de diez iniciativas P0/P1, un mapa de arquitectura validado por el responsable del sistema, y una recomendación explícita sobre qué repositorio debe actuar como núcleo, cuál como control de gobierno y cuál como primer piloto.

No se comenzará una refactorización amplia ni una integración de terceros hasta que esa línea base haya sido aprobada y los criterios de madurez estén incorporados al flujo de entrega.

## Supuestos

Se asume que el objetivo es planificar la evolución del ecosistema completo y no solo un repositorio individual. Se asume también que los repositorios aportados son representativos del estado actual, pero que su contenido interno, historial, despliegues y métricas aún deben inspeccionarse. La estrategia contempla nube privada, edge y operación offline, porque esas propiedades aparecen explícitamente en la descripción aportada; deberán confirmarse durante la auditoría.

## Resultado esperado

Al finalizar la ejecución de este plan, CASTÚO-SYSTEM deberá disponer de una **columna vertebral técnica y de evidencia** que permita saber qué existe, qué funciona, bajo qué condiciones, con qué riesgos y qué falta para operar de forma sostenida. La evolución dejará de depender de demos o claims y pasará a estar gobernada por contratos, gates, métricas, versiones y resultados de campo reproducibles.
