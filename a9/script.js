const searchInput = document.getElementById("searchInput");
const fruitList = document.getElementById("fruitList");
const fruits = Array.from(fruitList.getElementsByTagName("li"));
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", filterFruits);

function filterFruits() {
  const filter = searchInput.value.toLowerCase();
  let matches = 0;

  fruits.forEach((fruit) => {
    const text = fruit.textContent.toLowerCase();
    const match = text.includes(filter);
    fruit.style.display = match ? "block" : "none";
    if (match) matches++;
  });

  noResults.style.display = matches === 0 ? "block" : "none";
}
