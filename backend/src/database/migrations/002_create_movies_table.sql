/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Schema Version: 1.0.0
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Crea la tabla principal de películas.
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: movies
-- Description:
-- Almacena toda la información de las películas
-- disponibles dentro de AtlasStream.
-- ============================================================

CREATE TABLE movies (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(255) NOT NULL,

    original_title VARCHAR(255),

    slug VARCHAR(255) NOT NULL UNIQUE,

    description TEXT NOT NULL,

    short_description VARCHAR(500),

    poster_url TEXT NOT NULL,

    backdrop_url TEXT NOT NULL,

    logo_url TEXT,

    trailer_url TEXT,

    video_url TEXT,

    release_year SMALLINT NOT NULL,

    duration SMALLINT NOT NULL,

    imdb_rating NUMERIC(3,1),

    atlas_rating NUMERIC(3,1) DEFAULT 0,

    maturity_rating VARCHAR(20),

    featured BOOLEAN DEFAULT FALSE,

    trending BOOLEAN DEFAULT FALSE,

    recommended BOOLEAN DEFAULT FALSE,

    is_premium BOOLEAN DEFAULT FALSE,

    active BOOLEAN DEFAULT TRUE,

    views BIGINT DEFAULT 0,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX idx_movies_slug
ON movies(slug);

CREATE INDEX idx_movies_featured
ON movies(featured);

CREATE INDEX idx_movies_trending
ON movies(trending);

CREATE INDEX idx_movies_recommended
ON movies(recommended);

CREATE INDEX idx_movies_active
ON movies(active);

CREATE INDEX idx_movies_release_year
ON movies(release_year);

CREATE INDEX idx_movies_imdb_rating
ON movies(imdb_rating);

COMMIT;