var namesList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosTurnThisTime(names){
    var randomPersonPosition = Math.floor(Math.random() * names.length );
    alert("This time, it is " + names[randomPersonPosition] + "'s turn.");
}

whosTurnThisTime(namesList);