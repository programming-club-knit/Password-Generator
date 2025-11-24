const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("length");

const lowerCheck = document.getElementById("lowercase");
const upperCheck = document.getElementById("uppercase");
const numberCheck = document.getElementById("numbers");
const symbolCheck = document.getElementById("symbols");
const strength=document.getElementById("str");

const generateBtn = document.getElementById("generateBtn");

function generatePassword() {
    const length = parseInt(lengthInput.value);

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?/";

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
       let randomIndex = Math.random() * allowedChars.length
        password += allowedChars[randomIndex];
    }

    passwordField.value = password;
    
    //here l stands for checking lower case 
    //and u for uppercase,n for number and s for symbol
    let l=false,u=false,n=false,s=false;
    for(let i=0;i<length;i++){
        for(let j=0;j<26;j++){
            if(password[i]===lowercase[j]){
                l=true;
            }
        }
        for(let j=0;j<26;j++){
            if(password[i]===uppercase[j]){
                u=true;
            }
        }
        for(let j=0;j<10;j++){
            if(password[i]===numbers[j]){
                n=true;
            }
        }
        for(let j=0;j<20;j++){
            if(password[i]===symbols[j]){
                s=true;
            }
        }
    }
    
    if(u&&l&&n&&s&&(length>6)){
       strength.innerHTML = "Password is strong";
        console.log("strong")
    }

    else if((u && l && n && (length>=4))||(length>8))
    {
       strength.innerHTML="the password is medium"
        console.log("medium")
    }
    else{
       strength.innerHTML="the password is easy"
        console.log("easy")
    }
    
}


generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password Copied!");
});