// Assignment Code
// storing all characters in variables.
var generateBtn = document.querySelector("#generate");
// numbers
var numbers = '0123456789'.split("");
// special characters
var special = '!$%^&*()-=+[]{};#:@~,./<>?'.split("");
// lowercase letters
var lower = 'abcdefghijklmnopqrstuvwxyz'.split("");
// uppercase letters
var upper = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'.split("");
// choices
var choices = [];

// Generate Password Function
function generatePassword() {
// ask for number of characters
numberofCharacters = prompt ()
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
