# CASTÚO-SYSTEM — Vector motion guide

## Purpose

The project uses motion as a restrained reading aid: it traces a documented path, marks connected nodes and draws attention to a reviewable result. Motion is decorative and illustrative. It never represents live telemetry, field activity, an approval, a production state or a decision.

## Playback and static fallback

- The SVG files remain self-contained vectors; no script, external font, remote stylesheet or runtime dependency is required.
- GitHub's README image renderer displays the static artwork. Open a motion-capable SVG directly in a compatible browser to see its optional CSS animation.
- Every animation has a stable visual fallback. The diagram must still communicate its full flow when animation is unavailable or disabled.
- `prefers-reduced-motion: reduce` disables continuous motion. Moving particles and flowing dashes are cues only; they are not measurements.
- Logo source files and approved derivatives are excluded from animation and remain unmodified.

## Motion-ready artwork

| Asset | Intended cue | Browser view |
|---|---|---|
| Profile header | Slow evidence-path flow and node breathing | [Open SVG](https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/profile-header.svg) |
| e3bundle | Verification path advances through the five documented steps | [Open SVG](https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/e3bundle-flow.svg) |
| Agro-edge concept | Synthetic network flow, node breathing and a quiet center glow | [Open SVG](https://raw.githubusercontent.com/Traky12/Traky12/main/assets/brand/agro-edge-concept.svg) |
| Governed flow sovereignty | Directed synthetic path and destination glow | [Open SVG](https://raw.githubusercontent.com/Traky12/Traky12/main/assets/diagrams/governed-flow-sovereignty.svg) |
| Governed orchestration | Existing simulated field-to-evidence flow; GitHub shows its static fallback | [English](https://raw.githubusercontent.com/Traky12/Traky12/main/assets/diagrams/castuo-governed-orchestration.svg) · [Spanish](https://raw.githubusercontent.com/Traky12/Traky12/main/assets/diagrams/castuo-governed-orchestration.es.svg) |

## Change review

When changing motion, review both the SVG as a still image and in a browser with animation enabled. Check readability at README display size, contrast, text wrapping and the reduced-motion preference. Keep English and Spanish diagram structure and timing aligned. Update this guide when a visual is added, removed or its cue changes.
