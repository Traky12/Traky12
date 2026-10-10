<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="Logotipo oficial de CASTÚO-SYSTEM" width="520" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

**Arquitecto de sistemas · Ingeniero de evidencia · Gobernanza y aseguramiento de IA**  
Fundador y arquitecto principal de CASTÚO-SYSTEM™

Construyo infraestructura digital basada en evidencia para operaciones trazables, offline-first y revisables.

> **NINGÚN CLAIM SIN PROCEDENCIA. NINGÚN CLAIM EXTERNO SIN EVIDENCIA REPRODUCIBLE.**

## Empieza aquí: e3bundle

**[e3bundle — verificar paquetes de evidencia sin conexión](https://github.com/Traky12/castuo-e3-001)** es una herramienta CLI de Python, con licencia MIT, para comprobar la integridad de los archivos y las firmas de un paquete de evidencia.

Genera un manifiesto con huellas SHA-256, admite firmas Ed25519 e informa de los resultados en JSON con códigos de salida significativos. La verificación se realiza localmente: tras instalar la herramienta no necesita un servicio alojado, una cuenta ni conexión de red.

- **Integridad:** detecta archivos declarados que han cambiado, faltan o no estaban declarados.
- **Firmas:** verifica firmas Ed25519 sobre el manifiesto declarado. Para usos sensibles a seguridad, especifica claves públicas de confianza y un umbral de firmas positivo.
- **Automatización:** incluye una GitHub Action reutilizable para CI.
- **Demo:** [prueba el verificador en el navegador](https://traky12.github.io/castuo-e3-001/). Usa WebCrypto y datos de ejemplo; los ficheros seleccionados permanecen en el navegador. La demo publicada muestra actualmente los ejemplos de `v0.1.1`.

### Inicio rápido

La instalación necesita conexión a Internet. Después, los comandos de verificación se ejecutan localmente.

```bash
git clone --branch v0.1.1 --depth 1 https://github.com/Traky12/castuo-e3-001
cd castuo-e3-001
python -m pip install .

e3bundle verify examples/bundles/valid \
  --min-signatures 2 \
  --trusted-keys examples/bundles/trusted-keys.json
# Esperado: VERIFIED, salida 0

e3bundle verify examples/bundles/tampered \
  --min-signatures 2 \
  --trusted-keys examples/bundles/trusted-keys.json
# Esperado: FAILED, salida 1
```

Los comandos clonan el código fijado en `v0.1.1` y lo instalan desde esa copia. La instalación puede descargar dependencias; la verificación se ejecuta localmente. Consulta el [README del repositorio](https://github.com/Traky12/castuo-e3-001#readme) para más detalles.

**Límite:** una verificación correcta establece que el contenido de los archivos declarados coincide con sus huellas y que las firmas examinadas son válidas según las reglas de confianza configuradas. No demuestra que las afirmaciones originales sean verdaderas, que un firmante sea quien dice ser sin fijar su clave de forma independiente ni que un sistema esté certificado o autorizado para producción.

### Estado de publicación — 2026-10-10

- Última versión publicada: **[`v0.1.1` alfa](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.1)**.
- `v0.1.2` sigue siendo una candidata sin publicar; no se afirma la existencia de releases `v0.1.2` ni `v0.1.3`.
- La puerta de publicación de GitHub Pages sigue cerrada hasta disponer de una versión corregida y aprobada, de los artefactos coincidentes de GitHub, PyPI y GHCR, y de la configuración legal requerida.
- No fijes la rama móvil `main` como si fuera una versión publicada ni trates la candidata actual como revisada para uso en producción con requisitos de seguridad.

## CASTÚO-SYSTEM — estado público

**Snapshot:** 2026-10-10  
**Estado técnico:** consolidación en curso  
**Estado de promoción:** `CONSOLIDATION-1.0 = BLOCKED`

CASTÚO-SYSTEM es un activo tecnológico modular en consolidación para operaciones distribuidas trazables y gobernadas. **CASTÚO Evidence-Ready Field Operations** es una dirección de producto y un objetivo de validación, no un producto comercial demostrado.

**Foco de validación — OVS-01: CASTUO-SYSTEM Edge Continuity.** El escenario definido comprende identidad de eventos, persistencia sin conexión, recuperación tras reinicio, sincronización, evidencia y replay. Sigue en estado `PENDING`: no se ha establecido su ejecución formal de extremo a extremo ni una reproducción independiente.

**Límite de CI del núcleo privado.** Se han observado fallos de asignación de runner sin evidencia de pasos ejecutados en workflows obligatorios. La causa no está establecida. Esas observaciones se clasifican como `BLOCKED / NOT EXECUTED`; no prueban que los tests hayan pasado ni que hayan fallado. Los cambios sensibles a seguridad no se aprueban para integración hasta que los checks requeridos se ejecuten y pasen sobre sus commits actuales.

No se declaran operación en producción, validación de campo o independiente, certificación ni conformidad regulatoria, tracción de clientes de pago, ingresos recurrentes, autonomía de IA en producción, autoridad autónoma ni despliegue industrial multisede.

Estado detallado, tabla de promoción, modelo de autoridad, aviso económico e historial: [`docs/PROFILE-STATUS-DETAIL.es.md`](docs/PROFILE-STATUS-DETAIL.es.md).

## Exploración de diseño — trazabilidad de bioinsumos

CASTÚO-SYSTEM explora un modelo de evidencia agnóstico al producto que conecte un bioinsumo y lote declarados, las condiciones de aplicación y las observaciones posteriores medidas en el cultivo.

Es una **propuesta de diseño**, no una capacidad implementada, ensayo de campo, resultado de eficacia, certificación ni colaboración con fabricantes. Cualquier conjunto de datos real requiere un protocolo científico definido, evidencia específica del producto, controles de privacidad y revisión jurídica/regulatoria.

[Leer el alcance bilingüe, los límites científicos y los límites de privacidad](docs/BIOINPUT-TRACEABILITY.md).

## Repositorios públicos

| Repositorio | Función pública y límite |
|---|---|
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | CLI `e3bundle` y protocolo delimitado de reproducción E3-001 (MIT) |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Experimentos de runtime edge/IoT offline-first: buffering, sincronización y continuidad de telemetría; no se promocionan claims de campo o producción |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Experimentos delimitados de flujo offline, recuperación y exportación de evidencia (Apache-2.0) |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Unidades de evidencia pública, manifiestos y artefactos de reproducibilidad delimitados |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | Herramientas de pruebas y aseguramiento; licencia pendiente de revisión de propiedad intelectual |

Repositorios privados, forks y funciones: [`docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md).

## Límites de autoridad y evidencia

- **`Castuo-system` (privado)** es la autoridad canónica del estado técnico actual y de las decisiones de gobernanza y promoción.
- **`castuo-evidence` y `castuo-e3-001`** publican evidencia, protocolos y herramientas seleccionados dentro de su alcance; no deciden el estado del sistema ni su promoción.
- **`castuo-evolution` (privado)** es un espacio no canónico de evolución, no una fuente de verdad para el estado actual.
- **`Traky12`** es el read-model público y el índice de evidencia. No determina el estado técnico, los resultados de gobernanza ni la promoción.

Un README o un manifiesto no es un registro de despliegue. Un resultado de test no equivale a una reproducción independiente. Una huella demuestra la integridad de una representación, no la verdad de su contenido.

Límite completo: [`PUBLIC_CLAIM_BOUNDARY.es.md`](PUBLIC_CLAIM_BOUNDARY.es.md) · Índice de evidencia: [`evidence-center/README.md`](evidence-center/README.md).

## Enlaces

- [Web de CASTÚO-SYSTEM](https://castuo-system.es/)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [Política de seguridad](SECURITY.md)
- [Contribuir](CONTRIBUTING.md)
- [Presentación del proyecto — 5 minutos](CASTUO-SYSTEM-5-MIN-PRESENTATION-ES.md)
- [English version](README.md)

## No se declara

Este perfil no declara operación en producción, validación independiente o de campo, certificación ni conformidad regulatoria, tracción de clientes de pago, ingresos recurrentes, autonomía de IA en producción, autoridad autónoma ni despliegue industrial multisede.

> El objetivo no es que el sistema parezca seguro de sí mismo. El objetivo es que los claims delimitados, la evidencia y las limitaciones sean inspeccionables.
