// Assignment Code
// storing all characters in variables.
var generateBtn = document.querySelector("#generate");
// numbers
var numbers = '0123456789'.split("");
// special characters
// var specialCharacters =

// lowercase letters

// uppercase letters


function generatePassword() {
// ask for number of characters
}
// check if it is valid

// confirm it

// use if true

// lower case letters

// use uppercase letters

// use numbers

// use special characters

//use for loop

// use math random



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
