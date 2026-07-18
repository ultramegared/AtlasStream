import { Request, Response } from "express";

class SearchController {
  static async search(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Global search not implemented yet.",
    });
  }

  static async searchByTitle(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by title not implemented yet.",
    });
  }

  static async searchByActor(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by actor not implemented yet.",
    });
  }

  static async searchByDirector(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by director not implemented yet.",
    });
  }

  static async searchByGenre(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by genre not implemented yet.",
    });
  }

  static async searchByCategory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by category not implemented yet.",
    });
  }

  static async searchByStudio(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by studio not implemented yet.",
    });
  }

  static async searchByCountry(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by country not implemented yet.",
    });
  }

  static async searchByLanguage(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by language not implemented yet.",
    });
  }

  static async searchByYear(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Search by year not implemented yet.",
    });
  }

  static async getTrendingSearches(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Trending searches not implemented yet.",
    });
  }

  static async getRecentSearches(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Recent searches not implemented yet.",
    });
  }

  static async saveSearch(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Save search not implemented yet.",
    });
  }

  static async clearSearchHistory(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Clear search history not implemented yet.",
    });
  }
}

export default SearchController;