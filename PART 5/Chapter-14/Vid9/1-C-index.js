$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");



//prepend and append will insert a button inside the h1 tag here:
$("h1").prepend("<button>New</button>");    //insert a button before the content if the h1.

$("h1").append("<button>New</button>");     //insert a button after the content if the h1.



$("button").remove();                       //Remove all buttons on the page.