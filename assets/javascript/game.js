var computerArray = ["a", "p", "q", "c", "f", "l"];

//random number should be between 0 to 5.

//randomly selects an element from the computerArray

var randomPosition = Math.floor(Math.random() * computerArray.length);
var computerGuess = computerArray[randomPosition];
console.log(computerGuess);



//use onkeyup function to capture the user's keyboard event
//store the userGuess and compare it with the Computer's Guess