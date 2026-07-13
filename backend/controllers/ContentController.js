const response = require("../utils/response");
const ContentRepository = require("../repositories/ContentRepository");

exports.getHome = async (req, res) => {
  const data = await ContentRepository.getHome();
  return response.success(res, data);
};

exports.getById = async (req, res) => {
  const data = await ContentRepository.getById(req.params.id);

  if (!data) {
    return response.error(res, "Content not found", 404);
  }

  return response.success(res, data);
};