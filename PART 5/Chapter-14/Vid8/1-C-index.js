$("h1").click(
    function() {
        $("h1").css("color","purple");
    }
)

$("button").click(      //JQuery will select all buttons.
    function()
    {
        $("h1").css("color","purple");
    }
)

$("input").keypress(
    function(event)
    {
        console.log(event.key);
    }
)

//Another method:
$("h1").on("mouseover",
    function()
    {
        $("h1").css("color", "red");
    }
)