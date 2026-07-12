# Language

## Descripción

Representa un idioma disponible dentro de AtlasStream.

Los idiomas se utilizan para el audio, subtítulos y la información mostrada en la plataforma.

—

## Responsabilidades

- Identificar un idioma.
- Organizar los idiomas disponibles.
- Permitir seleccionar audio y subtítulos.
- Facilitar filtros por idioma.

—

## Campos

- id
- name
- nativeName
- isoCode
- flag
- isActive
- createdAt
- updatedAt

—

## Relaciones

Un Language puede estar relacionado con muchos Content.

Un Content puede estar disponible en uno o varios idiomas.

—

## Reglas de negocio

- El código ISO debe ser único.
- Un contenido puede tener múltiples idiomas.
- Un idioma puede utilizarse para audio, subtítulos o ambos.
- Solo los idiomas activos estarán disponibles para nuevos contenidos.

—

## Casos de uso

- Filtrar contenido por idioma.
- Seleccionar el idioma del audio.
- Seleccionar el idioma de los subtítulos.
- Mostrar el idioma original del contenido.