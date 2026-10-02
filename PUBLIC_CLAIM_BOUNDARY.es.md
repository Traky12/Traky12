# Límite de claims públicos de CASTÚO-SYSTEM

## Propósito

Este archivo define el límite público de los claims del perfil `Traky12`. Es una capa de representación pública, no una fuente de autoridad, y no sustituye `CASTUO-REPOSITORY-STANDARD-V1.0` ni la evidencia operativa privada.

## Autoridad canónica

Castuo-system es la autoridad privada canónica para el estado técnico actual, las decisiones de gobernanza y las decisiones de promoción.

Este perfil público y los repositorios enlazados exponen material seleccionado, delimitado y sujeto a evidencia. No deciden independientemente el estado técnico, la preparación ni los resultados de promoción.

castuo-evolution contiene material de gobernanza preparado, histórico o de trabajo. No es una autoridad canónica, no es una fuente de verdad sincronizada y no determina el estado actual de promoción.

## Papel público de Traky12

Traky12 es una representación pública y un índice de evidencia. Expone claims delimitados, enlaces seleccionados, roles de repositorio, limitaciones y estado público.

Traky12 no sustituye a Castuo-system como autoridad técnica, no decide gates, no decide promoción y no es un mecanismo interno de control.

## Puede afirmarse

El perfil público puede afirmar, dentro de un alcance declarado y con el artefacto correspondiente enlazado, que CASTÚO dispone de arquitectura documentada, metadatos de repositorio implementados, tooling de conformance, contratos de evidencia gobernados, especificaciones acotadas de gobernanza de IA, diseños de seguridad y recuperación y trabajo técnico reproducible.

El perfil puede describir **CASTÚO Evidence-Ready Field Operations** como propuesta comercial inicial o recorrido previsto del cliente. Esto describe posicionamiento y alcance; no prueba cliente de pago, ingresos recurrentes, operación en producción ni resultado medido de cliente.

## No puede afirmarse

El perfil no debe afirmar operación en producción, autoridad autónoma, actuación física, ejecución financiera, adopción de clientes, ingresos, ingresos recurrentes, certificación, conformidad regulatoria, validación independiente, operación continua, interoperabilidad universal, federación, seguridad universal ni recuperación garantizada salvo que cada claim tenga evidencia separada, fechada y revisable.

Las capacidades upstream o fork de `n8n` y `openclaw` no deben presentarse como capacidades propietarias de CASTÚO sin evidencia explícita de integración y divulgación de su estado upstream, de fork, modificaciones locales, licencia y versión.

## Requisitos de un claim

Todo claim público promovido requiere, como mínimo:

| Requisito | Contenido exigido |
|---|---|
| Alcance | Repositorio, componente, frontera de tenant/nodo y periodo declarado |
| Commit | Commit fuente exacto o identificador de artefacto inmutable |
| Entorno | Local, CI, staging, piloto u otro entorno declarado |
| Evidencia | Manifiesto, sobre de ejecución, test, informe o resultado enlazado |
| Revisión | Revisión humana nominal o atribuible, con fecha y decisión |
| Gate | Decisión de promoción registrada por la autoridad canónica (`Castuo-system`) que autoriza la redacción |
| Rollback | Ruta de revocación, corrección o retirada |

Un `PASS` de conformance local no equivale a conformance remoto, ejecución de staging, evidencia de producción ni evidencia comercial.

## Límite de identidad visual

El logotipo de CASTÚO-SYSTEM y los demás activos de marca aprobados son superficies de identidad únicamente. Identifican el ecosistema y su documentación; no prueban producción, certificación, adopción de clientes, ingresos, cumplimiento legal, preparación operativa, madurez de seguridad, ejecución de staging ni federación. Los activos de marca deben versionarse mediante `assets/brand/brand-manifest.yaml`, verificarse con `assets/brand/checksums.sha256` y revisarse de forma independiente de cualquier gate de promoción.

## Vocabulario de estado público

El perfil público usa únicamente el vocabulario gobernado definido por la autoridad canónica (`Castuo-system`):

`DOCUMENTED → IMPLEMENTED → TESTED → VALIDATED → OPERATIONAL → REPEATABLE → FEDERATED`

y el vocabulario de promoción:

`CANDIDATE → CONFORMANCE → TEST → SECURITY → EVIDENCE → STAGING_EXECUTION → REVIEW → GREEN-STAGING`

`CURRENT`, `TARGET`, `EXPERIMENTAL`, `PENDING` y `NOT_CLAIMED` son etiquetas de presentación asociadas a esos estados gobernados; no son una taxonomía paralela.

## Próxima promoción

Ruta de promoción histórica registrada el 2026-08-16 (su punto de partida es un resultado local histórico, no el estado actual):

```text
14/14 PASS LOCAL
→ PR REVIEW / MERGE
→ REMOTE CONFORMANCE
→ SECURITY BASELINE
→ VERTICAL SLICE
→ EVIDENCE PASSPORT
→ REPLAY / REPRODUCTION
→ HUMAN REVIEW
→ GREEN-STAGING
```

Estado público actual de promoción (véase el README del perfil, Estado público actual, 2026-10-02):

```text
CONSOLIDATION-1.0 = BLOCKED
```

## Límite de gobernanza consciente de la jurisdicción

El perfil público puede describir la gobernanza de IA consciente de la jurisdicción como una arquitectura `TARGET` con contratos sujetos a evidencia, perfiles de política, fronteras de datos y gates de promoción.

El perfil no debe afirmar cumplimiento legal global, cumplimiento automático con la UE, China, Japón, Corea ni ninguna otra jurisdicción, transferencias internacionales autorizadas, operación local en una jurisdicción, certificación ni asesoramiento jurídico sin alcance específico de la jurisdicción, fuente normativa versionada, evidencia y revisión competente.

La redacción pública se mantiene:

```text
jurisdiction-aware governance: TARGET
jurisdiction legal compliance: NOT_CLAIMED
cross-border execution: NOT_CLAIMED
```

## Límite legal, de confidencialidad y publicación

La documentación pública debe contener únicamente información autorizada para publicación. Los secretos, credenciales, tokens de acceso, endpoints privados, rutas internas del sistema de archivos, datos personales no necesarios para el perfil público, evidencia operativa no verificada y datos protegidos de clientes o pilotos deben permanecer fuera de los repositorios públicos.

Este límite es un control de gobernanza, no asesoramiento jurídico ni certificación de cumplimiento normativo. Las conclusiones jurídicas jurisdiccionales requieren revisión humana competente y una fuente, versión, alcance y fecha declarados. La redacción pública debe usar `NOT_CLAIMED` cuando falte cualquiera de esas condiciones.

Un resumen público de transferencia documental puede describir el alcance autorizado, el índice canónico, los enlaces de procedencia, el estado de revisión y los bloqueadores de promoción. No debe implicar que una transferencia, publicación, commit, pull request o check local constituya evidencia operativa, producción, certificación, tracción de clientes, ingresos, operación continua o cumplimiento legal.

Antes de publicar, cada cambio debe pasar una revisión de confidencialidad y preservar la distinción:

```text
Identidad != Documentación != Evidencia != Ejecución != Revisión != Promoción
```
