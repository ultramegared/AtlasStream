const express = require("express");
const router = express.Router();
const ContentController = require("../controllers/ContentController");

router.get("/", ContentController.getHome);
router.get("/:id", ContentController.getById);

module.exports = router;