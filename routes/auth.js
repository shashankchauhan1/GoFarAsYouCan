const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import the user model

const router = express.Router();

// Handle signup
// Handle signup
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.render('signup', { error: 'Email already in use. Please log in.' });
      }
  
      // Create new user
      const newUser = new User({
        name,
        email,
        password, // Password will be hashed by the pre-save hook
      });
  
      // Save the user to the database
      await newUser.save();
  
      // After successful signup, render the login page with a success message
      res.render('login', { success: 'Account created successfully. Please log in.' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error during signup' });
    }
  });


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists
    const user = await User.findOne({ email });
    if (!user) {
      // Render the login page with an error message
      return res.render('login', { error: 'Email not found. Please sign up.' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Render the login page with an error message
      return res.render('login', { error: 'Incorrect password. Please try again.' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
    // Set the token in a cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      // secure: true, // Uncomment in production with HTTPS
    });

    // Redirect to the dashboard after successful login
    return res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error during login' });
  }
});



module.exports = router;
