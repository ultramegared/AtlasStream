/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: season.controller.ts
 * Path: backend/src/controllers/season.controller.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Season controller.
 * ----------------------------------------------------------------
 */

import {
    Request,
    Response
} from "express";

import seasonService from "@/services/season.service";

import {
    asyncHandler,
    HTTP_STATUS,
    success
} from "@/utils";

class SeasonController {

    public getByContentId = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const seasons = await seasonService.getByContentId(
                req.params.contentId
            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Seasons retrieved successfully.",
                    data: seasons
                }
            );

        }

    );

    public getById = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const season = await seasonService.getById(
                req.params.id
            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Season retrieved successfully.",
                    data: season
                }
            );

        }

    );

}

export default new SeasonController();