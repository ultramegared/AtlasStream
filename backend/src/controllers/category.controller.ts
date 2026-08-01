/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: category.controller.ts
 * Path: backend/src/controllers/category.controller.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Category controller.
 * ----------------------------------------------------------------
 */

import {
    Request,
    Response
} from "express";

import categoryService from "@/services/category.service";

import {
    asyncHandler,
    HTTP_STATUS,
    success
} from "@/utils";

class CategoryController {

    public getAll = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const categories = await categoryService.getAll({

                page: Number(req.query.page) || 1,

                limit: Number(req.query.limit) || 20,

                search: req.query.search as string,

                isActive:
                    req.query.isActive === undefined
                        ? undefined
                        : req.query.isActive === "true"

            });

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Categories retrieved successfully.",
                    data: categories
                }
            );

        }

    );

    public getById = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const category = await categoryService.getById(
                req.params.id
            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Category retrieved successfully.",
                    data: category
                }
            );

        }

    );

    public create = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const category = await categoryService.create(
                req.body
            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.CREATED,
                    message: "Category created successfully.",
                    data: category
                }
            );

        }

    );

    public update = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const category = await categoryService.update(

                req.params.id,

                req.body

            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Category updated successfully.",
                    data: category
                }
            );

        }

    );

    public delete = asyncHandler(

        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            await categoryService.delete(
                req.params.id
            );

            success(
                res,
                {
                    statusCode: HTTP_STATUS.OK,
                    message: "Category deleted successfully."
                }
            );

        }

    );

}

export default new CategoryController();