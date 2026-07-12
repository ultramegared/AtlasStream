# Authentication API

## Descripción

Este módulo administra la autenticación y autorización de los usuarios de AtlasStream.

—

## Endpoints

### POST /auth/register

Registrar una nueva cuenta.

Request

```json
{
  “name”: “”,
  “email”: “”,
  “password”: “”
}
```

Response

```json
{
  “success”: true,
  “message”: “Usuario registrado correctamente.”
}
```

—

### POST /auth/login

Iniciar sesión.

Request

```json
{
  “email”: “”,
  “password”: “”
}
```

Response

```json
{
  “token”: “”,
  “refreshToken”: “”,
  “user”: {}
}
```

—

### POST /auth/logout

Cerrar sesión.

—

### POST /auth/refresh

Renovar el token de acceso.

—

### POST /auth/forgot-password

Solicitar recuperación de contraseña.

—

### POST /auth/reset-password

Cambiar contraseña mediante un token temporal.