CREATE TABLE series_directors (

    series_id UUID NOT NULL,

    director_id UUID NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (series_id, director_id),

    CONSTRAINT fk_series_directors_series
        FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_series_directors_director
        FOREIGN KEY (director_id)
        REFERENCES directors(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_series_directors_series
ON series_directors(series_id);

CREATE INDEX idx_series_directors_director
ON series_directors(director_id);