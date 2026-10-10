# Bioinput traceability — design exploration | Trazabilidad de bioinsumos — exploración de diseño

**Snapshot / Fecha:** 2026-10-10  
**Public status / Estado público:** PROPOSED · DESIGN ONLY · NOT IMPLEMENTED · NOT VALIDATED

## English

### Why it may add value

CASTÚO-SYSTEM could explore a product-agnostic evidence workflow for recording bioinput applications—such as protein hydrolysates—alongside product lot, dose and unit, application method, crop batch, timestamps, recorded environmental context and subsequent measured observations.

The value is not a claim that a product works. It is a traceable chain connecting **declared product and lot → application record → contextual observations → evidence bundle that can be checked for integrity**.

### Scientific boundary

Research reviews describe potential effects of protein hydrolysates but also identify incomplete mechanistic understanding and variation by raw material, hydrolysis process, crop and application conditions. Any response must be measured in a defined protocol. A before/after difference alone does not establish causation.

This concept does not infer chirality, an L/D amino-acid ratio, product composition or biological efficacy from an application event. Those claims require product-specific analytical evidence and a suitable method.

### Privacy, law and neutrality

The design excludes precise GPS coordinates and direct personal identifiers by default. An operator alias can still be personal data if linkable to a person. Any real trial would need a defined purpose, lawful basis, access controls, retention, and review of the applicable data-protection requirements.

EU Regulation 2019/1009 defines the EU fertilising-product framework and a plant-biostimulant category under its stated conditions. CASTÚO does not classify or certify products, establish CE marking or conformity, authorize use, or provide legal advice. Requirements depend on the actual product, claims, intended use and jurisdiction.

This is a proposed neutral schema: no manufacturer partnership, endorsement, customer relationship or permission to reuse third-party materials is claimed.

## Español

### Qué valor puede aportar

CASTÚO-SYSTEM podría estudiar un flujo de evidencia, independiente del fabricante, para registrar aplicaciones de bioinsumos —incluidos los hidrolizados proteicos— junto con lote del producto, dosis y unidad, método, lote de cultivo, marcas temporales, contexto ambiental realmente registrado y observaciones posteriores medidas.

El valor no es afirmar que un producto funciona. Es conectar de manera trazable **producto y lote declarados → registro de aplicación → observaciones contextualizadas → paquete de evidencia cuya integridad pueda verificarse**.

### Límite científico

Las revisiones científicas describen efectos potenciales de los hidrolizados proteicos, pero también señalan mecanismos incompletamente conocidos y variaciones por materia prima, proceso de hidrólisis, cultivo y condiciones de aplicación. La respuesta debe medirse mediante un protocolo definido. Una diferencia antes/después no demuestra causalidad.

El concepto no infiere quiralidad, proporción de aminoácidos L/D, composición del producto ni eficacia biológica a partir de una aplicación. Esas afirmaciones requieren evidencia analítica específica del producto y un método adecuado.

### Privacidad, legalidad y neutralidad

El diseño excluye por defecto coordenadas GPS precisas e identificadores personales directos. Un alias de operario también puede ser dato personal si permite identificar a alguien. Un ensayo real necesitaría finalidad definida, base jurídica, controles de acceso, plazo de conservación y revisión de la normativa de protección de datos aplicable.

El Reglamento (UE) 2019/1009 regula el marco europeo de productos fertilizantes y contempla la categoría de bioestimulante vegetal bajo sus condiciones. CASTÚO no clasifica ni certifica productos, no acredita marcado CE ni conformidad, no autoriza usos y no presta asesoramiento jurídico. La regulación aplicable depende del producto, las alegaciones, el uso previsto y la jurisdicción.

Es un esquema neutral en fase de propuesta: no se afirma colaboración, respaldo, relación comercial ni autorización para reutilizar materiales de fabricante alguno.

## Suggested bounded workflow / Flujo acotado propuesto

1. Capture only the fields and measurements actually available. / Capturar solo campos y mediciones realmente disponibles.
2. Keep event time separate from record/ingestion time. / Separar hora del evento y hora de registro/ingesta.
3. Validate the event schema and reject invalid payloads. / Validar el esquema y rechazar eventos inválidos.
4. Build the evidence bundle outside the payload, then verify its manifest and signatures offline. / Crear el paquete fuera del payload y verificar manifiesto y firmas sin conexión.
5. Have another operator reproduce the result before claiming independent validation. / Exigir reproducción por otra persona antes de afirmar validación independiente.

All steps above are a future design, not current product behavior. / Todos estos pasos son diseño futuro, no comportamiento actual.

## References / Referencias

- Colla et al., *Biostimulant Properties of Protein Hydrolysates: Recent Advances and Future Challenges* (2023): https://pmc.ncbi.nlm.nih.gov/articles/PMC10253749/
- Regulation (EU) 2019/1009: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R1009
- GDPR, Article 5: https://eur-lex.europa.eu/eli/reg/2016/679/
- Market-discovery context provided for this design exploration (not scientific validation or endorsement): https://lnkd.in/eYMcj5Z7
