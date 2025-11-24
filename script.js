const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("length");

const lowerCheck = document.getElementById("lowercase");
const upperCheck = document.getElementById("uppercase");
const numberCheck = document.getElementById("numbers");
const symbolCheck = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

function generatePassword() {
    const length = parseInt(lengthInput.value);

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbol = "!@#$%^&*()_+{}[]<>?/";

    let allowedChars = "";
    let password = "";

    if (lowerCheck.checked) allowedChars += lowercase;
    if (upperCheck.checked) allowedChars += uppercase;
    if (numberCheck.checked) allowedChars += numbers;
    if (symbolCheck.checked) allowedChars += symbols;
    if (!allowedChars) return "";


    if (allowedChars === "") {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i <= length; i++) {
      let randomIndex=Math.floor(  Math.random() * allowedChars.length); ///error resolve
        password += allowedChars[randomIndex];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password Copied!");
});
