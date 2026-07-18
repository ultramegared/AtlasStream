import { Request, Response } from "express";

class CategoriesController {
  static async getAllCategories(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get all categories not implemented yet.",
    });
  }

  static async getCategoryById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get category by ID not implemented yet.",
    });
  }

  static async getCategoryContent(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get category content not implemented yet.",
    });
  }

  static async createCategory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Create category not implemented yet.",
    });
  }

  static async updateCategory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update category not implemented yet.",
    });
  }

  static async patchCategory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Patch category not implemented yet.",
    });
  }

  static async changeCategoryStatus(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Change category status not implemented yet.",
    });
  }

  static async deleteCategory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Delete category not implemented yet.",
    });
  }
}

export default CategoriesController;