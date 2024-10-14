require('dotenv').config();

const mongoose = require("mongoose");
const Job = require("../models/job.js");

const initData = require("./job.js");

// MongoDB connection string from environment variables
// console.log("Mongo URL:", process.env.DB_URL);
const dbURL = 'mongodb+srv://ajorasolution:ZQnQCDFz1TOr32TR@cluster0.qpqpe.mongodb.net/TechIT?retryWrites=true&w=majority&appName=Cluster0'

// Connect to MongoDB Atlas
async function main() {
    await mongoose.connect(dbURL);
}

const initDB = async () => {
    try {
        await Job.deleteMany({}); // Clear existing data

        // Insert the new data into the database
        await Job.insertMany(initData.data);
        console.log("Data initialized successfully");

    } catch (error) {
        console.error("Error initializing data:", error);
    } finally {
        // Close the database connection after operations
        mongoose.connection.close();
    }
};

main()
    .then(() => {
        console.log("Connected to DB");
        initDB(); // Initialize the database after connection
    })
    .catch((err) => {
        console.error("Error connecting to DB:", err);
    });