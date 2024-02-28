const favMovie = "kgf 2";

let guess = prompt("Guess my favorite movie");

while( (guess != favMovie) && (guess != "quit"))
{
    guess = prompt("Wrong guess. Please try again");

}

if(guess == favMovie)
{
    alert("Congrats:");
}