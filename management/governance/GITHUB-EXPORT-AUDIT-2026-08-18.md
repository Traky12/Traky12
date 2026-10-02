# GitHub Export Audit — 2026-08-18

La auditoría de exportación encontró 19 artefactos canónicos locales en `docs/governance`, incluido el bloque README, índice operativo, arquitectura soberana, política de commits, Maturity Program, narrativa pública, reputación OSS, informe integral, recovery manifest, PR audit y gate pack.

El artefacto local de sincronización registra 14 PRs abiertas y `mainBranchesModifiedDirectly: 0`. La PR `https://github.com/Traky12/Castuo-system/pull/347` está abierta, no es draft, usa base `main`, head `docs/castuo-governed-readme-20260817` y figura como `BLOCKED` para merge. El estado `BLOCKED` no se interpreta como fallo de contenido: la integración requiere revisión/checks y mantiene abiertos los gates externos.

La exportación debe continuar mediante PRs y ramas gobernadas. Los forks `openclaw` y `n8n` permanecen fuera de alcance. No se deben escribir tokens, credenciales, secretos, PII ni claims de producción en estos artefactos.
