# User

## Descripción

Representa una cuenta registrada dentro de AtlasStream.

Un User es el propietario de la cuenta y permite autenticarse en la plataforma.

No representa a una persona que consume contenido; esa responsabilidad pertenece a los Profiles.

—

## Responsabilidades

- Iniciar sesión.
- Administrar la cuenta.
- Administrar los perfiles.
- Administrar la suscripción.
- Administrar los dispositivos autorizados.

—

## Campos

- id
- email
- password
- role
- status
- createdAt
- updatedAt
- lastLogin

—

## Relaciones

Un User puede tener:

- Uno o varios Profiles.
- Una Subscription.
- Varios Devices.

No almacena directamente:

- Favoritos.
- Historial.
- Continue Watching.
- Configuración del usuario.