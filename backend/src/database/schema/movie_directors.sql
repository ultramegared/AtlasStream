CREATE TABLE movie_directors (

    movie_id UUID NOT NULL,

    director_id UUID NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (movie_id, director_id),

    CONSTRAINT fk_movie_directors_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_movie_directors_director
        FOREIGN KEY (director_id)
        REFERENCES directors(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_movie_directors_movie
ON movie_directors(movie_id);

CREATE INDEX idx_movie_directors_director
ON movie_directors(director_id);