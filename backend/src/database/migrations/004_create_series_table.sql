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
 * Crea la tabla principal de series.
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: series
-- Description:
-- Almacena toda la información de las series
-- disponibles dentro de AtlasStream.
-- ============================================================

CREATE TABLE series (

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

    release_year SMALLINT NOT NULL,

    end_year SMALLINT,

    total_seasons SMALLINT DEFAULT 1,

    total_episodes INTEGER DEFAULT 0,

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

CREATE INDEX idx_series_slug
ON series(slug);

CREATE INDEX idx_series_featured
ON series(featured);

CREATE INDEX idx_series_trending
ON series(trending);

CREATE INDEX idx_series_recommended
ON series(recommended);

CREATE INDEX idx_series_active
ON series(active);

CREATE INDEX idx_series_release_year
ON series(release_year);

COMMIT;