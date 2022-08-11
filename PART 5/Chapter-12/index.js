var randomNumber1 = Math.floor(Math.random()*6) + 1;
var imageSource1 = "./Images" + "/Dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource1)

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageSource2 = "./Images" + "/Dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2)