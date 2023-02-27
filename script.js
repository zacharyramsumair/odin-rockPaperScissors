let conditions = [
	{ play: "rock", beats: "scissors", loses: "paper", ties: "rock" },
	{ play: "paper", beats: "rock", loses: "scissors", ties: "paper" },
	{ play: "scissors", beats: "paper", loses: "rock", ties: "scissors" },
];

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

let firstAni = document.querySelector(".first-ani");
let secondAni = document.querySelector(".second-ani");

let enemyWeaponImage = document.querySelector(".enemyWeaponImage");
let roundNumber = document.querySelector(".roundNumber");
let score = document.querySelector(".score");
let message = document.querySelector(".message");

setTimeout(function () {
	firstAni.style.display = "none";
}, 7000);
setTimeout(function () {
	secondAni.style.display = "none";
}, 13010);

let round = 0;
let playerWins = 0;
let computerWins = 0;

roundNumber.textContent = `Rounds Played: ${round}`;
score.textContent = `Your Lives: ${5 - computerWins} ︱ Enemy's Lives: ${
	5 - playerWins
}`;
message.textContent = `Combat Area: Empty`;

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

	round++;

	if (computerSelection == playerInfo.ties) {
		console.log("Game Tied");
		updateResults("Round Tied.", computerSelection);
		return "Round Tied";
	}

	if (computerSelection == playerInfo.loses) {
		console.log(`You Lose! ${playerInfo.loses} beats ${playerInfo.play}`);
		computerWins++;
		updateResults(
			`You Lose this round! ${playerInfo.loses} beats ${playerInfo.play}.`,
			computerSelection
		);
		return `You Lose this round! ${playerInfo.loses} beats ${playerInfo.play}`;
	}

	if (computerSelection == playerInfo.beats) {
		console.log(`You Win! ${playerInfo.play} beats ${playerInfo.beats}`);
		playerWins++;
		updateResults(
			`You Win this round! ${playerInfo.play} beats ${playerInfo.beats}.`,
			computerSelection
		);
		return `You Win this round! ${playerInfo.play} beats ${playerInfo.beats}`;
	}
};

let updateResults = (summary, enemyWeapon) => {
	roundNumber.textContent = `Rounds Played: ${round}`;
	score.textContent = `Your Lives: ${5 - computerWins} ︱ Enemy's Lives: ${
		5 - playerWins
	}`;
	message.textContent = `Combat Area: ${summary}`;
	enemyWeaponImage.src = `./images/${enemyWeapon}.png`;

	if(summary.includes("You Win")){
		switch (playerWins) {
			case 1:
				message.textContent = `Combat Area: Let's go! Points on the board. ${summary}`;
	
				break;
			case 2:
				message.textContent = `Combat Area: ${summary} You're pretty good at this.`;
	
				break;
			case 3:
				message.textContent = `Combat Area: Has mankind found it's saviour?  ${summary}`;
	
				break;
			case 4:
				message.textContent = `Combat Area: One more and you're a hero! ${summary}`;
	
				break;
			default:
				message.textContent = `Combat Area: ${summary}`;
		}
	
	}


	if(summary.includes("You Lose")){
		switch (computerWins) {
			case 1:
				message.textContent = `Combat Area: Oh No... ${summary}`;
	
				break;
			case 2:
				message.textContent = `Combat Area: ${summary} Give it another shot.`;
	
				break;
			case 3:
				message.textContent = `Combat Area: ${summary} It's ok. You got this.`;
	
				break;
			case 4:
				message.textContent = `Combat Area: ${summary} Don't let us down!`;
	
				break;
			default:
				message.textContent = `Combat Area: ${summary}`;
		}
	
	}


	if(playerWins == 4 && computerWins==4){
		message.textContent = `Combat Area: Match Point! It all comes down to this! Good luck. ${summary} `;

	}

	

	

	if (playerWins == 5) {
		message.textContent = `Combat Area: Skrew those Robots! ${summary}`;	
	if (computerWins == 5) {
		message.textContent = `Combat Area: You failed us... ${summary}`;	
	}
};
}

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
