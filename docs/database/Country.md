# Country

## Descripción

Representa un país relacionado con un contenido dentro de AtlasStream.

Un Country permite identificar el país de origen de películas, series, documentales u otros contenidos, facilitando la organización y los filtros de búsqueda.

—

## Responsabilidades

- Identificar el país de origen del contenido.
- Organizar el catálogo por país.
- Facilitar búsquedas y filtros geográficos.
- Mostrar información del país en la ficha del contenido.

—

## Campos

- id
- name
- isoCode
- flag
- isActive
- createdAt
- updatedAt

—

## Relaciones

Un Country puede estar relacionado con muchos Content.

Un Content puede estar relacionado con uno o varios Countries.

—

## Reglas de negocio

- El nombre del país debe ser único.
- Se utilizará el código ISO para mantener un estándar internacional.
- Un contenido puede tener más de un país de origen.
- Solo los países activos estarán disponibles para nuevos contenidos.

—

## Casos de uso

- Buscar contenido por país.
- Mostrar producciones de un país específico.
- Filtrar el catálogo por país de origen.