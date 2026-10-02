# Competitive Binary Study — CASTÚO-SYSTEM

## Estado del estudio

Este documento es una **línea base verificable**, no una afirmación de superioridad competitiva. La matriz utiliza `1` para capacidad respaldada por una fuente o implementación documentada, `0` para capacidad comprobablemente ausente, `?` para capacidad no verificable y `N/A` para una comparación no aplicable. La versión actual contiene 17 registros y siete ejes de capacidad. Las hipótesis procedentes de los adjuntos del usuario permanecen separadas de las fuentes primarias.

> La puntuación de proximidad funcional no equivale a cuota de mercado, valoración financiera, número de clientes ni resultado operativo.

## Fuente primaria y límites

Las fuentes primarias consultadas en esta iteración fueron Credo AI, IBM watsonx.governance, Fiddler AI, Microsoft Purview, ServiceNow AI Control Tower, Palantir Ontology, Vidimus, Hydrus, Praxedo y Nomadia. AKIOUD AI, Nyx AI, Modulos, EAB Compliance, Euridium y KairoNull permanecen en estado `ATTACHMENT_HYPOTHESIS` hasta verificar sus propias fuentes oficiales.

La página oficial de Credo AI revisada describe un SDK que gestiona use cases, modelos y vendors, con configuración por variables de entorno, health checks y métricas de sistema. IBM describe factsheets, evaluación, monitoreo de drift/calidad/seguridad, alertas y gobierno de modelos de terceros. Fiddler describe observabilidad, evaluación y enforcement entre creación y producción, además de guardrails inline y soporte multi-proveedor. Microsoft Purview documenta clasificación, DLP, auditoría, retención y controles sobre uso de IA. ServiceNow describe descubrimiento, observación, governance, seguridad, medición, integraciones enterprise y controles de least privilege. Palantir describe una Ontology operacional con objetos, links, acciones, funciones y gobernanza granular.

Estas afirmaciones son capacidades declaradas por los proveedores. No demuestran por sí solas implantación, eficacia, conectividad offline, coste total, independencia de proveedor o superioridad sobre CASTÚO.

## Matriz binaria inicial

| Competidor | Governance inventory | Evidence / provenance | Runtime observability | Offline field | Vendor independence | Least privilege | Claim gates | Evidencia |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Credo AI | 1 | ? | ? | ? | ? | ? | ? | Fuente primaria |
| IBM watsonx.governance | 1 | 1 | 1 | ? | 1 | ? | ? | Fuente primaria |
| Fiddler AI | 1 | ? | 1 | ? | 1 | ? | ? | Fuente primaria |
| Microsoft Purview | 1 | ? | 1 | ? | ? | 1 | ? | Fuente primaria |
| ServiceNow AI Control Tower | 1 | ? | 1 | ? | 1 | 1 | ? | Fuente primaria |
| Palantir Foundry Ontology | ? | ? | ? | ? | 1 | 1 | ? | Fuente primaria |
| CASTÚO-SYSTEM | 1 | 1 | 1 | ? | ? | 1 | 1 | Implementación local; N5/N6 no declarados |
| Vidimus | 1 | 1 | 1 | ? | 1 | ? | 1 | Fuente primaria |
| Hydrus | 1 | 1 | ? | ? | ? | ? | 1 | Fuente primaria |
| Praxedo | ? | ? | 1 | ? | ? | 1 | ? | Fuente primaria |
| Nomadia | ? | 1 | 1 | 1 | ? | 1 | ? | Fuente primaria |
| AKIOUD AI | ? | ? | ? | ? | ? | ? | ? | Hipótesis del adjunto |
| Nyx AI | ? | ? | ? | ? | ? | ? | ? | Hipótesis del adjunto |
| Modulos | ? | ? | ? | ? | ? | ? | ? | Hipótesis del adjunto |
| EAB Compliance | ? | ? | ? | ? | ? | ? | ? | Hipótesis del adjunto |
| Euridium | ? | ? | ? | ? | ? | ? | ? | Hipótesis del adjunto |
| KairoNull | ? | ? | ? | ? | ? | ? | ? | Hipótesis del adjunto |

## Lectura estratégica

La línea base sugiere que CASTÚO no debe competir por amplitud enterprise, scheduling o compliance genérico. Credo, IBM, Microsoft y ServiceNow muestran mayor amplitud declarada en governance, integración y control empresarial. Fiddler representa una presión directa en observability, evaluation y enforcement. Palantir representa una referencia fuerte en modelado operacional, acciones y decisión contextual.

La hipótesis defendible de CASTÚO está en la cadena completa **operación distribuida → evento canónico → provenance → evidence pack → validación → gate → claim → KPI → resultado económico**, especialmente cuando la conectividad es imperfecta y la independencia de proveedor es un requisito. En esta iteración, `offline field`, `vendor independence` y resultados económicos permanecen como `?` porque todavía requieren vertical slice, piloto y prueba de sustitución.

## Capacidades a elevar

| Prioridad | Capacidad | Motivo competitivo | Criterio de salida |
|---|---|---|---|
| P0 | Boundary vault real y diagnóstico remoto | Sin secretos operativos ni evidence externa, la plataforma no puede reclamar operación segura | Proveedor aprobado, pruebas de rotación/revocación, restore efímero y lectura remota autorizada |
| P1 | Vertical slice offline-to-evidence | Convierte la diferenciación conceptual en prueba reproducible | Evento de campo, sincronización, provenance, evidence pack y replay con KPI |
| P1 | Vendor-independence benchmark | Evita que la propuesta dependa de un único proveedor cloud/modelo | Dos adapters equivalentes, misma salida canónica y comparación reproducible |
| P1 | Runtime observability en campo | Eleva N4 hacia N5 con SLOs y alertas reales | Latencia, delivery rate, conflict rate y error budget medidos en piloto |
| P2 | Evidencia independiente y comercial | Separa arquitectura interesante de categoría competitiva demostrada | Revisión externa, piloto firmado, resultado económico y renovación o repetición |

## Escenarios de ponderación

No existe un ranking universal. El dashboard debe mostrar al menos cuatro escenarios: equilibrado, evidence-first, field-first y enterprise-first. Los cambios de peso deben afectar la lectura de cobertura, pero nunca transformar `?` en `1` ni en `0`. El escenario recomendado para CASTÚO es evidence-first, no porque demuestre superioridad, sino porque refleja su hipótesis estratégica principal.

## Referencias

[1]: https://www.credo.ai/blog/introducing-the-credo-ai-sdk-build-ai-governance-into-your-existing-workflows "Credo AI Python SDK"
[2]: https://www.ibm.com/products/watsonx-governance/model-governance "IBM watsonx.governance model governance"
[3]: https://www.fiddler.ai/ "Fiddler AI platform"
[4]: https://learn.microsoft.com/en-us/purview/ai-microsoft-purview "Microsoft Purview AI security and compliance"
[5]: https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-expands-AI-Control-Tower-to-discover-observe-govern-secure-and-measure-AI-deployed-across-any-system-in-the-enterprise/default.aspx "ServiceNow AI Control Tower"
[6]: https://palantir.com/docs/foundry/ontology/overview/ "Palantir Ontology overview"

## Competitive Capability Passports

Cada registro de la matriz dispone ahora de un passport persistido en `competitive-capability-passports.json`; actualmente son 17 passports y de un constructor tipado en `shared/competitivePassport.ts`. El passport fija el identificador del competidor, segmento, madurez, fuentes, estados binarios, claim permitido, claims prohibidos, limitaciones y siguiente paso de verificación. Los registros basados en los adjuntos conservan `UNVERIFIED`; CASTÚO se limita a `N3_IMPLEMENTED` por la evidencia local disponible. Las pruebas contractuales impiden que una hipótesis se presente como fuente primaria o que un proveedor sea descrito como superior sin evidencia independiente.

[7]: https://www.vidimus.fr/ "Vidimus independent agent assurance"
[8]: https://hydrus.ai/ "Hydrus audit evidence platform"
[9]: https://www.praxedo.com/product-tour/a-central-hub-for-your-field-techs/ "Praxedo field technician hub"
[10]: https://www.nomadia.com/en/resources/blog/what-is-the-best-field-service-management-tool-in-2026-and-why/ "Nomadia field service overview"
