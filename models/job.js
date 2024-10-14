const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title:{
        type : String,
        required : true,
    },
    description:{
        type : String,
        required : true,
    },
    category:{
        type : String,
        required : true,
    },
    workMode:{
        type : String,
        required : true,
    },
    experienceLevel:{
        type : String,
        required : true,
    },
    employmentType : {
        type : String,
        required : true,
    },
    state:{
        type : String,
        required : true,
    },
    city:{
        type : String,
        required : true,
    },
    salaryRangeMin: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: function(value) {
                return this.salaryRangeMax ? value <= this.salaryRangeMax : true;
            },
            message: 'Minimum salary should be less than or equal to maximum salary.'
        }
    },
    salaryRangeMax:{
        type : Number,
        required : true,
        min : 0,
    },
    salaryType:{
        type : String,
        required : true,
    },
    qualifications:{
        type : [String],
        required : true,
    },
    skillsRequired:{
        type : [String],
        required : true,
    },
    applicationDeadline:{
        type : Date,
        required : true,
    },
    companyName:{
        type : String,
        required : true,
    },

});

module.exports = mongoose.model("Job",jobSchema);