const express = require('express');
const cors = require('cors');
const { products } = require('./dateBase/products.js');

const app = express();
app.use(cors());


app.use('/', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

app.get('/api/product', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(item => item.id === productId);

  if (!product) {
    return res.status(404).json({ msg: 'Product not found' });
  }

  res.json(product);
});

app.get('/api/search', (req, res) => {
  const name = req.query.q.toLowerCase();
  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(name)
  );
  res.json(filteredProducts);
});

app.post('/api/products', (req, res) => {
  const new_product = {
    id: products.length+1,
    name: req.body.name,
    price:req.body.price
  }
  products.push(new_product)
  res.status(200).json(products);
// res.sendStatus(200);
});
