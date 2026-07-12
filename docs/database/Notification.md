# Notification

## Descripción

Representa una notificación enviada a un User o Profile para informar sobre eventos importantes dentro de AtlasStream.

Las notificaciones mejoran la comunicación con el usuario y ayudan a mantenerlo informado.

—

## Responsabilidades

- Informar eventos importantes.
- Mostrar novedades de contenido.
- Informar cambios de suscripción.
- Informar eventos de seguridad.

—

## Campos

- id
- userId
- title
- message
- type
- isRead
- createdAt

—

## Relaciones

Cada Notification pertenece a un User.

Opcionalmente puede estar relacionada con un Content.

—

## Reglas de negocio

- Una notificación puede marcarse como leída.
- Las notificaciones importantes no deben eliminarse automáticamente.
- Las notificaciones promocionales pueden configurarse desde las preferencias del usuario.