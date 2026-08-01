/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: season.service.ts
 * Path: backend/src/services/season.service.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Season business logic.
 * ----------------------------------------------------------------
 */

import seasonRepository from "@/repositories/season.repository";

import {
    ApiError,
    HTTP_STATUS
} from "@/utils";

import { Season } from "@/models/season.model";

class SeasonService {

    public async getByContentId(
        contentId: string
    ): Promise<Season[]> {

        return seasonRepository.findByContentId(
            contentId
        );

    }

    public async getById(
        id: string
    ): Promise<Season> {

        const season = await seasonRepository.findById(
            id
        );

        if (!season) {

            throw new ApiError(

                HTTP_STATUS.NOT_FOUND,

                "SEASON_NOT_FOUND",

                "Season not found."

            );

        }

        return season;

    }

}

export default new SeasonService();