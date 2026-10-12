# Gregorio Julián Jiménez Bodes · Traky12

<p align="center">
  <img src="assets/brand/profile-header.svg" alt="Ingeniería de sistemas basada en evidencia: trazabilidad, funcionamiento offline-first y aseguramiento" width="100%" />
</p>

<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-header.png" alt="Imagen de marca CASTÚO-SYSTEM" width="100%" />
</p>
<!-- CASTUO:BRAND:END -->

<p align="center">
  <strong>Arquitecto de sistemas · Ingeniero de evidencia · Gobernanza y aseguramiento de IA</strong><br />
  Fundador y arquitecto principal de CASTÚO-SYSTEM™
</p>

<p align="center">
  Diseño infraestructura basada en evidencia para operaciones trazables, resilientes sin conexión y revisables de forma independiente.
</p>

<p align="center">
  <a href="https://traky12.github.io/castuo-e3-001/"><img src="https://img.shields.io/badge/PROBAR_LA_DEMO-Ejemplos_v0.1.1-167D78?style=for-the-badge" alt="Probar la demo del navegador con ejemplos v0.1.1" /></a>
  <a href="https://github.com/Traky12/castuo-e3-001"><img src="https://img.shields.io/badge/EXPLORAR-e3bundle-183346?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Explorar el código de e3bundle" /></a>
  <a href="https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue"><img src="https://img.shields.io/badge/CONTRIBUIR-Empieza_aqui-BB6B3D?style=for-the-badge" alt="Ver issues adecuados para empezar a contribuir" /></a>
  <a href="https://discord.gg/tgxmnmPPD"><img src="https://img.shields.io/badge/UNIRSE_A_LA_COMUNIDAD-Discord-5865F2?style=for-the-badge&amp;logo=discord&amp;logoColor=white" alt="Unirse a la comunidad de CASTÚO en Discord" /></a>
</p>

> **Ningún claim sin procedencia. Ningún claim externo sin evidencia reproducible.**

---

## Herramienta destacada · e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** es una herramienta CLI de Python con licencia MIT para crear, firmar y verificar paquetes de evidencia portables sin conexión. Genera manifiestos SHA-256 y verifica firmas Ed25519 conforme a reglas de confianza configuradas explícitamente.

<p align="center">
  <img src="assets/brand/e3bundle-flow.svg" alt="Flujo e3bundle: archivos de entrada, manifiesto SHA-256, firmas Ed25519, verificación offline y resultado legible por máquina VERIFIED, FAILED o ERROR" width="100%" />
</p>

**Qué permite**
- Detectar archivos modificados, ausentes o añadidos respecto al manifiesto.
- Comprobar firmas usando las claves públicas y la política de confianza proporcionadas por el operador.
- Producir un resultado de verificación delimitado, utilizable en scripts y revisiones.

### Gate de publicación y revisión del código

La prerelease alfa `v0.1.3` existe en GitHub. Hay una discrepancia documental: el README incluido en ese tag conserva un estado anterior de la release, mientras que el README actual del repositorio documenta el tag para **pruebas alfa delimitadas**. Hasta reconciliar la documentación del tag, este perfil enlaza al código y a la evidencia de publicación, pero no repite un comando de instalación listo para copiar. No es una recomendación para producción.

- [Instrucciones actuales de release y prueba alfa](https://github.com/Traky12/castuo-e3-001/blob/main/README.md#install)
- [Inspeccionar el código fijado de `v0.1.3`](https://github.com/Traky12/castuo-e3-001/tree/v0.1.3) · [Consultar las notas de la prerelease](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3)
- [Consultar el run fallido de PyPI](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766020) · [Consultar el run satisfactorio de GHCR](https://github.com/Traky12/castuo-e3-001/actions/runs/38088766046)
- [Revisar el gate de publicación y sus bloqueos](docs/PROFILE-STATUS-DETAIL.es.md)
- [Probar la demo de navegador](https://traky12.github.io/castuo-e3-001/) — solo ejemplos sintéticos `v0.1.1`; no valida la release CLI `v0.1.3`.

Los ejemplos sintéticos ilustran el comportamiento definido; no validan de forma independiente CASTÚO-SYSTEM ni demuestran la veracidad de los datos subyacentes.

## Flujo gobernado · el dato sube, la decisión baja, la evidencia se ancla

<p align="center">
  <img src="assets/diagrams/castuo-governed-orchestration.es.svg" alt="Flujo conceptual de CASTÚO-SYSTEM: seis fuentes pasan controles de identidad, procedencia, integridad, permisos y calidad; salidas simuladas atraviesan umbrales de grounding, se abstienen o se convierten en evidencia sintética enlazada con SHA-256. Sin datos en vivo ni claim de producción." width="100%" />
</p>

**Un modelo de gobernanza, dos flujos acotados.**

- **El dato de campo sube:** Seis fuentes conceptuales llegan a la capa coordinadora solo después de los controles de identidad, procedencia, integridad, permisos y calidad.
- **La decisión baja (simulación):** Las salidas atraviesan umbrales ilustrativos `0,18 → 0,36 → 0,52`. Las que no alcanzan un umbral se abstienen y dejan una traza; las elegibles entran en una cola simulada y se convierten en eventos sintéticos anclados con SHA-256. No se ejecuta ninguna acción automatizada.

`Captura → Validación → Normalización → Persistencia → Reglas / IA → Decisión explicable → Evidencia`

> **SIMULATION · SYNTHETIC SOURCES · EXPERIMENTAL · NO PRODUCTION CLAIM**

<sub>Solo ilustración conceptual. GitHub muestra el SVG de forma estática; [abre la versión con movimiento](docs/VECTOR-MOTION.es.md). Las fuentes, partículas, umbrales y la temporización de la cola cada 14 pasos son ilustrativos, no mediciones. No se representan proveedores conectados en vivo, datos catastrales, aprobación humana, validación de campo, acción autónoma ni preparación para producción.</sub>

- [Alcance de la orquestación gobernada y preguntas de evidencia](docs/GOVERNED-ORCHESTRATION.md)
- [Alcance, reproducibilidad y limitaciones del flujo gobernado](docs/GOVERNED-FLOW-SOVEREIGNTY.md)
- [Estado público y gates de evidencia abiertos](docs/PROFILE-STATUS-DETAIL.es.md)

## Estado público actual

> **Última verificación completa de los gates: 2026-10-11.** La prerelease alfa `v0.1.3` de GitHub y su imagen GHCR están verificadas; la publicación coherente en todos los registros continúa **BLOQUEADA**. La publicación en PyPI, los metadatos públicos de versión corregida del aviso y el despliegue de Pages para `v0.1.3` no están desbloqueados. La demo sigue utilizando ejemplos sintéticos `v0.1.1`. La reproducción independiente continúa en pausa.

| Gate | Estado actual | Evidencia |
|---|---|---|
| GitHub / GHCR | Artefactos alfa disponibles; no implica aprobación para producción | [Release](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3) · [Gate de publicación](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) |
| PyPI / aviso / Pages | **BLOQUEADO** — el último gate documentado observó `invalid-publisher` y HTTP 404; la causa raíz no está confirmada | [Runbook de PyPI](https://github.com/Traky12/castuo-e3-001/blob/main/docs/PYPI-RELEASE-RUNBOOK.es.md) · [Gate](https://github.com/Traky12/castuo-e3-001/actions/runs/38137298070/job/114463677768) |
| Demo de navegador | Solo ejemplos sintéticos `v0.1.1`; no valida la CLI `v0.1.3` | [Abrir demo](https://traky12.github.io/castuo-e3-001/) |
| Reproducción independiente (E3-001) | **E3-001 como `PENDIENTE`** — 0 de 2 revisiones externas firmadas; la reproducción sigue en pausa | [Issue #30](https://github.com/Traky12/castuo-e3-001/issues/30) |

**`CONSOLIDATION-1.0 = BLOCKED`.** `Traky12` cumple el papel de read-model público: informa del estado, pero no decide la autoridad técnica ni la promoción. `Castuo-system` sigue siendo la autoridad privada canónica para el estado técnico y la promoción. `castuo-evolution` permanece como espacio no canónico (non-canonical), sin autoridad de promoción. Una prerelease de GitHub o una imagen GHCR no equivalen a una release correcta en PyPI, una demo actualizada, reproducción independiente ni aprobación para producción. Consulta el [estado público y el historial](docs/PROFILE-STATUS-DETAIL.es.md) para ver el detalle y la evidencia de apoyo.

## Trabajo seleccionado

<table>
  <tr>
    <td width="33%" valign="top">
      <strong><a href="https://github.com/Traky12/castuo-evidence">castuo-evidence</a></strong><br />
      Unidades de evidencia pública seleccionadas, manifiestos y artefactos de reproducibilidad.<br /><br />
      <sub>Enfoque: procedencia · revisabilidad</sub>
    </td>
    <td width="33%" valign="top">
      <strong><a href="https://github.com/Traky12/castuo-agro-edge">castuo-agro-edge</a></strong><br />
      Experimentos de runtime edge e IoT offline-first; no se promocionan claims de campo ni de producción.<br /><br />
      <sub>Enfoque: continuidad · sistemas edge</sub>
    </td>
    <td width="33%" valign="top">
      <strong><a href="https://github.com/Traky12/Cast-o">Cast-o</a></strong><br />
      Herramientas de prueba y aseguramiento. La suite es parcialmente ejecutable; el benchmarking aún no está demostrado y la licencia sigue bajo revisión de propiedad intelectual.<br /><br />
      <sub>Enfoque: pruebas · assurance</sub>
    </td>
  </tr>
</table>

[Mapa completo de repositorios](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) · [Límites de claims públicos](PUBLIC_CLAIM_BOUNDARY.es.md) · [Índice de evidencia](evidence-center/README.md)

## Sistemas agro-edge · ámbito de aplicación

<p align="center">
  <img src="assets/brand/agro-edge-concept.svg" alt="Ilustración conceptual que conecta señales de cultivo y sensores con procesamiento edge local y evidencia revisable; no representa un despliegue real" width="100%" />
</p>

<p align="center"><sub>Solo ilustración conceptual. No representa un sistema desplegado, señales de sensores en vivo, una prueba de campo, resultados agronómicos medidos ni validación de producción.</sub></p>

Esta es la línea visual del ámbito agrícola edge explorado en [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge). Representa una arquitectura posible —señales de campo, procesamiento local y decisiones trazables—, no un claim operativo ni de validación en campo.

## Principios de ingeniería

- **Trazabilidad antes que afirmaciones.** Vincular los claims con fuentes inspeccionables y comprobaciones reproducibles.
- **Fail-closed.** La falta de confianza, un estado ambiguo o la ausencia de evidencia no deben convertirse silenciosamente en éxito.
- **Capacidad no equivale a madurez.** `DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL`.

## No se declara

Un manifiesto válido permite comprobar si los archivos coinciden con los hashes registrados. Una firma válida demuestra que esa firma verifica con una clave pública y una política configuradas. Ninguna de las dos cosas demuestra que el contenido sea verdadero ni establece de forma independiente la identidad real del firmante.

No se declaran como alcanzadas la reproducción independiente, la validación de campo o producción, la certificación, la conformidad regulatoria, los clientes de pago, los ingresos recurrentes ni la autonomía de IA en producción.

## Contribuir

Empieza con un cambio acotado y reproducible:
- [Issues adecuados para empezar](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue)
- [Guía de contribución](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md)
- [Política de seguridad](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)

## Enlaces

<p align="center">
  <a href="https://orcid.org/0009-0007-3489-0565">ORCID</a> ·
  <a href="README.md">English version</a>
</p>

<p align="center">
  <sub>`Traky12` es la vista pública de estado. La autoridad técnica canónica y las decisiones de promoción permanecen en el repositorio privado `Castuo-system`.</sub>
</p>
