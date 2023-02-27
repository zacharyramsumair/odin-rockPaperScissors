let conditions = [
	{ play: "rock", beats: "scissors", loses: "paper", ties: "rock" },
	{ play: "paper", beats: "rock", loses: "scissors", ties: "paper" },
	{ play: "scissors", beats: "paper", loses: "rock", ties: "scissors" },
];

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let results = document.getElementById("results");

let firstAni = document.querySelector(".first-ani")
let secondAni = document.querySelector(".second-ani")



setTimeout(function(){
    firstAni.style.display = 'none';
}, 7000); 
setTimeout(function(){
    secondAni.style.display = 'none';
}, 13010); 

let playerWins = 0;
let computerWins = 0;
results.textContent = `You : ${playerWins} VS CPU : ${computerWins}`;

let getComputerChoice = () => {
	let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
	let computerPlay = conditions[random].play;
	// console.log(computerPlay);
	return computerPlay;
};

// getComputerChoice();

let playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	let playerInfo;

	for (let condition of conditions) {
		if (condition.play === playerSelection) {
			playerInfo = condition;
			break;
		}
	}

	if (computerSelection == playerInfo.ties) {
		console.log("Game Tied");
		updateResults();
		return "Round Tied";
	}

	if (computerSelection == playerInfo.loses) {
		console.log(`You Lose! ${playerInfo.loses} beats ${playerInfo.play}`);
		computerWins++;
		updateResults();
		return `You Lose this round! ${playerInfo.loses} beats ${playerInfo.play}`;
	}

	if (computerSelection == playerInfo.beats) {
		console.log(`You Win! ${playerInfo.play} beats ${playerInfo.beats}`);
		playerWins++;
		updateResults();
		return `You Win this round! ${playerInfo.play} beats ${playerInfo.beats}`;
	}
};

let updateResults = () => {
	if (playerWins < 5 && computerWins < 5) {
		results.textContent = `You : ${playerWins} VS CPU : ${computerWins}`;
	}

	if (playerWins == 5) {
		results.textContent = `YOU WIN! You : ${playerWins} VS CPU : ${computerWins}`;
	}
	if (computerWins == 5) {
		results.textContent = `YOU LOSE! You : ${playerWins} VS CPU : ${computerWins}`;
	}
};

// let game = () => {
// 	let playerChoice = "";
// 	let wins = 0;
// 	let loses = 0;
// 	let ties = 0;

// 	for (let i = 0; i < 5; i++) {
// 		while (true) {
// 			playerChoice = prompt(`Game of 5: Round ${i+1}   Chose : Rock / Paper / Scissors ?`);
// 			playerChoice = playerChoice.trim().toLowerCase();
// 			if (
// 				playerChoice == "rock" ||
// 				playerChoice == "paper" ||
// 				playerChoice == "scissors"
// 			) {
// 				break;
// 			} else {
// 				console.log("Invalid play. Please try again");
// 			}
// 		}

// 		let result = playRound(playerChoice, getComputerChoice());
// 		console.log(result);

// 		if (result.includes("You Win")) {
// 			wins++;
// 		}
// 		if (result.includes("You Lose")) {
// 			loses++;
// 		}
// 		if (result.includes("Round Tied")) {
// 			ties++;
// 		}
// 	}

// 	console.log(
// 		`Final Results: Games - 5  Wins - ${wins}  Ties - ${ties}  Loses - ${loses}`
// 	);
// 	if (wins > loses) {
// 		console.log("You Win the Game");
// 	}

// 	if (wins < loses) {
// 		console.log("You Lose the Game. Computer Wins");
// 	}

// 	if (wins == loses) {
// 		console.log("Game Tied");
// 	}
// };

// game();

rockButton.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
	playRound("scissors", getComputerChoice());
});
