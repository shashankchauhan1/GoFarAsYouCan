const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth"); // Import the auth middleware

const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser()); // Use cookie parser to read cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use auth routes
app.use("/api/auth", authRoutes);

// Routes for login and signup pages
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// Protected route (Dashboard) - requires user to be logged in
app.get("/dashboard", authMiddleware, (req, res) => {
    res.render("dashboard", { userId: req.userId }); // Pass user data if needed
});

// engineering maindashboard route

app.get("/Engineering/engineering.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/engineering", { userId: req.userId }); // Pass user data if needed
});


// cse route

app.get("/Engineering/CSE/cse.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/cse", { userId: req.userId }); // Pass user data if needed
});

// cse dsa route

app.get("/Engineering/CSE/dsa.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/dsa", { userId: req.userId }); // Pass user data if needed
});

// cse webdev route

app.get("/engineering/CSE/webdev.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/webdev.ejs", { userId: req.userId }); // Pass user data if needed
});

// cse aiml route

app.get("/Engineering/CSE/aiml.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/aiml", { userId: req.userId }); // Pass user data if needed
});

// cse cloud route

app.get("/Engineering/CSE/cloud.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/cloud", { userId: req.userId }); // Pass user data if needed
});

// cse devops route

app.get("/Engineering/CSE/devops.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/devops", { userId: req.userId }); // Pass user data if needed
});

// cse appdev route

app.get("/Engineering/CSE/appdev.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/appdev", { userId: req.userId }); // Pass user data if needed
});

// cse iosdev route

app.get("/Engineering/CSE/iosdev.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/iosdev", { userId: req.userId }); // Pass user data if needed
});

// cse networking route

app.get("/Engineering/CSE/networking.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/networking", { userId: req.userId }); // Pass user data if needed
});

// cse systemdesign route

app.get("/Engineering/CSE/systemdesign.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/systemdesign", { userId: req.userId }); // Pass user data if needed
});

// cse dataanalytic.ejs

app.get("/Engineering/CSE/dataanalytic.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/CSE/dataanalytic", { userId: req.userId }); // Pass user data if needed
});

// MECHANICAL ROUTES

app.get("/Engineering/Mech/mech.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Mech/mech", { userId: req.userId }); // Pass user data if needed
});


app.get("/Engineering/Mech/automotive.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Mech/automotive", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Mech/aerospace.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Mech/aerospace", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Mech/robotics.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Mech/robotics", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Mech/manifacturing.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Mech/manifacturing", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Mech/thermal.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Mech/thermal", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Mech/energy.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Mech/energy", { userId: req.userId }); // Pass user data if needed
});

// CIVIL ROUTES

app.get("/Engineering/Civil/civil.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/civil", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Civil/structural.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/structural", { userId: req.userId }); // Pass user data if needed
}); 

app.get("/Engineering/Civil/geotechnical.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/geotechnical", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Civil/environmental.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/environmental", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Civil/transportation.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/transportation", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Civil/water.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/water", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Civil/construction.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/construction", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Civil/surveying.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Civil/surveying", { userId: req.userId }); // Pass user data if needed
});

// ELECTRICAL ROUTES

app.get("/Engineering/Electrical/electrical.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Electrical/electrical", { userId: req.userId }); // Pass user data if needed
}); 

app.get("/Engineering/Electrical/power.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Electrical/power", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Electrical/electronics.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Electrical/electronics", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Electrical/signal.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Electrical/signal", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Electrical/control.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Electrical/control", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Electrical/telecommunication.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Electrical/telecommunication", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Electrical/embedded.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Electrical/embedded", { userId: req.userId }); // Pass user data if needed
});

// Chemical Engineering Routes

app.get("/Engineering/Chemical/chemical.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Chemical/chemical", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Chemical/process.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Chemical/process", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Chemical/biochemical.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Chemical/biochemical", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Chemical/petroleum.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Chemical/petroleum", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Chemical/polymer.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Chemical/polymer", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Chemical/environmental.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Chemical/environmental", { userId: req.userId }); // Pass user data if needed
});

app.get("/Engineering/Chemical/nanotech.ejs", authMiddleware, (req, res) => {
    res.render("Engineering/Chemical/nanotech", { userId: req.userId }); // Pass user data if needed
});

// Resume Builder Route

app.get("/Resume/resume.ejs", authMiddleware, (req, res) => {
    res.render("Resume/resume", { userId: req.userId }); // Pass user data if needed
});


// LinkedIn Route

app.get("/Linkedin/linkedin.ejs", authMiddleware, (req, res) => {
    res.render("Linkedin/linkedin", { userId: req.userId }); // Pass user data if needed
});

// Communication Route

app.get("/Communication/communication.ejs", authMiddleware, (req, res) => {
    res.render("Communication/communication", { userId: req.userId }); // Pass user data if needed
});

// Time management Route

app.get("/Soft/softskills.ejs", authMiddleware, (req, res) => {
    res.render("Soft/softskills", { userId: req.userId }); // Pass user data if needed
});


// Start the server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// G-60TX6711V8 
