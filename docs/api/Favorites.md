# Favorites API

## Descripción

Este módulo administra la lista de contenido favorito de cada perfil.

—

## Endpoints

### GET /favorites

Obtiene todos los favoritos del perfil.

—

### POST /favorites

Agregar contenido a favoritos.

Request

```json
{
  “contentId”: “”
}
```

—

### DELETE /favorites/:contentId

Eliminar contenido de favoritos.

—

## Reglas

- Los favoritos pertenecen al perfil activo.
- No se permiten elementos duplicados.
- Los cambios se sincronizan automáticamente entre dispositivos.