// Assignment Code
var generateBtn = document.querySelector("#generate");
//need arrays of password options
//add prompts after the click of the button with a confirm for everyprompt
//need alert containging all options selected with prompts and confirms

var randomlower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', "t", "u", "v", "w", "x", "y", "z"];
var randomupper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomnumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialchar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+'];
var userinput = [""]
var finalpassword = [""]

//For Loop to be iterated as many times as chosenlength
//
//make sure that all parameters chosen are included
//put everything into generatepassword function
function generatePassword() {
  console.log("Button was clicked. HUZZAH!")
  let chosenlength = prompt("Choose a character length from 8 to 128 for your password")
  {
    if (chosenlength < 8 || chosenlength > 128) {
      alert("Please choose a number ranging from 8 to 128");
      generatePassword();
    }
  };
  let uppercase = confirm("Include uppercase letters?");
  if (uppercase === true) {
    //push uppercase into userinput
  }
  let lowercase = confirm("Include lowercase letters?");
  if (lowercase === true) {
    //push lowercase into userinput
  }
  let numerals = confirm("Include numbers in password?");
  if (numerals === true) {
    //push numerals into userinput
  }
  let specials = confirm("Include special characters in password?");
  if (specials === true) {
    //push specials into userinput
  }
  for(let i=0; i<chosenlength; i++){
    var randomindex = Math.floor(Math.random() * userinput.length);
      finalpassword.push(userinput[randomindex])
    //creating indiviual characters of final password
    //pushing each character into final password  
  }
  return finalpassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
