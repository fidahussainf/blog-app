// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User registration
router.post('/register', authController.register);

// User login (should be POST not GET)
router.post('/login', authController.login);

// User logout
router.post('/logout', authController.logout);

module.exports = router;
