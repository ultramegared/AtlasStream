# Profiles API

## Descripción

Este módulo administra los perfiles de una cuenta de AtlasStream.

Una cuenta puede tener varios perfiles.

—

## Endpoints

### GET /profiles

Obtiene todos los perfiles del usuario.

Response

```json
[
  {
    “id”: “”,
    “name”: “”,
    “avatar”: “”,
    “isKids”: false,
    “language”: “es”
  }
]
```

—

### POST /profiles

Crear un nuevo perfil.

Request

```json
{
  “name”: “”,
  “avatar”: “”,
  “isKids”: false,
  “language”: “es”
}
```

—

### PUT /profiles/:id

Actualizar un perfil.

—

### DELETE /profiles/:id

Eliminar un perfil.

—

### PATCH /profiles/:id/avatar

Actualizar avatar.

—

### PATCH /profiles/:id/pin

Actualizar PIN del perfil.

—

## Reglas

- Máximo 5 perfiles por cuenta.
- Solo el propietario puede administrar perfiles.
- Los perfiles infantiles tendrán restricciones de contenido.