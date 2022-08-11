var costOfSingle = 1.5;

function getmilk(money)
{
    var numberOfBottlesFloat = money/costOfSingle;
    var numberOfBottlesInt = Math.floor(numberOfBottlesFloat);

    alert("You can buy " + numberOfBottlesInt + " bottles, each of " + costOfSingle);
    
    var change = money % costOfSingle;
    return change;
}

var amount = prompt("Enter the amount");

var changeGotBack = getmilk(amount);
alert("And you will get back " + changeGotBack + " as change.");