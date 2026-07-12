# Content

## Descripción

Representa cualquier contenido disponible dentro de AtlasStream.

Un Content puede ser una película, una serie, un canal de televisión en vivo o cualquier otro tipo de contenido multimedia.

Es la entidad principal del catálogo de la plataforma.

—

## Responsabilidades

- Almacenar la información principal del contenido.
- Identificar el tipo de contenido.
- Permitir búsquedas.
- Permitir recomendaciones.
- Relacionarse con géneros, actores, directores y temporadas.

—

## Campos

- id
- title
- originalTitle
- description
- contentType
- releaseDate
- duration
- poster
- banner
- trailer
- ageRating
- languageId
- countryId
- studioId
- isFeatured
- isPublished
- createdAt
- updatedAt

—

## Relaciones

Cada Content puede tener:

- Uno o varios Genres.
- Uno o varios Actors.
- Uno o varios Directors.
- Un Studio.
- Un Country.
- Un Language.
- Muchas Reviews (futuro).

Si el Content es una serie:

- Tiene muchas Seasons.

Si es una película:

- No tiene Seasons.

—

## Reglas de negocio

- Todo contenido debe tener un título.
- Todo contenido pertenece a un tipo.
- Un contenido puede pertenecer a varios géneros.
- Un contenido puede tener varios actores.
- Solo las series pueden tener temporadas y episodios.
- Un contenido puede destacarse en la página principal.