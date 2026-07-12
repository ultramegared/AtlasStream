# Studio

## Descripción

Representa una empresa responsable de producir, distribuir o licenciar contenido dentro de AtlasStream.

Un Studio puede participar en la producción de películas, series, documentales y otros contenidos.

—

## Responsabilidades

- Identificar el estudio.
- Administrar la información del estudio.
- Relacionar el estudio con los contenidos.
- Facilitar búsquedas por estudio.

—

## Campos

- id
- name
- description
- logo
- website
- foundedDate
- headquarters
- isActive
- createdAt
- updatedAt

—

## Relaciones

Un Studio puede estar relacionado con muchos Content.

Un Content puede pertenecer a uno o varios Studios.

—

## Reglas de negocio

- El nombre del estudio debe ser único.
- Un estudio puede producir múltiples contenidos.
- Un contenido puede estar asociado a varios estudios.
- Un estudio puede mantenerse registrado aunque no tenga contenido disponible temporalmente.

—

## Casos de uso

- Buscar contenidos por estudio.
- Mostrar todos los contenidos producidos por un estudio.
- Mostrar la información del estudio en la ficha del contenido.