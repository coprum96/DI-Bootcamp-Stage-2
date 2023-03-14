let shoppingList = [];

function getShoppingList() {
  return shoppingList;
}

function getItemById(itemId) {
  return shoppingList.find(item => item.id === itemId);
}

function addItem(item) {
  const newItemId = shoppingList.length + 1;
  const newItem = {
    id: newItemId,
    name: item.name,
    price: item.price
  };

  shoppingList.push(newItem);

  return newItem;
}

module.exports = {
  getShoppingList,
  getItemById,
  addItem
};
