  // characters for password
  var specialCharacters = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
generateBtn.addEventListener("click", writePassword);
// Prompt
password = "";
  var userInputlength = prompt("Enter a number between 8 and 128.");
  var passwordLength = parseInt(userInputLenght);

  while (!((passwordLength >= 8) && (passwordLength <= 128))) {
    userInputLength = prompt("Invalid input, please enter a number between 8 and 128!");
    passwordLength = parseInt(userInputLength);
  }

  var numbers = confirm("Would you like numbers?");
  var lowercases = confirm("Would you like lowercases?");
  var uppercases = confirm("Would you like Uppercase?");
  var specialCharacters = confirm("Would you like special characters?");

  while ( !(containsSpecial || containsNumeric || containsLower || containsUpper) ) {
    alert("Please include at least one character type in your password.");
    containsSpecial = confirm("Include special characters in password?");   
    containsNumeric = confirm("Include numbers in password?");
    containsLower = confirm("Include lowercase letters in password?");
    containsUpper = confirm("Include uppercase letters in password?");
  }


function generatePassword(){
  var characterList = [];

  if (containsSpecial) {
    characterList = characterList.concat(specialCharacters);
}

if (containsNumeric) {
    characterList = characterList.concat(numbers);
}

if (containsLower) {
    characterList = characterList.concat(lowercase);
}

if (containsUpper) {
    characterList = characterList.concat(uppercase);
}

var randomPasswordGenerated = "";

for (var i = 0; i < userInputLength; i++) {
  var randomIndex = Math.floor(Math.random() * characterList.length);
    password += characterList[randomIndex];
}

randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;
}



generateBtn.addEventListener("click", writePassword);