-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 007_age_ratings.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default age ratings
-- ============================================================

BEGIN;

INSERT INTO age_rating (
    code,
    description
)
VALUES

-- ============================================================
-- MPA (United States)
-- ============================================================

(
    'G',
    'General Audiences'
),

(
    'PG',
    'Parental Guidance Suggested'
),

(
    'PG-13',
    'Parents Strongly Cautioned'
),

(
    'R',
    'Restricted'
),

(
    'NC-17',
    'Adults Only'
),

-- ============================================================
-- TV Ratings
-- ============================================================

(
    'TV-Y',
    'All Children'
),

(
    'TV-Y7',
    'Directed to Older Children'
),

(
    'TV-G',
    'General Audience'
),

(
    'TV-PG',
    'Parental Guidance Suggested'
),

(
    'TV-14',
    'Parents Strongly Cautioned'
),

(
    'TV-MA',
    'Mature Audience Only'
),

-- ============================================================
-- International
-- ============================================================

(
    'U',
    'Universal'
),

(
    '12',
    'Suitable for ages 12 and over'
),

(
    '15',
    'Suitable for ages 15 and over'
),

(
    '16',
    'Suitable for ages 16 and over'
),

(
    '18',
    'Adults Only'
),

(
    'A',
    'Adults'
),

(
    'B',
    'Children with parental guidance'
),

(
    'C',
    'Suitable for all audiences'
);

ON CONFLICT (code)
DO NOTHING;

COMMIT;