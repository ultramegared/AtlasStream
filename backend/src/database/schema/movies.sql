CREATE TABLE movies (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(255) NOT NULL,

    original_title VARCHAR(255),

    description TEXT,

    release_date DATE,

    duration_minutes INTEGER
        CHECK (duration_minutes > 0),

    country_id UUID,

    language_id UUID,

    studio_id UUID,

    poster_url TEXT,

    backdrop_url TEXT,

    trailer_url TEXT,

    video_url TEXT,

    age_rating VARCHAR(10),

    imdb_rating DECIMAL(3,1)
        CHECK (imdb_rating >= 0 AND imdb_rating <= 10),

    is_featured BOOLEAN NOT NULL DEFAULT FALSE,

    is_premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_movies_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id),

    CONSTRAINT fk_movies_language
        FOREIGN KEY (language_id)
        REFERENCES languages(id),

    CONSTRAINT fk_movies_studio
        FOREIGN KEY (studio_id)
        REFERENCES studios(id)
);

CREATE INDEX idx_movies_title
ON movies(title);

CREATE INDEX idx_movies_release_date
ON movies(release_date);

CREATE INDEX idx_movies_country
ON movies(country_id);

CREATE INDEX idx_movies_language
ON movies(language_id);

CREATE INDEX idx_movies_studio
ON movies(studio_id);

CREATE INDEX idx_movies_featured
ON movies(is_featured);

CREATE INDEX idx_movies_premium
ON movies(is_premium);

CREATE INDEX idx_movies_active
ON movies(is_active);