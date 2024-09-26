const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const indexControllers = require("../controllers/index.js");

router.route("/")
    .get(wrapAsync(indexControllers.index));

module.exports = router;