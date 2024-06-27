const body = document.querySelector('body');

const btnRock = document.createElement('button');
btnRock.textContent = 'Rock';
body.appendChild(btnRock);

const btnPaper = document.createElement('button');
btnPaper.textContent = 'Paper';
body.appendChild(btnPaper);

const btnScissors = document.createElement('button');
btnScissors.textContent = 'Scissors';
body.appendChild(btnScissors);

const results = document.createElement('div');
body.appendChild(results);

let isGameEnded = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (isGameEnded) {
			isGameEnded = false;
			resetGame();
		}

		const humanSelection = getHumanChoice(e);
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	});
});

function getComputerChoice() {
	const randomNum = Math.floor(Math.random() * 100);
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

function getHumanChoice(e) {
	return e.target.textContent;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	let resultMessage = '';
	const roundWinner = checkRoundWinner(humanChoice, computerChoice);

	if (roundWinner === 'none') {
		resultMessage = `It's a Tie! Both chose ${humanChoice}`;
	} else if (roundWinner === 'human') {
		humanScore++;
		resultMessage = `You Win! ${humanChoice} beats ${computerChoice}`;
	} else if (roundWinner === 'computer') {
		computerScore++;
		resultMessage = `You Lose! ${computerChoice} beats ${humanChoice}`;
	}

	displayResult(resultMessage);
	checkGameWinner();
}

function displayResult(content) {
	const result = document.createElement('p');
	result.textContent = content;
	results.appendChild(result);
}

function checkRoundWinner(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		return 'none';
	} else if (
		(humanChoice === 'Rock' && computerChoice === 'Scissors') ||
		(humanChoice === 'Paper' && computerChoice === 'Rock') ||
		(humanChoice === 'Scissors' && computerChoice === 'Paper')
	) {
		return 'human';
	} else {
		return 'computer';
	}
}

let roundCount = 0;

function checkGameWinner() {
	if (humanScore < 5 && computerScore < 5){
		roundCount++;
		displayResult(`Round ${roundCount} | Score: ${humanScore} - ${computerScore}`);
	} else if (humanScore === 5) {
		displayResult(`Game Ended... You're the Winner! Score: ${humanScore} - ${computerScore}`);
		isGameEnded = true;
	} else if (computerScore === 5) {
		displayResult(`Game Ended... You Lose... Score: ${humanScore} - ${computerScore}`);
		isGameEnded = true;
	}
}

function resetGame() {
	humanScore = 0;
	computerScore = 0;
	roundCount = 0;
	results.replaceChildren();
}

