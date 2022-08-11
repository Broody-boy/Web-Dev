var count = 99;

function dov(){

    while(count>=2)
    {
        console.log(count + " bottles of br on the wall, " + count + " bottles of br. Take 1 down, pass it around, " + (count-1) + " bottles of br on the wall.");
        count--;
    }

    if(count == 1)
    {
        console.log("1 bottle of br on the wall, 1 bottle of br. Take 1 down, pass it around, no more bottles of br on the wall.");
    }

    console.log("No more bottles of br on the wall, no more bottles of br. Go to the store and buy some more, 99 bottles of br on the wall.")
}

dov();