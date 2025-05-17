const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 56 },
  { id: 3, name: "Product 3", price: 40 },
];

function updateProducts(productsList, priceIncrement = 5, status = "Completed") {
  return productsList.map(product => ({
    name: product.name,
    price: product.price + priceIncrement,
    status,
  }));
}

const updatedProducts = updateProducts(products);

updatedProducts.sort((a, b) => a.price - b.price);

const averagePrice = (updatedProducts.reduce((sum, p) => sum + p.price, 0) / updatedProducts.length).toFixed(2);

console.log("Updated Product Prices and Status:");
updatedProducts.forEach(product => {
  console.log(`🔸 ${product.name} - ₹${product.price} - Status: ${product.status}`);
});
console.log(`\nTotal Products: ${updatedProducts.length}`);
console.log(`💰 Average Price: ₹${averagePrice}`);
