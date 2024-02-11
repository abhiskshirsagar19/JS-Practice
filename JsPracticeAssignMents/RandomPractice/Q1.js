// function generateAndCheckNumber() {
//     // Generate a random number between 1 and 100, inclusive
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
   
//     // Get the user's guess
//     const guessedNumber = parseInt(prompt("Guess a number between 1 and 100:"));
   
//     // Check if the guess matches the generated number
//     if (guessedNumber === randomNumber) {
//       alert("Congratulations! You guessed the correct number.");
//     } else {
//       let hint = "Too low!";
//       if (guessedNumber > randomNumber) {
//         hint = "Too high!";
//       }
//       alert("Sorry, your guess is " + hint);
//     }
   
//     return randomNumber; // Return the generated number for potential further use
//    }
   
//    // Call the function to play the game
//    generateAndCheckNumber();
   