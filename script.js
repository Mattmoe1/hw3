// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
// Prompt

  var passwordLength = prompt("How long do you want the password. Enter a number more than 8 but less than 128.");
  var number = confirm("Would you like numbers?");
  var lowerCases = confirm("Would you like lowercases?");
  var upperCases = confirm("Would you like Uppercase?");
  var characters = confirm("Would you like special characters?");
  var minimumCount = 0;


// characters for password
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var LowerCases = "abcdefghijklmnopqrstuvwxyz"
var UpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var SpecialCharacters = "!@#$%^&*()";

function generatePassword(){

  if (numbers === true) {
    minimumNumbers = functionArray.getnumberCharacters();
    minimumCount++;

}

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

}

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

}

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }
}

var randomPasswordGenerated = "";

for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);
  randomPasswordGenerated += randomNumberPicked;

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
}

generateBtn.addEventListener("click", writePassword);