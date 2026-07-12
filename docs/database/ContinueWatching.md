# Continue Watching

## Descripción

Representa el progreso actual de reproducción de un contenido para un Profile.

Permite continuar la reproducción desde el último punto donde fue detenida.

—

## Responsabilidades

- Guardar el progreso actual.
- Actualizar el tiempo de reproducción.
- Permitir reanudar el contenido.
- Eliminar el registro cuando el contenido finaliza.

—

## Campos

- id
- profileId
- contentId
- progress
- duration
- lastWatchedAt

—

## Relaciones

Cada Continue Watching pertenece a un Profile.

Cada registro referencia un Content.

—

## Reglas de negocio

- Un Profile solo puede tener un registro activo por contenido.
- Si el contenido finaliza, el registro puede eliminarse automáticamente.
- El progreso debe actualizarse constantemente durante la reproducción.