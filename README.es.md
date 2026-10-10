<!-- CASTUO:BRAND:START -->
<p align="center">
  <img src="https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/castuo-system-logo-horizontal.jpg" alt="Logotipo oficial de CASTÚO-SYSTEM" width="520" />
</p>
<!-- CASTUO:BRAND:END -->

# Gregorio Julián Jiménez Bodes — Traky12

**Arquitecto de sistemas · Ingeniero de evidencia · Gobernanza y aseguramiento de IA**  
Fundador y arquitecto principal de CASTÚO-SYSTEM™

Construyo infraestructura basada en evidencia para operaciones trazables, offline-first y revisables.

**Ningún claim sin procedencia. Ningún claim externo sin evidencia reproducible.**

## Prueba e3bundle

[e3bundle](https://github.com/Traky12/castuo-e3-001) es una CLI de Python pequeña, con licencia MIT, que verifica la integridad de los archivos y las firmas de un paquete de evidencia: manifiestos SHA-256, firmas Ed25519, resultados en JSON y códigos de salida significativos. Tras instalarla funciona en local: sin servicio alojado, sin cuenta y sin conexión.

[Abrir la demo en el navegador](https://traky12.github.io/castuo-e3-001/) · [Ver el repositorio](https://github.com/Traky12/castuo-e3-001) · [Release v0.1.3](https://github.com/Traky12/castuo-e3-001/releases/tag/v0.1.3)

```bash
python -m pip install "git+https://github.com/Traky12/castuo-e3-001@v0.1.3"
git clone --branch v0.1.3 --depth 1 https://github.com/Traky12/castuo-e3-001 && cd castuo-e3-001
e3bundle verify examples/bundles/valid --min-signatures 2 --trusted-keys examples/bundles/trusted-keys.json
# Esperado: VERIFIED, salida 0
```

**Versión:** v0.1.3 alfa está publicada en GitHub Releases y como imagen de contenedor (`ghcr.io/traky12/e3bundle:0.1.3`); la publicación en PyPI está pendiente. La demo del navegador sigue mostrando los ejemplos de v0.1.1.

Una verificación correcta muestra que los archivos declarados coinciden con sus huellas y que las firmas son válidas según las reglas de confianza configuradas. **No** demuestra que las afirmaciones originales sean verdaderas, que la identidad del firmante esté establecida de forma independiente ni que un sistema esté certificado o autorizado para producción.

## Qué construyo

- Sistemas edge e IoT offline-first.
- Paquetes de evidencia trazables y verificación criptográfica.
- Patrones fail-closed de identidad, acceso y gestión de secretos.
- Auditorías reproducibles y revisión externa delimitada.
- Gobernanza y aseguramiento de IA para operaciones de alta consecuencia.

Prefiero sistemas pequeños e inspeccionables a grandes afirmaciones.

## Estado público actual

`CONSOLIDATION-1.0 = BLOCKED`. El foco público es `e3bundle`; la reproducción independiente (E3-001) está `PENDING`, con 0 de 2 revisiones externas firmadas. Este perfil es el read-model público de CASTÚO-SYSTEM: informa del estado, no lo decide. `Castuo-system` (privado) es la autoridad canónica del estado técnico y la promoción; `castuo-evolution` (privado) es un espacio no canónico. Detalle e historial: [`docs/PROFILE-STATUS-DETAIL.es.md`](docs/PROFILE-STATUS-DETAIL.es.md).

## Contribuir

Se agradecen contribuciones concretas a `e3bundle`:

- Reproducir la verificación en Linux, macOS o Windows.
- Mejorar la documentación y las instrucciones de instalación.
- Añadir o mejorar pruebas del navegador.
- Informar de problemas de uso, compatibilidad o seguridad.

Empieza con una issue. Los cambios sensibles a seguridad necesitan revisión, pruebas y un modelo de amenazas claro.

[Tareas para empezar](https://github.com/Traky12/castuo-e3-001/contribute) · [Cómo contribuir](https://github.com/Traky12/castuo-e3-001/blob/main/CONTRIBUTING.md) · [Política de seguridad](SECURITY.md)

## Repositorios destacados

| Repositorio | Qué es |
|---|---|
| [`castuo-e3-001`](https://github.com/Traky12/castuo-e3-001) | CLI `e3bundle`, verificador en el navegador y protocolo de reproducción E3-001 |
| [`castuo-evidence`](https://github.com/Traky12/castuo-evidence) | Unidades de evidencia pública, manifiestos y artefactos de reproducibilidad |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Experimentos de runtime edge/IoT offline-first: buffering, sincronización y continuidad de telemetría |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Experimentos de flujo offline, recuperación y exportación de evidencia |

Otros repositorios y funciones: [`docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md).

## No se declara

- Operación en producción.
- Validación independiente o de campo.
- Certificación o conformidad regulatoria.
- Tracción de clientes de pago o ingresos recurrentes.
- Autonomía de IA en producción o autoridad autónoma.
- Despliegue industrial multisede.

El objetivo no es que el sistema parezca seguro de sí mismo. El objetivo es que los claims delimitados, la evidencia y las limitaciones sean inspeccionables. Límite completo: [`PUBLIC_CLAIM_BOUNDARY.es.md`](PUBLIC_CLAIM_BOUNDARY.es.md) · Índice de evidencia: [`evidence-center/README.md`](evidence-center/README.md).

## Enlaces

[Web de CASTÚO-SYSTEM](https://castuo-system.es/) · [ORCID](https://orcid.org/0009-0007-3489-0565) · [English version](README.md)
