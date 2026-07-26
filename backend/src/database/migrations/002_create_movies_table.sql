/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 002_create_movies_table.sql
 * Description: Creates the movies table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: movies
-- Description:
-- Stores all movie metadata available in AtlasStream.
-- ============================================================

CREATE TABLE IF NOT EXISTS movies (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(255) NOT NULL,

    original_title VARCHAR(255),

    slug VARCHAR(255) NOT NULL,

    overview TEXT NOT NULL,

    tagline VARCHAR(255),

    poster_url TEXT NOT NULL,

    backdrop_url TEXT NOT NULL,

    logo_url TEXT,

    trailer_url TEXT,

    video_url TEXT,

    release_date DATE,

    runtime SMALLINT,

    imdb_rating NUMERIC(3,1),

    atlas_rating NUMERIC(3,1) DEFAULT 0.0,

    maturity_rating VARCHAR(20),

    popularity NUMERIC(10,2) DEFAULT 0,

    views BIGINT DEFAULT 0,

    featured BOOLEAN NOT NULL DEFAULT FALSE,

    trending BOOLEAN NOT NULL DEFAULT FALSE,

    recommended BOOLEAN NOT NULL DEFAULT FALSE,

    premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_movies_slug UNIQUE (slug)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_movies_title
ON movies(title);

CREATE INDEX IF NOT EXISTS idx_movies_slug
ON movies(slug);

CREATE INDEX IF NOT EXISTS idx_movies_release_date
ON movies(release_date);

CREATE INDEX IF NOT EXISTS idx_movies_featured
ON movies(featured);

CREATE INDEX IF NOT EXISTS idx_movies_trending
ON movies(trending);

CREATE INDEX IF NOT EXISTS idx_movies_recommended
ON movies(recommended);

CREATE INDEX IF NOT EXISTS idx_movies_active
ON movies(is_active);

COMMIT;