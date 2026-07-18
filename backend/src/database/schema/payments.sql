CREATE TABLE payments (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    subscription_id UUID REFERENCES subscriptions(id) ON DELETE SET NULL,

    plan_id UUID REFERENCES plans(id) ON DELETE SET NULL,

    amount DECIMAL(10,2) NOT NULL,

    currency VARCHAR(10) NOT NULL DEFAULT 'USD',

    payment_method VARCHAR(50),

    payment_provider VARCHAR(50),

    transaction_id VARCHAR(255) UNIQUE,

    status VARCHAR(30) NOT NULL,

    paid_at TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_payment_status
        CHECK (status IN ('PENDING','COMPLETED','FAILED','REFUNDED'))
);

CREATE INDEX idx_payments_user
ON payments(user_id);

CREATE INDEX idx_payments_subscription
ON payments(subscription_id);

CREATE INDEX idx_payments_status
ON payments(status);

CREATE INDEX idx_payments_transaction
ON payments(transaction_id);