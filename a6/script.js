function showCredentials() {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `     <strong>Email:</strong> ${email}<br>     <strong>Password:</strong> ${password}
  `;
}

function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
return b !== 0 ? (a / b).toFixed(2) : "Infinity";
}

function calculate() {
const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
const resultDiv = document.getElementById("result");

if (isNaN(num1) || isNaN(num2)) {
resultDiv.innerHTML = `<strong style="color: yellow;">Please enter both numbers correctly.</strong>`;
return;
}

resultDiv.innerHTML = `     
<strong>Addition:</strong> ${add(num1, num2)}<br>     
<strong>Subtraction:</strong> ${subtract(num1, num2)}<br>     
<strong>Multiplication:</strong> ${multiply(num1, num2)}<br>     
<strong>Division:</strong> ${divide(num1, num2)}
  `;
}
