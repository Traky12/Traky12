# CASTÚO-SYSTEM — detalle del estado público

Detalle del estado y del contexto histórico del README del perfil. Revisión documental actualizada el 2026-10-13. La verificación completa de los gates de publicación documentada abajo sigue fechada el 2026-10-11; este cambio reconcilia documentación y no constituye una nueva ejecución del workflow. El README del perfil contiene el resumen público y este documento conserva el estado de apoyo y el registro histórico.

## Reconciliación documental — 2026-10-13

La fecha de revisión y la fecha del gate técnico se mantienen separadas deliberadamente. El último resultado completo del gate documentado aquí es la [ejecución 38137298070](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070); este cambio no afirma que el gate se haya vuelto a ejecutar.

- Pasaron el build y las pruebas de interfaz Chromium, Firefox y WebKit de esa ejecución. También pasó el requisito de identidad legal. El paso del gate de publicación registró `release=true, pypi=false, ghcr=true, advisory=false`, y el job `deploy` quedó omitido. Que el job termine correctamente significa que la lógica del gate se ejecutó, no que se cumplieran todos los requisitos de publicación.
- El estado público de E3-001 sigue en `Independent foreign replay: PENDING`, `Runner attestation: PENDING`, `Signed human review: PENDING · quorum 0/2`, `G2: REVIEW_REQUIRED`, `staging-rls handoff: BLOCKED` y `Promotion: BLOCKED` ([estado público canónico](https://github.com/Traky12/castuo-e3-001/blob/main/STATUS.md)). La solicitud de segundo operador para CP-3 continúa abierta y pendiente ([issue #86](https://github.com/Traky12/castuo-e3-001/issues/86)).
- La convocatoria de cinco testers sigue pausada mientras no se resuelvan los gates de PyPI, aviso y Pages ([issue #30](https://github.com/Traky12/castuo-e3-001/issues/30)). Sus instrucciones históricas de CLI corresponden a `v0.1.1` y no se deben contabilizar como reproducción de `v0.1.3`.
- La discrepancia entre el README de la etiqueta inmutable `v0.1.3` y el texto de publicación de la rama por defecto se sigue por separado en el [issue #87](https://github.com/Traky12/castuo-e3-001/issues/87). No reescribir la etiqueta antigua ni inferir disponibilidad multi-registro a partir de una release de GitHub o una imagen GHCR.

Esta actualización documental no presupone un nuevo informe de tester externo, una firma independiente, un replay de OVS-01, publicación en PyPI, confirmación del aviso ni despliegue de Pages.

## Puerta actual de publicación y validación — 2026-10-11

- **GitHub:** existe [`v0.1.3`](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3) como prerelease alfa pública, publicada el 2026-10-10. La release no tiene assets adjuntos manualmente. Es distinto de una release aprobada y publicada de forma coherente en todos los registros.
- **PyPI:** el [run de publicación de la release](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766020) falló en el intercambio OIDC con `invalid-publisher`. El [gate de Pages posterior a la fusión](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) confirmó de forma independiente HTTP 404 para `e3bundle 0.1.3` en PyPI. El [runbook](https://github.com/Traky12/castuo-e3-001/blob/main/docs/PYPI-RELEASE-RUNBOOK.es.md) registra los claims OIDC inmutables como hipótesis de compatibilidad, no como causa raíz confirmada. Comparar la fila persistida del Trusted Publisher con los claims no secretos; si coincide, detener los reintentos OIDC repetidos y escalar con el enlace del run y evidencia no secreta. No afirmar disponibilidad en PyPI hasta poder recuperar e instalar el paquete desde el índice público.
- **GHCR:** el [workflow de contenedor](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766046) pasó e informa de la publicación de la imagen multi-arquitectura `ghcr.io/traky12/e3bundle:0.1.3`, con SBOM y procedencia de build. El [gate en vivo posterior a la fusión](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) también verificó que el manifiesto `0.1.3` está disponible actualmente. El digest documentado es `sha256:0b491cf8e37247f4b71089b891ad6d77081398f64c02fc46d88a69818500f994`. Esto demuestra disponibilidad del artefacto de contenedor, no revisión independiente ni autorización de producción.
- **Aviso de seguridad:** las notas de la release dicen que `v0.1.3` corrige `GHSA-55pc-7v4h-jf7c`, pero la consulta anónima del [gate posterior a la fusión](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) devolvió HTTP 404. Por tanto, los metadatos públicos del aviso no confirman actualmente que `0.1.3` sea la primera versión corregida. Mantener el gate bloqueado y no repetir el texto de las notas como claim público de versión corregida hasta que el aviso esté publicado y lo confirme.
- **Demo de navegador y testers externos:** la demo pública sigue usando bundles sintéticos de ejemplo `v0.1.1`. El issue de testers/reproducción [#30 está explícitamente pausado](https://github.com/Traky12/castuo-e3-001/issues/30) hasta que pasen la publicación en PyPI, los metadatos de versión corregida del aviso público y el despliegue de Pages. No presentarlo como una convocatoria de testers activa ni contar instrucciones históricas de `v0.1.1` como reproducciones de `v0.1.3`.
- **Gate de Pages:** el [workflow](https://github.com/Traky12/castuo-e3-001/blob/main/.github/workflows/pages.yml) comprueba ahora de forma independiente la release de GitHub, la distribución PyPI, el manifiesto GHCR en vivo, los metadatos públicos de versión corregida del aviso, los tests de build/UI y los campos legales configurados por el titular antes del despliegue. El [último resultado post-fusión](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) es `release=true, pypi=false, ghcr=true, advisory=false`; el despliegue sigue bloqueado. El requisito de identidad legal estaba configurado y pasó en esa ejecución.
- **Inconsistencia documental:** el README del tag `v0.1.3` aún dice que no hay una release `v0.1.3` aprobada, mientras que el README actual del repositorio documenta el tag únicamente para pruebas alfa delimitadas. Es una discrepancia específica del tag: no se debe presentar silenciosamente ninguna de las dos versiones como aprobación multi-registro o de producción. Reconciliarla en un cambio posterior de documentación/release antes de promocionar la vía de instalación en el perfil.
- **CI del núcleo privado:** los fallos de asignación de runner sin evidencia de pasos ejecutados siguen siendo un bloqueo separado. Su causa raíz no está establecida y esos resultados no son resultados de tests de código.
- **OVS-01 y reproducción independiente:** siguen en `PENDING`; no se promociona ningún resultado operativo de extremo a extremo ni independiente.

No se deben promocionar claims de instalación general o de preparación para producción de `v0.1.3` hasta que el paquete de PyPI sea recuperable, el registro GHSA marque `0.1.3` como corregida, la imagen GHCR se compruebe desde el registro en vivo, se resuelva la discrepancia documental del tag y se verifique que Pages sirve la candidata correspondiente tras un despliegue satisfactorio.

## Foco técnico actual

**OVS-01 — CASTUO-SYSTEM Edge Continuity**

**Estado:** `PENDING`

**Alcance:** escenario controlado de ingeniería para identidad de eventos, persistencia offline, recuperación, sincronización, evidencia y replay.

**Límite:** definido pero no ejecutado formalmente. No se promociona ningún claim de producción, operación real CTAEX, validación independiente, certificación ni validación comercial.

`PROMOTION-BLOCKED` sigue siendo el estado por defecto hasta que exista la evidencia requerida y la revisión humana correspondiente.

## Estado de promoción actual

| Área | Estado base (2026-10-05) | Significado |
|---|---|---|
| Consolidación técnica | `IN PROGRESS` | Continúa el trabajo de arquitectura, seguridad y gobernanza |
| Consolidation-1.0 | `BLOCKED` | Siguen abiertos gates de evidencia de ingeniería y de operación |
| Ejecución en staging | `PENDING` | Requiere un despliegue delimitado y reproducible |
| Identidad y autorización | `PENDING` | Requiere evidencia de OIDC, organización y roles |
| Vertical Slice operativo | `PENDING` | OVS-01 está definido como objetivo de validación controlada; no se promociona ninguna operación de extremo a extremo |
| Reproducción independiente | `PENDING` | No se ha demostrado la reproducción por un tercero sin asistencia síncrona |
| Revisión por tercero | `PENDING` | No se declara ninguna revisión independiente completada |
| Validación de mercado | `NOT CLAIMED` | Sin claims de adopción comercial, contratos ni ingresos recurrentes |

**Disciplina de claims:** una capacidad no es evidencia; la evidencia no es madurez; la madurez no es un claim; y un claim no es ventaja competitiva (`CAPABILITY ≠ EVIDENCE ≠ MATURITY ≠ CLAIM`).

## Modelo público de autoridad y evidencia

| Plano | Función | Autoridad |
|---|---|---|
| Autoridad técnica interna | Capacidades del núcleo, contratos, estado técnico actual, decisiones de gobernanza, claims, gates y decisiones de promoción | `Castuo-system` |
| Espacio de evolución y gobernanza | Material de gobernanza histórico, preparado y en curso | `castuo-evolution` — no canónico |
| Superficies públicas de evidencia | Unidades de evidencia seleccionadas, manifiestos, protocolos y artefactos de reproducibilidad delimitados | `castuo-evidence` / `castuo-e3-001` |
| Superficies de aseguramiento y recuperación | Herramientas de pruebas, aseguramiento, recuperación y soporte de seguridad | `Cast-o` / `goldfish` |
| Validación externa | Reproducción independiente, evidencia de campo y evidencia económica | Revisores externos, responsables de pilotos u otras fuentes independientes |
| Read-model público | Representación pública, mapa de repositorios, índice de evidencia y límites de claims | `Traky12` |

Este perfil no sustituye la autoridad de cada repositorio. Las instrucciones de compilación, despliegue, seguridad y operación siguen siendo las de cada repositorio y de la documentación técnica canónica. Este perfil solo ofrece una representación pública y un índice de evidencia.

## Aviso económico y jurídico

Los activos técnicos, la arquitectura, el código, los escenarios de planificación, la documentación y la actividad de los repositorios no son caja, valor contable, financiación, ingresos, contratos, resultados de clientes ni validación de mercado.

La actividad de los repositorios demuestra desarrollo en curso; por sí sola no demuestra adopción de usuarios, valor para el cliente, tracción de mercado, validación comercial ni ingresos recurrentes.

El libro oficial PIE PLUS sigue siendo la referencia para cifras financieras, supuestos y escenarios de planificación empresarial.

Cualquier valoración de activos técnicos, valoración de aportación o escenario económico corresponde a un memorando de valoración fechado o a un informe técnico-económico, no a este perfil público, salvo que se aprueben expresamente su metodología y su alcance de publicación.

La documentación de CASTÚO-SYSTEM describe arquitectura técnica, evidencia de ingeniería, controles internos y trabajo en curso. No constituye asesoramiento jurídico, certificación regulatoria, evaluación de conformidad, asesoramiento de inversión, valoración contable ni garantía de rendimiento comercial.

## Registro histórico de ingeniería

Los registros de ingeniería anteriores, snapshots de validación local, iteraciones de dashboards, inventarios de repositorios y ledgers de commits de agosto de 2026 se conservan para trazabilidad histórica en el historial del repositorio. Esto incluye el baseline documental EvOS v13.0 del 2026-08-15 y el registro de ingeniería gobernado del 2026-08-18, con su ledger histórico de 91 entradas:

- [Registro de ingeniería del 2026-08-18 (README del perfil en el commit `860a20e`)](https://github.com/Traky12/Traky12/blob/860a20ecee74af90191fb25cd72327bf5739528c/README.md)

Esos registros describen estados delimitados capturados durante agosto de 2026. No prevalecen sobre el estado público actual fechado el 2026-10-11 y no constituyen evidencia actual de producción, operativa, independiente, de campo, comercial ni de mercado. Un commit registra historia del repositorio; por sí solo no es evidencia de campo, de despliegue, de aseguramiento de seguridad ni comercial.

El activo oficial de marca está versionado en `assets/brand/castuo-system-logo-horizontal.jpg`. La coherencia de marca es solo metadato de presentación y no constituye evidencia técnica, de seguridad, de producción ni comercial.

## Trasladado desde el README del perfil (2026-10-11)

El README del perfil se ha acortado a una portada (probar, estado, contribuir, límites). Estos pasajes se trasladan aquí sin cambios de fondo:

- **Límite de CI del núcleo privado.** Los workflows obligatorios del núcleo privado no han ejecutado pasos; GitHub informa de que los jobs no se iniciaron. Esas observaciones se clasifican como `BLOCKED / NOT EXECUTED`; no prueban que los tests hayan pasado ni fallado. Los cambios sensibles a seguridad no se aprueban para integración hasta que los checks requeridos se ejecuten y pasen sobre sus commits actuales.
- **Foco de validación — OVS-01: CASTUO-SYSTEM Edge Continuity** (identidad de eventos, persistencia sin conexión, recuperación tras reinicio, sincronización, evidencia y replay): sigue en `PENDING`.
- **Exploración de diseño — trazabilidad de bioinsumos.** Modelo de evidencia agnóstico al producto que conecta un lote de bioinsumo declarado, las condiciones de aplicación y observaciones posteriores del cultivo. Solo propuesta de diseño: no es una capacidad implementada, ensayo de campo, resultado de eficacia, certificación ni colaboración con fabricantes. [Alcance, límites científicos y de privacidad](BIOINPUT-TRACEABILITY.md).
- **Historial de versiones de e3bundle.** `v0.1.2` fue una candidata nunca publicada; la prerelease alfa `v0.1.3` está publicada en GitHub Releases, el estado del proyecto registra una publicación en GHCR que no se ha vuelto a comprobar aquí, y PyPI sigue pendiente.
