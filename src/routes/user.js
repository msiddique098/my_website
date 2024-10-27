// Importing required modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // for hashing passwords
const User = require('../models/userModel'); // Assuming you have a User model for MongoDB
const { check, validationResult } = require('express-validator');

// @route   POST /signup
router.use(express.json());
// @desc    Register a new user
router.post(
  '/signup',
  [
    // Validation middleware
    check('firstname', 'First name is required').not().isEmpty(),
    check('lastname', 'Last name is required').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    check('confirmPassword', 'Passwords do not match').custom((value, { req }) => value === req.body.password),
  ],
  async (req, res) => {
    // Check for validation errors
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Incoming request body: ", req.body);
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;

    

    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Create a new user object
      user = new User({
        firstname,
        lastname,
        email,
        password,
      });

      // Hash the password before saving to the database
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the user to the database
      await user.save();

      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
