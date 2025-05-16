const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 56 },
  { id: 3, name: "Product 3", price: 40 },
];

const updatedProducts = products.map(product => ({
  name: product.name,
  price: product.price + 5,
}));

updatedProducts.sort((a, b) => a.price - b.price);

console.log("🛍️ Updated Product Prices:\n");

updatedProducts.forEach(product => {
  console.log(`🔸 ${product.name} - ₹${product.price}`);
});
