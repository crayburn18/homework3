// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var pwLength = prompt("Enter password length from 8-128 characters.");

while(pwLength < 8 || pwLength > 128){
  pwLength = prompt("Try again. Length must be from 8-128.");
}

var lowerCase = confirm("Do you want lowercase?");

if(lowerCase === true){
  var upperCase = confirm("Do you want uppercase?");
}
else{
  upperCase = true;
}

var number = confirm("Do you want to include numbers?");

var specialChar = confirm("Do you want to include special characters?");