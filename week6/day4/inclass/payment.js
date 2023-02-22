(function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const itemsList = document.createElement('ul');
    cart.forEach(({ id, name, price }) => {
      const item = document.createElement('li');
      item.setAttribute('id', `cartItem${id}`);
      item.textContent = `${name} - $${price.toFixed(2)}`;
      itemsList.appendChild(item);
    });
    
    const container = document.createElement('div');
    
    const totalPrice = cart.reduce((acc, { price }) => acc + price, 0);
    const total = document.createElement('p');
    total.textContent = `Total: $${totalPrice.toFixed(2)}`;
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit payment';
    submitButton.addEventListener('click', () => {
      localStorage.removeItem('cart');
      alert('Thank you! Good Luck');
    });
    
    container.appendChild(itemsList);
    container.appendChild(total);
    container.appendChild(submitButton);
    
    document.body.appendChild(container);
  })();
  