CREATE TABLE payments (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    subscription_id UUID,

    amount DECIMAL(10,2) NOT NULL,

    currency VARCHAR(3) NOT NULL DEFAULT 'USD',

    payment_method VARCHAR(30) NOT NULL
        CHECK (payment_method IN (
            'CARD',
            'PAYPAL',
            'GOOGLE_PLAY',
            'APPLE_STORE',
            'BANK_TRANSFER'
        )),

    status VARCHAR(20) NOT NULL DEFAULT 'PENDING'
        CHECK (status IN (
            'PENDING',
            'COMPLETED',
            'FAILED',
            'REFUNDED',
            'CANCELLED'
        )),

    transaction_reference VARCHAR(255) UNIQUE,

    paid_at TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_payments_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_payments_subscription
        FOREIGN KEY (subscription_id)
        REFERENCES subscriptions(id)
        ON DELETE SET NULL
);

CREATE INDEX idx_payments_user
ON payments(user_id);

CREATE INDEX idx_payments_subscription
ON payments(subscription_id);

CREATE INDEX idx_payments_status
ON payments(status);

CREATE INDEX idx_payments_method
ON payments(payment_method);

CREATE INDEX idx_payments_paid_at
ON payments(paid_at);