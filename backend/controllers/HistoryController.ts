import { Request, Response } from "express";

class HistoryController {
  static async getHistory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get history not implemented yet." });
  }

  static async getHistoryById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get history by ID not implemented yet." });
  }

  static async createHistory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Create history not implemented yet." });
  }

  static async updateProgress(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Update progress not implemented yet." });
  }

  static async markAsCompleted(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Mark as completed not implemented yet." });
  }

  static async deleteHistory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Delete history not implemented yet." });
  }

  static async clearHistory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Clear history not implemented yet." });
  }

  static async getRecentHistory(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get recent history not implemented yet." });
  }

  static async getMostWatched(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get most watched not implemented yet." });
  }
}

export default HistoryController;