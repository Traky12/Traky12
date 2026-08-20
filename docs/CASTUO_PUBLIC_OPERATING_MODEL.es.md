# CASTÚO-SYSTEM — Modelo operativo público

**Estado:** `DOCUMENTED` · `EVIDENCE-SCOPED`  
**Fuente semántica:** [`castuo-evolution`](https://github.com/Traky12/castuo-evolution)  
**Estado operativo global:** `GREEN-STAGING-CANDIDATE · PROMOTION BLOCKED`

> **Regla pública:** un perfil, README, commit, insignia o logotipo puede explicar una capacidad, pero no puede convertirla en evidencia de operación, producción, certificación, cumplimiento legal, clientes, ingresos o federación.

## Recorrido público recomendado

El perfil `Traky12` es la puerta de entrada. Para inspeccionar CASTÚO-SYSTEM sin mezclar capas, siga este recorrido:

| Pregunta | Superficie canónica |
|---|---|
| ¿Qué es CASTÚO-SYSTEM? | [README del perfil](../README.es.md) |
| ¿Qué puede afirmarse? | [`PUBLIC_CLAIM_BOUNDARY.es.md`](../PUBLIC_CLAIM_BOUNDARY.es.md) |
| ¿Cómo se organiza el ecosistema? | [`CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md`](./CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md) |
| ¿Qué evidencia existe? | [`evidence-center/`](../evidence-center/) y el índice público del control plane |
| ¿Cómo se gobierna el estado? | [`castuo-evolution`](https://github.com/Traky12/castuo-evolution) |
| ¿Qué se implementa? | [`Castuo-system`](https://github.com/Traky12/Castuo-system) |
| ¿Qué se valida? | [`Cast-o`](https://github.com/Traky12/Cast-o) |
| ¿Qué se asegura? | [`goldfish`](https://github.com/Traky12/goldfish) |
| ¿Cómo se mantiene la continuidad? | [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) y [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) |

## Cadena de evidencia

```text
Claim
  → provenance
  → contract
  → policy decision
  → bounded execution
  → typed evidence
  → hashes
  → replay / drift
  → human review
  → gate decision
  → promotion or rollback
```

Las capas no son intercambiables. La actividad del repositorio no equivale a verdad operativa; un test local no equivale a ejecución remota; una decisión de política no equivale a promoción; y la identidad visual no equivale a assurance.

## Estado actual declarado

El control plane declara una preparación de `GREEN-STAGING-CANDIDATE` con alcance `EVIDENCE-SCOPED`. La conformance local y sus artefactos permanecen delimitados por commit, workspace y alcance. La publicación remota, los checks de CI/CD, la seguridad, la ejecución de staging, la reproducción y la revisión humana deben verificarse por separado.

Por diseño, siguen sin reclamarse producción, operación continua, certificación, conformidad legal, adopción comercial, ingresos recurrentes, autonomía, federación o interoperabilidad universal.

## Marca y claims

El logotipo oficial de CASTÚO-SYSTEM está gobernado por [`assets/brand/brand-manifest.yaml`](../assets/brand/brand-manifest.yaml) y [`docs/CASTUO_BRAND_SURFACE.md`](./CASTUO_BRAND_SURFACE.md). Su clasificación es `IDENTITY_ONLY`. El activo permite reconocer el ecosistema y navegar entre sus superficies, pero no autoriza ni prueba ningún estado técnico u operativo.

## Cómo leer un estado `PENDING` o `BLOCKED`

`PENDING` significa que una ejecución, revisión o decisión aún no se ha cerrado. `BLOCKED` significa que existe una condición que impide avanzar. Ninguno puede transformarse en verde mediante edición documental; requiere una nueva ejecución verificable, evidencia reproducible y, cuando corresponda, revisión humana.

## Referencias de control

- [CASTÚO Repository Standard V1.0](https://github.com/Traky12/castuo-evolution/tree/main/docs/standard-v1.0)
- [Estado del control plane](https://github.com/Traky12/castuo-evolution/blob/main/data/control-plane-status.yaml)
- [Índice de evidencia pública](https://github.com/Traky12/castuo-evolution/blob/main/docs/public-evidence-index.md)
- [Política GREEN-STAGING](https://github.com/Traky12/castuo-evolution/blob/main/governance/green-staging-state.yaml)
- [Manifest de marca](../assets/brand/brand-manifest.yaml)

Este documento sirve para navegación e interpretación. No redefine `CASTUO-REPOSITORY-STANDARD-V1.0`, el vocabulario maestro, los niveles de assurance ni los gates de promoción.
