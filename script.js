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
        computerChoice = "Rock";
    } else if (randomNum >= 34 && randomNum <= 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

// Prompt the player of their choice
// Transform their choice to lowercase to avoid case sensitivity
// Return player's choice

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}

// Store human score in a variable and initialize to 0
// Store computer score in a variable and initialize to 0

let humanScore = 0;
let computerScore = 0;

// Get computer choice and human choice
// If human choice beats computer choice add a point to human score
// If computer choice beats human choice add a point to computer score
// Print a message showing the round winner

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substr(1).toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a Tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
}