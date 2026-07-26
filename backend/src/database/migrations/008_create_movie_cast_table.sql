/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 008_create_movie_cast_table.sql
 * Description: Creates the movie cast relationship table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: movie_cast
-- Description:
-- Associates people with movies and defines their role.
-- ============================================================

CREATE TABLE IF NOT EXISTS movie_cast (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    movie_id UUID NOT NULL,

    person_id UUID NOT NULL,

    role VARCHAR(50) NOT NULL,

    character_name VARCHAR(255),

    billing_order SMALLINT NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_movie_cast_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_movie_cast_person
        FOREIGN KEY (person_id)
        REFERENCES people(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_movie_cast
        UNIQUE (movie_id, person_id, role)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_movie_cast_movie
ON movie_cast(movie_id);

CREATE INDEX IF NOT EXISTS idx_movie_cast_person
ON movie_cast(person_id);

CREATE INDEX IF NOT EXISTS idx_movie_cast_role
ON movie_cast(role);

CREATE INDEX IF NOT EXISTS idx_movie_cast_billing_order
ON movie_cast(billing_order);

COMMIT;