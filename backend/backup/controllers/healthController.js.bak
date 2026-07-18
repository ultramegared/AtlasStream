const healthService = require("../services/healthService");

exports.getHealth = (req, res) => {
  const response = healthService.getStatus();
  res.json(response);
};