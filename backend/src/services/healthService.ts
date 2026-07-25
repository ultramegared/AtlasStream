/**
 * AtlasStream Backend API
 * Copyright (c) ultramegared
 * Project: AtlasStream
 */

export interface HealthStatus {
  name: string;
  version: string;
  status: "running";
  timestamp: Date;
  language: string;
  author: string;
}

class HealthService {
  getStatus(): HealthStatus {
    return {
      name: "AtlasStream API",
      version: "1.0.0",
      status: "running",
      timestamp: new Date(),
      language: "es",
      author: "UltraMegaRed",
    };
  }
}

export default new HealthService();