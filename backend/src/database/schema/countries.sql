CREATE TABLE countries (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL UNIQUE,

    iso2 CHAR(2) NOT NULL UNIQUE,

    iso3 CHAR(3) NOT NULL UNIQUE,

    phone_code VARCHAR(10),

    flag_url TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP
);

CREATE INDEX idx_countries_name
ON countries(name);

CREATE INDEX idx_countries_iso2
ON countries(iso2);

CREATE INDEX idx_countries_iso3
ON countries(iso3);

CREATE INDEX idx_countries_active
ON countries(is_active);