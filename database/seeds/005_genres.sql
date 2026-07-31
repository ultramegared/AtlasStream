-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 005_genres.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default content genres
-- ============================================================

BEGIN;

INSERT INTO genre (
    name,
    slug,
    description
)
VALUES

('Action', 'action', 'Action-packed content'),
('Adventure', 'adventure', 'Adventure stories'),
('Animation', 'animation', 'Animated content'),
('Anime', 'anime', 'Japanese animation'),
('Biography', 'biography', 'Biographical stories'),
('Comedy', 'comedy', 'Comedy content'),
('Crime', 'crime', 'Crime stories'),
('Documentary', 'documentary', 'Documentary productions'),
('Drama', 'drama', 'Dramatic productions'),
('Family', 'family', 'Family friendly content'),
('Fantasy', 'fantasy', 'Fantasy worlds'),
('History', 'history', 'Historical productions'),
('Holiday', 'holiday', 'Holiday themed content'),
('Horror', 'horror', 'Horror productions'),
('Kids', 'kids', 'Children content'),
('Music', 'music', 'Music productions'),
('Musical', 'musical', 'Musical productions'),
('Mystery', 'mystery', 'Mystery stories'),
('News', 'news', 'News programs'),
('Reality', 'reality', 'Reality shows'),
('Romance', 'romance', 'Romantic stories'),
('Science Fiction', 'science-fiction', 'Science fiction productions'),
('Short', 'short', 'Short films'),
('Sport', 'sport', 'Sports content'),
('Superhero', 'superhero', 'Superhero productions'),
('Suspense', 'suspense', 'Suspense productions'),
('Talk Show', 'talk-show', 'Talk shows'),
('Thriller', 'thriller', 'Thriller productions'),
('TV Movie', 'tv-movie', 'Television movies'),
('War', 'war', 'War stories'),
('Western', 'western', 'Western productions');

ON CONFLICT (slug)
DO NOTHING;

COMMIT;