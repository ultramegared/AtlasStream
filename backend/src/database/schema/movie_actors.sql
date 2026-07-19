CREATE TABLE movie_actors (

    movie_id UUID NOT NULL,

    actor_id UUID NOT NULL,

    character_name VARCHAR(255),

    billing_order INTEGER,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (movie_id, actor_id),

    CONSTRAINT fk_movie_actors_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_movie_actors_actor
        FOREIGN KEY (actor_id)
        REFERENCES actors(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_movie_actors_movie
ON movie_actors(movie_id);

CREATE INDEX idx_movie_actors_actor
ON movie_actors(actor_id);