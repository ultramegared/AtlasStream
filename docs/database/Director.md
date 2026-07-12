# Director

## Descripción

Representa a una persona responsable de dirigir uno o varios contenidos dentro de AtlasStream.

Un Director puede participar en películas, series, documentales u otros contenidos disponibles en la plataforma.

—

## Responsabilidades

- Identificar al director.
- Mostrar información biográfica.
- Relacionar al director con los contenidos dirigidos.
- Facilitar búsquedas por director.

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

Un Director puede dirigir muchos Content.

Un Content puede tener uno o varios Directors.

—

## Reglas de negocio

- Un Director puede dirigir múltiples contenidos.
- Un contenido puede tener uno o varios directores.
- El perfil del director puede mostrarse al usuario para explorar su filmografía.

—

## Casos de uso

- Buscar contenidos por director.
- Mostrar la filmografía del director.
- Mostrar información del director en la ficha del contenido.