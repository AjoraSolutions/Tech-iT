const express = require("express");
const router = express.Router();
const jobControllers = require("../controllers/job.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.route("/newJob")
    .get(jobControllers.newJobForm)

router.route("/newJobPost")
    .post(wrapAsync(jobControllers.postJob));


module.exports = router;