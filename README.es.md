<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="CASTÚO-SYSTEM official logo" width="520" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Jiménez Bodes — Traky12

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Fundador y arquitecto principal de CASTÚO-SYSTEM™**

Construyo infraestructura digital basada en evidencia para operaciones trazables, offline-first y revisables.

> `NINGÚN CLAIM SIN PROCEDENCIA` · `NINGÚN CLAIM EXTERNO SIN EVIDENCIA REPRODUCIBLE`

## Proyecto destacado — e3bundle

### [Verificar paquetes de evidencia sin conexión](https://github.com/Traky12/castuo-e3-001)

Una herramienta Python pequeña, con licencia MIT, que registra el SHA-256 de cada fichero de una carpeta, permite firmar ese manifiesto con Ed25519 y lo verifica sin conexión. Los ficheros modificados, ausentes o añadidos y las firmas falsificadas u obsoletas se informan en JSON con un código de salida claro.

- Sin servicio alojado, sin cuenta, sin red.
- Paquetes de ejemplo firmados, `valid` y `tampered`, que se verifican en segundos.
- GitHub Action reutilizable para pipelines de CI.

**[Pruébalo en tu navegador](https://traky12.github.io/castuo-e3-001/)**, sin instalar nada: la demo verifica los paquetes de ejemplo reales de `v0.1.1` con WebCrypto (SHA-256, Ed25519), te deja manipularlos y crea y firma paquetes que el CLI también verifica. La integración continua comprueba que la demo y el CLI dan los mismos resultados.

```bash
python -m pip install "git+https://github.com/Traky12/castuo-e3-001@v0.1.1"
git clone https://github.com/Traky12/castuo-e3-001 && cd castuo-e3-001
e3bundle verify examples/bundles/valid    --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json   # VERIFIED, salida 0
e3bundle verify examples/bundles/tampered --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json   # FAILED, salida 1
```

Una verificación correcta comprueba la integridad de los ficheros y las firmas sobre el manifiesto declarado. No prueba que el contenido sea verdadero, no identifica a los firmantes sin claves fijadas y no es una certificación ni una autorización de producción.

## Estado público actual

**Fecha del snapshot:** 2026-10-05 · **Estado:** consolidación técnica en curso · **Estado de promoción:** `CONSOLIDATION-1.0 = BLOCKED`

CASTÚO-SYSTEM es un activo tecnológico modular en consolidación para operaciones distribuidas trazables y gobernadas. Su primera dirección de producto, **CASTÚO Evidence-Ready Field Operations** (continuidad offline-first, trazabilidad y evidencia revisable para flujos con conectividad irregular), es un objetivo de validación, no un producto comercial demostrado.

No se declaran operación en producción ni validación comercial. La validación independiente y la operativa están pendientes. El próximo hito de validación, **E3-001 — reproducción independiente controlada**, está `PENDING`: el protocolo público permite que un tercero reproduzca un escenario delimitado y no sensible; el material de revisión controlada puede facilitarse en condiciones definidas; el núcleo privado queda fuera del alcance público.

**Actualización — 2026-10-07:** El endurecimiento de autenticación ha avanzado en el repositorio privado canónico; dos remediaciones se fusionaron tras superar los checks obligatorios de CI en Linux. El despliegue, la verificación posterior, la validación operativa, la reproducción independiente y los gates de promoción siguen pendientes. Esta actualización no afirma operación en producción, validación de campo, certificación ni validación comercial.

Estado completo, tabla de promoción, modelo de autoridad, aviso económico y jurídico y registro histórico: [`docs/PROFILE-STATUS-DETAIL.es.md`](docs/PROFILE-STATUS-DETAIL.es.md).

## Repositorios públicos

| Repositorio | Función |
|---|---|
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | `e3bundle` y el protocolo de reproducción E3-001 (MIT) |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Runtime edge e IoT offline-first: buffering local, sincronización y continuidad de telemetría |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Experimentos delimitados de flujo offline, recuperación y exportación de evidencia (Apache-2.0) |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Unidades de evidencia pública seleccionadas, manifiestos y artefactos de reproducibilidad delimitados |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | Herramientas de pruebas y aseguramiento; licencia pendiente de revisión |

Repositorios privados, forks y mapa completo de funciones: [`docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md).

## Límites de autoridad y evidencia

- **`Castuo-system`** (privado) es la autoridad canónica del estado técnico actual, de las decisiones de gobernanza y de las decisiones de promoción.
- **`castuo-evidence`** y **`castuo-e3-001`** exponen evidencia, protocolos y herramientas seleccionados dentro de su alcance declarado; no deciden el estado técnico ni la promoción.
- **`castuo-evolution`** (privado) es un espacio no canónico de evolución y gobernanza. No es una autoridad canónica y no determina el estado de promoción.
- **`Traky12`** es el read-model público: una representación e índice de evidencia. No decide el estado técnico, los resultados de gobernanza ni la promoción.

Límites completos: [`PUBLIC_CLAIM_BOUNDARY.es.md`](PUBLIC_CLAIM_BOUNDARY.es.md) · Evidence Center: [`evidence-center/README.md`](evidence-center/README.md)

## Enlaces

- [Web de CASTÚO-SYSTEM™](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [Política de seguridad](SECURITY.md)
- [Contribuir](CONTRIBUTING.md)
- [English version](README.md)

## No se declara

Este perfil no declara:

- Operación en producción.
- Validación independiente.
- Certificación ni conformidad regulatoria.
- Tracción de clientes de pago ni ingresos recurrentes.
- Validación operativa en campo.
- Autonomía de IA en producción.
- Autoridad autónoma.
- Despliegue industrial multisede.

> El objetivo no es que el sistema parezca seguro de sí mismo. El objetivo es que los claims delimitados, la evidencia y las limitaciones sean inspeccionables.
