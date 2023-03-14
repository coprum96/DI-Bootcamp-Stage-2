const shoppingList = require('../models/shoppingList');

function getAllItems(req, res) {
  const items = shoppingList.getShoppingList();
  res.status(200).json(items);
}

function getItemById(req, res) {
  const itemId = parseInt(req.params.id);
  const item = shoppingList.getItemById(itemId);

  if (!item) {
    return res.status(404).json({ error: `Item with ID ${itemId} not found` });
  }

  res.json(item);
}

function addItem(req, res) {
  const itemName = req.body.name;
  const itemPrice = parseFloat(req.body.price);

  if (!itemName || isNaN(itemPrice)) {
    return res.status(400).json({ error: 'Invalid item data' });
  }

  const newItem = shoppingList.addItem({ name: itemName, price: itemPrice });

  res.status(201).json(newItem);
}

module.exports = {
  getAllItems,
  getItemById,
  addItem
};
