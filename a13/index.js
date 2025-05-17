const products = [
  { id: 1, name: "Product 1", price: 34, status: "pending", quantity: 3 },
  { id: 2, name: "Product 2", price: 56, status: "pending", quantity: 1 },
  { id: 3, name: "Product 3", price: 40, status: "pending", quantity: 4 },
];

const filteredProducts = products
  .map(p => ({
    ...p,
    price: p.price + 5,
    status: "completed"
  }))
  .filter(p => p.quantity > 2);

let totalCost = 0;
let totalQuantity = 0;

console.log("Updated Products (quantity > 2):\n");

filteredProducts.forEach(p => {
  const productTotal = p.price * p.quantity;
  totalCost += productTotal;
  totalQuantity += p.quantity;

  console.log(`${p.name}`);
  console.log(`Price   : ₹${p.price}`);
  console.log(`Qty     : ${p.quantity}`);
  console.log(`Subtotal: ₹${productTotal}\n`);
});

console.log(`Total Quantity: ${totalQuantity}`);
console.log(`Total Cost    : ₹${totalCost}`);
