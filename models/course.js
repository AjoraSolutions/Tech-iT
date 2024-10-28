const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title:{
        type : String,
        required : true,
    },
    tagline:{
        type : String,
        required : true,
    },
    description:{
        type : String,
        required : true,
    },
    syllabus:{
        type : Array,
        required : true,
    },
    duration:{
        type : String,
    },
    courseImg : {
        type : String,
        required : true,
    },
    brochureURL : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model("Course",courseSchema);