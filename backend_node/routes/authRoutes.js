const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST route for user registration
router.post('/register', authController.register);

// POST route for user login
router.post('/login', authController.login);

module.exports = router;

