/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 017_create_continue_watching_table.sql
 * Description: Creates the continue watching table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: continue_watching
-- Description:
-- Stores the playback progress for movies and episodes.
-- ============================================================

CREATE TABLE IF NOT EXISTS continue_watching (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    profile_id UUID NOT NULL,

    movie_id UUID,

    episode_id UUID,

    progress_seconds INTEGER NOT NULL DEFAULT 0,

    duration_seconds INTEGER NOT NULL,

    completed BOOLEAN NOT NULL DEFAULT FALSE,

    last_watched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_continue_watching_profile
        FOREIGN KEY (profile_id)
        REFERENCES profiles(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_continue_watching_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_continue_watching_episode
        FOREIGN KEY (episode_id)
        REFERENCES episodes(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_continue_watching_content
        CHECK (
            (movie_id IS NOT NULL AND episode_id IS NULL)
            OR
            (movie_id IS NULL AND episode_id IS NOT NULL)
        ),

    CONSTRAINT chk_continue_watching_progress
        CHECK (
            progress_seconds >= 0
            AND duration_seconds > 0
            AND progress_seconds <= duration_seconds
        )

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_continue_watching_profile
ON continue_watching(profile_id);

CREATE INDEX IF NOT EXISTS idx_continue_watching_movie
ON continue_watching(movie_id);

CREATE INDEX IF NOT EXISTS idx_continue_watching_episode
ON continue_watching(episode_id);

CREATE INDEX IF NOT EXISTS idx_continue_watching_last_watched
ON continue_watching(last_watched_at DESC);

CREATE UNIQUE INDEX IF NOT EXISTS uq_continue_watching_movie
ON continue_watching(profile_id, movie_id)
WHERE movie_id IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS uq_continue_watching_episode
ON continue_watching(profile_id, episode_id)
WHERE episode_id IS NOT NULL;

COMMIT;