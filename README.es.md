# CASTÚO-SYSTEM™

### Systems Architect · Evidence Engineer · AI Governance & Assurance

**Fundador y arquitecto principal de CASTÚO-SYSTEM™**

> **NO CLAIM WITHOUT PROVENANCE**
>
> **NO AI DEPLOYMENT WITHOUT ASSURANCE**
>
> **NO SCALE WITHOUT SECURITY AND OBSERVABILITY**

CASTÚO-SYSTEM es una dirección de infraestructura basada en evidencia para operaciones rurales y distribuidas resilientes. La primera propuesta comercial es **CASTÚO Evidence-Ready Field Operations**: continuidad offline-first, trazabilidad y evidencia revisable para workflows con conectividad irregular.

## Estado público actual

<!-- CASTUO:STATE:START -->
## Estado actual del ecosistema

**GREEN-STAGING-CANDIDATE · EVIDENCE-SCOPED**

El estado público se genera desde `castuo-evolution/data/control-plane-status.yaml`.

| Dimensión | Estado público actual |
|---|---|
| Conformance local | `14/14 PASS LOCAL` |
| Conformance remoto | `0/14` — `PENDING` |
| Publicación remota | `14 PENDING` |
| Entorno | `STAGING` |
| Baseline de seguridad | `PENDING` |
| Ejecución de staging | `PENDING` |
| Revisión humana | `PENDING` |
| Producción | `NOT_CLAIMED` |
| Validación comercial | `NOT_CLAIMED` |
| E3 independiente | `PENDING` |
| Federación | `PENDING` |

**Base de evidencia:** `castuo-evolution` · commit `70b7c57` · scope `local checkout set of 14 repositories` · evidencia `evidence/local-conformance-2026-08-16/summary.json` · review `PENDING`.

El perfil público proyecta el control plane y no decide el estado. Bloqueador: `remote_publication_conformance_security_evidence_staging_review_pending`. La evidencia local no implica publicación remota, producción, certificación, resultado de cliente, operación continua ni federación.
<!-- CASTUO:STATE:END -->

## Propuesta inicial

```text
Problema → Workflow de campo → Capacidad → Implementación
→ Test → Evidencia → Review → Piloto → Pago → Operación
→ Repetibilidad → Federación
```

El recorrido inicial está acotado a:

```text
crear organización → registrar operación → continuar sin conectividad
→ sincronizar → revisar evidencia → exportar informe
```

Esta página no afirma que el recorrido sea una operación productiva o comercial completada. Los resultados medidos, pagos, renovaciones y operación continua requieren evidencia separada.

## Frontera semántica pública

| Etiqueta | Significado |
|---|---|
| `CURRENT` | Respaldado por el scope y la evidencia declarados del control plane |
| `TARGET` | Capacidad o perfil objetivo; no es verdad operacional actual |
| `EXPERIMENTAL` | Trabajo de laboratorio, piloto o integración acotado; no producción |
| `PENDING` | Evidencia, ejecución o revisión todavía pendiente |
| `NOT_CLAIMED` | Fuera de los claims autorizados por la evidencia actual |

Un commit, issue, README, badge o workflow verde no demuestra producción, adopción de clientes, certificación, autonomía, federación, ingresos recurrentes ni operación continua.

## Cadena de evidencia

```text
Claim → Evidence → Execution → Hash → Reproduction
→ Independent review → Gate → Promotion / rollback
```

El control plane gobierna el estado. Los repositorios implementan roles declarados. Los Evidence Packs demuestran resultados acotados. El perfil resume y enlaza; no decide.

## Mapa de repositorios

| Repositorio | Rol público | Frontera |
|---|---|---|
| `castuo-evolution` | Governance control plane | SSOT de vocabulario, Gates, evidencia y promoción |
| `Castuo-system` | Core platform | Implementación y ejecución acotada; producción no reclamada |
| `goldfish` | Assurance y recovery | Seguridad, recuperación y preservación de evidencia |
| [`Cast-o`](https://github.com/Traky12/Cast-o) | CI y validación | Tests, provenance y release evidence |
| [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Edge / IoT | Continuidad offline y sincronización |
| [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Field application | Workflow local, recuperación y exportación de evidencia |
| `ctaex-iot-pilot` | Laboratorio | Validación IoT; claims de campo excluidos |
| `agrovision-360` | Experimental | Investigación acotada de visión agro |
| `castuo-360-v5.3` | Workspace | Experiencia integrada; workspace ≠ production |
| `-Prueba-final` | Sandbox experimental | Experimentos de integración |
| `n8n` | Upstream / fork | Integración de workflows; upstream ≠ capacidad propietaria |
| `openclaw` | Upstream / fork | Integración de assistant; upstream ≠ capacidad propietaria |
| `desktop-tutorial` | Training / support | Formación de contribución y gobernanza |

## Gates actuales

| Gate | Estado | Próxima evidencia |
|---|---|---|
| Conformance local | `14/14 PASS LOCAL` | Artefactos por repositorio |
| Publicación remota | `PENDING` | Revisión y merge de PRs |
| Conformance remoto | `PENDING` | Workflow sobre heads remotos fusionados |
| Security baseline | `PENDING` | Secretos, dependencias, SBOM y permisos |
| Tests | `PENDING` | Tests propios y negativos |
| Evidence | `PENDING` | Manifests, hashes y envelopes |
| Staging execution | `PENDING` | Vertical slice core-to-field |
| Human review | `PENDING` | Decisión fechada y acotada |
| GREEN-STAGING | `BLOCKED` | Todos los Gates anteriores |

## Boundary de claims

Consulta [`PUBLIC_CLAIM_BOUNDARY.md`](PUBLIC_CLAIM_BOUNDARY.md) para conocer qué puede afirmarse, qué no puede afirmarse y qué requisitos tiene cualquier promoción pública. La política de seguridad está en [`SECURITY.md`](SECURITY.md).

## Enlaces

- [Evidence Center](https://github.com/Traky12/Traky12/tree/main/evidence-center)
- [Mapa público](docs/CASTUO_ECOSYSTEM_PUBLIC_REPOSITORY_MAP.md)
- [Cast-o validation](https://github.com/Traky12/Cast-o)
- [CASTÚO-SYSTEM™ website](https://castuo-system.es/)
- [Repositorio público](https://github.com/Traky12?tab=repositories)
- [ORCID](https://orcid.org/0009-0007-3489-0565)
- [LinkedIn](https://www.linkedin.com/in/cast%C3%BAo-system-00b8493b/)

## No reclamado

Este perfil no reclama producción, autoridad autónoma, federación, certificación, validación independiente, conformidad regulatoria, clientes de pago, ingresos recurrentes, private cloud provisionado, robótica operacional ni interoperabilidad universal.

El workbook oficial PIE PLUS sigue siendo la fuente autoritativa para cifras financieras. La arquitectura, el código, los activos técnicos y la actividad de repositorio no son efectivo, valoración, ingreso, financiación, contrato ni resultado de cliente.
