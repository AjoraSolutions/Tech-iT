// controllers/courseController.js
const Course = require('../models/course');

module.exports.getAllCourses = async(req, res) => {

    let allCourses = await Course.find({});

    if(!allCourses || allCourses.length === 0){
        req.flash('error', 'Something went wrong, try again later');
        return res.redirect("/index");
    }

    res.render("courses/allCourses.ejs", { body: '', allCourses});
}

module.exports.getCourse = async(req, res) => {

    let { id } = req.params; // Correctly retrieving the id from req.params

    let course = await Course.findById(id);

    if(!course){
        req.flash('error', 'Something went wrong, try again later');
        return res.redirect("/index");
    }
    
    res.render("courses/course.ejs", { body: '', course});
}