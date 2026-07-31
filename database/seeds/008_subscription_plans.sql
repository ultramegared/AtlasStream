-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 008_subscription_plans.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default subscription plans
-- ============================================================

BEGIN;

INSERT INTO subscription_plan (
    name,
    slug,
    description,
    monthly_price,
    yearly_price,
    currency,
    max_profiles,
    max_devices,
    max_simultaneous_streams,
    max_resolution,
    download_enabled,
    ads_enabled,
    is_active
)
VALUES

(
    'Free',
    'free',
    'Free plan with ads.',
    0.00,
    0.00,
    'USD',
    1,
    1,
    1,
    '720p',
    FALSE,
    TRUE,
    TRUE
),

(
    'Basic',
    'basic',
    'Entry-level subscription.',
    7.99,
    79.99,
    'USD',
    2,
    2,
    1,
    '1080p',
    TRUE,
    FALSE,
    TRUE
),

(
    'Standard',
    'standard',
    'Recommended subscription.',
    12.99,
    129.99,
    'USD',
    4,
    4,
    2,
    '1440p',
    TRUE,
    FALSE,
    TRUE
),

(
    'Premium',
    'premium',
    'Best streaming experience.',
    17.99,
    179.99,
    'USD',
    6,
    10,
    4,
    '4K UHD',
    TRUE,
    FALSE,
    TRUE
)

ON CONFLICT (slug)
DO NOTHING;

COMMIT;