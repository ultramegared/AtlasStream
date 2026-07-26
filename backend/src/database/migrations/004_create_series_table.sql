/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 004_create_series_table.sql
 * Description: Creates the series table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: series
-- Description:
-- Stores all TV series metadata available in AtlasStream.
-- ============================================================

CREATE TABLE IF NOT EXISTS series (

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

    first_air_date DATE,

    last_air_date DATE,

    imdb_rating NUMERIC(3,1),

    atlas_rating NUMERIC(3,1) NOT NULL DEFAULT 0.0,

    maturity_rating VARCHAR(20),

    popularity NUMERIC(10,2) NOT NULL DEFAULT 0,

    views BIGINT NOT NULL DEFAULT 0,

    featured BOOLEAN NOT NULL DEFAULT FALSE,

    trending BOOLEAN NOT NULL DEFAULT FALSE,

    recommended BOOLEAN NOT NULL DEFAULT FALSE,

    premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_series_slug UNIQUE (slug)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_series_title
ON series(title);

CREATE INDEX IF NOT EXISTS idx_series_slug
ON series(slug);

CREATE INDEX IF NOT EXISTS idx_series_first_air_date
ON series(first_air_date);

CREATE INDEX IF NOT EXISTS idx_series_featured
ON series(featured);

CREATE INDEX IF NOT EXISTS idx_series_trending
ON series(trending);

CREATE INDEX IF NOT EXISTS idx_series_recommended
ON series(recommended);

CREATE INDEX IF NOT EXISTS idx_series_active
ON series(is_active);

COMMIT;