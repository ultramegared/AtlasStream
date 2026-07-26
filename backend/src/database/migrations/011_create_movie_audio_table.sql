/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 011_create_movie_audio_table.sql
 * Description: Creates the movie audio relationship table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: movie_audio
-- Description:
-- Associates movies with their available audio languages.
-- ============================================================

CREATE TABLE IF NOT EXISTS movie_audio (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    movie_id UUID NOT NULL,

    audio_language_id UUID NOT NULL,

    is_default BOOLEAN NOT NULL DEFAULT FALSE,

    codec VARCHAR(50),

    channels VARCHAR(20),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_movie_audio_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_movie_audio_language
        FOREIGN KEY (audio_language_id)
        REFERENCES audio_languages(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_movie_audio
        UNIQUE (movie_id, audio_language_id)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_movie_audio_movie
ON movie_audio(movie_id);

CREATE INDEX IF NOT EXISTS idx_movie_audio_language
ON movie_audio(audio_language_id);

CREATE INDEX IF NOT EXISTS idx_movie_audio_default
ON movie_audio(is_default);

COMMIT;