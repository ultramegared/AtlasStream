# AtlasStream Database Design

## Users

Responsabilidad:
Almacenar la información de los usuarios.

Campos principales:
- id
- name
- email
- password
- avatar
- accountType
- createdAt

—

## Content

Responsabilidad:
Representar cualquier contenido disponible.

Tipos:
- Movie
- Series
- Live TV
- Cartoon
- Anime
- Documentary

—

## Genres

Responsabilidad:
Catálogo de géneros.

Ejemplos:
- Acción
- Comedia
- Terror
- Romance
- Infantil

—

## ContentGenres

Responsabilidad:
Relacionar un contenido con uno o varios géneros.

—

## Favorites

Responsabilidad:
Guardar los favoritos de cada usuario.

—

## ContinueWatching

Responsabilidad:
Guardar el progreso de reproducción.

—

## History

Responsabilidad:
Guardar el historial de visualización.

—

## Subscription

Responsabilidad:
Administrar el plan del usuario.

Tipos:
- Free
- Premium

—

## Payments

Responsabilidad:
Registrar los pagos realizados por los usuarios.