const fruits = ["Apple", "Orange", "Mango", "Banana"];

function filterFruits() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = fruits.filter(fruit => fruit.toLowerCase().includes(input));

  const list = document.getElementById("fruitList");
  list.innerHTML = "";

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "❌ Fruit not available";
    li.style.color = "red";
    li.style.fontWeight = "bold";
    list.appendChild(li);
  } else {
    filtered.forEach(fruit => {
      const li = document.createElement("li");
      li.textContent = fruit;
      li.style.fontWeight = "bold";
      list.appendChild(li);
    });
  }
}
