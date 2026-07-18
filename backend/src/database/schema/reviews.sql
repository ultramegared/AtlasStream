CREATE TABLE reviews (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

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

    CONSTRAINT chk_reviews_content_type
        CHECK (content_type IN ('MOVIE', 'SERIES')),

    CONSTRAINT chk_reviews_rating
        CHECK (rating BETWEEN 1 AND 5),

    CONSTRAINT unique_user_review
        UNIQUE (user_id, content_type, content_id)
);

CREATE INDEX idx_reviews_user
ON reviews(user_id);

CREATE INDEX idx_reviews_content
ON reviews(content_type, content_id);

CREATE INDEX idx_reviews_rating
ON reviews(rating);

CREATE INDEX idx_reviews_created
ON reviews(created_at);