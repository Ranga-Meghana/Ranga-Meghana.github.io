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
  else timeGreeting = "Still Awake?...WELCOME";

  return `${timeGreeting}, ${name}!`;
}

function handleLogin() {
  const card = document.getElementById("cardInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();

  const user = customers.find((c) => c.card === card && c.pin === pin);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    showDashboard(user);
  } else {
    showMessage("Invalid card number or PIN.", true);
  }
}

function showDashboard(user) {
  document.body.innerHTML = `
    <div class="top-bar">
      <button class="logout-btn" onclick="handleLogout()">Logout</button>
    </div>
    <div class="dashboard">
      <h1>${getGreeting(user.name)}</h1>
      <p>Your current balance is: ₹<span id="balance">${user.balance}</span></p>
      
      <label for="actionSelect">Select Action:</label>
      <select id="actionSelect" onchange="showAmountInput()">
        <option value="">--Choose--</option>
        <option value="withdraw">Withdraw</option>
        <option value="deposit">Deposit</option>
      </select>
      
      <div id="amountSection" style="display:none; margin-top: 1rem;">
        <input type="number" id="amountInput" placeholder="Enter Amount" />
        <button onclick="handleTransaction()">Submit</button>
      </div>

      <div class="error" id="errorMsg"></div>
      <div class="success" id="successMsg"></div>
    </div>
  `;

  document.querySelector(".dashboard").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".dashboard").style.opacity = 1;
  }, 100);
}

function showAmountInput() {
  document.getElementById("amountSection").style.display = "block";
}

function handleTransaction() {
  const action = document.getElementById("actionSelect").value;
  const amount = parseFloat(document.getElementById("amountInput").value);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!action || isNaN(amount) || amount <= 0) {
    showMessage("Please enter a valid amount and action.", true);
    return;
  }

  if (action === "withdraw") {
    if (user.balance < amount) {
      showMessage("Insufficient balance.", true);
      return;
    }
    user.balance -= amount;
  } else if (action === "deposit") {
    user.balance += amount;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  document.getElementById("balance").textContent = user.balance;
  showMessage(`Transaction successful. Updated Balance: ₹${user.balance}`, false);
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
