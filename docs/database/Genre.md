# Genre

## Descripción

Representa un género de contenido dentro de AtlasStream.

Los géneros permiten clasificar películas, series y otros contenidos para facilitar la búsqueda, organización y recomendaciones.

—

## Responsabilidades

- Clasificar contenidos.
- Facilitar filtros de búsqueda.
- Ayudar al motor de recomendaciones.
- Organizar el catálogo.

—

## Campos

- id
- name
- description
- image
- isActive
- createdAt
- updatedAt

—

## Relaciones

Un Genre puede estar asociado a muchos Content.

Un Content puede pertenecer a uno o varios Genres.

—

## Reglas de negocio

- El nombre del género debe ser único.
- Un contenido puede pertenecer a múltiples géneros.
- Un género puede existir aunque aún no tenga contenido asociado.
- Solo los géneros activos se muestran en la plataforma.