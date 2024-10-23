const Job = require("../models/job");
require('dotenv').config();

// DISPLAY ALL JOBS
module.exports.jobs = async(req,res) => {

    // console.log(req.query);

    const { experienceLevel, category, employmentType, workMode, jobTitle } = req.query;

    let query = {};

    // Dynamically build the query based on available parameters
    if (jobTitle) query.title = jobTitle;
    if (experienceLevel) query.experienceLevel = experienceLevel;
    if (category) query.category = category;
    if (employmentType) query.employmentType = employmentType;
    if (workMode) query.workMode = workMode;

    const currentDate = new Date();

    // Find jobs with passed application deadlines and remove them
    await Job.deleteMany({ applicationDeadline: { $lt: currentDate } });

    let jobInfo = await Job.find(query);
    

    if (!jobInfo || jobInfo.length === 0) {
        // req.flash('error', 'No Jobs Found');
        return res.redirect("/jobs");
    }

    res.render("job/allJobs.ejs", { body: '', 
        jobInfo, 
        experienceLevel,
        category,
        employmentType,
        workMode,
        jobTitle
    });
    
}

// RENDER NEW JOB FORM
module.exports.newJobForm = async(req,res) => {
    
    try {
        const { pass, email } = req.body;

        // Check for empty fields
        if (!email || !pass) {
            req.flash('error', "Email and password are required!");
            return res.redirect("/jobs");
        }

        // Validate credentials
        if (email === process.env.ADMIN && pass === process.env.EMAILPASS) {
            return res.render("job/newJobForm.ejs", { body: '' });
        } else {
            req.flash('error', "Wrong email or password!");
            return res.redirect("/jobs");
        }
    } catch (error) {
        console.error("Error rendering job form:", error);
        req.flash('error', "An error occurred. Please try again.");
        return res.redirect("/jobs");
    }
    
}

// Validate Admin
module.exports.validateAdmin = async(req,res) => {
    res.render("job/validateAdmin.ejs", {body:''});
}

// INSERT JOB DATA IN DB
module.exports.postJob = async(req,res) => {

    let job = req.body.job;

    if (!job || typeof job !== 'object') {
        throw new Error("Job data is not defined or is not an object.");
    }

    if(typeof job.qualifications === 'string'){
        job.qualifications = job.qualifications.split(',');
    }
    else{
        job.qualification = [];
    }

    if(typeof job.skillsRequired === 'string'){
        job.skillsRequired = job.skillsRequired.split(',');
    }
    else{
        job.skillsRequired = [];
    }



    const newJob = new Job(job);

    await newJob.save();

    // console.log(job);

    
    req.flash("success","New Listing Created Successfully!");
    res.redirect("/jobs");
}

// job detaILS
module.exports.jobDetails = async(req,res) => {

    let { id }  = req.params;

    let job = await Job.findById(id);
    
    if(!job){
        req.flash('error', 'Something went wrong, try again later');
        return res.redirect("/jobs");
    }

    res.render("job/jobDetails.ejs", { body: '', job});
}
// Apply form
module.exports.jobApply = async(req,res) => {

    let { id }  = req.params;

    let job = await Job.findById(id);
    
    if(!job){
        req.flash('error', 'Something went wrong, try again later');
        return res.redirect("/jobs");
    }
    
    res.render("job/applyForm.ejs", { body: '', job});
}