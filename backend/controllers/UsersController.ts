import { Request, Response } from "express";

class UsersController {
  static async getAllUsers(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get all users not implemented yet.",
    });
  }

  static async getUserById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get user by ID not implemented yet.",
    });
  }

  static async createUser(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Create user not implemented yet.",
    });
  }

  static async updateUser(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update user not implemented yet.",
    });
  }

  static async patchUser(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Patch user not implemented yet.",
    });
  }

  static async deleteUser(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Delete user not implemented yet.",
    });
  }

  static async changeUserStatus(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Change user status not implemented yet.",
    });
  }

  static async changeUserRole(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Change user role not implemented yet.",
    });
  }

  static async updateAvatar(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update avatar not implemented yet.",
    });
  }
}

export default UsersController;