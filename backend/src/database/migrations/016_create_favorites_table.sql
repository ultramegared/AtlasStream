/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 016_create_favorites_table.sql
 * Description: Creates the favorites table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: favorites
-- Description:
-- Stores the favorite movies and series for each profile.
-- ============================================================

CREATE TABLE IF NOT EXISTS favorites (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    profile_id UUID NOT NULL,

    movie_id UUID,

    series_id UUID,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_favorites_profile
        FOREIGN KEY (profile_id)
        REFERENCES profiles(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_favorites_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_favorites_series
        FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_favorites_content
        CHECK (
            (movie_id IS NOT NULL AND series_id IS NULL)
            OR
            (movie_id IS NULL AND series_id IS NOT NULL)
        )

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_favorites_profile
ON favorites(profile_id);

CREATE INDEX IF NOT EXISTS idx_favorites_movie
ON favorites(movie_id);

CREATE INDEX IF NOT EXISTS idx_favorites_series
ON favorites(series_id);

CREATE UNIQUE INDEX IF NOT EXISTS uq_favorites_movie
ON favorites(profile_id, movie_id)
WHERE movie_id IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS uq_favorites_series
ON favorites(profile_id, series_id)
WHERE series_id IS NOT NULL;

COMMIT;