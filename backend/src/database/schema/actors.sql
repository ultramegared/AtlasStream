CREATE TABLE actors (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100),

    stage_name VARCHAR(200),

    biography TEXT,

    birth_date DATE,

    death_date DATE,

    country_id UUID,

    photo_url TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_actors_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id),

    CONSTRAINT chk_actor_dates
        CHECK (
            death_date IS NULL
            OR birth_date IS NULL
            OR death_date >= birth_date
        )
);

CREATE INDEX idx_actors_name
ON actors(first_name, last_name);

CREATE INDEX idx_actors_stage_name
ON actors(stage_name);

CREATE INDEX idx_actors_country
ON actors(country_id);

CREATE INDEX idx_actors_active
ON actors(is_active);