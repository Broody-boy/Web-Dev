
function lifeInWeeks(age)
{
    var yearsRequired = 90- age;

    var monthsRequired = yearsRequired * 12;
    var weeksRequired = 52 * yearsRequired;
    var daysRequired = 365 * yearsRequired;

    console.log("To get to 90, you have " + monthsRequired + " months or " + weeksRequired + " weeks or " + daysRequired + " days");
}

lifeInWeeks (88);