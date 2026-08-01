/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: movie.service.ts
 * Path: backend/src/services/movie.service.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Movie business logic.
 * ----------------------------------------------------------------
 */

import contentRepository from "@/repositories/content.repository";

import {
    ApiError,
    HTTP_STATUS
} from "@/utils";

import {
    Content,
    ContentFilters
} from "@/models/content.model";

class MovieService {

    public async getAll(): Promise<Content[]> {

        return contentRepository.findAll({

            contentType: "movie",

            page: 1,

            limit: 20

        });

    }

    public async getById(
        id: string
    ): Promise<Content> {

        const movie = await contentRepository.findById(id);

        if (!movie || movie.contentType !== "movie") {

            throw new ApiError(

                HTTP_STATUS.NOT_FOUND,

                "MOVIE_NOT_FOUND",

                "Movie not found."

            );

        }

        return movie;

    }

    public async getBySlug(
        slug: string
    ): Promise<Content> {

        const movie = await contentRepository.findBySlug(slug);

        if (!movie || movie.contentType !== "movie") {

            throw new ApiError(

                HTTP_STATUS.NOT_FOUND,

                "MOVIE_NOT_FOUND",

                "Movie not found."

            );

        }

        return movie;

    }

}

export default new MovieService();