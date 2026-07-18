const authRoutes = require("./authRoutes");
const contentRoutes = require("./contentRoutes");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({
      name: "AtlasStream API",
      version: "1.0.0",
      status: "running"
    });
  });

  app.use("/auth", authRoutes);
  app.use("/content", contentRoutes);
};