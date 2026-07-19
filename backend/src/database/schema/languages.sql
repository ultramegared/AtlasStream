CREATE TABLE languages (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL UNIQUE,

    code VARCHAR(10) NOT NULL UNIQUE,

    native_name VARCHAR(100) NOT NULL,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP
);

CREATE INDEX idx_languages_name
ON languages(name);

CREATE INDEX idx_languages_code
ON languages(code);

CREATE INDEX idx_languages_active
ON languages(is_active);