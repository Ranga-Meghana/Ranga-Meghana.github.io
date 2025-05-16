function showCredentials() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <strong>Email:</strong> ${email}<br>
    <strong>Password:</strong> ${password}
  `;
}
