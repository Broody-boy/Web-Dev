
/*
    == or === -> is equal to
    !== -> is not equal to
    Other regular comparators: >, <, >=, <.=

*/


/* Difference bw === and ==:

1) === performs "typed" checking:

    var num = 1;
    var str = "1";

    if(num === str)  //Gets evaluates to false.
    {

    } else {
        alert("The === comparator performs typed checking.");
    }

2)  == performs "typeless" checking:

    var num = 1;
    var str = "1";

    if(num == str)  //Gets evaluates to true.
    {
        alert("The == comparator performs typeless checking.");
    }

*/