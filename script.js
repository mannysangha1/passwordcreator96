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
numberofCharacters = prompt("How many characters do you want your password to be? Minimun 8 Maxium 142");
// check if it is valid
if (isNaN(numberofCharacters)===true){
  alert("You must enter a numeric value")
} else if (numberofCharacters < 8 || numberofCharacters > 142) {
  alert("You must enter a numeric value between 8 and 142")
} else{
// confirm it
// use if true
// lower case letters
useLowerCaseLetters = confirm("Do you want to include lowercase letters");
if(useLowerCaseLetters===true) {
choices = choices.concat(lower)
}
// use uppercase letters
useUpperCaseLetters = confirm("Do you want to include uppercase letters");
if(useUpperCaseLetters===true) {
choices = choices.concat(upper)
}
// use numbers
useNumbers = confirm ("Do you want to incliude numbers?");
if(useNumbers===true) {
choices = choices.concat(numbers)
}
// use special characters
useSpecialCharacters = confirm ("Do you want to include special characters?");
if(useSpecialCharacters===true) {
choices = choices.concat(upper)
}
};
// use for loop

// use math random
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
