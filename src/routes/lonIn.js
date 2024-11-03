// // Importing required modules
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt'); // for hashing passwords
// const User = require('../models/userModel'); // Assuming you have a User model for MongoDB
// const { check, validationResult } = require('express-validator');

// // @route   POST /logIn
// router.use(express.json());
// router.post(
//   '/logIn',
//   [
//     // Validation middleware
//     check('logInEmail', 'Please include a valid email').isEmail(),
//     check('logInPassword', 'Password is required').exists(),
//   ],
//   async (req, res) => {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { logInEmail, logInPassword } = req.body;

//     try {
//       // Check if the user exists
//       const user = await User.findOne({ email: logInEmail });
//       if (!user) {
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }

//       // Check if the password matches
//       const isMatch = await bcrypt.compare(logInPassword, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }

//       // If login is successful, return success message
//       res.status(200).json({ msg: 'Login successful' });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   }
// );

// module.exports = router;
