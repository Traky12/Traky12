# Continuar el plan y el Progress Dashboard

Este repositorio contiene ahora el plan evolutivo y una aplicación standalone para seguir el progreso de CASTÚO-SYSTEM sin separar la documentación de trabajo del proyecto core.

## Ubicación de los artefactos

| Artefacto | Ruta | Propósito |
|---|---|---|
| Plan evolutivo | `docs/evolution/PLAN-EVOLUTIVO.md` | Hoja de ruta de ingeniería, madurez, gates y criterios de salida |
| Informe de continuidad | `docs/evolution/INFORME-CONTINUIDAD.md` | Estado técnico observado, evidencia y bloqueos actuales |
| Dirección visual | `docs/evolution/IDEAS-DASHBOARD.md` | Decisiones de diseño del dashboard |
| Aplicación | `progress-dashboard/` | Dashboard React/Vite versionado dentro del core |
| Snapshot | `progress-dashboard/data/progress-snapshot.json` | Fuente estructurada del estado conocido en la fecha del snapshot |
| Portfolio registry | `portfolio/portfolio.yaml`, `portfolio/capabilities.yaml` | Inventario de unidades y capacidades |
| Contracts | `portfolio/contracts/registry.yaml` | Contratos versionados del control plane |
| Evidence & risks | `portfolio/evidence.yaml`, `portfolio/risks.yaml` | Evidencia, claims, riesgos y límites |
| Passport & fixtures | `portfolio/passports/`, `portfolio/fixtures/` | Vertical slice reproducible |
| Validation | `scripts/validate_portfolio.py`, `tests/` | Gates y pruebas locales/portable |
| CI | `.github/workflows/portfolio-control-plane.yml` | Validación automática del control plane |

## Ejecución local

```bash
cd progress-dashboard
npm install
npm run dev
```

Para validar una compilación de producción:

```bash
cd progress-dashboard
npm run build
```

## Flujo de actualización

El dashboard es **evidence-first**. Antes de cambiar un estado visual, debe actualizarse el artefacto de evidencia correspondiente en `castuo-evolution` o en el repositorio que actúe como fuente canónica. Después se actualiza `progress-dashboard/data/progress-snapshot.json` con la fecha, el commit y el alcance real de la prueba.

Los estados `VERIFIED`, `PENDING` y `BLOCKED` no son decorativos. `VERIFIED` solo puede utilizarse para un alcance de prueba declarado; `PENDING` significa que el artefacto está definido pero no ejecutado; `BLOCKED` indica que existe una dependencia o fallo que impide una promoción defendible.

La primera promoción recomendada sigue siendo **N2/G1**, y no debe reflejarse como completada hasta que exista un gate remoto reproducible y una revisión independiente. Ninguna pantalla del dashboard debe transformar un dato ausente en una afirmación de operación productiva.

## Relación con los repositorios de soporte

El dashboard y una copia ejecutable de los artefactos del control plane viven dentro de `Castuo-system`, mientras sus fuentes canónicas de gobierno y evidencia permanecen en sus repositorios especializados. La separación permite que el core sea el punto de acceso de trabajo mientras `castuo-evolution` mantiene el control plane y `Cast-o` mantiene el tooling de assurance. Cuando se automatice la actualización, el proceso debe importar snapshots fechados y conservar el commit de origen.

## Próxima iteración técnica

La siguiente mejora recomendada es reemplazar la edición manual del snapshot por un generador que lea los registros publicados, valide hashes y produzca un JSON versionado junto con una nota de cambios. Esa automatización debe fallar cerrado cuando no pueda obtener logs o cuando la evidencia no tenga commit, alcance y limitaciones explícitas.
