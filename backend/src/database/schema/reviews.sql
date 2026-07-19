CREATE TABLE reviews (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    content_type VARCHAR(20) NOT NULL,

    content_id UUID NOT NULL,

    rating SMALLINT NOT NULL,

    title VARCHAR(150),

    review TEXT,

    is_spoiler BOOLEAN NOT NULL DEFAULT FALSE,

    is_approved BOOLEAN NOT NULL DEFAULT TRUE,

    helpful_votes INTEGER NOT NULL DEFAULT 0,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_reviews_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_reviews_content_type
        CHECK (
            content_type IN ('MOVIE', 'SERIES')
        ),

    CONSTRAINT chk_reviews_rating
        CHECK (
            rating BETWEEN 1 AND 5
        ),

    CONSTRAINT chk_reviews_helpful_votes
        CHECK (
            helpful_votes >= 0
        ),

    CONSTRAINT uq_reviews_user_content
        UNIQUE (
            user_id,
            content_type,
            content_id
        )
);

CREATE INDEX idx_reviews_user
ON reviews(user_id);

CREATE INDEX idx_reviews_content
ON reviews(content_type, content_id);

CREATE INDEX idx_reviews_rating
ON reviews(rating);

CREATE INDEX idx_reviews_created
ON reviews(created_at);

CREATE INDEX idx_reviews_approved
ON reviews(is_approved);