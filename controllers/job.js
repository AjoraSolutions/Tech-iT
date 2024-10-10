const Job = require("../models/job");

module.exports.newJobForm = async(req,res) => {
    
    res.render("job/newJobForm.ejs", { body: ''});
}

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
    res.redirect("/job/newJob");
}