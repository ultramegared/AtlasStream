CREATE TABLE studios (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(200) NOT NULL UNIQUE,

    description TEXT,

    country_id UUID,

    logo_url TEXT,

    website TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_studios_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id)
);

CREATE INDEX idx_studios_name
ON studios(name);

CREATE INDEX idx_studios_country
ON studios(country_id);

CREATE INDEX idx_studios_active
ON studios(is_active);