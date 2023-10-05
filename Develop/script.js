// Global variables
const SPECIAL_CHARS = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789"

// Helper Function to randomize values
function randomizer(array){
    return array[(Math.floor(Math.random() * array.length))];
}

// Check if number is between 8 and 128
let pwdLength = () => {
  let userInputLength = Number(prompt("Enter password length 8 through 128 characters:"));
  // Error checking loop to return appropriate value
  while(true){ 
    if(Number.isFinite(userInputLength) && (userInputLength >= 8) && (userInputLength <= 128)){
      return userInputLength
    }else{
      userInputLength = Number(prompt("You did not enter a number or a number outside the range, re-enter password length 8 through 128 characters:"))
    }
  }
}

// Generator password 
function generatePassword() {
  let length = pwdLength();
  let password = []
  let passwordComponents = []
  let upperCase = confirm("Would you like to use uppercase letters in password? \n(OK for Yes Cancel for No)");
  let lowerCase = confirm("Would you like to use lowercase letters in password? \n(OK for Yes Cancel for No) ");
  let numbers = confirm("Would you like to use numbers in password? \n(OK for Yes Cancel for No) ");
  let specials = confirm("Would you like to use special characters in password? \n(OK for Yes Cancel for No) ");
  
  // Make sure user selected at least one character type
  if (!upperCase && !lowerCase && !numbers && !specials) {
    alert("You did not choose any character types. Try Again")
    return "Try Again";
  }
  // Assign user choices to array
  if (upperCase === true) {
    passwordComponents.push(UPPER_CASE)
  }
  if (lowerCase === true){
    passwordComponents.push(LOWER_CASE)
  }
  if (numbers === true){
    passwordComponents.push(NUMBERS)
  }
  if (specials === true){
    passwordComponents.push(SPECIAL_CHARS)
  }
  
  // Generate password randomly
  for(let i = 0; i < length; ++i){
    password += randomizer(randomizer(passwordComponents));
  }
  return password;
}
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
