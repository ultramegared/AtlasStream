import { Request, Response } from "express";

class GenresController {
  static async getAllGenres(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get all genres not implemented yet.",
    });
  }

  static async getGenreById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get genre by ID not implemented yet.",
    });
  }

  static async getGenreContent(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get genre content not implemented yet.",
    });
  }

  static async createGenre(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Create genre not implemented yet.",
    });
  }

  static async updateGenre(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update genre not implemented yet.",
    });
  }

  static async patchGenre(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Patch genre not implemented yet.",
    });
  }

  static async changeGenreStatus(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Change genre status not implemented yet.",
    });
  }

  static async deleteGenre(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Delete genre not implemented yet.",
    });
  }
}

export default GenresController;