console.clear();
console.log("Odd Numbers from 1 to 10\n");

const odds = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) odds.push(i);
}

odds.forEach((n, i) => {
  setTimeout(() => {
    console.log(`Odd: ${n}`);
  }, i * 500);
});

setTimeout(() => {
  console.log("\nDone.");
}, odds.length * 500 + 300);
