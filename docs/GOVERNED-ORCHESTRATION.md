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
- SHA-256 (EN): `c79bb73b9976dd128f0716164b4d2387f036fbd1f397949197447455754e9bcf`
- SHA-256 (ES): `74e2af60f3b29e7d5d4b58641f79dfc63bf69d9ed859b879dd77ddd89e203f03`

---

## Resumen en español

**Simulación · fuentes sintéticas · experimental · sin claim de producción.** La ilustración animada fusiona el Flujo Gobernado con el cerebro orquestador:

- **01 · El dato sube.** Seis fuentes gobernadas envían dato por raíces. El dato supera **identidad, procedencia, integridad, permisos y calidad** antes de llegar al cerebro, que coordina sin apropiarse del dato.
- **02 · La decisión baja (simulación).** Hay tres compuertas de *grounding* (0,18 → 0,36 → 0,52). Lo que no alcanza el umbral se abstiene y deja huella. La cola simulada libera cada 14 pasos, sin actor humano. Los eventos sintéticos se anclan en un territorio sintético y se encadenan con SHA-256.
- **Movimiento y vista estática:** CSS dentro del SVG, sin JavaScript. GitHub lo presenta como diagrama estático; los visores compatibles respetan `prefers-reduced-motion`. Las partículas son ilustrativas, no medidas.
- **Límites:** no es un flujo de datos en vivo, una demo ejecutable, un orquestador desplegado ni un sistema validado en campo o en producción ([estado público](PROFILE-STATUS-DETAIL.es.md)).


## Reference-brain fidelity and browser motion — 2026-10-17

The target is the animated footer, not the header. The original header/logo is unchanged. The owner-provided LinkedIn reference remains the visual source; no LinkedIn account, banner or post is edited.

The earlier contour trace simplified folds and colours and was rejected. It is replaced by native SVG geometry carrying the **original RGB sample values** of crop x=610, y=97, width=180, height=130 from the 1375×343 supplied image. The 23,400 source-grid samples were rendered at native size and compared with the reference: zero differing RGB samples, maximum RGB error zero **before outline clipping, display scaling and illustrative overlays**. This is a lossless source-grid representation, not newly invented high-resolution anatomy or a universally pixel-identical result at every zoom. The original crop is only 180×130 pixels.

No embedded raster, scripts or external-image fetches are required. Native colour-cell geometry is larger (about 823 kB per SVG); this is the explicit fidelity/size tradeoff. Existing vector flows, pulses, controls, abstention, queue and evidence paths remain. Original animation CSS is byte-identical, and all original motion-class counts are retained: mv=56, ab=12, pu=10, ck=5, rg=4, ch=1, rc=1, st=7. One additional breathing glow is included.

**Observed browser QA:** Chromium 153.0.8010.0 executed 109 animations in the original and 110 in the proposed design. All 12 sampled moving elements changed position in each; pulses changed opacity. The proposed SVG also animated as an img with the GitHub-raw-style CSP: default-src 'none'; style-src 'unsafe-inline'; sandbox. Standalone reduced-motion emulation stopped all animations. For the img case, per-page Playwright emulation did not settle motion in this environment; a separate fresh Chromium process with force-prefers-reduced-motion produced identical frames, while the top document reported its preference as false. This harness distinction is recorded, not presented as universal browser/accessibility certification.

A ten-second preview is provided as GIF (8 fps, 1120×700) and MP4 (10 fps, 1600×1000), sampled from the browser's CSS animation timeline. These compressed previews are for visual review, not the RGB-fidelity proof. QA metadata and asset hashes are in docs/GOVERNED-ORCHESTRATION-VISUAL-QA-2026-10-17.json.

GitHub/LinkedIn links remain next to the footer. The illustration and timing are conceptual/synthetic, not live data, measured KPIs, independent review, field validation, production or autonomous decision authority. The proposal remains unmerged pending owner visual approval.
