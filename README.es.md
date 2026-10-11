# Gregorio Julián Jiménez Bodes · Traky12

<p align="center">
  <img src="assets/brand/profile-header.svg" alt="Ingeniería de sistemas basada en evidencia: trazabilidad, funcionamiento offline-first y aseguramiento" width="100%" />
</p>

<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="Logotipo oficial de CASTÚO-SYSTEM" width="220" />
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
</p>

> **Ningún claim sin procedencia. Ningún claim externo sin evidencia reproducible.**

---

## Herramienta destacada · e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** es una herramienta CLI de Python con licencia MIT para crear, firmar y verificar paquetes de evidencia portables sin conexión. Genera manifiestos SHA-256 y verifica firmas Ed25519 conforme a reglas de confianza configuradas explícitamente.

<p align="center">
  <img src="assets/brand/e3bundle-flow.svg" alt="Flujo e3bundle: archivos de entrada, manifiesto SHA-256, firmas Ed25519, verificación offline y resultado legible por máquina PASS, FAIL o ERROR" width="100%" />
</p>

**Qué permite**
- Detectar archivos modificados, ausentes o añadidos respecto al manifiesto.
- Comprobar firmas usando las claves públicas y la política de confianza proporcionadas por el operador.
- Producir un resultado de verificación delimitado, utilizable en scripts y revisiones.

### Probar desde el tag fijado de GitHub

```bash
git clone --branch v0.1.3 --depth 1 https://github.com/Traky12/castuo-e3-001
cd castuo-e3-001
python -m pip install .
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Esperado para el ejemplo sintético incluido: VERIFIED, código de salida 0
```

El ejemplo utiliza datos sintéticos. El comando demuestra el comportamiento definido de la herramienta; no valida de forma independiente CASTÚO-SYSTEM ni la veracidad de los datos subyacentes.

## Estado público actual

| Área | Estado actual |
|---|---|
| Release de GitHub | Prerelease alfa `v0.1.3` disponible |
| PyPI | **Pendiente** — la publicación quedó bloqueada por una discrepancia de configuración Trusted Publisher / OIDC |
| Imagen GHCR | La publicación figura en el estado del proyecto; la disponibilidad actual del registro no se ha vuelto a comprobar de forma independiente en esta actualización del perfil |
| Demo del navegador | La página pública continúa usando paquetes de ejemplo `v0.1.1` |
| Reproducción independiente (E3-001) | `PENDIENTE` — 0 de 2 revisiones externas firmadas |
| Consolidación de CASTÚO-SYSTEM | **BLOCKED** — permanecen abiertos gates de ingeniería, seguridad y evidencia operativa |

**`CONSOLIDATION-1.0 = BLOCKED`.** `Traky12` es el read-model público: informa del estado, pero no decide el estado técnico ni la promoción. `Castuo-system` es la autoridad privada canónica del estado técnico y de las decisiones de promoción; `castuo-evolution` es un espacio no canónico. Consulta el [estado público y el historial](docs/PROFILE-STATUS-DETAIL.es.md) para ver los bloqueos de publicación, las limitaciones y los enlaces de procedencia. Los estados se mantienen separados deliberadamente: una prerelease de GitHub no equivale a publicación en PyPI, demo pública actualizada, reproducción externa ni aprobación para producción.

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
  <a href="https://castuo-system.es/">CASTÚO-SYSTEM</a> ·
  <a href="https://orcid.org/0009-0007-3489-0565">ORCID</a> ·
  <a href="README.md">English version</a>
</p>

<p align="center">
  <sub>`Traky12` es la vista pública de estado. La autoridad técnica canónica y las decisiones de promoción permanecen en el repositorio privado `Castuo-system`.</sub>
</p>
