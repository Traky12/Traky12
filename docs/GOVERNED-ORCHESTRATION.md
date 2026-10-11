# Governed orchestration — field data rises, decisions descend, evidence anchors

> **SIMULATION · SYNTHETIC SOURCES · EXPERIMENTAL · NO PRODUCTION CLAIM**

This public illustration, with optional CSS motion in supporting SVG viewers, fuses two CASTÚO-SYSTEM concepts into one governance model:

- the **Governed Flow** (policy gates, abstention, simulated review queue, SHA-256 evidence chain), see [GOVERNED-FLOW-SOVEREIGNTY.md](GOVERNED-FLOW-SOVEREIGNTY.md);
- the **orchestrator brain**: a central digital brain coordinates agricultural data flows **without taking ownership of them**.

![Governed orchestration diagram](../assets/diagrams/castuo-governed-orchestration.svg)

Spanish version: [`castuo-governed-orchestration.es.svg`](../assets/diagrams/castuo-governed-orchestration.es.svg).

## 01 · Field data rises

Six governed sources send data through root-like branches. The branches read at once as plant roots, neural links, data flows and irrigation channels.

| Source | Carries |
|---|---|
| Soil sensor | unit, observed time, received time, device, calibration, quality |
| Drone / satellite | area, resolution, source, date, licence, confidence level |
| Field notebook | interventions, inputs, responsible operator, affected lot |
| ERP · traceability | harvest, stock, shipment, client |
| Rules engine | crop, variety, phenological stage, conditions, applicable protocol |
| Plot · water | parcel, irrigation and soil context |

The trunk passes five controls — **identity, provenance, integrity, permissions and quality** — before data reaches the brain. The brain coordinates; it does not own the data or command the farm.

## 02 · Decisions descend (simulation)

1. **Policy gates:** outputs pass three grounding thresholds — G1 ≥ 0.18 (6 openings), G2 ≥ 0.36 (5 openings), G3 ≥ 0.52 (4 openings).
2. **Abstention:** items below a threshold abstain, leave a trace and are not promoted.
3. **Simulated review queue:** a deterministic timed-release rule every 14 steps. No human actor, approval or rejection is modelled.
4. **Anchored evidence:** released items become synthetic events anchored in a synthetic, non-georeferenced territory and chained with SHA-256. A simulated offline item stays pending until the reconciliation path completes.
5. **Destination:** evidence reaches the accountable decision owner. It is not an automated action.

Governed cycle: `Capture → Validate → Normalise → Persist → Rules / AI → Explainable decision → Evidence`.

## Questions every datum must answer

1. **Who produced it?** Device or operator identity.
2. **When?** Observed time and received time, kept separate.
3. **How?** Method, calibration state and declared quality.
4. **Was it altered?** Integrity hash and provenance chain.
5. **Who may use it, and for what?** Owner permissions and purpose.
6. **Which decision used it?** The recommendation, its reasons, the rules applied and the data referenced.
7. **Who is accountable?** The human owner who accepts or rejects the recommendation.

## Motion and static rendering

- The SVG contains CSS motion (`offset-path`, keyframes), with no JavaScript, external fonts or embedded images. GitHub's SVG rendering does not currently support inline animation; in the profile and repository views this asset is a static diagram.
- The static fallback shows the full diagram, including all pipeline stages and evidence paths, whether animation runs or not. Supporting SVG viewers stop motion when the system requests reduced motion (`prefers-reduced-motion: reduce`).
- The particles are illustrative motion, not measurements. No counter, rate or volume in the image comes from a real system.

## Boundaries

This is a static-first concept of a target architecture and a synthetic simulation model, with optional motion only in supporting viewers. It is not a live data feed, an executable public demo, a deployed orchestrator, a human-approval workflow, a field-validated system or a production system. No real providers, cadastral data, field validation, autonomous decisions or operational readiness are claimed. See [public status](PROFILE-STATUS-DETAIL.md).

## Provenance of the asset

- Vector reconstruction drawn from the owner's description of a control-room image, fused with the Governed Flow model. The original raster image is not published here.
- Deterministic layout; seed `509055`, the Governed Flow reference seed, used only for placement.
- SHA-256 (EN): `ec0460f1aee69673d5e63faa81065150a4795a87d3efccea36f9eb0659d1007a`
- SHA-256 (ES): `66b19709c2f0405c37fbc504cca870f6e7a6a6c3e8971da54bb8534582662db3`

---

## Resumen en español

**Simulación · fuentes sintéticas · experimental · sin claim de producción.** La ilustración animada fusiona el Flujo Gobernado con el cerebro orquestador:

- **01 · El dato sube.** Seis fuentes gobernadas envían dato por raíces. El dato supera **identidad, procedencia, integridad, permisos y calidad** antes de llegar al cerebro, que coordina sin apropiarse del dato.
- **02 · La decisión baja (simulación).** Hay tres compuertas de *grounding* (0,18 → 0,36 → 0,52). Lo que no alcanza el umbral se abstiene y deja huella. La cola simulada libera cada 14 pasos, sin actor humano. Los eventos sintéticos se anclan en un territorio sintético y se encadenan con SHA-256.
- **Movimiento y vista estática:** CSS dentro del SVG, sin JavaScript. GitHub lo presenta como diagrama estático; los visores compatibles respetan `prefers-reduced-motion`. Las partículas son ilustrativas, no medidas.
- **Límites:** no es un flujo de datos en vivo, una demo ejecutable, un orquestador desplegado ni un sistema validado en campo o en producción ([estado público](PROFILE-STATUS-DETAIL.es.md)).
