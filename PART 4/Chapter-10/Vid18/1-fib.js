//Using Recursion:
var start1 = 0;
var start2 = 1;

function returnNumber(index)
{
    if(index == 1)
    {
        return start1;
    }

    if(index==2)
    {
        return start2;
    }

    return returnNumber(index-1) + returnNumber(index-2);
}

for(var i = 1; i <= 5; i++)
{
    console.log(returnNumber(i));
}