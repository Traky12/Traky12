# Configuración segura de `CASTUO_AUDIT_TOKEN`

`CASTUO_AUDIT_TOKEN` permite que el workflow de conformance de `Cast-o` lea el control plane privado `Traky12/castuo-evolution`. El token debe configurarse como **GitHub Actions repository secret** y nunca debe aparecer en un commit, README, log, artefacto o comentario de PR.

## Configuración manual requerida

El propietario o administrador de `Traky12/Cast-o` debe abrir:

```text
Settings → Secrets and variables → Actions → New repository secret
```

Debe crear exactamente:

```text
Name: CASTUO_AUDIT_TOKEN
Value: <token de mínimo privilegio con acceso de lectura a Traky12/castuo-evolution>
```

El token debe poder leer únicamente el contenido necesario del control plane. No debe tener permisos de escritura, administración, publicación, secrets, pagos, producción ni actuación física.

## Verificación sin exponer el secreto

Desde una sesión autorizada del propietario del repositorio:

```bash
gh secret list --repo Traky12/Cast-o
```

La salida debe mostrar el nombre `CASTUO_AUDIT_TOKEN`; nunca se muestra su valor.

Después, relanzar el workflow desde la pestaña **Actions** o ejecutar:

```bash
gh workflow run "CASTUO repository conformance" \
  --repo Traky12/Cast-o \
  --ref governance/castuo-v1.0-conformance-20260816
```

Para observar el resultado:

```bash
gh run list --repo Traky12/Cast-o --workflow "CASTUO repository conformance" --limit 5
 gh pr checks 13 --repo Traky12/Cast-o
```

## Resultado esperado

El check debe completar el checkout de `Traky12/castuo-evolution`, producir `artifacts/castuo-repository-conformance.json` y devolver conformance dentro del scope declarado. Un PASS de Cast-o no promociona el ecosistema: `promotion` debe continuar en `BLOCKED` hasta completar seguridad, evidencia, staging, replay y revisión humana.

Si el secreto falta, el workflow debe fallar con `CASTUO_AUDIT_TOKEN is required`. Si existe pero no puede leer el control plane, debe fallar con un error de checkout o autorización. No se deben imprimir tokens para diagnosticar estos errores.

## Límite de seguridad

Este documento no solicita tokens por chat ni recomienda pegarlos en issues, PRs, archivos YAML o variables públicas. La configuración del secreto debe realizarla directamente el propietario o administrador de GitHub.
