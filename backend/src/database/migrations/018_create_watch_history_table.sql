/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 018_create_watch_history_table.sql
 * Description: Creates the watch history table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: watch_history
-- Description:
-- Stores the playback history for movies and episodes.
-- ============================================================

CREATE TABLE IF NOT EXISTS watch_history (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    profile_id UUID NOT NULL,

    movie_id UUID,

    episode_id UUID,

    watched_seconds INTEGER NOT NULL DEFAULT 0,

    duration_seconds INTEGER NOT NULL,

    completed BOOLEAN NOT NULL DEFAULT FALSE,

    watched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_watch_history_profile
        FOREIGN KEY (profile_id)
        REFERENCES profiles(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_watch_history_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_watch_history_episode
        FOREIGN KEY (episode_id)
        REFERENCES episodes(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_watch_history_content
        CHECK (
            (movie_id IS NOT NULL AND episode_id IS NULL)
            OR
            (movie_id IS NULL AND episode_id IS NOT NULL)
        ),

    CONSTRAINT chk_watch_history_progress
        CHECK (
            watched_seconds >= 0
            AND duration_seconds > 0
            AND watched_seconds <= duration_seconds
        )

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_watch_history_profile
ON watch_history(profile_id);

CREATE INDEX IF NOT EXISTS idx_watch_history_movie
ON watch_history(movie_id);

CREATE INDEX IF NOT EXISTS idx_watch_history_episode
ON watch_history(episode_id);

CREATE INDEX IF NOT EXISTS idx_watch_history_watched_at
ON watch_history(watched_at DESC);

COMMIT;