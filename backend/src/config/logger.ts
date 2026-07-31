/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: logger.ts
 * Path: backend/src/config/logger.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Centralized application logger.
 * ----------------------------------------------------------------
 */

import pino from "pino";

import env from "./env";

const logger = pino({
    level: env.LOG_LEVEL,

    transport:
        env.NODE_ENV === "development"
            ? {
                  target: "pino-pretty",
                  options: {
                      colorize: true,
                      translateTime: "SYS:standard",
                      ignore: "pid,hostname"
                  }
              }
            : undefined,

    timestamp: pino.stdTimeFunctions.isoTime
});

export default logger;