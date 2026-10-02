# Dependabot remediation baseline

## Alcance

Se revisaron los repositorios `Traky12/castuo-strategy-knowledge-base` y `Traky12/copia-de-cast-o-system-strategy-knowledge-base`. El contador remoto inicial indicado por GitHub fue **130 alertas** por repositorio. La API de Dependabot no pudo consultarse con el token disponible porque respondió `403 Resource not accessible by integration`, por lo que la línea base se reprodujo localmente con `pnpm audit` sobre los lockfiles clonados.

| Repositorio | Línea base local | Resultado tras remediación | Rama | PR |
|---|---:|---:|---|---|
| `castuo-strategy-knowledge-base` | 3 críticas, 44 altas, 74 moderadas, 9 bajas | 0 críticas, 0 altas, 0 moderadas, 0 bajas | `security/zero-dependabot` | [#3](https://github.com/Traky12/castuo-strategy-knowledge-base/pull/3) |
| `copia-de-cast-o-system-strategy-knowledge-base` | 3 críticas, 44 altas, 74 moderadas, 9 bajas | 0 críticas, 0 altas, 0 moderadas, 0 bajas | `security/zero-dependabot` | [#2](https://github.com/Traky12/copia-de-cast-o-system-strategy-knowledge-base/pull/2) |

## Controles aplicados

Se regeneraron ambos `package.json` y `pnpm-lock.yaml` con overrides de seguridad generados por `pnpm audit --fix`. Las ramas remediadas pasan `pnpm audit --audit-level=low`, `pnpm run check` y `pnpm run build`. Además, cada repositorio incorpora `.github/workflows/security-quality.yml`, que vuelve a ejecutar el baseline en cada push y pull request.

## Estado de integración

Las dos PRs están abiertas. El intento de merge administrativo fue bloqueado por la política de GitHub: `New changes require approval from someone other than the last pusher (mergePullRequest)`. Por tanto, el **0 verificable corresponde a las ramas de remediación**, mientras que el branch principal seguirá mostrando el contador hasta que una persona distinta del último pusher revise y apruebe las PRs.

> No se debe declarar `main` en cero antes de completar el merge y esperar el reprocesamiento de Security and quality.

## Operación posterior al merge

Después de integrar cada PR, esperar a que GitHub reprocesse Dependabot y comprobar nuevamente ambas tablas desde la interfaz Security and quality. Si quedara alguna alerta residual, clasificarla por paquete y severidad, actualizar el override mínimo, repetir el build y abrir una corrección incremental; no cerrar alertas manualmente sin una actualización verificable.
