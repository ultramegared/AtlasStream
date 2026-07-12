# Episode

## Descripción

Representa un episodio perteneciente a una temporada de una serie dentro de AtlasStream.

Cada Episode contiene la información necesaria para su reproducción y organización dentro de una temporada.

—

## Responsabilidades

- Identificar un episodio.
- Organizar los episodios dentro de una temporada.
- Permitir la reproducción.
- Mostrar información del episodio.

—

## Campos

- id
- seasonId
- episodeNumber
- title
- description
- duration
- thumbnail
- videoUrl
- releaseDate
- createdAt
- updatedAt

—

## Relaciones

Cada Episode pertenece a una Season.

Una Season puede contener muchos Episodes.

—

## Reglas de negocio

- Solo una Season puede contener Episodes.
- El número del episodio debe ser único dentro de la misma temporada.
- Un Episode debe pertenecer obligatoriamente a una Season.
- Un Episode puede publicarse en una fecha distinta a la de la temporada.

—

## Casos de uso

- Mostrar los episodios de una temporada.
- Reproducir un episodio.
- Continuar viendo un episodio.
- Mostrar información del episodio.