const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 1500 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 3000 },
];

function showMessage(message, isError = true) {
  const msgDiv = document.getElementById("errorMsg");
  msgDiv.textContent = message;
  msgDiv.style.display = "block";
  msgDiv.className = isError ? "error" : "success";
}

function getGreeting(name) {
  const hour = new Date().getHours();
  let timeGreeting = "Hello";

  if (hour >= 5 && hour < 12) timeGreeting = "Good Morning, WELCOME";
  else if (hour >= 12 && hour < 17) timeGreeting = "Good Afternoon, WELCOME";
  else if (hour >= 17 && hour < 21) timeGreeting = "Good Evening, WELCOME";
  else timeGreeting = "Good Night";

  return `${timeGreeting}, ${name}!`;
}

function handleLogin() {
  const card = document.getElementById("cardInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();

  const user = customers.find(
    (c) => c.card === card && c.pin === pin
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    showDashboard(user);
  } else {
    showMessage("Invalid card number or PIN.", true);
  }
}

function showDashboard(user) {
  document.body.innerHTML = `
    <div class="dashboard">
      <h1>${getGreeting(user.name)}</h1>
      <p>Your balance is: ₹${user.balance}</p>
      <button onclick="handleLogout()">Logout</button>
    </div>
  `;

  document.querySelector(".dashboard").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".dashboard").style.opacity = 1;
  }, 100);
}

function handleLogout() {
  localStorage.removeItem("currentUser");
  location.reload();
}

window.onload = function () {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    showDashboard(JSON.parse(storedUser));
  }
};
