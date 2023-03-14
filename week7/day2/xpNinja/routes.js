const express = require('express');
const router = express.Router();

const shoppingListController = require('./controllers/shoppingListController');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/express/index.html');
});

router.get('/items', shoppingListController.getAllItems);

router.get('/items/:id', shoppingListController.getItemById);

router.post('/item', shoppingListController.addItem);

module.exports = router;
