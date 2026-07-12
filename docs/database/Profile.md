# Profile

## Descripción

Representa la identidad de una persona dentro de una cuenta de AtlasStream.

Cada perfil mantiene su propia experiencia de uso, permitiendo que varias personas compartan una misma cuenta sin mezclar su información.

—

## Responsabilidades

- Personalizar la experiencia del usuario.
- Administrar favoritos.
- Administrar el historial de reproducción.
- Administrar “Continuar viendo”.
- Guardar preferencias del usuario.

—

## Campos

- id
- userId
- name
- avatar
- language
- isKidsProfile
- createdAt
- updatedAt

—

## Relaciones

Cada Profile puede tener:

- Muchos Favorites.
- Un History.
- Muchos Continue Watching.
- Muchas Playlists (futuro).
- Muchas Recommendations.

Pertenece a un único User.

—

## Reglas de negocio

- Un User puede tener uno o varios Profiles.
- Cada Profile tiene su propio historial.
- Cada Profile tiene sus propios favoritos.
- Cada Profile tiene sus propias recomendaciones.
- Los perfiles infantiles solo muestran contenido permitido.