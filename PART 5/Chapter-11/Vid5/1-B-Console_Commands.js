//In JS, the CSS properties names have been Camlcased after removing the hyphen, if any. Rest, all is same:

document.querySelector("h1").style.color = "red"; //In JS, all the values are to be specified in double "", like - property = "value", unlike CSS where we wrote value without "", like - property: value.
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.padding = "30%"; //Even numbers have to be put in a "".
document.querySelector("h1").style.visibility = "hidden";

//Challenge:
document.querySelector("button").style.backgroundColor = "yellow";

//NOTE: It is not a good practice to manipulate actual CSS using JS as it violates separation of concerns - HTML:structure CSS: styling JS: Behavior.