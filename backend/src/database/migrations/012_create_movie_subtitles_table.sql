/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 012_create_movie_subtitles_table.sql
 * Description: Creates the movie subtitles relationship table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: movie_subtitles
-- Description:
-- Associates movies with their available subtitle languages.
-- ============================================================

CREATE TABLE IF NOT EXISTS movie_subtitles (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    movie_id UUID NOT NULL,

    subtitle_language_id UUID NOT NULL,

    is_default BOOLEAN NOT NULL DEFAULT FALSE,

    is_forced BOOLEAN NOT NULL DEFAULT FALSE,

    format VARCHAR(20),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_movie_subtitles_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_movie_subtitles_language
        FOREIGN KEY (subtitle_language_id)
        REFERENCES subtitle_languages(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_movie_subtitles
        UNIQUE (movie_id, subtitle_language_id)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_movie_subtitles_movie
ON movie_subtitles(movie_id);

CREATE INDEX IF NOT EXISTS idx_movie_subtitles_language
ON movie_subtitles(subtitle_language_id);

CREATE INDEX IF NOT EXISTS idx_movie_subtitles_default
ON movie_subtitles(is_default);

CREATE INDEX IF NOT EXISTS idx_movie_subtitles_forced
ON movie_subtitles(is_forced);

COMMIT;