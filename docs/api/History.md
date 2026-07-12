# History API

## Descripción

Este módulo administra el historial de reproducción de cada perfil.

—

## Endpoints

### GET /history

Obtiene el historial del perfil.

Filtros

- date
- category
- contentType

—

### POST /history

Registrar reproducción.

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

### DELETE /history/:id

Eliminar un elemento del historial.

—

### DELETE /history

Eliminar todo el historial.

—

## Reglas

- El historial pertenece al perfil activo.
- Se actualiza automáticamente durante la reproducción.
- El progreso se almacena en segundos.