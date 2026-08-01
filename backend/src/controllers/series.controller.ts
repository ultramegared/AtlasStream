/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: series.controller.ts
 * Path: backend/src/controllers/series.controller.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Series controller.
 * ----------------------------------------------------------------
 */

import {
    Request,
    Response
} from "express";

import seriesService from "@/services/series.service";

import {
    asyncHandler,
    HTTP_STATUS,
    success
} from "@/utils";

class SeriesController {

    public getAll = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const series = await seriesService.getAll();

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Series retrieved successfully.",
                    data: series
                }
            );

        }

    );

    public getById = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const series = await seriesService.getById(
                req.params.id
            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Series retrieved successfully.",
                    data: series
                }
            );

        }

    );

    public getBySlug = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const series = await seriesService.getBySlug(
                req.params.slug
            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Series retrieved successfully.",
                    data: series
                }
            );

        }

    );

}

export default new SeriesController();