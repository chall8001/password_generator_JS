// Assignment Code
//created a button 
var generateBtn = document.querySelector("#generate");
//array defintions
var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numArray = ["0","1","2","3","4","5","6","7","8","9"]
var specialArray = ["\~","\!","\@","\#","\$","\%","\^","\&","\*","\(","\)","\_","\-","\+","\=","\/","\?","\.","\,","\<","\>","\[","\]","\{","\}"]

//function that exexcutes generate password function  
function writePassword() {
  generatePassword();
}

// Add event listener to deploy functions on click
generateBtn.addEventListener("click", writePassword);

//create a function that executes when the button is clicked
function generatePassword(){
  //first prompt
  var charachterNum = parseInt(window.prompt("How many charachters do you want your password to be?"))
  if (isNaN(charachterNum) === true || charachterNum > 128 || charachterNum < 8 ){ 
    window.alert("input a number between 8 and 128")
    return}
  //second prompt 
    var hasSpecial = window.confirm("Do you want special charachters?")
//third prompt
    var hasUpper = window.confirm("Do you want uppercase letters?")
//fourth prompt
    var hasLower = window.confirm("Do you want lowercase letters?")
//fifth prompt
    var hasNum = window.confirm("Do you want numbers?")

    //logic
    if (hasSpecial==false && hasUpper==false && hasLower==false && hasNum ==false){
      window.alert("you need to select an input")
    }
    var emptyArray = [];

    if (hasSpecial == true){ 
      var emptyArray = emptyArray.concat(specialArray);
      console.log(emptyArray)
    }
    if (hasUpper == true){ 
       var emptyArray = emptyArray.concat(upperArray)
      console.log(emptyArray)
      ;
    }
    if (hasLower == true){ 
      var emptyArray = emptyArray.concat(lowerArray)
     console.log(emptyArray)
     ;
   }
   if (hasNum == true){ 
    var emptyArray = emptyArray.concat(numArray)
   console.log(emptyArray)
   ;
  }
  var makePassword = ""
  for (i = 0; i < charachterNum; i++) { 
  makePassword += emptyArray[Math.floor(Math.random() * emptyArray.length - 1)]}
  var printPassword = document.querySelector("#password");    
  printPassword.innerHTML = makePassword;
  
  
}
  
  
  

  



