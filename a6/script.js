function showCredentials() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <strong>Email:</strong> ${email}<br>
    <strong>Password:</strong> ${password}
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
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  const dvAdd = document.getElementById("dvAdd");
  const dvSubtract = document.getElementById("dvSubtract");
  const dvMultiply = document.getElementById("dvMultiply");
  const dvDivide = document.getElementById("dvDivide");

  if (isNaN(n1) || isNaN(n2)) {
    dvAdd.innerHTML = `<span style="color: yellow;">Please enter valid numbers.</span>`;
    dvSubtract.innerHTML = "";
    dvMultiply.innerHTML = "";
    dvDivide.innerHTML = "";
    return;
  }

  dvAdd.innerHTML = `Addition: ${add(n1, n2)}`;
  dvSubtract.innerHTML = `Subtraction: ${subtract(n1, n2)}`;
  dvMultiply.innerHTML = `Multiplication: ${multiply(n1, n2)}`;
  dvDivide.innerHTML = `Division: ${divide(n1, n2)}`;
}

function dispResult() {
  document.getElementById("resultDiv").classList.add("show");
}

function hideResult() {
  document.getElementById("resultDiv").classList.remove("show");
}
