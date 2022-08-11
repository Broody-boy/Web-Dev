/*
    && - and
    || - or
*/

prompt("Enter your name");
prompt("Enter their name");

var score = Math.floor(Math.random() * 100) + 1;

if (score >= 70){
    alert("Your score is " + score + "%, which lies in the best range.");
}

if (score >= 30 && score <= 70)
{
    alert("Your score is " + score + "%, which lies in the second range.");
}

if (score <= 30){
    alert("Your score is " + score + "%, which lies in the third(last) range.");
}