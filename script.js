// Assignment Code
//var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit");

const randomlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const randomupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const randomnumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+"];

//modified modal stuff here
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var generateBtn = document.querySelector("#generate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
generateBtn.onclick = function() {
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //var chosenlengthelement = document.querySelector("#chosenlength");
    //console.log(chosenlengthelement);
  }
}
//end weird script
function generatePassword() {
  console.log("Button was clicked. HUZZAH!")
  let chosenlength= 8;
  var chosenlengthelement = document.querySelector("#chosenlength");
    console.log(chosenlengthelement);
    chosenlength = chosenlengthelement.value;
//  let chosenlength = prompt("Choose a character length from 8 to 128 for your password")
  //var chosenlength = document.querySelector("#chosenlength");
 // chosenlength.addEventListener("select", "#chosenlength");
  //console.log(chosenlength);
  var finalpassword = [];
  var userinput = [];
//  {
   // if (chosenlength < 8 || chosenlength > 128) {
     // alert("Please choose a number ranging from 8 to 128");
    //  generatePassword();
  //  }
 // };
 var upperelement = document.querySelector("#uppercase");
 console.log(upperelement);
 // let uppercase = confirm("Include uppercase letters?");
  if (upperelement.checked === true) {
    //push uppercase into userinput
    userinput = userinput.concat(randomupper);
    console.log(userinput);
  };
  var lowerelement = document.querySelector("#lowercase");
  console.log(lowerelement);
 // let lowercase = confirm("Include lowercase letters?");
  if (lowerelement.checked === true) {
    //push lowercase into userinput
    userinput = userinput.concat(randomlower);
    console.log(userinput);
  };
  var numberelement = document.querySelector("#numbers");
 console.log(numberelement);
 // let numbers = confirm("Include numbers in password?");
  if (numberelement.checked === true) {
    //push numerals into userinput
    userinput = userinput.concat(randomnumber);
    console.log(userinput);
  };
  var specialelement = document.querySelector("#specials");
 console.log(specialelement);
 // let specials = confirm("Include special characters in password?");
  if (specialelement.checked === true) {
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
submitBtn.addEventListener("click", writePassword);
