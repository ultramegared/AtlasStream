import { Request, Response } from "express";

class ReviewsController {
  static async getContentReviews(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get content reviews not implemented yet.",
    });
  }

  static async getReviewById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get review by ID not implemented yet.",
    });
  }

  static async getProfileReviews(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get profile reviews not implemented yet.",
    });
  }

  static async createReview(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Create review not implemented yet.",
    });
  }

  static async updateReview(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update review not implemented yet.",
    });
  }

  static async patchReview(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Patch review not implemented yet.",
    });
  }

  static async deleteReview(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Delete review not implemented yet.",
    });
  }

  static async getAverageRating(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get average rating not implemented yet.",
    });
  }

  static async reportReview(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Report review not implemented yet.",
    });
  }
}

export default ReviewsController;