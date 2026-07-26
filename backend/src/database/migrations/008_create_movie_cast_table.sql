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
 * Almacena las personas relacionadas con el contenido:
 * actores, directores, productores, etc.
 * ----------------------------------------------------------------
 */

BEGIN;

CREATE TABLE people (

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

    active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

);

CREATE INDEX idx_people_stage_name
ON people(stage_name);

CREATE INDEX idx_people_active
ON people(active);

COMMIT;