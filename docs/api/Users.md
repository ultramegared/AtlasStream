# Users API

## Descripción

Este módulo administra la información del usuario autenticado.

—

## Endpoints

### GET /users/me

Obtiene la información del usuario actualmente autenticado.

Response

```json
{
  “id”: “”,
  “name”: “”,
  “email”: “”,
  “subscription”: {},
  “profiles”: []
}
```

—

### PUT /users/me

Actualizar información personal.

Request

```json
{
  “name”: “”,
  “email”: “”
}
```

—

### PUT /users/password

Actualizar contraseña.

Request

```json
{
  “currentPassword”: “”,
  “newPassword”: “”
}
```

—

### DELETE /users/me

Eliminar la cuenta del usuario.

—

## Seguridad

Todos los endpoints requieren autenticación mediante JWT.