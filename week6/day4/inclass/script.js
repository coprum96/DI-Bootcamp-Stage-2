const products = [
  {
    id: 0,
    name: "Deluxe Bicycle",
    url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
    price: 499.98,
  },
  {
    id: 1,
    name: "Super Deluxe bagpack",
    url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
    price: 134.99,
  },
  {
    id: 2,
    name: "Super Duper Scooter",
    url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
    price: 1090.95,
  },
  {
    id: 3,
    name: "Smartphone",
    url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
    price: 399.99,
  },
];

(function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("products-container");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.setAttribute("id", `product${product.id}`);
    productDiv.setAttribute("class", "product");

    const img = document.createElement("img");
    img.setAttribute("src", product.url);
    productDiv.appendChild(img);

    const name = document.createElement("p");
    name.textContent = product.name;
    productDiv.appendChild(name);

    const price = document.createElement("p");
    price.textContent = `$${product.price.toFixed(2)}`;
    productDiv.appendChild(price);

    productDiv.addEventListener("click", () => {
      // Check if product is already in cart
      const index = cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        alert("You can only add one of each product to your cart.");
      } else {
        // Add product to cart
        cart.push({ id: product.id, name: product.name, price: product.price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
      }
    });

    container.appendChild(productDiv);
  });
})();

