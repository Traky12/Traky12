# CASTÚO-SYSTEM — detalle del estado público

Detalle del estado y del contexto histórico del README del perfil. Actualizado el 2026-10-11; el README del perfil contiene el resumen público y este documento conserva el estado de apoyo y el registro histórico.

## Puerta actual de publicación y validación — 2026-10-11

- **GitHub:** existe [`v0.1.3`](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3) como prerelease alfa pública, publicada el 2026-10-10. La release no tiene assets adjuntos manualmente. Es distinto de una release aprobada y publicada de forma coherente en todos los registros.
- **PyPI:** el [run de publicación existente](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766020) aporta la evidencia decisiva: pasaron la comprobación de versión, los tests, el build de sdist/wheel y el smoke test en venv limpio, pero el job de publicación falló en el intercambio OIDC con `invalid-publisher` porque no había un Trusted Publisher coincidente. La auditoría operativa adjunta también informa HTTP 404 de PyPI. Registrar un pending publisher para proyecto `e3bundle`, owner `Traky12`, repo `castuo-e3-001`, workflow `publish-pypi.yml`, entorno `pypi`, y luego repetir el job fallido. El perfil mantiene la vía probada de instalación desde el tag GitHub y no anuncia `pip install e3bundle==0.1.3` hasta que el paquete sea público.
- **GHCR:** el PR fusionado #67 registra como publicada la imagen `ghcr.io/traky12/e3bundle:0.1.3`. Esta actualización no consultó de forma independiente el manifiesto en vivo; la disponibilidad actual está respaldada por la evidencia de esa operación, no por una nueva comprobación de este turno.
- **Aviso de seguridad:** las notas de la release de GitHub dicen que `v0.1.3` corrige `GHSA-55pc-7v4h-jf7c`. No se ha verificado de forma independiente el campo real de versión corregida del aviso; no se debe afirmar públicamente que el registro marca `0.1.3` como corregida hasta consultar ese registro.
- **Demo de navegador:** el perfil y el README del repositorio describen la demo pública como basada en los bundles de ejemplo de `v0.1.1`. El workflow de Pages prueba una candidata `v0.1.3` fijada por commit, pero los tests de una candidata no demuestran que la URL pública la esté sirviendo.
- **Gate de Pages:** [el workflow](https://github.com/Traky12/castuo-e3-001/blob/main/.github/workflows/pages.yml) exige una release GitHub `v0.1.3`, PyPI `0.1.3`, imagen GHCR `0.1.3`, checks de compilación/UI y campos legales configurados por el titular antes del despliegue. La inspección del código confirma la lógica del gate, no que la última ejecución haya pasado ni que el despliegue haya terminado.
- **Inconsistencia documental:** el README del tag `v0.1.3` aún dice que no hay una release `v0.1.3` aprobada y que no se declara la disponibilidad en PyPI. Resolver esa contradicción forma parte del cierre de publicación.
- **CI del núcleo privado:** los fallos de asignación de runner sin evidencia de pasos ejecutados siguen siendo un bloqueo separado. Su causa raíz no está establecida y esos resultados no son resultados de tests de código.
- **OVS-01 y reproducción independiente:** siguen en `PENDING`; no se promociona ningún resultado operativo de extremo a extremo ni independiente.

No se deben fusionar claims de instalación general de `v0.1.3` hasta que se pueda recuperar la release de PyPI, el registro GHSA marque realmente `0.1.3` como corregida, se compruebe la imagen GHCR y se verifique que el sitio público de Pages sirve la candidata correspondiente tras una ejecución de despliegue satisfactoria.

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
- **Historial de versiones de e3bundle.** `v0.1.2` fue una candidata nunca publicada; `v0.1.3` (corrección de GHSA-55pc-7v4h-jf7c) está publicada en GitHub Releases y GHCR, con PyPI pendiente.
