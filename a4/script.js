// Custom Pronoun Logic
document.addEventListener('DOMContentLoaded', function () {
  const customGenderRadio = document.getElementById('customGender');
  const customPronounBox = document.getElementById('customPronounBox');
  const genderRadios = document.querySelectorAll('input[name="gender"]');

  function toggleCustomPronoun() {
    if (customGenderRadio.checked) {
      customPronounBox.innerHTML = `
        <label for="pronounSelect">Preferred Pronoun</label>
        <select id="pronounSelect">
      <option value="" disabled selected>Select your pronoun</option>
      <option value="She/Her">She/Her</option>
      <option value="He/Him">He/Him</option>
      <option value="They/Them">They/Them</option>
      <option value="Other">Other</option>
    </select>
    <button type="button" id="okButton">OK</button>
    <p id="pronounDisplay"></p>
        <input type="text" placeholder="Gender (optional)">
      `;
    } else {
      customPronounBox.innerHTML = '';
    }
  }

  genderRadios.forEach(radio => {
    radio.addEventListener('change', toggleCustomPronoun);
  });

  // Optional: Auto fill day/month/year dropdowns
  const daySelect = document.getElementById('daySelect');
  const monthSelect = document.getElementById('monthSelect');
  const yearSelect = document.getElementById('yearSelect');

  for (let d = 1; d <= 31; d++) {
    const option = document.createElement('option');
    option.value = d;
    option.text = d;
    daySelect.add(option);
  }

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  months.forEach((month, i) => {
    const option = document.createElement('option');
    option.value = i + 1;
    option.text = month;
    monthSelect.add(option);
  });

  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1900; y--) {
    const option = document.createElement('option');
    option.value = y;
    option.text = y;
    yearSelect.add(option);
  }
});
