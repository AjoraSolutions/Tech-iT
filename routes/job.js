const express = require("express");
const router = express.Router();
const jobControllers = require("../controllers/job.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.route("/")
    .get(jobControllers.jobs)

router.route("/newJob")
    .post(jobControllers.newJobForm)

router.route("/validateAdmin")
    .get(jobControllers.validateAdmin)

router.route("/newJobPost")
    .post(wrapAsync(jobControllers.postJob));

router.route("/:id/details")
    .get(wrapAsync(jobControllers.jobDetails));

router.route("/:id/apply")
    .get(wrapAsync(jobControllers.jobApply));

module.exports = router;