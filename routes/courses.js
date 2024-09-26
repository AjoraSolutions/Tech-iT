const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const courseControllers = require("../controllers/course.js");

router.route("/allCourses")
    .get(wrapAsync(courseControllers.getAllCourses));

router.route("/:id/course")
    .get(wrapAsync(courseControllers.getCourse));


module.exports = router;