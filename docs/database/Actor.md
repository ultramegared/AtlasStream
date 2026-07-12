# Actor

## Descripción

Representa a una persona que participa en uno o varios contenidos dentro de AtlasStream.

Un Actor puede formar parte de películas, series, documentales u otros contenidos disponibles en la plataforma.

—

## Responsabilidades

- Identificar al actor.
- Mostrar información biográfica.
- Relacionar al actor con los contenidos donde participa.
- Facilitar búsquedas por actor.

—

## Campos

- id
- firstName
- lastName
- stageName
- biography
- birthDate
- nationality
- photo
- isActive
- createdAt
- updatedAt

—

## Relaciones

Un Actor puede participar en muchos Content.

Un Content puede tener muchos Actors.

—

## Reglas de negocio

- Un Actor puede aparecer en múltiples contenidos.
- Un contenido puede tener uno o varios actores.
- El perfil del actor puede mostrarse al usuario para explorar su filmografía.