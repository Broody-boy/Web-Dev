console.log(document.querySelector("button").classList); //prints all the classes associated with the selector

document.querySelector("button").classList.add("invisible");    //Styles associated with the "invisible" class get applied to the element fetched by querySelector.

document.querySelector("button").classList.remove("invisible"); //All the styles associated with the "invisible" class get removed.

document.querySelector("button").classList.toggle("invisible"); //If class "invisible" is not applied, apply it and if it is applied, remove it.

document.querySelector("h1").classList.add("huge");