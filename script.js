// Assignment Code
var generateBtn = document.querySelector("#generate");

const randomlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const randomupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const randomnumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+"];



function generatePassword() {
  console.log("Button was clicked. HUZZAH!")
  let chosenlength = prompt("Choose a character length from 8 to 128 for your password")
  console.log(chosenlength);
  var finalpassword = [];
  var userinput = [];
  {
    if (chosenlength < 8 || chosenlength > 128) {
      alert("Please choose a number ranging from 8 to 128");
      generatePassword();
    }
  };

  let uppercase = confirm("Include uppercase letters?");
  if (uppercase === true) {
    //push uppercase into userinput
    userinput = userinput.concat(randomupper);
    console.log(userinput);
  };

  let lowercase = confirm("Include lowercase letters?");
  if (lowercase === true) {
    //push lowercase into userinput
    userinput = userinput.concat(randomlower);
    console.log(userinput);
  };
  let numerals = confirm("Include numbers in password?");
  if (numerals === true) {
    //push numerals into userinput
    userinput = userinput.concat(randomnumber);
    console.log(userinput);
  };
  let specials = confirm("Include special characters in password?");
  if (specials === true) {
    //push specials into userinput
    userinput = userinput.concat(specialchar);
    console.log(userinput);
  };
  
  for (let i = 0; i < chosenlength; i++) {
    var index = Math.floor(Math.random() * userinput.length);
    finalpassword.unshift(userinput[index]);
    console.log(finalpassword);
    //creating indiviual characters of final password
    //pushing each character into final password  
  };
  
  return finalpassword.join("");
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
