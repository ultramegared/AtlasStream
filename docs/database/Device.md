# Device

## Descripción

Representa un dispositivo autorizado para acceder a una cuenta de AtlasStream.

Permite controlar los dispositivos registrados y las sesiones activas.

—

## Responsabilidades

- Registrar un dispositivo.
- Identificar el tipo de dispositivo.
- Controlar el último acceso.
- Permitir cerrar sesiones específicas.

—

## Campos

- id
- userId
- name
- type
- operatingSystem
- appVersion
- lastLogin
- isActive
- createdAt
- updatedAt

—

## Relaciones

Cada Device pertenece a un User.

Un User puede registrar múltiples Devices.

—

## Reglas de negocio

- La cantidad de dispositivos permitidos depende del SubscriptionPlan.
- Un dispositivo puede desactivarse sin eliminar su historial.
- Un User puede cerrar la sesión de cualquier Device registrado.