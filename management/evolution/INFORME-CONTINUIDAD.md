# Informe de continuidad — CASTÚO-SYSTEM

**Fecha:** 17 de agosto de 2026  
**Repositorio:** [`Traky12/castuo-evolution`](https://github.com/Traky12/castuo-evolution)

## Estado alcanzado

Se continuó la ejecución del plan desde el punto pendiente y se actualizaron los artefactos del Portfolio Control Plane con trazabilidad real de una implementación edge. La capacidad de ingestión y continuidad offline ya no utiliza únicamente `path: unknown`: se vincula al commit `b2ab7849ef3434f87d96c40961a513eb834c6d29` de `castuo-agro-edge` y a las rutas `gateway/mqtt/main.py`, `gateway/mqtt/db.py` y `gateway/mqtt/sync.py`.

La revisión del código confirmó que el gateway dispone de persistencia SQLite, cola de pendientes ordenada, envío al endpoint `/api/v1/sensores/ingest`, cabeceras de identidad de dispositivo, reconocimiento de respuestas 200/201/202 y backoff exponencial. También confirmó que la resolución de conflictos, las pruebas de partición real, el backend real, MQTT real y la evidencia de campo todavía no están demostrados.

## Cambios adicionales publicados

| Área | Cambio | Estado |
|---|---|---|
| Trazabilidad | Rutas y commit reales de `castuo-agro-edge` en `capabilities.yaml`, `evidence.yaml` y el pasaporte | Publicado |
| Evidencia runtime | `portfolio/evidence/edge-runtime-slice-001.json` | Publicado; verificado dentro de alcance local |
| Prueba runtime local | `tests/edge_runtime_slice_test.py` y prueba contra SQLite/backend simulado | Pass local |
| Vendor independence | Dos adaptadores contra el mismo contrato de evento | Pass sintético; no equivale a segundo proveedor desplegado |
| Observabilidad | Mapeo documental a `goldfish/monitoring/prometheus` y `monitoring/grafana` | Documentado; no verificado en runtime |
| CI portable | Test de evidencia sin dependencia de rutas del sandbox | Publicado |

## Validación local final

```text
PORTFOLIO_VALIDATION:PASS
mode=semantic
repositories=16 capabilities=6 contracts=6 evidence=7 risks=6

VERTICAL_SLICE:PASS
scope=synthetic_fixture_only
claim_status=NOT_CLAIMED_UNTIL_RUNTIME_PASS

EDGE_RUNTIME_EVIDENCE:PASS
scope=portable_evidence_contract_check
runtime_execution=verified_locally_against_source_commit

VENDOR_INDEPENDENCE:PASS
implementations=edge_adapter,in_memory_reference
scope=synthetic_contract_parity

EDGE_RUNTIME_SLICE:PASS
scope=local_sqlite_and_fake_backend
evidence=enqueue_pending_sync_ack
```

## CI remoto

El workflow remoto sigue activándose, pero los runs terminan en `failure` aproximadamente en el arranque del job. La consulta disponible devuelve el job sin pasos registrados y no permite leer las anotaciones o logs porque el token actual no dispone de `checks:read`; GitHub informa explícitamente de un `403 Forbidden` al solicitar anotaciones. Por ello, el problema queda clasificado como **bloqueo de diagnóstico de Actions/permisos o runner**, no como un fallo funcional atribuido sin evidencia al código.

No se ha usado `continue-on-error` para ocultar el fallo. El gate remoto no se declara verde hasta disponer de logs o una sesión con permisos suficientes.

## Promoción de madurez

La capacidad offline continúa en `N1/G0` a efectos de promoción de sistema, aunque tiene evidencia `VERIFIED` dentro del alcance `local_runtime_with_fake_backend`. Esta separación es intencionada: la prueba demuestra la cadena SQLite→pending→POST→ack, pero no demuestra operación de campo, resiliencia ante partición, resolución de conflictos ni operación productiva.

La vendor independence continúa en `N1/G0`: se demostró paridad sintética entre un adaptador edge y una referencia en memoria, pero falta una segunda implementación desplegable o un proveedor alternativo ejecutado bajo el mismo contrato.

La observabilidad continúa en `N1/G0`, con estado `DOCUMENTED_CANDIDATE`; aún faltan métricas runtime, alertas, SLO, trazas y evidencia de despliegue.

## Siguientes bloqueos reales

El siguiente paso técnico prioritario es obtener acceso de lectura a logs/anotaciones de GitHub Actions y corregir el runner o permisos. Después debe ejecutarse el vertical slice con MQTT/backend reales o un entorno de integración reproducible, añadir pruebas de desconexión, duplicación, reordenación y conflicto, y generar un Evidence Passport con hash y configuración.

La primera promoción defendible sería hacia N2/G1 únicamente cuando el contrato y el artefacto runtime estén enlazados a commits, el gate remoto sea reproducible y una revisión independiente confirme el alcance. No se debe promocionar N3, N4, N5 ni N6 por las pruebas sintéticas actuales.

## Referencias

[1]: https://github.com/Traky12/castuo-evolution/tree/main/portfolio "CASTÚO Portfolio Control Plane"
[2]: https://github.com/Traky12/castuo-agro-edge/tree/b2ab7849ef3434f87d96c40961a513eb834c6d29 "Inspected castuo-agro-edge commit"
[3]: https://github.com/Traky12/castuo-evolution/actions/workflows/portfolio-control-plane.yml "Portfolio CI workflow"
