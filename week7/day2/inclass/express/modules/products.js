// Import the necessary modules and functions
const {db} = require('../config/db.js');

// Define the function for getting all products
const getAllProducts = () => {
  return db('products')
    .select('id', 'name', 'price')
    .orderBy('name');
};

// Export the function as a module
module.exports = {
  getAllProducts
};
