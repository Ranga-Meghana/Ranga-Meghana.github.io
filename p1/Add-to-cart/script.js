const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

let cart = {};

const showToast = (message) => {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000);
};

const addToCart = (id) => {
  cart[id] = (cart[id] || 0) + 1;
  showToast("Item added to cart");
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
      <div class="cart-container">
        <div class="row">${str}</div>
        <div class="totalprice-box">
          <h3>Total order price: $${Totalprice}</h3>
        </div>
      </div>
    `
    : "<p style='text-align:center; font-weight:bold;'>Your cart is empty.</p>";
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
  root.innerHTML = "<div class='row'>" + str + "</div>";
};
