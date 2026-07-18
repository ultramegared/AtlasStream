import { Request, Response } from "express";

class ProfilesController {
  static async getAllProfiles(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get all profiles not implemented yet.",
    });
  }

  static async getProfileById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get profile by ID not implemented yet.",
    });
  }

  static async createProfile(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Create profile not implemented yet.",
    });
  }

  static async updateProfile(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update profile not implemented yet.",
    });
  }

  static async patchProfile(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Patch profile not implemented yet.",
    });
  }

  static async deleteProfile(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Delete profile not implemented yet.",
    });
  }

  static async updateAvatar(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update profile avatar not implemented yet.",
    });
  }

  static async updateSettings(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update profile settings not implemented yet.",
    });
  }

  static async updateParentalControl(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Update parental control not implemented yet.",
    });
  }

  static async updateLanguage(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update profile language not implemented yet.",
    });
  }
}

export default ProfilesController;