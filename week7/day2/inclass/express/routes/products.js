// Import the necessary modules and functions
const express = require('express');
const { _getAllProducts } = require('../controllers/products.js');

// Create a new router instance
const router = express.Router();

// Define the route for getting all products
router.get('/', _getAllProducts);

// Export the router instance
module.exports = router;
