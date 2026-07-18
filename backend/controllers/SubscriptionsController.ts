import { Request, Response } from "express";

class SubscriptionsController {
  static async getAllSubscriptions(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get subscriptions not implemented yet." });
  }

  static async getUserSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get user subscription not implemented yet." });
  }

  static async getSubscriptionById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get subscription by ID not implemented yet." });
  }

  static async createSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Create subscription not implemented yet." });
  }

  static async updateSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Update subscription not implemented yet." });
  }

  static async patchSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Patch subscription not implemented yet." });
  }

  static async changePlan(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Change plan not implemented yet." });
  }

  static async renewSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Renew subscription not implemented yet." });
  }

  static async cancelSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Cancel subscription not implemented yet." });
  }

  static async reactivateSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Reactivate subscription not implemented yet." });
  }

  static async getSubscriptionStatus(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Get subscription status not implemented yet." });
  }

  static async deleteSubscription(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({ message: "Delete subscription not implemented yet." });
  }
}

export default SubscriptionsController;