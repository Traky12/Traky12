# CASTÚO-SYSTEM Ecosystem Manager

Este directorio convierte el repositorio de perfil `Traky12` en el índice gestor del ecosistema. Su función es **catalogar, enlazar y gobernar el estado**, no sustituir las implementaciones de cada repositorio.

## Fuentes canónicas

| Dominio | Fuente canónica | Responsabilidad |
|---|---|---|
| Core | [`Castuo-system`](https://github.com/Traky12/Castuo-system) | Plataforma, dashboard y ejecución acotada |
| Gobierno | [`castuo-evolution`](https://github.com/Traky12/castuo-evolution) | Vocabulario, gates, evidencia y promoción |
| Assurance | [`Cast-o`](https://github.com/Traky12/Cast-o) | Tests, procedencia y release evidence |
| Edge | [`castuo-agro-edge`](https://github.com/Traky12/castuo-agro-edge) | Buffer offline, gateway MQTT y evidencia de dispositivo |
| Campo | [`castuo-offline-field-operations`](https://github.com/Traky12/castuo-offline-field-operations) | Flujo local, recuperación y exportación |
| Perfil | `Traky12` | Mapa público, límites de claims e índice gestor |

El catálogo completo se encuentra en [`repository-catalog.yaml`](repository-catalog.yaml). Los repositorios no presentes en el perfil deben quedar explícitamente clasificados como externos o pendientes; no se deben presentar como transferidos.

## Proyecto de seguimiento

El dashboard operativo está en [`Castuo-system/progress-dashboard`](https://github.com/Traky12/Castuo-system/tree/main/progress-dashboard). La documentación completa del plan está en [`Castuo-system/docs/evolution`](https://github.com/Traky12/Castuo-system/tree/main/docs/evolution). Este repositorio proporciona el mapa de entrada y la relación entre proyectos.

## Flujo de trabajo

Cada actualización del ecosistema debe comenzar con un cambio en la fuente canónica correspondiente. Después se actualiza el registro de evidencia con commit, alcance, método, entorno y limitaciones. Finalmente se actualizan el snapshot del dashboard y este catálogo si cambian responsabilidades o dependencias.

Los estados válidos son `CURRENT`, `TARGET`, `EXPERIMENTAL`, `PENDING` y `NOT_CLAIMED`. La actividad de un repositorio, un README o una prueba local no constituye por sí sola evidencia de operación productiva, adopción, certificación o desempeño de campo.

## Próximas decisiones

La siguiente iteración debe confirmar el estado de `goldfish`, `ctaex-iot-pilot`, `agrovision-360`, `castuo-360-v5.3`, `-Prueba-final` y `desktop-tutorial`, decidir si necesitan estar bajo el mismo perfil o si solo deben permanecer enlazados, y cerrar el gate remoto del Portfolio CI.
