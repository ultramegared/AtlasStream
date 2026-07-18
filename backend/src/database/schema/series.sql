CREATE TABLE series (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(255) NOT NULL,

    original_title VARCHAR(255),

    slug VARCHAR(255) NOT NULL UNIQUE,

    description TEXT,

    synopsis TEXT,

    poster_url TEXT,

    backdrop_url TEXT,

    logo_url TEXT,

    trailer_url TEXT,

    first_air_date DATE,

    last_air_date DATE,

    age_rating VARCHAR(20),

    imdb_rating DECIMAL(3,1),

    status VARCHAR(30) NOT NULL DEFAULT 'ONGOING',

    total_seasons INTEGER NOT NULL DEFAULT 0,

    total_episodes INTEGER NOT NULL DEFAULT 0,

    category_id UUID REFERENCES categories(id),

    featured BOOLEAN NOT NULL DEFAULT FALSE,

    premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    total_views BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP
);

CREATE INDEX idx_series_title
ON series(title);

CREATE INDEX idx_series_slug
ON series(slug);

CREATE INDEX idx_series_category
ON series(category_id);

CREATE INDEX idx_series_status
ON series(status);

CREATE INDEX idx_series_featured
ON series(featured);

CREATE INDEX idx_series_premium
ON series(premium);

CREATE INDEX idx_series_active
ON series(is_active);