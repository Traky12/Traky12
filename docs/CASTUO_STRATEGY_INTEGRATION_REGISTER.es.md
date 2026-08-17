# Registro de Integración Estratégica de CASTÚO-SYSTEM

## Propósito

Este registro es el índice público de las estrategias procesadas dentro del ecosistema CASTÚO-SYSTEM. No sustituye al control plane canónico, al estándar de repositorios V1.0 congelado ni a los paquetes de evidencia. Su función es ofrecer una ruta trazable desde el perfil público hacia la fuente autorizada, el documento correspondiente y el estado declarado.

> Integración pública significa que una estrategia está documentada, enlazada y acotada. No significa que esté operativa, certificada, legalmente validada, comercialmente validada o promocionada.

## Matriz estratégica canónica

| Estrategia o área de control | Fuente canónica | Representación pública en el perfil | Estado semántico actual |
|---|---|---|---|
| Estándar de repositorios V1.0 | [`CASTUO-REPOSITORY-STANDARD-V1.0`](https://github.com/Traky12/castuo-evolution/blob/main/docs/CASTUO-REPOSITORY-STANDARD-V1.0.md) | [Índice de información](./CASTUO_INFORMATION_INDEX.es.md) | Baseline normativo congelado |
| Vocabulario maestro y estados | [`master-vocabulary.yaml`](https://github.com/Traky12/castuo-evolution/blob/main/governance/master-vocabulary.yaml) | [Matriz de transferencia](./CASTUO_TRANSFER_MATRIX.md) | Terminología canónica |
| Boundary público de claims | [`PUBLIC_CLAIM_BOUNDARY.md`](../PUBLIC_CLAIM_BOUNDARY.md) y [`PUBLIC_CLAIM_BOUNDARY.es.md`](../PUBLIC_CLAIM_BOUNDARY.es.md) | README y páginas boundary | Acotado públicamente |
| Identidad de marca | [`brand-manifest.yaml`](../assets/brand/brand-manifest.yaml) y [`brand-surface-policy`](https://github.com/Traky12/castuo-evolution/blob/main/governance/castuo-brand-surface-policy.yaml) | [Superficie de marca](./CASTUO_BRAND_SURFACE.md) | `IDENTITY_ONLY` |
| Gobernanza GREEN-STAGING | [`green-staging-state.yaml`](https://github.com/Traky12/castuo-evolution/blob/main/governance/green-staging-state.yaml) | [Modelo operativo público](./CASTUO_PUBLIC_OPERATING_MODEL.es.md) | Candidato / evidence-scoped / promoción bloqueada |
| Evidencia y assurance | [`public-evidence-index.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/public-evidence-index.md) | [Índice de información](./CASTUO_INFORMATION_INDEX.es.md) | Enlazado a evidencia, no automáticamente operativo |
| Execution envelope, replay y tamper | [`EXECUTION_EVIDENCE_ENVELOPE_AND_TRACEABILITY_CONTRACT.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/EXECUTION_EVIDENCE_ENVELOPE_AND_TRACEABILITY_CONTRACT.md) | Modelo operativo y matriz de transferencia | Definido / acotado a ejecución |
| Conformance CI y validación | [`CONFORMANCE_CI_CD_RUNBOOK.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/CONFORMANCE_CI_CD_RUNBOOK.md) | [Seguridad y contribución](../SECURITY.md) | Automatizable, verdad remota separada |
| Piloto UE jurisdiccional | [`EU_JURISDICTION_AWARE_PILOT_EXECUTION_PLAN_V0.1.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/EU_JURISDICTION_AWARE_PILOT_EXECUTION_PLAN_V0.1.md) y [`GJ1_EU_POLICY_VALIDATION_RUNBOOK.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/GJ1_EU_POLICY_VALIDATION_RUNBOOK.md) | [Índice de información](./CASTUO_INFORMATION_INDEX.es.md) | Target / evidence-scoped / no es cumplimiento legal |
| Staging y promoción | [`STAGING_PROMOTION_CHECKLIST_14_REPOSITORIES.md`](https://github.com/Traky12/castuo-evolution/blob/main/docs/STAGING_PROMOTION_CHECKLIST_14_REPOSITORIES.md) | [Modelo operativo público](./CASTUO_PUBLIC_OPERATING_MODEL.es.md) | Requiere ejecución y revisión humana |
| Edge y continuidad de campo | `castuo-agro-edge` y `castuo-offline-field-operations` | Mapa de repositorios y bloques de rol | Superficies de capacidad, no claims productivos |
| Arquitectura core y assurance | `Castuo-system` y `goldfish` | Mapa de repositorios y bloques de rol | Superficies de implementación y assurance |
| Integración upstream | `n8n` y `openclaw` | Mapa de repositorios y bloques de rol | Tecnología upstream; no automáticamente propietaria |
| Reporting ejecutivo y público | [Proyecto de presentación ejecutiva](https://github.com/Traky12/castuo-evolution/tree/main/presentations/green-staging-executive) | Modelo operativo y enlaces de estado | Artefacto de reporting, no evidencia independiente |

## Interpretación en cuatro capas

El perfil público distingue cuatro capas. La **identidad** identifica el ecosistema. La **documentación** declara contratos y límites. La **evidencia** registra checks reproducibles, artefactos y revisiones. La **operación** requiere ejecución en un entorno declarado, evidencia, replay o reproducción y autorización humana. Una estrategia puede estar documentada públicamente sin estar operativa.

## Material no transferible

Los secretos, credenciales, endpoints privados, telemetría sensible, datos personales no revisados, información de clientes, datos de ejecución financiera y claims legales o comerciales no verificados permanecen fuera de este registro público.

## Frontera global actual

La proyección pública vigente es:

> `GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED · PROMOTION BLOCKED`

El perfil es una puerta de entrada gobernada. El control plane permanece como fuente de verdad para claims, proyección de estados, clasificación de evidencia y decisiones de promoción.
