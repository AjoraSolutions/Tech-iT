const express = require("express");
const router = express.Router();
const aboutControllers = require("../controllers/about");

router.get("/", aboutControllers.about);

module.exports = router;