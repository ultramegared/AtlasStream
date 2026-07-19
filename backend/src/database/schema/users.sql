CREATE TABLE users (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    role_id UUID NOT NULL,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100) NOT NULL,

    username VARCHAR(50) NOT NULL UNIQUE,

    email VARCHAR(255) NOT NULL UNIQUE,

    password_hash TEXT NOT NULL,

    phone VARCHAR(20),

    birth_date DATE,

    profile_image TEXT,

    country_id UUID,

    language_id UUID,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    is_verified BOOLEAN NOT NULL DEFAULT FALSE,

    email_verified_at TIMESTAMP,

    last_login_at TIMESTAMP,

    failed_login_attempts INTEGER NOT NULL DEFAULT 0,

    locked_until TIMESTAMP,

    password_changed_at TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_users_role
        FOREIGN KEY (role_id)
        REFERENCES roles(id),

    CONSTRAINT fk_users_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id),

    CONSTRAINT fk_users_language
        FOREIGN KEY (language_id)
        REFERENCES languages(id)
);

CREATE INDEX idx_users_username
ON users(username);

CREATE INDEX idx_users_email
ON users(email);

CREATE INDEX idx_users_role
ON users(role_id);

CREATE INDEX idx_users_country
ON users(country_id);

CREATE INDEX idx_users_language
ON users(language_id);

CREATE INDEX idx_users_active
ON users(is_active);