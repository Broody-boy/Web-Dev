//Elements using tag name: document.getElementsByTagName("li") returns an array of elements with the tag specified as argument.
console.log("There are " + document.getElementsByTagName("li").length + " elements of the tag li:");
console.log(document.getElementsByTagName("li"));
//Change the third list item to purple:
document.getElementsByTagName("li")[2].style.color = "Purple";


//Elements using class name: console.log(document.getElementsByClassName("btn")); returns an array of elements with the class specified as argument.
console.log("There are " + document.getElementsByClassName("btn").length + " elements of the class btn:");
console.log(document.getElementsByClassName("btn"));
//Change the button to red:
document.getElementsByClassName("btn")[0].style.color = "red"; //Note that we have only one button, even then the function returns an array


//Element using Id: A single element is returned as an object(not array as before).
console.log(document.getElementById("title"));
document.getElementById("title").innerHTML = "good bye";



//Element using general selector: returns a single element always with document.querySelector(...) and multiple with document.querySelectorAll(...).
//document.querySelector(): to get first element which satisfy the selector criteria specified. Returns an object, and not an array:
document.querySelector("li").innerHTML = "Hi";                       //returns the first element with the specified tag.
document.querySelector(".btn").innerHTML = "Red inside me";          //returns the first element with the specified class.
document.querySelector("#title").style.color = "blue";               //returns the sole element with the specified id.

//Hierarchial selectors also work:
document.querySelector("#list .second").style.color = "cyan";       //Get the element with class "second" contained in the parent with id as "list".

//Combined selectors also work:
document.querySelector("li.item").style.color = "red";              //Get the first element which is both an "li" tag as well as an "item" class.

//document.querySelectorAll(): to get all elements which satisfy the selector criteria specified. Returns an array:
document.querySelectorAll("li.item")[2].style.color = "darkred";