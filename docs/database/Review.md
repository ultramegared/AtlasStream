# Review

## Descripción

Representa la opinión que un Profile realiza sobre un contenido dentro de AtlasStream.

Una Review permite conocer el nivel de satisfacción del usuario mediante una calificación y un comentario opcional.

—

## Responsabilidades

- Registrar la calificación del usuario.
- Registrar un comentario opcional.
- Permitir editar una reseña.
- Mostrar la opinión del usuario.
- Contribuir a la calificación promedio del contenido.

—

## Campos

- id
- profileId
- contentId
- rating
- comment
- createdAt
- updatedAt

—

## Relaciones

Cada Review pertenece a un Profile.

Cada Review pertenece a un Content.

—

## Reglas de negocio

- Un Profile solo puede crear una Review por cada Content.
- La calificación debe estar entre 1 y 5 estrellas.
- El comentario es opcional.
- Una Review puede actualizarse posteriormente.
- Si una Review es eliminada, el promedio del contenido debe recalcularse.

—

## Casos de uso

- Calificar una película o serie.
- Escribir una opinión sobre un contenido.
- Mostrar las reseñas de los usuarios.
- Calcular la calificación promedio de un contenido.
- Mostrar el contenido mejor valorado de la plataforma.