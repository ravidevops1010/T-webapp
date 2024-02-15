const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');
const authMiddleware = require('../middleware/authMiddleware');

// GET route to fetch all sellers
router.get('/', sellerController.getAllSellers);

// POST route to create a new seller (requires authentication)
router.post('/', authMiddleware, sellerController.createSeller);

module.exports = router;



