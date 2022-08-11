/* Challenge: User enters name like this: angela yu. Print it in proper form: Angela Yu. */


var yourName = prompt("Enter your name");

var firstChar = yourName.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = yourName.slice(1, yourName.length);
var lowerCaseRestOfName = restOfName.toLowerCase()

var capitalisedName = upperCaseFirstChar + lowerCaseRestOfName;

alert("Hello, " + capitalisedName);


//Shorter version:
var yourName = prompt("Enter your name");

var formattedName = yourName.slice(0,1).toUpperCase() + yourName.slice(1, yourName.length).toLowerCase();
alert("Your properly formatted name is: " + formattedName);