-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 02_catalog.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- Content Catalog Schema
-- ============================================================

BEGIN;

-- ============================================================
-- Countries
-- ============================================================

CREATE TABLE country (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    iso2 CHAR(2) NOT NULL,
    iso3 CHAR(3) NOT NULL,

    name VARCHAR(120) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_country_iso2 UNIQUE (iso2),
    CONSTRAINT uq_country_iso3 UNIQUE (iso3)
);

-- ============================================================
-- Languages
-- ============================================================

CREATE TABLE language (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code VARCHAR(10) NOT NULL,

    name VARCHAR(120) NOT NULL,

    native_name VARCHAR(120),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_language_code UNIQUE(code)
);

-- ============================================================
-- Genres
-- ============================================================

CREATE TABLE genre (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(120) NOT NULL,

    slug VARCHAR(120) NOT NULL,

    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_genre_name UNIQUE(name),
    CONSTRAINT uq_genre_slug UNIQUE(slug)
);

-- ============================================================
-- Categories
-- ============================================================

CREATE TABLE category (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(120) NOT NULL,

    slug VARCHAR(120) NOT NULL,

    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_category_name UNIQUE(name),
    CONSTRAINT uq_category_slug UNIQUE(slug)
);

-- ============================================================
-- Age Ratings
-- ============================================================

CREATE TABLE age_rating (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code VARCHAR(20) NOT NULL,

    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_age_rating UNIQUE(code)
);

-- ============================================================
-- People
-- ============================================================

CREATE TABLE person (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    first_name VARCHAR(150) NOT NULL,

    last_name VARCHAR(150),

    stage_name VARCHAR(200),

    biography TEXT,

    birthday DATE,

    deathday DATE,

    country_id UUID,

    profile_image TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_person_country
        FOREIGN KEY(country_id)
        REFERENCES country(id)
);

-- ============================================================
-- Studios
-- ============================================================

CREATE TABLE studio (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(200) NOT NULL,

    description TEXT,

    logo_url TEXT,

    website TEXT,

    country_id UUID,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_studio_name UNIQUE(name),

    CONSTRAINT fk_studio_country
        FOREIGN KEY(country_id)
        REFERENCES country(id)
);

-- ============================================================
-- Content
-- ============================================================

CREATE TABLE content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    content_type VARCHAR(20) NOT NULL,

    title VARCHAR(300) NOT NULL,

    original_title VARCHAR(300),

    slug VARCHAR(300) NOT NULL,

    synopsis TEXT,

    release_date DATE,

    release_year INTEGER,

    runtime_minutes INTEGER,

    poster_url TEXT,

    backdrop_url TEXT,

    trailer_url TEXT,

    imdb_id VARCHAR(30),

    tmdb_id BIGINT,

    language_id UUID,

    country_id UUID,

    age_rating_id UUID,

    studio_id UUID,

    is_published BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ,

    CONSTRAINT uq_content_slug UNIQUE(slug),

    CONSTRAINT chk_content_type
        CHECK (
            content_type IN (
                'movie',
                'series',
                'documentary',
                'live'
            )
        ),

    CONSTRAINT fk_content_language
        FOREIGN KEY(language_id)
        REFERENCES language(id),

    CONSTRAINT fk_content_country
        FOREIGN KEY(country_id)
        REFERENCES country(id),

    CONSTRAINT fk_content_rating
        FOREIGN KEY(age_rating_id)
        REFERENCES age_rating(id),

    CONSTRAINT fk_content_studio
        FOREIGN KEY(studio_id)
        REFERENCES studio(id)
);

-- ============================================================
-- Seasons
-- ============================================================

CREATE TABLE season (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    content_id UUID NOT NULL,

    season_number INTEGER NOT NULL,

    title VARCHAR(250),

    synopsis TEXT,

    poster_url TEXT,

    release_date DATE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_season UNIQUE(content_id, season_number),

    CONSTRAINT fk_season_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Episodes
-- ============================================================

CREATE TABLE episode (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    season_id UUID NOT NULL,

    episode_number INTEGER NOT NULL,

    title VARCHAR(250) NOT NULL,

    synopsis TEXT,

    runtime_minutes INTEGER,

    release_date DATE,

    thumbnail_url TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_episode
        UNIQUE(season_id, episode_number),

    CONSTRAINT fk_episode_season
        FOREIGN KEY(season_id)
        REFERENCES season(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Content Genres
-- ============================================================

CREATE TABLE content_genre (
    content_id UUID NOT NULL,

    genre_id UUID NOT NULL,

    PRIMARY KEY(content_id, genre_id),

    CONSTRAINT fk_content_genre_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_content_genre_genre
        FOREIGN KEY(genre_id)
        REFERENCES genre(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Content Categories
-- ============================================================

CREATE TABLE content_category (
    content_id UUID NOT NULL,

    category_id UUID NOT NULL,

    PRIMARY KEY(content_id, category_id),

    CONSTRAINT fk_content_category_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_content_category_category
        FOREIGN KEY(category_id)
        REFERENCES category(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Cast
-- ============================================================

CREATE TABLE content_cast (
    content_id UUID NOT NULL,

    person_id UUID NOT NULL,

    character_name VARCHAR(200),

    billing_order INTEGER,

    PRIMARY KEY(content_id, person_id),

    CONSTRAINT fk_cast_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_cast_person
        FOREIGN KEY(person_id)
        REFERENCES person(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Crew
-- ============================================================

CREATE TABLE content_crew (
    content_id UUID NOT NULL,

    person_id UUID NOT NULL,

    department VARCHAR(120),

    job VARCHAR(120),

    PRIMARY KEY(content_id, person_id, job),

    CONSTRAINT fk_crew_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_crew_person
        FOREIGN KEY(person_id)
        REFERENCES person(id)
        ON DELETE CASCADE
);

COMMIT;