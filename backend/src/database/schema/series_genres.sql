CREATE TABLE series_genres (

    series_id UUID NOT NULL,

    genre_id UUID NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (series_id, genre_id),

    CONSTRAINT fk_series_genres_series
        FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_series_genres_genre
        FOREIGN KEY (genre_id)
        REFERENCES genres(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_series_genres_series
ON series_genres(series_id);

CREATE INDEX idx_series_genres_genre
ON series_genres(genre_id);