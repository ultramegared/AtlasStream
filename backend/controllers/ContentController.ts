import { Request, Response } from "express";

class ContentController {
  static async getAllContent(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get all content not implemented yet.",
    });
  }

  static async getContentById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by ID not implemented yet.",
    });
  }

  static async getMovies(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get movies not implemented yet.",
    });
  }

  static async getSeries(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get series not implemented yet.",
    });
  }

  static async getLiveTV(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get live TV not implemented yet.",
    });
  }

  static async getCartoons(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get cartoons not implemented yet.",
    });
  }

  static async getFeatured(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get featured content not implemented yet.",
    });
  }

  static async getTrending(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get trending content not implemented yet.",
    });
  }

  static async getPopular(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get popular content not implemented yet.",
    });
  }

  static async getRecommended(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get recommended content not implemented yet.",
    });
  }

  static async getNewReleases(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get new releases not implemented yet.",
    });
  }

  static async getByCategory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by category not implemented yet.",
    });
  }

  static async getByGenre(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by genre not implemented yet.",
    });
  }

  static async getByLanguage(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by language not implemented yet.",
    });
  }

  static async getByCountry(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by country not implemented yet.",
    });
  }

  static async getByStudio(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by studio not implemented yet.",
    });
  }

  static async getByDirector(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by director not implemented yet.",
    });
  }

  static async getByActor(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content by actor not implemented yet.",
    });
  }

  static async getSeasons(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get seasons not implemented yet.",
    });
  }

  static async getSeason(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get season not implemented yet.",
    });
  }

  static async getEpisodes(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get episodes not implemented yet.",
    });
  }

  static async getEpisode(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get episode not implemented yet.",
    });
  }

  static async createContent(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Create content not implemented yet.",
    });
  }

  static async updateContent(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update content not implemented yet.",
    });
  }

  static async patchContent(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Patch content not implemented yet.",
    });
  }

  static async deleteContent(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Delete content not implemented yet.",
    });
  }
}

export default ContentController;