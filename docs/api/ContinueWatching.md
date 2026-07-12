# Continue Watching API

## Descripción

Este módulo administra la lista de contenido que el usuario dejó a medias y puede continuar viendo.

—

## Endpoints

### GET /continue-watching

Obtiene el contenido pendiente de continuar.

—

### POST /continue-watching

Registrar progreso.

Request

```json
{
  “contentId”: “”,
  “episodeId”: “”,
  “progress”: 0,
  “duration”: 0
}
```

—

### DELETE /continue-watching/:contentId

Eliminar contenido de la lista.

—

## Reglas

- Solo se agrega contenido con un progreso mayor al 5%.
- Si el contenido supera el 95%, se elimina automáticamente.
- El progreso se sincroniza entre todos los dispositivos.
- Solo pertenece al perfil activo.