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
  Diseño sistemas basados en evidencia para operar de forma resiliente sin conexión. Mi trabajo se centra en la procedencia de los datos, la verificación de integridad y límites claros para las decisiones asistidas por IA.
</p>

<p align="center">
  <strong>Ningún claim sin procedencia. Ningún claim externo sin evidencia reproducible.</strong>
</p>

<p align="center">
  <a href="https://traky12.github.io/castuo-e3-001/">Probar la demo <em>(ejemplos sintéticos v0.1.1)</em></a> ·
  <a href="https://github.com/Traky12/castuo-e3-001">Código de e3bundle</a> ·
  <a href="https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue">Contribuir</a> ·
  <a href="https://discord.gg/tgxmnmPPD">Comunidad</a>
</p>

---

## Herramienta destacada · e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** es una herramienta CLI de Python con licencia MIT para crear, firmar y verificar paquetes de evidencia portables sin conexión.

- Registra hashes de archivos en un manifiesto SHA-256 y detecta archivos modificados, ausentes o no declarados.
- Verifica firmas Ed25519 frente a claves públicas de confianza configuradas explícitamente.
- Emite resultados delimitados y legibles por máquina para automatización y revisión.

### Prueba el recorrido de verificación

El repositorio incluye dos paquetes de ejemplo sintéticos y firmados: [válido](https://github.com/Traky12/castuo-e3-001/tree/main/examples/bundles/valid) y [alterado](https://github.com/Traky12/castuo-e3-001/tree/main/examples/bundles/tampered). El ejemplo alterado cambia un valor de `data/readings.csv`.

Después de seguir la configuración de **evaluación acotada del código fuente** descrita en el [README actual de e3bundle](https://github.com/Traky12/castuo-e3-001/blob/main/README.md#install), ejecuta desde la raíz del repositorio:

```console
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json --format text
# Esperado: VERIFIED · salida 0

e3bundle verify examples/bundles/tampered --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json --format text
# Esperado: FAILED · hash mismatch en data/readings.csv · salida 1
```

La CLI `v0.1.3` es una versión **alfa**. Este recorrido sirve para una evaluación acotada, no constituye una recomendación general de instalación para producción. La demo del navegador ejecuta localmente ejemplos sintéticos `v0.1.1`: permite probar la interacción, pero no valida la CLI `v0.1.3`. Una verificación correcta de integridad o firma no demuestra que el contenido sea verdadero.

## Estado público actual

La herramienta pública sigue siendo una **versión alfa**, no un lanzamiento autorizado para producción.

- Reproducción independiente de E3-001: `PENDIENTE` (`PENDING`).
- Las puertas de publicación y despliegue siguen abiertas.
- `CONSOLIDATION-1.0 = BLOCKED`.

`Traky12` es el read-model público, no la autoridad técnica. `Castuo-system` es la autoridad privada canónica para el estado técnico y la promoción. `castuo-evolution` es un espacio de trabajo no canónico.

Consulta la [evidencia fechada, los bloqueos y el historial de workflows](docs/PROFILE-STATUS-DETAIL.es.md). La capacidad actual no debe confundirse con la madurez: `DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL`.

## Sistemas gobernados · cómo se mueve la evidencia

<p align="center">
  <img src="assets/diagrams/castuo-governed-orchestration.es.svg" alt="Flujo gobernado conceptual: las fuentes pasan controles de identidad, procedencia, integridad, permisos y calidad; las salidas simuladas se abstienen o se convierten en evidencia sintética enlazada con SHA-256. Sin datos en vivo ni claim de producción." width="100%" />
</p>

Es una **simulación conceptual**: las fuentes, los umbrales y la temporización de la cola son ilustrativos, no mediciones ni integraciones en vivo. No representa validación de campo, acción autónoma ni preparación para producción. Consulta el [alcance y las preguntas de evidencia](docs/GOVERNED-ORCHESTRATION.md).

Trabajo seleccionado: [castuo-evidence](https://github.com/Traky12/castuo-evidence) · [castuo-agro-edge](https://github.com/Traky12/castuo-agro-edge) (experimentos edge/IoT; no se declara validación de campo) · [Cast-o](https://github.com/Traky12/Cast-o) (herramientas de assurance; el benchmarking no está demostrado y la licencia sigue bajo revisión de propiedad intelectual).

## No se declara

Un resultado `VERIFIED` significa que los archivos declarados coinciden con el manifiesto y se satisface la política de firmas configurada. No demuestra que el contenido sea verdadero ni establece de forma independiente la identidad real del firmante.

No se declaran como alcanzadas la reproducción independiente, la validación de campo o producción, la certificación, la conformidad regulatoria, los clientes de pago, los ingresos recurrentes ni la autonomía de IA en producción. Capacidad no equivale a madurez: `DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ VALIDATED ≠ OPERATIONAL`.

## Contribuir

Empieza con una contribución acotada y reproducible:

- [Issues adecuados para empezar](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue)
- [Guía de contribución](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md)
- [Política de seguridad](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)
- [Mapa completo de repositorios](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) · [Límites de claims públicos](PUBLIC_CLAIM_BOUNDARY.es.md) · [Índice de evidencia](evidence-center/README.md)

## Contacto

Para colaboración técnica, revisión independiente o conversaciones sobre pilotos:

- LinkedIn: [CASTÚO-SYSTEM™](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b8/)
- GitHub: [@Traky12](https://github.com/Traky12)

<p align="center">
  <a href="https://orcid.org/0009-0007-3489-0565">ORCID</a> ·
  <a href="README.md">English version</a>
</p>

<p align="center">
  <sub><code>Traky12</code> es el read-model público. La autoridad técnica canónica y las decisiones de promoción permanecen en el repositorio privado <code>Castuo-system</code>.</sub>
</p>
