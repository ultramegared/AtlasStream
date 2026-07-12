# Favorite

## Descripción

Representa un contenido que un Profile ha marcado como favorito para acceder a él rápidamente.

Los favoritos pertenecen a un Profile, no a un User.

—

## Responsabilidades

- Guardar contenido favorito.
- Permitir agregar un contenido.
- Permitir eliminar un contenido.
- Mantener la lista personalizada de cada perfil.

—

## Campos

- id
- profileId
- contentId
- createdAt

—

## Relaciones

Cada Favorite pertenece a un Profile.

Cada Favorite referencia un Content.

—

## Reglas de negocio

- Un mismo contenido solo puede agregarse una vez por Profile.
- Eliminar un Favorite no elimina el contenido.
- Cada Profile mantiene su propia lista de favoritos.