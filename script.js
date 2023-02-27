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
let thirdAni = document.querySelector(".third-ani");
let fourthAni = document.querySelector(".fourth-ani");
let fifthAni = document.querySelector(".fifth-ani");
let sixthAni = document.querySelector(".sixth-ani");
let seventhAni = document.querySelector(".seventh-ani");

let enemyWeaponImage = document.querySelector(".enemyWeaponImage");
let roundNumber = document.querySelector(".roundNumber");
let score = document.querySelector(".score");
let message = document.querySelector(".message");

let baseScreen = document.querySelector(".base");
let ending = document.querySelector(".ending");
let playAgain = document.querySelector(".play-again");

const startConfetti = () => {
	setTimeout(function() {
	confetti.start();
	}, 9500); // 1000 = 1 seconds
	};


// ending.style.display = "flex";
// baseScreen.style.display = "none";

ending.style.display = "none";
// baseScreen.style.display = "flex";
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

	

	

	if (playerWins == 5 || computerWins == 5) {
		// message.textContent = `Combat Area: Skrew those Robots! ${summary}`;	
		endScreen()
};
}

let endScreen = () =>{
baseScreen.style.display = "none";
ending.style.display = "flex";


if(playerWins == 5){
	fifthAni.textContent = "..."
	sixthAni.textContent = "Mankind will live on ..."
	seventhAni.textContent = "You Win !!!"
	startConfetti()
}

if (computerWins == 5){
	fifthAni.textContent = "..."
	sixthAni.textContent = "We never should have trusted you ..."
	seventhAni.textContent = "You Lose !!!"
}

if(playerWins == 5 && computerWins ==4){
	fifthAni.textContent = "..."
	sixthAni.textContent = "I'm sorry to tell you this but ..."
	seventhAni.textContent = "You Win !!!"
	startConfetti()


	
}

setTimeout(function () {
	fifthAni.style.display = "none";
}, 4500);
setTimeout(function () {
	sixthAni.style.display = "none";
}, 9000);

}

rockButton.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
	playRound("scissors", getComputerChoice());
});

playAgain.addEventListener("click", ()=>{
// 	ending.style.display = "none";
// // baseScreen.style.display = "flex";
	location.reload()
})

