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
 * Crea la tabla de episodios.
 * ----------------------------------------------------------------
 */

BEGIN;

CREATE TABLE episodes (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    season_id UUID NOT NULL,

    episode_number SMALLINT NOT NULL,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    thumbnail_url TEXT,

    backdrop_url TEXT,

    video_url TEXT,

    trailer_url TEXT,

    duration SMALLINT,

    release_date DATE,

    imdb_rating NUMERIC(3,1),

    atlas_rating NUMERIC(3,1) DEFAULT 0,

    views BIGINT DEFAULT 0,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_episode_season
        FOREIGN KEY (season_id)
        REFERENCES seasons(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_episode_number
        UNIQUE(season_id, episode_number)

);

CREATE INDEX idx_episode_season
ON episodes(season_id);

CREATE INDEX idx_episode_active
ON episodes(active);

COMMIT;