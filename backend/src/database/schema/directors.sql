CREATE TABLE directors (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100),

    biography TEXT,

    birth_date DATE,

    death_date DATE,

    country_id UUID,

    photo_url TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_directors_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id),

    CONSTRAINT chk_director_dates
        CHECK (
            death_date IS NULL
            OR birth_date IS NULL
            OR death_date >= birth_date
        )
);

CREATE INDEX idx_directors_name
ON directors(first_name, last_name);

CREATE INDEX idx_directors_country
ON directors(country_id);

CREATE INDEX idx_directors_active
ON directors(is_active);