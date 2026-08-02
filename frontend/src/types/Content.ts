/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: Content.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * Content model.
 * ===============================================================
 */

export default interface Content
{

    id: string;

    title: string;

    description: string;

    poster: string;

    backdrop: string;

    year: number;

    duration: string;

    rating: number;

    quality: string;

    format: string;

    type: string;

    language: string;

    genres: string[];

    director: string;

    cast: string[];

    languages: string[];

    subtitles: string[];

}