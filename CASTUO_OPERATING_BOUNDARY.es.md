# Frontera operativa CASTUO

CASTÚO-SYSTEM distingue identidad pública, capacidad declarada, implementación, tests, evidencia, revisión y promoción. Ninguna capa inferior sustituye a una superior.

## Cadena de estados

```text
DOCUMENTED
→ IMPLEMENTED_LOCAL
→ TESTED_LOCAL
→ VALIDATED
→ OPERATIONAL
→ REPEATABLE
→ PROMOTED
```

Cada transición requiere alcance, fuente, resultado, evidencia y la revisión o gate aplicable. Un README, commit, pull request, actividad de repositorio o workflow verde no promociona una capacidad a `OPERATIONAL`.

## Frontera pública

El perfil público publica únicamente información `PUBLIC` y `PUBLIC-SUMMARY`. Quedan excluidos salvo autorización y revisión separadas:

- secretos, credenciales, tokens y claves privadas;
- rutas, topología y detalles de acceso de infraestructura privada;
- logs brutos, evidencia sensible y datos personales innecesarios;
- identidad de clientes, contratos, facturas, información bancaria o fiscal;
- claims productivos, legales, regulatorios, financieros o comerciales no verificados.

## Frontera operativa

`STAGING-CANDIDATE` significa que el candidato está preparado para una posible ejecución de staging. No significa que staging haya sido ejecutado. `PROMOTION-BLOCKED` sigue siendo el estado correcto mientras falten checks remotos, seguridad, evidencia, ejecución de staging o revisión humana.

`OPERATIONAL` requiere entorno explícito, owner y alcance acotados, observabilidad, evidencia reproducible, criterios de aceptación, revisión y decisión de promoción autorizada.

## Frontera comercial

Una dirección de producto, modelo de engagement o alcance de piloto documentado no equivale a cliente, contrato, factura, pago, ingreso recurrente ni resultado de mercado medido. El lenguaje comercial público debe permanecer etiquetado como `DOCUMENTED`, `TARGET` o `PENDING` hasta que exista la evidencia correspondiente.

## Frontera legal y regulatoria

La documentación CASTÚO no constituye asesoramiento jurídico ni afirma conformidad con GDPR, EU AI Act, NIS2, CRA, eIDAS u otro instrumento regulatorio sin jurisdicción, fuente, versión, alcance, evaluación y revisión autorizada definidos.

> Los fallos se conservan como evidencia: `FAILURE → FINDING → REMEDIATION → RE-TEST`.
