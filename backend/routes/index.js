module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({
      name: "AtlasStream API",
      version: "1.0.0",
      status: "running"
    });
  });
};