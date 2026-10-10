<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="Logotipo oficial de CASTÚO-SYSTEM" width="280" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

**Arquitecto de sistemas · Ingeniero de evidencia · Gobernanza y aseguramiento de IA**  
Fundador y arquitecto principal de CASTÚO-SYSTEM™

Construyo infraestructura basada en evidencia para operaciones trazables, offline-first y revisables.

> **Ningún claim sin procedencia. Ningún claim externo sin evidencia reproducible.**

## Prueba e3bundle

**[e3bundle](https://github.com/Traky12/castuo-e3-001)** es una herramienta CLI de Python con licencia MIT para crear, firmar y verificar paquetes de evidencia sin conexión. Genera manifiestos SHA-256 y comprueba firmas Ed25519 según las reglas de confianza configuradas.

**[Probar la demo — ejemplos v0.1.1](https://traky12.github.io/castuo-e3-001/)** · **[Abrir el repositorio](https://github.com/Traky12/castuo-e3-001)** · **[Contribuir](https://github.com/Traky12/castuo-e3-001/contribute)**

### Instalar la alfa de GitHub

La publicación en PyPI está pendiente. Se puede instalar directamente el tag fijado de GitHub:

```bash
python -m pip install "git+https://github.com/Traky12/castuo-e3-001@v0.1.3"
git clone --branch v0.1.3 --depth 1 https://github.com/Traky12/castuo-e3-001
cd castuo-e3-001
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Esperado: VERIFIED, salida 0
```

**Estado de publicación (11 oct 2026):** la alfa `v0.1.3` está publicada en GitHub Releases y como imagen de contenedor GHCR; PyPI sigue pendiente. La demo del navegador continúa usando ejemplos de `v0.1.1`. Esto no equivale a revisión independiente ni autorización para producción.

## Qué construyo

- Sistemas edge e IoT con funcionamiento offline-first.
- Paquetes de evidencia portables y verificación criptográfica.
- Patrones fail-closed de identidad, acceso y gestión de secretos.
- Gobernanza y aseguramiento de IA para sistemas operativos.

CASTÚO-SYSTEM es la arquitectura más amplia; `e3bundle` es su herramienta pública más concreta.

## Estado público actual

`CONSOLIDATION-1.0 = BLOCKED`. El foco público es `e3bundle`; la reproducción independiente (E3-001) sigue en `PENDING`, con 0 de 2 revisiones externas firmadas. `Traky12` es el read-model público: informa del estado, pero no lo decide. `Castuo-system` (privado) es la autoridad canónica del estado técnico y de la promoción; `castuo-evolution` (privado) es un espacio no canónico. Detalle e historial: [estado público](docs/PROFILE-STATUS-DETAIL.es.md).

## Contribuir

Reproduce el flujo de ejemplo, informa de errores reproducibles, mejora pruebas/accesibilidad/documentación o propone un cambio pequeño con criterio de aceptación claro.

[Issues para empezar](https://github.com/Traky12/castuo-e3-001/labels/good%20first%20issue) · [Guía de contribución](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md) · [Política de seguridad](https://github.com/Traky12/castuo-e3-001/blob/main/SECURITY.md)

## Repositorios destacados

- [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) — CLI `e3bundle`, verificador web y protocolo E3-001 delimitado.
- [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) — unidades de evidencia pública seleccionadas y artefactos de reproducibilidad.
- [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) — experimentos edge/IoT offline-first; no se declaran resultados de campo ni producción.

[Mapa completo de repositorios](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) · [Límites de claims](PUBLIC_CLAIM_BOUNDARY.es.md) · [Índice de evidencia](evidence-center/README.md)

## No se declara

La verificación establece la integridad de los archivos y la validez de las firmas conforme a las reglas de confianza configuradas; no demuestra que el contenido sea verdadero ni establece por sí sola la identidad del firmante. No se declaran reproducción independiente, validación de campo/producción, certificación, conformidad regulatoria, clientes de pago, ingresos recurrentes ni autonomía de IA en producción.

## Enlaces

[CASTÚO-SYSTEM](https://castuo-system.es/) · [ORCID](https://orcid.org/0009-0007-3489-0565) · [English version](README.md)
