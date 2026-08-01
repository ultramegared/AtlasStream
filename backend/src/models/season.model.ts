/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: season.model.ts
 * Path: backend/src/models/season.model.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Season model.
 * ----------------------------------------------------------------
 */

export interface Season {

    id: string;

    contentId: string;

    seasonNumber: number;

    title: string | null;

    synopsis: string | null;

    posterUrl: string | null;

    releaseDate: Date | null;

    createdAt: Date;

}

export interface CreateSeasonDto {

    contentId: string;

    seasonNumber: number;

    title?: string;

    synopsis?: string;

    posterUrl?: string;

    releaseDate?: Date;

}

export interface UpdateSeasonDto {

    seasonNumber?: number;

    title?: string;

    synopsis?: string;

    posterUrl?: string;

    releaseDate?: Date;

}