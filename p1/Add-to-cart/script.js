const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

let cart = {};

const addToCart = (id) => {
  cart[id] = (cart[id] || 0) + 1;
  dispCart();
};

const increaseQty = (id) => {
  cart[id] = (cart[id] || 0) + 1;
  dispCart();
};

const decreaseQty = (id) => {
  if (cart[id]) {
    cart[id]--;
    if (cart[id] === 0) delete cart[id];
  }
  dispCart();
};

const dispCart = () => {
  let str = "";
  let Totalprice = 0;

  for (let id in cart) {
    const item = products.find(p => p.id == id);
    const qty = cart[id];
    const total = item.price * qty;
    Totalprice += total;

    str += `
      <div class="product-box">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>

        <div class="qty-controls">
          <button onclick='decreaseQty(${id})'>−</button>
          <span>${qty}</span>
          <button onclick='increaseQty(${id})'>+</button>
        </div>

        <p><strong>Value: $${total}</strong></p>
      </div>
    `;
  }

  root.innerHTML = str
    ? `
      <h2>Cart</h2>
      <div class="row">${str}</div>
      <div class="totalprice-box">
        <h3>Total order price: $${Totalprice}</h3>
        <h4 id="orderValue"></h4>
        <button onclick="showProducts()">Continue Shopping</button>
      </div>
    `
    : "<p>Your cart is empty.</p>";

  dispOrderValue();
};

const dispOrderValue = () => {
  const grandTotal = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] || 0);
  }, 0);
  const orderValueElem = document.getElementById("orderValue");
  if (orderValueElem) {
    orderValueElem.innerText = `Order Value: $${grandTotal}`;
  }
};

const showProducts = () => {
  let str = "";
  products.map(value => {
    str += `
      <div class="product-box">
        <h3>${value.name}</h3>
        <h4>$${value.price}</h4>
        <button onclick='addToCart(${value.id})'>Add to Cart</button>
      </div>
    `;
  });
  root.innerHTML = "<h2>Products</h2><div class='row'>" + str + "</div>";
};
