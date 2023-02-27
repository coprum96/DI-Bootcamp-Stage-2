const express = require('express');
const {products} = require('./dateBase/products.js');

const app = express();

app.listen(5000, ()=> {
    console.log('run on port 5000');
})

app.get('/api/product', (req, res) => {
    res.json(products);
})