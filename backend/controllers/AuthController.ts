import { Request, Response } from "express";

class AuthController {
  static async login(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Login not implemented yet.",
    });
  }

  static async register(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Register not implemented yet.",
    });
  }

  static async logout(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Logout not implemented yet.",
    });
  }

  static async refreshToken(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Refresh token not implemented yet.",
    });
  }

  static async forgotPassword(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Forgot password not implemented yet.",
    });
  }

  static async resetPassword(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Reset password not implemented yet.",
    });
  }

  static async verifyEmail(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Email verification not implemented yet.",
    });
  }

  static async resendVerificationEmail(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Resend verification email not implemented yet.",
    });
  }
}

export default AuthController;