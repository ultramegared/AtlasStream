CREATE TABLE subscriptions (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    plan_name VARCHAR(50) NOT NULL DEFAULT 'FREE',

    status VARCHAR(30) NOT NULL DEFAULT 'ACTIVE',

    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    currency VARCHAR(10) NOT NULL DEFAULT 'USD',

    starts_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    expires_at TIMESTAMP,

    auto_renew BOOLEAN NOT NULL DEFAULT FALSE,

    payment_provider VARCHAR(50),

    payment_reference VARCHAR(255),

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT unique_user_subscription UNIQUE (user_id)
);

CREATE INDEX idx_subscriptions_user
ON subscriptions(user_id);

CREATE INDEX idx_subscriptions_status
ON subscriptions(status);

CREATE INDEX idx_subscriptions_plan
ON subscriptions(plan_name);

CREATE INDEX idx_subscriptions_expires
ON subscriptions(expires_at);