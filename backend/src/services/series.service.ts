/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: series.service.ts
 * Path: backend/src/services/series.service.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Series business logic.
 * ----------------------------------------------------------------
 */

import contentRepository from "@/repositories/content.repository";

import {
    ApiError,
    HTTP_STATUS
} from "@/utils";

import { Content } from "@/models/content.model";

class SeriesService {

    public async getAll(): Promise<Content[]> {

        return contentRepository.findAll({

            contentType: "series",

            page: 1,

            limit: 20

        });

    }

    public async getById(
        id: string
    ): Promise<Content> {

        const series = await contentRepository.findById(id);

        if (!series || series.contentType !== "series") {

            throw new ApiError(

                HTTP_STATUS.NOT_FOUND,

                "SERIES_NOT_FOUND",

                "Series not found."

            );

        }

        return series;

    }

    public async getBySlug(
        slug: string
    ): Promise<Content> {

        const series = await contentRepository.findBySlug(slug);

        if (!series || series.contentType !== "series") {

            throw new ApiError(

                HTTP_STATUS.NOT_FOUND,

                "SERIES_NOT_FOUND",

                "Series not found."

            );

        }

        return series;

    }

}

export default new SeriesService();