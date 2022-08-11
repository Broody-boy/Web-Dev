console.log(document);      //Prints the entire html document, even including comments (god knows why🤷‍♂️).
console.log(document.firstElementChild);    //Prints everything that is in the html tag.
console.log(document.firstElementChild.firstElementChild); //Prints everything that is in the head tag.
console.log(document.firstElementChild.lastElementChild); //Prints everything that is in the body tag.
console.log(document.firstElementChild.lastElementChild.firstElementChild); //Prints everything that is in the h1 tag.

//You can even store the elements in a variable:
var heading = document.firstElementChild.lastElementChild.firstElementChild;
console.log(heading);    //Prints everything that is in the heading(i.e. h1 tag)
//You can even manipulate the elements:
heading.innerHTML = "Good bye";
heading.style.color = "red";
//Combined form:
document.firstElementChild.lastElementChild.firstElementChild.innerHTML = "Good bye";
document.firstElementChild.lastElementChild.firstElementChild.style.color = "red";

//You can even call the methods:
document.querySelector("input").click();    //The checkstate of checkbox gets toggled.