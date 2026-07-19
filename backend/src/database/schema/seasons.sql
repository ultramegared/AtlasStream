CREATE TABLE seasons (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    series_id UUID NOT NULL,

    season_number INTEGER NOT NULL
        CHECK (season_number > 0),

    title VARCHAR(255),

    description TEXT,

    poster_url TEXT,

    release_date DATE,

    total_episodes INTEGER NOT NULL DEFAULT 0
        CHECK (total_episodes >= 0),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_seasons_series
        FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_season_number
        UNIQUE (series_id, season_number)

);

CREATE INDEX idx_seasons_series
ON seasons(series_id);

CREATE INDEX idx_seasons_number
ON seasons(season_number);

CREATE INDEX idx_seasons_release_date
ON seasons(release_date);

CREATE INDEX idx_seasons_active
ON seasons(is_active);