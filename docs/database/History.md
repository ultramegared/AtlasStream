# History

## Descripción

Representa el historial de reproducción de un Profile.

Permite registrar el contenido visualizado para ofrecer una mejor experiencia personalizada.

—

## Responsabilidades

- Registrar el contenido visto.
- Guardar la fecha de reproducción.
- Registrar el progreso alcanzado.
- Permitir consultar el historial del perfil.

—

## Campos

- id
- profileId
- contentId
- watchedAt
- progress
- completed

—

## Relaciones

Cada History pertenece a un Profile.

Cada History referencia un Content.

—

## Reglas de negocio

- El historial pertenece al Profile, no al User.
- Un contenido puede aparecer varias veces si el usuario lo reproduce nuevamente.
- Si un contenido se completa, el progreso será del 100%.
- El historial puede utilizarse para generar recomendaciones.