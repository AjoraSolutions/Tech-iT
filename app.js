if(process.env.NODE_ENV != "production"){
    require('dotenv').config();  //accessesing environmental credentials
} // Load environment variables from .env file
// Import required modules

const express = require('express');
const path = require('path'); // Import the path module for handling file paths
const ejsMate = require('ejs-mate'); // Import ejs-mate for enhanced EJS support
const mongoose = require('mongoose');
const session = require("express-session");
const flash = require("connect-flash");

const indexRouter = require("./routes/index.js");
const coursesRouter = require("./routes/courses.js");
const aboutRouter = require("./routes/about.js");
const jobRouter = require("./routes/job.js");


// const multer = require('multer');
// const nodemailer = require('nodemailer');
// const fs = require('fs');

// Set up multer for file uploads (e.g., CV upload)
// const upload = multer({ dest: 'uploads/' });


// Create an instance of Express
const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up EJS as the view engine with ejs-mate
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the directory where views are located
app.set('views', path.join(__dirname, 'views'));


// MongoDB connection string from environment variables
const dbURL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas

mongoose.connect(dbURL)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        // Start the server once connected to MongoDB
        app.listen(PORT, () => {
            console.log('Server is listening on port 3000');
        });
    })
    .catch((err) => {
        console.log(err);
        req.flash('error', 'Something went wrong, try again later');
    });


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

// Nodemailer transporter setup (using Gmail in this example)
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'techitcareer08@gmail.com',
//       pass: 'techit@08',  
//     },
// });
  
// app.post('/submit-application', upload.single('attachment'), (req, res) => {
//     const { fullName, email, phone, coverLetter } = req.body;
//     const cvFilePath = req.file.path;
//     const cvFileName = req.file.originalname;
  
//     // Set up mail options
//     const mailOptions = {
//       from: email,
//       to: 'techitcareer08@gmail.com',
//       subject: `Job Application from ${fullName}`,
//       text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nCover Letter:\n${coverLetter}`,
//       attachments: [
//         {
//           filename: cvFileName,
//           path: cvFilePath,
//         },
//       ],
//     };
  
//     // Send email with Nodemailer
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return res.status(500).send('Error while sending email: ' + error.message);
//       }
//       // Delete the uploaded file after sending email
//       fs.unlink(cvFilePath, (err) => {
//         if (err) {
//           return res.status(500).send('Error while deleting uploaded file: ' + err.message);
//         }
//         res.send('Application submitted successfully! We will get back to you soon.');
//       });
//     });
// });


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

//about
app.use('/jobs', jobRouter);

app.use( (err, req,res, next) => {
    
    let {status = 404, message = "Something went WRONG!"} = err;
    // res.status(status).send(message);
    res.status(status).render("courses/error.ejs", {body : "" ,message});
});


