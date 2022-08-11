var costOfSingle = 1.5;

function getmilk(money)
{
    var numberOfBottlesFloat = money/costOfSingle;
    var numberOfBottlesInt = Math.floor(numberOfBottlesFloat);

    alert("You can buy " + numberOfBottlesInt + " bottles, each of " + costOfSingle);
}

getmilk(prompt("Enter the amount"));