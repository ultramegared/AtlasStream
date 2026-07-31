-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 006_categories.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default catalog categories
-- ============================================================

BEGIN;

INSERT INTO category (
    name,
    slug,
    description
)
VALUES

(
    'Trending',
    'trending',
    'Most popular content right now.'
),

(
    'Popular',
    'popular',
    'Popular among all users.'
),

(
    'Top Rated',
    'top-rated',
    'Highest rated content.'
),

(
    'New Releases',
    'new-releases',
    'Recently released content.'
),

(
    'Coming Soon',
    'coming-soon',
    'Upcoming releases.'
),

(
    'Recommended',
    'recommended',
    'Personalized recommendations.'
),

(
    'Continue Watching',
    'continue-watching',
    'Resume previously watched content.'
),

(
    'My List',
    'my-list',
    'User saved content.'
),

(
    'Originals',
    'originals',
    'AtlasStream original productions.'
),

(
    'Award Winners',
    'award-winners',
    'Award-winning productions.'
),

(
    'Most Watched',
    'most-watched',
    'Most viewed content.'
),

(
    'Recently Added',
    'recently-added',
    'Latest additions to the catalog.'
),

(
    'Editors Picks',
    'editors-picks',
    'Selected by the editorial team.'
),

(
    'Live',
    'live',
    'Live channels and broadcasts.'
),

(
    'Documentaries',
    'documentaries',
    'Featured documentaries.'
),

(
    'Movies',
    'movies',
    'Movie collection.'
),

(
    'Series',
    'series',
    'Series collection.'
),

(
    'Kids',
    'kids',
    'Content suitable for children.'
),

(
    'Family',
    'family',
    'Entertainment for the whole family.'
),

(
    'Anime',
    'anime',
    'Anime collection.'
),

(
    'Classics',
    'classics',
    'Classic productions.'
),

(
    'International',
    'international',
    'International productions.'
),

(
    '4K UHD',
    '4k-uhd',
    'Ultra High Definition content.'
),

(
    'HDR',
    'hdr',
    'High Dynamic Range content.'
),

(
    'Dolby Vision',
    'dolby-vision',
    'Dolby Vision supported content.'
),

(
    'Dolby Atmos',
    'dolby-atmos',
    'Dolby Atmos supported content.'
),

(
    'Recently Watched',
    'recently-watched',
    'Recently viewed content.'
),

(
    'Because You Watched',
    'because-you-watched',
    'Recommendations based on watch history.'
),

(
    'Continue Series',
    'continue-series',
    'Continue watching TV series.'
),

(
    'Staff Favorites',
    'staff-favorites',
    'Favorite content selected by the AtlasStream team.'
)

ON CONFLICT (slug)
DO NOTHING;

COMMIT;