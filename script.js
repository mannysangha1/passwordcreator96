// Assignment Code
// storing all characters in variables.

// numbers
// var numbers = [1,2,3];

// special characters
// var specialCharacters =

// lowercase letters

// uppercase letters


var generateBtn = document.querySelector("#generate");
function generatePassword() {

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
