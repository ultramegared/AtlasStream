import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.disable("x-powered-by");

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    success: true,
    name: "AtlasStream API",
    version: "1.0.0",
    status: "online",
  });
});

app.use("/api", routes);

export default app;