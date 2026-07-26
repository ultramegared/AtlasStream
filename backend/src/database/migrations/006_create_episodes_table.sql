/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 006_create_episodes_table.sql
 * Description: Creates the episodes table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: episodes
-- Description:
-- Stores all episodes that belong to a season.
-- ============================================================

CREATE TABLE IF NOT EXISTS episodes (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    season_id UUID NOT NULL,

    episode_number SMALLINT NOT NULL,

    title VARCHAR(255) NOT NULL,

    overview TEXT,

    thumbnail_url TEXT,

    backdrop_url TEXT,

    trailer_url TEXT,

    video_url TEXT,

    air_date DATE,

    runtime SMALLINT,

    imdb_rating NUMERIC(3,1),

    atlas_rating NUMERIC(3,1) NOT NULL DEFAULT 0.0,

    views BIGINT NOT NULL DEFAULT 0,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_episodes_season
        FOREIGN KEY (season_id)
        REFERENCES seasons(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_season_episode
        UNIQUE (season_id, episode_number)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_episodes_season
ON episodes(season_id);

CREATE INDEX IF NOT EXISTS idx_episodes_number
ON episodes(episode_number);

CREATE INDEX IF NOT EXISTS idx_episodes_air_date
ON episodes(air_date);

CREATE INDEX IF NOT EXISTS idx_episodes_active
ON episodes(is_active);

COMMIT;