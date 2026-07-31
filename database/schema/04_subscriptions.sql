-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 04_subscriptions.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- Subscription, Billing and Plans Schema
-- ============================================================

BEGIN;

-- ============================================================
-- Subscription Plans
-- ============================================================

CREATE TABLE subscription_plan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(120) NOT NULL,
    slug VARCHAR(120) NOT NULL,

    description TEXT,

    monthly_price NUMERIC(10,2) NOT NULL,
    yearly_price NUMERIC(10,2),

    currency CHAR(3) NOT NULL DEFAULT 'USD',

    max_profiles INTEGER NOT NULL DEFAULT 1,
    max_devices INTEGER NOT NULL DEFAULT 1,
    max_simultaneous_streams INTEGER NOT NULL DEFAULT 1,

    max_resolution VARCHAR(20) NOT NULL,

    download_enabled BOOLEAN NOT NULL DEFAULT FALSE,
    ads_enabled BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_subscription_plan_name UNIQUE(name),
    CONSTRAINT uq_subscription_plan_slug UNIQUE(slug)
);

-- ============================================================
-- User Subscriptions
-- ============================================================

CREATE TABLE user_subscription (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,
    plan_id UUID NOT NULL,

    status VARCHAR(30) NOT NULL,

    billing_cycle VARCHAR(20) NOT NULL,

    start_date TIMESTAMPTZ NOT NULL,
    end_date TIMESTAMPTZ,

    cancel_at_period_end BOOLEAN NOT NULL DEFAULT FALSE,

    cancelled_at TIMESTAMPTZ,

    renewal_date TIMESTAMPTZ,

    trial_ends_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_subscription_status
        CHECK (
            status IN (
                'trial',
                'active',
                'expired',
                'cancelled',
                'paused'
            )
        ),

    CONSTRAINT chk_billing_cycle
        CHECK (
            billing_cycle IN (
                'monthly',
                'yearly'
            )
        ),

    CONSTRAINT fk_subscription_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_subscription_plan
        FOREIGN KEY(plan_id)
        REFERENCES subscription_plan(id)
);

-- ============================================================
-- Payment Methods
-- ============================================================

CREATE TABLE payment_method (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    provider VARCHAR(50) NOT NULL,

    provider_customer_id TEXT,

    provider_payment_method_id TEXT,

    brand VARCHAR(50),

    last4 VARCHAR(4),

    expiration_month SMALLINT,
    expiration_year SMALLINT,

    is_default BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_payment_method_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Payments
-- ============================================================

CREATE TABLE payment (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    subscription_id UUID NOT NULL,

    payment_method_id UUID,

    provider VARCHAR(50) NOT NULL,

    provider_payment_id TEXT,

    amount NUMERIC(10,2) NOT NULL,

    currency CHAR(3) NOT NULL,

    status VARCHAR(30) NOT NULL,

    paid_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_payment_status
        CHECK (
            status IN (
                'pending',
                'paid',
                'failed',
                'refunded'
            )
        ),

    CONSTRAINT fk_payment_subscription
        FOREIGN KEY(subscription_id)
        REFERENCES user_subscription(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_payment_method
        FOREIGN KEY(payment_method_id)
        REFERENCES payment_method(id)
);

-- ============================================================
-- Invoices
-- ============================================================

CREATE TABLE invoice (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    subscription_id UUID NOT NULL,

    payment_id UUID,

    invoice_number VARCHAR(100) NOT NULL,

    subtotal NUMERIC(10,2) NOT NULL,

    taxes NUMERIC(10,2) NOT NULL DEFAULT 0,

    total NUMERIC(10,2) NOT NULL,

    currency CHAR(3) NOT NULL,

    issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    due_at TIMESTAMPTZ,

    paid_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_invoice_number UNIQUE(invoice_number),

    CONSTRAINT fk_invoice_subscription
        FOREIGN KEY(subscription_id)
        REFERENCES user_subscription(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_invoice_payment
        FOREIGN KEY(payment_id)
        REFERENCES payment(id)
);

-- ============================================================
-- Coupons
-- ============================================================

CREATE TABLE coupon (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code VARCHAR(60) NOT NULL,

    description TEXT,

    discount_type VARCHAR(20) NOT NULL,

    discount_value NUMERIC(10,2) NOT NULL,

    max_redemptions INTEGER,

    redeemed_count INTEGER NOT NULL DEFAULT 0,

    valid_from TIMESTAMPTZ,

    valid_until TIMESTAMPTZ,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_coupon_code UNIQUE(code),

    CONSTRAINT chk_coupon_discount_type
        CHECK (
            discount_type IN (
                'percentage',
                'fixed'
            )
        )
);

-- ============================================================
-- Coupon Redemptions
-- ============================================================

CREATE TABLE coupon_redemption (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    coupon_id UUID NOT NULL,

    subscription_id UUID NOT NULL,

    redeemed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_redemption_coupon
        FOREIGN KEY(coupon_id)
        REFERENCES coupon(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_redemption_subscription
        FOREIGN KEY(subscription_id)
        REFERENCES user_subscription(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Profiles
-- ============================================================

CREATE TABLE profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    name VARCHAR(120) NOT NULL,

    avatar_url TEXT,

    is_child BOOLEAN NOT NULL DEFAULT FALSE,

    language_id UUID,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_profile_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_profile_language
        FOREIGN KEY(language_id)
        REFERENCES language(id)
);

COMMIT;