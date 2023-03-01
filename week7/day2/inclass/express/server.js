// Import the necessary modules and functions
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const product_router = require('./routes/products.js');

// Load environment variables from a .env file
dotenv.config();

// Create a new Express app instance
const app = express();

// Allow cross-origin resource sharing
app.use(cors());

// Parse request bodies as JSON
app.use(express.json());

// Serve static files from the public directory
app.use('/', express.static(__dirname + '/public'));

// Set up the API routes
app.use('/api/products', product_router);

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


// CRUD
// // Read
// app.get('/api/products',(req,res)=>{
//   res.json(products)
// })

// app.get('/api/products/:id', (req,res)=>{
//   const product_id = req.params.id;
//   const product = products.find(item => {
//     return item.id == product_id
//   })
//   if(!product){
//     return res.status(404).json({msg:'not found'})
//   }
//   res.json(product)
// })

// app.get('/api/search', (req,res)=>{
//   const name = req.query.q;
//   const filter_products = products.filter(item => {
//     return item.name.toLowerCase().includes(name.toLowerCase())
//   })

//   if(filter_products.length === 0){
//     return res.status(200).json({msg:'no such product'})
//   }
//   res.json(filter_products)
// })

// app.post('/api/products',(req,res)=>{
//    const new_product = {
//      id: products.length+1,
//      name: req.body.name,
//      price:req.body.price
//    }
//    products.push(new_product)
//    res.status(200).json(products);
//    // res.sendStatus(200);
// })


// app.put('/api/products/:id', (req, res) => {
//     const id = req.params.id;
//     const index = products.findIndex(item => item.id == id);

//     if(index === -1) {
//       return res.status(404).json({msg: 'Product is not found'})
//     }
//       const updatedProduct = {
//         id: products[index].id,
//         name: req.body.name,
//         price: req.body.price
//       }
//       products[index] = updatedProduct
//       req.status(200).json(products)
// })
