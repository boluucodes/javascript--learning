// create variables for the elements in the HTML
const guessInput = document.querySelector("#guessInput");
const submitButton = document.querySelector("#submitBtn");
const resetButton = document.querySelector("#resetBtn");
const attemptsElement = document.querySelector("#attempts");
const messageElement = document.querySelector("#message");

// now generate a random number between 1 and 100
function randomIntFromInterval(min, max) {
     // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// target number need to reset to a new random number when the game restarts
let targetNumber = randomIntFromInterval(1, 100);
console.log(`Target number: ${targetNumber}`);

// to determine and control the game state, we need a variable to track if the game is active or not, and a variable to track the number of attempts made by the user
let gameActive = true;
let attempts = 0;

// add an event listener to the submit button
submitButton.addEventListener("click", function() {
        // validate the guesses and provide feedback
        if (!gameActive) {
            messageElement.textContent = "The game is over. Please reset to play again.";
            return;
        }
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }
    const difference = Math.abs(guess - targetNumber);
    if (guess === targetNumber) {
        messageElement.textContent = "Congratulations! You guessed the number!";
        gameActive = false;
    }else if (difference <= 2 && guess < targetNumber) {
            messageElement.textContent = "You're extremely close! Go higher!";
        }else if (difference <= 2 && guess > targetNumber) {
            messageElement.textContent = "You're extremely close! Go lower!";
        }
    else if (difference <= 5 && guess < targetNumber) {
            messageElement.textContent = "You're very close! Go higher.";
        } else if (difference <= 5 && guess > targetNumber) {
            messageElement.textContent = "You're very close! Go lower.";
        }else if (difference <= 10 && guess < targetNumber) {
            messageElement.textContent = "You're getting warmer! Go higher.";
        } else if (difference <= 10 && guess > targetNumber) {
            messageElement.textContent = "You're getting warmer! Go lower.";
        }
    else if (guess < targetNumber) {
            messageElement.textContent = "Too low! Try again.";
    } else if (guess > targetNumber) {
            messageElement.textContent = "Too high! Try again.";
    } 
    attempts++;
    attemptsElement.textContent = `Attempts: ${attempts}`;
    }
);

resetButton.addEventListener("click", function() {
    // reset the game state
    targetNumber = randomIntFromInterval(1, 100);
    console.log(`Target number: ${targetNumber}`);
    gameActive = true;
    attempts = 0;
    attemptsElement.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
    messageElement.textContent = "Game reset! Start guessing!";
})