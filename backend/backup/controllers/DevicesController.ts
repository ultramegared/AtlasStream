import { Request, Response } from "express";

class DevicesController {
  static async getUserDevices(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get user devices not implemented yet.",
    });
  }

  static async getDeviceById(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Get device by ID not implemented yet.",
    });
  }

  static async registerDevice(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Register device not implemented yet.",
    });
  }

  static async updateDevice(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Update device not implemented yet.",
    });
  }

  static async patchDevice(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Patch device not implemented yet.",
    });
  }

  static async setTrustedDevice(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Set trusted device not implemented yet.",
    });
  }

  static async removeDevice(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Remove device not implemented yet.",
    });
  }

  static async removeAllDevices(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Remove all devices not implemented yet.",
    });
  }

  static async logoutDevice(req: Request, res: Response): Promise<Response> {
    return res.status(501).json({
      message: "Logout device not implemented yet.",
    });
  }

  static async logoutAllDevices(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.status(501).json({
      message: "Logout all devices not implemented yet.",
    });
  }
}

export default DevicesController;