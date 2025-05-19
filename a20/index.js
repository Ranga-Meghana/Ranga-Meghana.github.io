async function findUser() {
  const emailInput = document.getElementById('emailInput').value.trim();
  const output = document.getElementById('result');

  if (!emailInput) {
    output.textContent = "Please provide an email.";
    return;
  }

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const userList = await res.json();

    const matchedUser = userList.find(u => u.email.toLowerCase() === emailInput.toLowerCase());

    if (matchedUser) {
      output.innerHTML = `<strong>Name:</strong> ${matchedUser.name}`;
    } else {
      output.textContent = "No user matches that email.";
    }
  } catch (err) {
    output.textContent = "Unable to fetch user data.";
    console.error(err);
  }
}
