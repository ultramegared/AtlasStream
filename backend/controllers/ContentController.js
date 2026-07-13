const response = require("../utils/response");

exports.getHome = async (req, res) => {
  return response.success(res, {
    trending: [],
    movies: [],
    series: []
  });
};

exports.getById = async (req, res) => {
  return response.success(res, {
    id: req.params.id
  });
};