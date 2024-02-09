const express = require('express');
const uploadController = require('../controllers/uploadController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/upload', authMiddleware, uploadController.uploadPhoto);

module.exports = router;

