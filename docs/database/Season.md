# Season

## Descripción

Representa una temporada perteneciente a una serie dentro de AtlasStream.

Una Season agrupa varios episodios y organiza el contenido cronológicamente.

—

## Responsabilidades

- Organizar episodios.
- Identificar el número de temporada.
- Mostrar información de la temporada.
- Facilitar la navegación entre temporadas.

—

## Campos

- id
- contentId
- seasonNumber
- title
- description
- poster
- releaseDate
- createdAt
- updatedAt

—

## Relaciones

Cada Season pertenece a un Content.

Una Season puede tener muchos Episodes.

—

## Reglas de negocio

- Solo los Content de tipo “series” pueden tener Seasons.
- El número de temporada debe ser único dentro de la misma serie.
- Una Season puede existir aunque todavía no tenga episodios publicados.

—

## Casos de uso

- Mostrar todas las temporadas de una serie.
- Navegar entre temporadas.
- Mostrar la información de una temporada.