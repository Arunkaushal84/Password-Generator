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

// Function to generate password
function generatePassword() {
  // Declare arrays of character types
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~";

  // Prompt user for password criteria
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  var passwordLength = parseInt(prompt("Choose password length (between 8 and 128 characters):"));

  // Validate user input
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please choose a length between 8 and 128 characters.");
    return "";
  } else if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return "";
  } else {
    // Generate password based on selected criteria
    var possibleChars = "";
    if (includeLowercase) {
      possibleChars += lowercaseChars;
    }
    if (includeUppercase) {
      possibleChars += uppercaseChars;
    }
    if (includeNumeric) {
      possibleChars += numericChars;
    }
    if (includeSpecial) {
      possibleChars += specialChars;
    }

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * possibleChars.length);
      password += possibleChars.charAt(randomIndex);
    }

    return password;
  }
}
