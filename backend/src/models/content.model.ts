/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: content.model.ts
 * Path: backend/src/models/content.model.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Content domain models.
 * ----------------------------------------------------------------
 */

export type ContentType =
    | "movie"
    | "series"
    | "documentary"
    | "live";

export interface Content {

    id: string;

    contentType: ContentType;

    title: string;

    originalTitle: string | null;

    slug: string;

    synopsis: string | null;

    releaseDate: Date | null;

    releaseYear: number | null;

    runtimeMinutes: number | null;

    posterUrl: string | null;

    backdropUrl: string | null;

    trailerUrl: string | null;

    imdbId: string | null;

    tmdbId: number | null;

    languageId: string | null;

    countryId: string | null;

    ageRatingId: string | null;

    studioId: string | null;

    isPublished: boolean;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;

}

export interface CreateContent {

    contentType: ContentType;

    title: string;

    originalTitle?: string;

    synopsis?: string;

    releaseDate?: Date;

    runtimeMinutes?: number;

    posterUrl?: string;

    backdropUrl?: string;

    trailerUrl?: string;

    imdbId?: string;

    tmdbId?: number;

    languageId?: string;

    countryId?: string;

    ageRatingId?: string;

    studioId?: string;

}

export interface UpdateContent {

    title?: string;

    originalTitle?: string;

    synopsis?: string;

    releaseDate?: Date;

    runtimeMinutes?: number;

    posterUrl?: string;

    backdropUrl?: string;

    trailerUrl?: string;

    imdbId?: string;

    tmdbId?: number;

    languageId?: string;

    countryId?: string;

    ageRatingId?: string;

    studioId?: string;

    isPublished?: boolean;

}

export interface ContentFilters {

    contentType?: ContentType;

    search?: string;

    languageId?: string;

    categoryId?: string;

    genreId?: string;

    page: number;

    limit: number;

}