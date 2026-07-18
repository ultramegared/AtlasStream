import { Request, Response } from "express";

class ContinueWatchingController {
  static async getContinueWatching(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get continue watching not implemented yet." });
  }

  static async getContinueWatchingItem(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get continue watching item not implemented yet." });
  }

  static async createContinueWatching(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Create continue watching not implemented yet." });
  }

  static async updateProgress(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Update progress not implemented yet." });
  }

  static async markAsCompleted(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Mark as completed not implemented yet." });
  }

  static async deleteContinueWatching(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Delete continue watching not implemented yet." });
  }

  static async clearContinueWatching(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Clear continue watching not implemented yet." });
  }

  static async reorderContinueWatching(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Reorder continue watching not implemented yet." });
  }
}

export default ContinueWatchingController;