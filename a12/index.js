const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 56 },
  { id: 3, name: "Product 3", price: 40 },
];

products.sort((a, b) => a.price - b.price);

console.log("Product List:\n");

products.forEach(p => {
  console.log(`${p.name} - ₹${p.price}`);
});

console.log(`\nTotal Products: ${products.length}`);
