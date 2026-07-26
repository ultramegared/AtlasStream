/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 005_create_seasons_table.sql
 * Description: Creates the seasons table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: seasons
-- Description:
-- Stores all seasons that belong to a TV series.
-- ============================================================

CREATE TABLE IF NOT EXISTS seasons (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    series_id UUID NOT NULL,

    season_number SMALLINT NOT NULL,

    title VARCHAR(255),

    overview TEXT,

    poster_url TEXT,

    trailer_url TEXT,

    air_date DATE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_seasons_series
        FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_series_season
        UNIQUE (series_id, season_number)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_seasons_series
ON seasons(series_id);

CREATE INDEX IF NOT EXISTS idx_seasons_number
ON seasons(season_number);

CREATE INDEX IF NOT EXISTS idx_seasons_active
ON seasons(is_active);

COMMIT;