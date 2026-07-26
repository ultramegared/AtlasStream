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
 * Crea la tabla de temporadas de las series.
 * ----------------------------------------------------------------
 */

BEGIN;

CREATE TABLE seasons (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    series_id UUID NOT NULL,

    season_number SMALLINT NOT NULL,

    title VARCHAR(255),

    description TEXT,

    poster_url TEXT,

    trailer_url TEXT,

    release_year SMALLINT,

    total_episodes INTEGER DEFAULT 0,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_seasons_series
        FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_series_season
        UNIQUE(series_id, season_number)

);

CREATE INDEX idx_seasons_series
ON seasons(series_id);

COMMIT;