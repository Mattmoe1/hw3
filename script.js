
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword(){
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");


  if (correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
      passwordText.value = "";
      
  }

}

function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password;
}

function getPrompts() {
    choiceArr = [];
    characterLength = prompt("Enter a number between 8 and 128.");

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
      alert("Character lenght has to be a number between 8 - 128. Try again.");
      return false;
    }
    if (confirm("Would you like lowercases?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("Would you like Uppercase?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Would you like special characters?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like numbers?")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}