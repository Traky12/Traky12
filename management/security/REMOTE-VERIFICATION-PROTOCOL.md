# Protocolo de verificación remota de Security and quality

## Criterio de cierre

El cierre sólo es válido cuando cada repositorio muestra en GitHub, sobre el branch `main`, `Security and quality: 0` y la vista de Dependabot no contiene alertas abiertas. `pnpm audit` local es una prueba necesaria, pero no sustituye la lectura remota de GitHub.

| Señal | Interpretación | Acción |
|---|---|---|
| `pnpm audit` devuelve todas las severidades en 0 | El lockfile de `main` está limpio localmente | Continuar con la verificación remota |
| PR cerrada con `merged_at` y `main` apunta al commit de remediación | La integración ocurrió | Esperar el reprocesamiento de Security and quality |
| GitHub muestra todavía 130 | El índice remoto no ha reprocesado o la alerta pertenece a otro branch/manifest | Abrir Dependabot y revisar manifest/branch; no cerrar manualmente |
| API responde `403 Resource not accessible by integration` | El token no tiene permisos de Dependabot/Code Scanning o la capacidad privada no está concedida | Autorizar `security_events` en la cuenta/app o usar sesión autenticada |
| La API devuelve una lista vacía | No hay alertas accesibles para ese repositorio y scope | Confirmar también la vista web y registrar timestamp |

## Consulta autenticada esperada

Con una credencial que tenga acceso de lectura a Dependabot, la consulta REST es:

```bash
gh api repos/Traky12/castuo-strategy-knowledge-base/dependabot/alerts?state=open\&per_page=100
gh api repos/Traky12/copia-de-cast-o-system-strategy-knowledge-base/dependabot/alerts?state=open\&per_page=100
```

La respuesta debe ser un arreglo vacío. Para repositorios privados, el token o GitHub App debe tener acceso al repositorio y permiso de lectura de Dependabot alerts; el `admin` del repositorio no garantiza por sí solo que el token tenga ese scope de seguridad.

## Estado actual

Las dos PRs de remediación fueron integradas directamente en `main`: `f8daa63` para `castuo-strategy-knowledge-base` y `7d099c8` para `copia-de-cast-o-system-strategy-knowledge-base`. La verificación local de ambos `main` devuelve cero en todas las severidades. La verificación remota queda pendiente porque el token disponible devuelve 403 y la sesión web no está autenticada.
