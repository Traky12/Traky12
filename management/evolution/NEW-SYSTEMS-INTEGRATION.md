# New Systems Integration

## Decision

`CASTUOSYSTEMv6.html`, `quantum.html` and `CASTUO-SAAS-PLATFORM.html` are integrated as **source artifacts and bounded capability inputs**. They are not executed directly as production pages. The progress dashboard presents their mapped scope, current state and security boundary.

| Artifact | Mapped role | Capabilities entering the roadmap | Current state | Main boundary |
|---|---|---|---|---|
| `CASTUOSYSTEMv6.html` | Operations and control-plane surface | Field operations, IoT, irrigation, bioenergy, health and service panels | `MAPPED` | Direct `fetch`, dynamic `innerHTML` and assumed backend endpoints require typed adapters, CSP and server-side authorization |
| `quantum.html` | Decision and assurance layer | Decision support, simulation, quantum/assurance narrative and analytical views | `MAPPED` | No promotion without a reproducible contract, execution envelope, test and evidence scope |
| `CASTUO-SAAS-PLATFORM.html` | SaaS and field platform surface | Field notebook, traceability, integrations, certificates and external services | `SECURITY_HOLD` | The artifact stores API keys in `localStorage`, calls provider APIs from the browser and includes mutable external dependencies |

## Security disposition

The raw artifacts are preserved under [`docs/source-artifacts/`](../source-artifacts/) for provenance, but they must be treated as **reference-only**. They are not imported into the dashboard bundle and must not be deployed as-is.

The SaaS artifact requires a backend boundary before any real integration. Provider secrets must move to a server-side secret manager; browser code may receive only short-lived, scoped credentials or invoke an allow-listed backend proxy. External APIs such as Mistral, Telegram, Stripe, Hetzner and AEMET must be isolated behind explicit adapters with timeout, rate limit, audit event, origin policy and error redaction. `localStorage` is not an acceptable secret store.

The v6 artifact requires typed API clients instead of string-built URLs, a strict content-security policy, output encoding instead of uncontrolled `innerHTML`, schema validation for responses and authorization enforcement at the backend. The quantum artifact requires the same evidence chain as any other capability; its naming or visual claims do not constitute quantum computation, assurance or production evidence.

## Evolution path

The three artifacts become one development stream through the following sequence: first, preserve the raw inputs and map their features; second, define canonical capabilities and contracts in the control plane; third, implement server-side adapters and redacted evidence envelopes; fourth, add unit, integration, negative and permission tests; fifth, execute a bounded vertical slice; and finally promote only after independent review, operational evidence and rollback readiness.

The dashboard currently exposes this status through `SYS-V6`, `SYS-QNT` and `SYS-SAAS`. This is a management view, not a production claim. The next defensible work item is a backend adapter for one bounded field workflow, followed by secret scanning, SCA/SBOM, CSP validation, authorization tests and a reproducible evidence pack.


## Secure Connectors y Quantum Decision Lab — 2026-08-17

La integración del dashboard añade dos superficies gobernadas. **Secure Connectors** es una interfaz vault-first: el frontend sólo emite intents, muestra estados y conserva referencias redactadas; no recibe valores de credenciales, no utiliza `localStorage` para secretos y no realiza llamadas directas a proveedores. La plataforma SaaS continúa en `SECURITY_HOLD` hasta que exista un adaptador backend autenticado con allowlist, scopes mínimos, rotación, revocación y auditoría.

**Quantum Decision Lab** es una simulación local, determinista y acotada para explorar trade-offs de continuidad, assurance y recursos. El resultado se etiqueta `LOCAL RESULT / NO CLAIM`; no es un runtime cuántico, no ejecuta decisiones autónomas y no constituye evidencia de promoción. Para avanzar requiere contrato reproducible, revisión independiente y evidencia de campo.

| Sistema | Estado | Indicador | Próximo gate |
|---|---|---|---|
| CASTUO-SYSTEM v6 | MAPPED | capacidades y fuente visibles | contrato de boundary |
| Quantum / Decision Layer | MAPPED / SIMULATION ONLY | resultado local sin claim | runtime reproducible + evidencia |
| CASTÚO SaaS Platform | SECURITY HOLD | sin secretos en frontend | adaptadores backend + vault |

La implementación en `Castuo-system/progress-dashboard` y la especificación `docs/evolution/SECURE-CONNECTORS-AND-QUANTUM-LAB.md` constituyen la referencia técnica para futuras iteraciones.
