var userInput = prompt("Please enter your your 7-digit phone number (include dashes) \nWe promise we won't spam you!")

if (userInput.charAt(3) === '-' && userInput.length === 8){
alert ('Thank you!');
}
  else {
  alert ('Incorrect format (XXX-XXXX). \nPlease try again.');
  }
var userInput2 = prompt("Now please enter your date of birth (XX/XX/19XX). \n\nWe promise we won't steal your identity!")

if (userInput2.charAt(2) === '/' && userInput2.length === 10){
  alert ('You da man!')
}
  else {
    alert ('Incorrect format (XX/XX/19XX). \n\nDO IT RIGHT!!!')
  }

var userinput3 = prompt ("Please give us your postal code")
if (userinput3.length === 5 && !isNaN()) {
  alert ('Thank you friend!')
}
  else {
    alert ('Nope. Try again friend!')
  }
