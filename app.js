// Import required modules
const express = require('express');
const path = require('path'); // Import the path module for handling file paths
const ejsMate = require('ejs-mate'); // Import ejs-mate for enhanced EJS support
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Create an instance of Express
const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine with ejs-mate
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// Define the directory where views are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection string from environment variables
const dbURI = process.env.DB_URL;

// Connect to MongoDB Atlas
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        // Start the server once connected to MongoDB
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    })
    .catch((err) => console.log(err));

// Import the User model
const User = require('./models/user');

// Define routes

// Home page route
app.get('/', (req, res) => {
    // res.send('Home page');
    res.render("layout/boilerplate.ejs");
});

// Route to display the signup form
app.get('/student/signup', (req, res) => {
    res.render('user/signup'); // Render the signup view from the "views/user" directory
});

// Route to handle signup form submission
app.post('/student/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        const registeredUser = await newUser.save();
        console.log(registeredUser);
        res.send(`Welcome, ${username}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error signing up');
    }
});

// Route to display the login form
app.get('/student/login', (req, res) => {
    res.render('user/login'); // Render the login view from the "views/user" directory
});

// Route to handle login form submission
app.post('/student/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Welcome back, ${username}!`);
});