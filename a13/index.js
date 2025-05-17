const products = [
  { id: 1, name: "Product 1", price: 34, status: "pending", quantity: 3 },
  { id: 2, name: "Product 2", price: 56, status: "pending", quantity: 1 },
  { id: 3, name: "Product 3", price: 40, status: "pending", quantity: 4 },
];

const updatedProducts = products.map(product => ({
  ...product,
  price: product.price + 5,
  status: "completed"
}));

const filteredProducts = updatedProducts.filter(product => product.quantity > 2);

console.log("🛍️ Product Update Summary (Quantity > 2):\n");

let totalCost = 0;
let totalQuantity = 0;

filteredProducts.forEach(product => {
  const productTotal = product.price * product.quantity;
  totalCost += productTotal;
  totalQuantity += product.quantity;

  console.log(`🔸 ${product.name}`);
  console.log(`   🏷️ Price: ₹${product.price}`);
  console.log(`   📦 Quantity: ${product.quantity}`);
  console.log(`   💰 Total: ₹${productTotal}\n`);
});

console.log(`📦 Total Quantity: ${totalQuantity}`);
console.log(`💰 Total Cost: ₹${totalCost}`);
