console.clear();
console.log("╔════════════════════════════╗");
console.log("║  🌟 Odd Numbers (1 to 10) 🌟  ║");
console.log("╚════════════════════════════╝\n");

const oddNumbers = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}

oddNumbers.forEach((num, index) => {
  setTimeout(() => {
    console.log(`👉 Odd Number: ${num}`);
  }, index * 500);
});

setTimeout(() => {
  console.log("\n✅ Done listing odd numbers!");
}, oddNumbers.length * 500 + 300);
