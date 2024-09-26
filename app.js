require('dotenv').config(); // Load environment variables from .env file
// Import required modules

const express = require('express');
const path = require('path'); // Import the path module for handling file paths
const ejsMate = require('ejs-mate'); // Import ejs-mate for enhanced EJS support
const mongoose = require('mongoose');
const session = require("express-session");
const flash = require("connect-flash");

const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");

const indexRouter = require("./routes/index.js");
const coursesRouter = require("./routes/courses.js");
const aboutRouter = require("./routes/about.js");


// Create an instance of Express
const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine with ejs-mate
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the directory where views are located
app.set('views', path.join(__dirname, 'views'));


// MongoDB connection string from environment variables
const dbURL = process.env.DB_URL;

// Connect to MongoDB Atlas

mongoose.connect(dbURL)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        // Start the server once connected to MongoDB
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    })
    .catch((err) => console.log(err));

const Course = require('./models/course');

const sessionOptions = {
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
}

app.use(session(sessionOptions));
app.use(flash());

// Make flash messages available in response locals
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Define routes

app.get('/', (req, res) => {
    res.redirect('/index'); // Redirect to the index page or render a home page
});
//  index route
app.use("/index", indexRouter);

//  explore course route
app.use('/explore', coursesRouter);

//about
app.use('/about', aboutRouter);

app.use( (err, req,res, next) => {
    
    let {status = 404, message = "Something went WRONG!"} = err;
    // res.status(status).send(message);
    res.status(status).render("courses/error.ejs", {body : "" ,message});
});


