# External Assurance & Due Diligence

## Propósito

`CAP-ASSURANCE-001 / External Assurance & Due Diligence` permite que una persona externa evalúe CASTÚO-SYSTEM sin depender de afirmaciones del fundador. La capa convierte arquitectura, seguridad, reproducibilidad, revisión y límites en artefactos navegables y verificables. No es marketing y no eleva una capability a producción por el mero hecho de estar documentada.

> **NO CLAIM WITHOUT PROVENANCE.** Toda afirmación debe enlazar una fuente, un contrato, una prueba, un resultado y sus limitaciones.

## Modelo de confianza

El sistema usa internamente el modelo `TRUST = Evidence × Reproducibility × Review × Security`. No es una puntuación científica universal ni una calificación financiera. Es una condición de gobernanza: si cualquiera de los cuatro factores no está demostrado, la capability no puede promocionarse como altamente confiable.

| Dimensión | Pregunta de control | Estado actual |
|---|---|---|
| Evidence | ¿Existe un paquete de evidencia con alcance y fuente? | Parcial / local |
| Reproducibility | ¿Una tercera persona puede repetir el resultado? | Parcial |
| Review | ¿Existe revisión independiente registrada? | Pendiente |
| Security | ¿Secretos, supply chain y permisos están controlados? | Parcial; alertas remotas requieren verificación autenticada |

## Due Diligence Evidence Pack

La estructura canónica vive en `evidence/due-diligence/` y se divide en `architecture`, `security`, `software-supply-chain`, `runtime`, `pilots`, `governance` y `financial-boundary`. Cada elemento debe usar el siguiente envelope:

```yaml
scope: ""
owner: ""
classification: "PUBLIC|INTERNAL|CONFIDENTIAL|RESTRICTED"
source_commit: ""
evidence: []
test: ""
result: ""
limitations: []
review:
  reviewer: ""
  reviewed_at: ""
  outcome: "PENDING|PASS|PARTIAL|BLOCKED"
status: "DRAFT|READY|EXPIRED|BLOCKED"
```

`financial-boundary` no significa que exista tracción comercial. Separa explícitamente prototipo técnico, validación de campo, piloto pagado, renovación y operación continua. Un piloto técnico no prueba willingness to pay ni repetibilidad comercial.

## Capability Trust Passport

El Evidence Passport se complementa con un `Capability Trust Passport` que contiene `capability`, `contract`, `implementation`, `evidence`, `security`, `reproducibility`, `independent_review`, `operational_scope`, `known_limitations`, `current_gate`, `allowed_claims` y `forbidden_claims`. Los campos `allowed_claims` y `forbidden_claims` son obligatorios: evitan que una demo funcional se convierta en una afirmación de producción.

## Gates

`GATE-R1 / External Readability` comprueba que una persona externa puede encontrar la capability, contrato, implementación, evidencia, prueba reproducible y limitaciones. Su resultado es `PASS`, `PARTIAL` o `BLOCKED`.

`G-COMM / Commercial Evidence` es independiente de la validación técnica. Requiere cliente definido, alcance, KPI base, resultado medido, precio, pago, entrega, revisión del cliente y repetibilidad. Un prototipo no equivale a validación de mercado.

## Negative Evidence

Los fallos forman parte del paquete. Cada entrada debe registrar qué falló, dónde, por qué, bajo qué condiciones, qué quedó excluido y qué no fue probado. Un ejemplo válido es:

```yaml
test: remote-ci
status: FAILED
scope: remote-ci
reason: runner_diagnostic_pending
claim_impact: promotion_blocked
```

Ocultar un fallo destruye legibilidad externa; declararlo limita el claim y mejora la assurance.

## Assurance Profile

El dashboard mostrará perfiles derivados de evidencia concreta, no una puntuación única de CASTÚO. Las dimensiones son `ARCHITECTURE`, `EVIDENCE`, `SECURITY`, `REPRODUCIBILITY`, `OPERATIONS`, `COMMERCIAL` e `INDEPENDENT REVIEW`. Cada barra debe enlazar a sus evidencias y conservar estados `CURRENT`, `TARGET`, `PENDING` o `NOT_CLAIMED`.

## Estado inicial y próximos artefactos

La arquitectura y el control de claims ya están demostrados a nivel local. La revisión independiente, las métricas de campo, la evidencia comercial y la verificación remota de Security and quality siguen pendientes. El siguiente paso es poblar cada paquete sólo con evidencia firmada y reproducible; no se deben inventar pilotos, clientes, pagos ni revisiones.
