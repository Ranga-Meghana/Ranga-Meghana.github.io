const products = [
  { id: 1, name: "Product 1", price: 34, status: "pending" },
  { id: 2, name: "Product 2", price: 56, status: "pending" },
  { id: 3, name: "Product 3", price: 40, status: "pending" },
];

const updatedProducts = products.map(product => ({
  ...product,
  price: product.price + 5,
  status: "completed"
}));

console.log("🛍️ Product Update Summary:\n");

let totalCost = 0;
let totalQuantity = updatedProducts.length;

updatedProducts.forEach(product => {
  console.log(`🔸 ${product.name}: ₹${product.price}`);
  console.log(`✅ Status: ${product.status}\n`);
  totalCost += product.price;
});

console.log(`📦 Total Products: ${totalQuantity}`);
console.log(`💰 Total Cost: ₹${totalCost}`);
