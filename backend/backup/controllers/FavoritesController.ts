import { Request, Response } from "express";

class FavoritesController {
  static async getFavorites(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get favorites not implemented yet.",
    });
  }

  static async isFavorite(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Check favorite not implemented yet.",
    });
  }

  static async addFavorite(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Add favorite not implemented yet.",
    });
  }

  static async removeFavorite(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Remove favorite not implemented yet.",
    });
  }

  static async clearFavorites(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Clear favorites not implemented yet.",
    });
  }

  static async getFavoritesCount(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Get favorites count not implemented yet.",
    });
  }
}

export default FavoritesController;