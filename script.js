// Use Math.Random to simulate computer choice
// Divide Math.Random range into 3 parts
// Multiply the result to 100 and floor the product for easier ranges
// from 0 to 33 (inclusive) print rock
// from 34 to 66 (inclusive) print paper
// from 67 to 99 (inclusive) print scissors
// Return computer's choice

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    let computerChoice;

    if (randomNum >= 0 && randomNum <= 33) {
        computerChoice = "rock";
    } else if (randomNum >= 34 && randomNum <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// Prompt the player of their choice
// Transform their choice to lowercase to avoid case sensitivity
// Return player's choice

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}