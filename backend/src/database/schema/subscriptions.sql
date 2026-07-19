CREATE TABLE subscriptions (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    plan_id UUID NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE'
        CHECK (status IN ('ACTIVE', 'CANCELLED', 'EXPIRED', 'TRIAL')),

    start_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    end_date TIMESTAMP,

    auto_renew BOOLEAN NOT NULL DEFAULT TRUE,

    cancelled_at TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_subscriptions_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_subscriptions_plan
        FOREIGN KEY (plan_id)
        REFERENCES plans(id)

);

CREATE INDEX idx_subscriptions_user
ON subscriptions(user_id);

CREATE INDEX idx_subscriptions_plan
ON subscriptions(plan_id);

CREATE INDEX idx_subscriptions_status
ON subscriptions(status);

CREATE INDEX idx_subscriptions_end_date
ON subscriptions(end_date);