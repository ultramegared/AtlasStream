import { Request, Response } from "express";

class NotificationsController {
  static async getProfileNotifications(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Get profile notifications not implemented yet.",
    });
  }

  static async getNotificationById(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Get notification by ID not implemented yet.",
    });
  }

  static async createNotification(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Create notification not implemented yet.",
    });
  }

  static async updateNotification(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Update notification not implemented yet.",
    });
  }

  static async patchNotification(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Patch notification not implemented yet.",
    });
  }

  static async markAsRead(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Mark notification as read not implemented yet.",
    });
  }

  static async markAllAsRead(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Mark all notifications as read not implemented yet.",
    });
  }

  static async getUnreadCount(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Get unread notifications count not implemented yet.",
    });
  }

  static async deleteNotification(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Delete notification not implemented yet.",
    });
  }

  static async clearNotifications(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Clear notifications not implemented yet.",
    });
  }
}

export default NotificationsController;