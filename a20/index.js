const form = document.getElementById("emailForm");
const input = document.getElementById("emailInput");
const output = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const typedEmail = input.value.trim().toLowerCase();
  output.textContent = "Searching...";

  try {
    const fetchRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = await fetchRes.json();

    const found = userList.find(user => user.email.toLowerCase() === typedEmail);

    if (found) {
      output.innerHTML = `
        <div class="card">
          <h3>${found.name}</h3>
          <p>Email: ${found.email}</p>
          <p>Company: ${found.company.name}</p>
        </div>
      `;
    } else {
      output.textContent = "No match found for this email.";
    }
  } catch (err) {
    output.textContent = "Oops! Something went wrong.";
    console.log("Error fetching data:", err);
  }
});
