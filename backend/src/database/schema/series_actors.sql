CREATE TABLE series_actors (

    series_id UUID NOT NULL,

    actor_id UUID NOT NULL,

    character_name VARCHAR(255),

    billing_order INTEGER,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (series_id, actor_id),

    CONSTRAINT fk_series_actors_series
        FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_series_actors_actor
        FOREIGN KEY (actor_id)
        REFERENCES actors(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_series_actors_series
ON series_actors(series_id);

CREATE INDEX idx_series_actors_actor
ON series_actors(actor_id);