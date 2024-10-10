const Joi = require("joi");

module.exports.jobSchema = Joi.object( {

    job : Joi.object( {

        title : Joi.string().required(),
        description : Joi.string().required(),
        
        category: Joi.string().valid(
            'software',
            'data',
            'design',
            'marketing',
            'finance',
            'sales',
            'hr',
            'it'
        ).required(),

        workMode: Joi.string().valid(
            'On-Site',
            'Remote',
            'Hybrid',
        ).required(),

        experienceLevel: Joi.string().valid(
            'intern',
            'junior',
            'mid',
            'senior',
            'lead'
        ).required(),

        employmentType: Joi.string().valid(
            'Full-time',
            'Part-time',
            'Contract',
            'Internship',
            'Freelance'
        ).required(),

        state: Joi.string().min(1).required(),

        city: Joi.string().min(1).required(),

        
        salaryRangeMin: Joi.number().positive().required(),
        salaryRangeMax: Joi.number().positive().greater(Joi.ref('salaryRangeMin')).required(),
  
        qualifications: Joi.array()
            .items(Joi.string().min(1).required())
            .min(1)
            .required(),

        skillsRequired: Joi.array()
            .items(Joi.string().min(1).required())
            .min(1)
            .required(),

        applicationDeadline: Joi.date().greater('now').required(),

        companyName: Joi.string().min(1).required(),

    } ).required(),

} );
