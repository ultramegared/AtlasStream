CREATE TABLE movie_genres (

    movie_id UUID NOT NULL,

    genre_id UUID NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (movie_id, genre_id),

    CONSTRAINT fk_movie_genres_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_movie_genres_genre
        FOREIGN KEY (genre_id)
        REFERENCES genres(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_movie_genres_movie
ON movie_genres(movie_id);

CREATE INDEX idx_movie_genres_genre
ON movie_genres(genre_id);