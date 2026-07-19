CREATE TABLE series (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(255) NOT NULL,

    original_title VARCHAR(255),

    description TEXT,

    release_date DATE,

    end_date DATE,

    country_id UUID,

    language_id UUID,

    studio_id UUID,

    poster_url TEXT,

    backdrop_url TEXT,

    trailer_url TEXT,

    age_rating VARCHAR(10),

    imdb_rating DECIMAL(3,1)
        CHECK (imdb_rating >= 0 AND imdb_rating <= 10),

    total_seasons INTEGER NOT NULL DEFAULT 1
        CHECK (total_seasons >= 1),

    total_episodes INTEGER NOT NULL DEFAULT 0
        CHECK (total_episodes >= 0),

    is_featured BOOLEAN NOT NULL DEFAULT FALSE,

    is_premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_series_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id),

    CONSTRAINT fk_series_language
        FOREIGN KEY (language_id)
        REFERENCES languages(id),

    CONSTRAINT fk_series_studio
        FOREIGN KEY (studio_id)
        REFERENCES studios(id)
);

CREATE INDEX idx_series_title
ON series(title);

CREATE INDEX idx_series_release_date
ON series(release_date);

CREATE INDEX idx_series_country
ON series(country_id);

CREATE INDEX idx_series_language
ON series(language_id);

CREATE INDEX idx_series_studio
ON series(studio_id);

CREATE INDEX idx_series_featured
ON series(is_featured);

CREATE INDEX idx_series_premium
ON series(is_premium);

CREATE INDEX idx_series_active
ON series(is_active);