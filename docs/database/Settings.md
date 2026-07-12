# Settings

## Descripción

Representa las preferencias de configuración de un Profile dentro de AtlasStream.

Permite personalizar la experiencia de uso sin afectar a otros perfiles de la misma cuenta.

—

## Responsabilidades

- Configurar el idioma.
- Configurar el tema de la aplicación.
- Configurar la calidad de reproducción.
- Configurar las preferencias de notificaciones.
- Configurar opciones de reproducción automática.

—

## Campos

- id
- profileId
- language
- theme
- playbackQuality
- autoplayEnabled
- notificationsEnabled
- subtitlesEnabled
- createdAt
- updatedAt

—

## Relaciones

Cada Settings pertenece a un único Profile.

—

## Reglas de negocio

- Cada Profile posee una única configuración.
- Las preferencias de un Profile no afectan a otros perfiles.
- Los cambios deben aplicarse inmediatamente cuando sea posible.