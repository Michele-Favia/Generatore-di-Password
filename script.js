// Selezione degli elementi del DOM
const lengthInput = document.getElementById("length");
const specialCharsCheckbox = document.getElementById("specialChars");
const generateBtn = document.getElementById("generateBtn");
const passwordDisplay = document.getElementById("password");

// Funzione per generare una password casuale
function generatePassword() {
  const length = parseInt(lengthInput.value);
  const includeSpecialChars = specialCharsCheckbox.checked;

  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

  let characters = lowerCaseChars + upperCaseChars + numbers;

  if (includeSpecialChars) {
    characters += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordDisplay.value = password;
}

// Evento per generare la password
generateBtn.addEventListener("click", generatePassword);
