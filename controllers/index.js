
const Course = require("../models/course");
const ExpressError = require('../utils/ExpressError');

module.exports.index = async(req,res) => {
    let allCourses = await Course.find({});

    if(!allCourses){
        req.flash('error', 'Something went wrong, try again later');
        throw new ExpressError("Something went wrong, try again later",404);
    }

    res.render("index/index.ejs", { body: '', allCourses});
}