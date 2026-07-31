/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: app.ts
 * Path: backend/src/app.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Main Express application configuration.
 * ----------------------------------------------------------------
 */

import express, { Application, Request, Response } from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";

import logger from "./config/logger";
import routes from "./routes";

const app: Application = express();

app.disable("x-powered-by");

app.use(
    helmet({
        crossOriginResourcePolicy: false
    })
);

app.use(
    cors({
        origin: process.env.CORS_ORIGIN ?? "*",
        credentials: true
    })
);

app.use(compression());

app.use(express.json({ limit: "10mb" }));

app.use(
    express.urlencoded({
        extended: true,
        limit: "10mb"
    })
);

app.use(cookieParser());

app.use(
    pinoHttp({
        logger
    })
);

app.get("/", (_: Request, res: Response) => {

    res.status(200).json({
        success: true,
        application: process.env.APP_NAME ?? "AtlasStream",
        version: process.env.APP_VERSION ?? "1.0.0",
        environment: process.env.NODE_ENV,
        status: "online",
        timestamp: new Date().toISOString()
    });

});

app.get("/health", async (_: Request, res: Response) => {

    res.status(200).json({
        success: true,
        status: "healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });

});

app.use(process.env.API_PREFIX ?? "/api", routes);

app.use((_req: Request, res: Response) => {

    res.status(404).json({
        success: false,
        error: {
            code: "NOT_FOUND",
            message: "Resource not found."
        }
    });

});

app.use((error: Error, _req: Request, res: Response, _next: () => void) => {

    logger.error(error);

    res.status(500).json({
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message:
                process.env.NODE_ENV === "production"
                    ? "Internal server error."
                    : error.message
        }
    });

});

export default app;