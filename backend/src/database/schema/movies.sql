CREATE TABLE movies (

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

    video_url TEXT NOT NULL,

    duration INTEGER NOT NULL,

    release_date DATE,

    age_rating VARCHAR(20),

    imdb_rating DECIMAL(3,1),

    category_id UUID REFERENCES categories(id),

    featured BOOLEAN NOT NULL DEFAULT FALSE,

    premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    total_views BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP
);

CREATE INDEX idx_movies_title
ON movies(title);

CREATE INDEX idx_movies_slug
ON movies(slug);

CREATE INDEX idx_movies_category
ON movies(category_id);

CREATE INDEX idx_movies_featured
ON movies(featured);

CREATE INDEX idx_movies_premium
ON movies(premium);

CREATE INDEX idx_movies_active
ON movies(is_active);