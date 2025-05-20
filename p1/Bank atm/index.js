const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 1500 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 3000 }
];

if (!localStorage.getItem("allCustomers")) {
  localStorage.setItem("allCustomers", JSON.stringify(customers));
}

function showMessage(msg, isError = true) {
  const errBox = document.getElementById("errorMsg");
  const successBox = document.getElementById("successMsg");
  errBox.style.display = "none";
  successBox.style.display = "none";

  const target = isError ? errBox : successBox;
  target.innerText = msg;
  target.style.display = "block";
}

function getGreeting(name) {
  const hour = new Date().getHours();
  let greet;

  if (hour >= 5 && hour < 12) greet = "Good Morning, WELCOME";
  else if (hour >= 12 && hour < 17) greet = "Good Afternoon, WELCOME";
  else if (hour >= 17 && hour < 21) greet = "Good Evening, WELCOME";
  else greet = "Still Awake?...WELCOME";

  return `${greet}, ${name}!`;
}

function handleLogin() {
  const card = document.getElementById("cardInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();
  const all = JSON.parse(localStorage.getItem("allCustomers"));
  const found = all.find(c => c.card === card && c.pin === pin);

  if (found) {
    localStorage.setItem("currentUser", JSON.stringify(found));
    showDashboard(found);
  } else {
    showMessage("Invalid card number or PIN.");
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
        <option value="transfer">Amount Transfer</option>
      </select>

      <div id="amountSection" style="display:none; margin-top: 1rem;">
        <input type="number" id="amountInput" placeholder="Enter Amount" />
        <input type="text" id="receiverCardInput" placeholder="Receiver Card Number" style="display:none; margin-top:1rem;" maxlength="16" />
        <button onclick="handleTransaction()">Submit</button>
      </div>

      <div id="errorMsg" class="error"></div>
      <div id="successMsg" class="success"></div>
      <div id="receiverInfo" class="receiver-info" style="display:none;"></div>
    </div>
  `;
}

function showAmountInput() {
  const selected = document.getElementById("actionSelect").value;
  const section = document.getElementById("amountSection");
  const receiverField = document.getElementById("receiverCardInput");

  section.style.display = selected ? "block" : "none";
  receiverField.style.display = selected === "transfer" ? "block" : "none";
}

function handleTransaction() {
  const action = document.getElementById("actionSelect").value;
  const amt = parseFloat(document.getElementById("amountInput").value);
  const receiverCard = document.getElementById("receiverCardInput")?.value.trim();
  const infoBox = document.getElementById("receiverInfo");

  const all = JSON.parse(localStorage.getItem("allCustomers"));
  let user = JSON.parse(localStorage.getItem("currentUser"));
  const index = all.findIndex(c => c.card === user.card);

  if (isNaN(amt) || amt <= 0) {
    showMessage("Please enter a valid amount.");
    return;
  }

  if (action === "withdraw") {
    if (user.balance < amt) {
      showMessage("Insufficient balance!");
      return;
    }
    user.balance -= amt;
    showMessage(`Withdrawn ₹${amt}`, false);
  }

  else if (action === "deposit") {
    user.balance += amt;
    showMessage(`Deposited ₹${amt}`, false);
  }

  else if (action === "transfer") {
    if (!receiverCard || receiverCard === user.card) {
      showMessage("Enter a valid receiver card.");
      return;
    }

    const receiverIndex = all.findIndex(c => c.card === receiverCard);
    if (receiverIndex === -1) {
      showMessage("Receiver not found.");
      return;
    }

    if (user.balance < amt) {
      showMessage("Insufficient balance for transfer.");
      return;
    }

    user.balance -= amt;
    all[receiverIndex].balance += amt;

    infoBox.innerHTML = `
      <strong>Transfer Successful!</strong><br>
      Sent ₹${amt} to ${all[receiverIndex].name}<br>
      Receiver's new balance: ₹${all[receiverIndex].balance}
    `;
    infoBox.style.display = "block";
    showMessage(`₹${amt} transferred successfully.`, false);
  }

  all[index] = user;
  localStorage.setItem("allCustomers", JSON.stringify(all));
  localStorage.setItem("currentUser", JSON.stringify(user));
  document.getElementById("balance").innerText = user.balance;

  document.getElementById("amountInput").value = "";
  if (document.getElementById("receiverCardInput")) {
    document.getElementById("receiverCardInput").value = "";
  }
}

function handleLogout() {
  localStorage.removeItem("currentUser");
  location.reload();
}

window.onload = () => {
  const session = localStorage.getItem("currentUser");
  if (session) {
    showDashboard(JSON.parse(session));
  }
};
