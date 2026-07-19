CREATE TABLE notifications (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    title VARCHAR(255) NOT NULL,

    message TEXT NOT NULL,

    type VARCHAR(50) NOT NULL,

    is_read BOOLEAN NOT NULL DEFAULT FALSE,

    action_url TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    read_at TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_notifications_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_notifications_type
        CHECK (
            type IN (
                'SYSTEM',
                'SUBSCRIPTION',
                'PAYMENT',
                'CONTENT',
                'ACCOUNT'
            )
        ),

    CONSTRAINT chk_notifications_read_at
        CHECK (
            read_at IS NULL
            OR read_at >= created_at
        )
);

CREATE INDEX idx_notifications_user
ON notifications(user_id);

CREATE INDEX idx_notifications_read
ON notifications(is_read);

CREATE INDEX idx_notifications_created
ON notifications(created_at);

CREATE INDEX idx_notifications_type
ON notifications(type);