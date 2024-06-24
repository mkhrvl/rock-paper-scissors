function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 100);
	let computerChoice;

	if (randomNum >= 0 && randomNum <= 33) {
		computerChoice = 'Rock';
	} else if (randomNum >= 34 && randomNum <= 66) {
		computerChoice = 'Paper';
	} else {
		computerChoice = 'Scissors';
	}

	return computerChoice;
}

function getHumanChoice() {
	let humanChoice = prompt('Rock, Paper, or Scissors?');
	return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	humanChoice =
		humanChoice[0].toUpperCase() + humanChoice.substr(1).toLowerCase();

	if (humanChoice === computerChoice) {
		console.log(`It's a Tie! Both chose ${humanChoice}`);
	} else if (
		(humanChoice === 'Rock' && computerChoice === 'Scissors') ||
		(humanChoice === 'Paper' && computerChoice === 'Rock') ||
		(humanChoice === 'Scissors' && computerChoice === 'Paper')
	) {
		humanScore++;
		console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
	} else {
		computerScore++;
		console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);

		console.log(`Round ${i + 1} Score: ${humanScore} - ${computerScore}`);
	}

	if (humanScore === computerScore) {
		alert(`It's a Tie! Score: ${humanScore} - ${computerScore}`);
	} else if (humanScore > computerScore) {
		alert(`You Win! Score: ${humanScore} - ${computerScore}`);
	} else {
		alert(`You Lose... Score: ${humanScore} - ${computerScore}`);
	}
}

playGame();
