# Content API

## Descripción

Administra todo el contenido disponible en AtlasStream.

Incluye películas, series, documentales y transmisiones futuras.

—

## Endpoints

### GET /content

Obtiene el catálogo completo.

Filtros

- category
- genre
- language
- country
- year
- rating

—

### GET /content/:id

Obtiene la información detallada de un contenido.

Incluye:

- Información general
- Temporadas
- Episodios
- Actores
- Director
- Estudio
- Reviews
- Recomendaciones

—

### GET /content/search

Buscar contenido.

Parámetros

- query
- genre
- category
- language

—

### GET /content/trending

Contenido en tendencia.

—

### GET /content/popular

Contenido más popular.

—

### GET /content/new

Últimos estrenos.

—

### GET /content/recommended

Contenido recomendado para el perfil activo.

—

## Administración

### POST /content

Crear contenido.

### PUT /content/:id

Actualizar contenido.

### DELETE /content/:id

Eliminar contenido.