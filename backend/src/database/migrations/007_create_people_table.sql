/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 007_create_people_table.sql
 * Description: Creates the people table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: people
-- Description:
-- Stores information about actors, directors, producers,
-- writers and other people related to media content.
-- ============================================================

CREATE TABLE IF NOT EXISTS people (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100),

    stage_name VARCHAR(200),

    biography TEXT,

    birth_date DATE,

    death_date DATE,

    place_of_birth VARCHAR(255),

    profile_image_url TEXT,

    cover_image_url TEXT,

    popularity NUMERIC(10,2) NOT NULL DEFAULT 0,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_people_stage_name
        UNIQUE (stage_name)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_people_first_name
ON people(first_name);

CREATE INDEX IF NOT EXISTS idx_people_last_name
ON people(last_name);

CREATE INDEX IF NOT EXISTS idx_people_stage_name
ON people(stage_name);

CREATE INDEX IF NOT EXISTS idx_people_active
ON people(is_active);

COMMIT;