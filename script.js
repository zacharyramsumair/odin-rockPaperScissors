let conditions = [
	{ play: "rock", beats: "scissors", loses: "paper", ties: "rock" },
	{ play: "paper", beats: "rock", loses: "scissors", ties: "paper" },
	{ play: "scissors", beats: "paper", loses: "rock", ties: "scissors" },
];

let getComputerChoice = () => {
	let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
	let computerPlay = conditions[random].play;
	console.log(computerPlay);
	return computerPlay;
};

// getComputerChoice();

let playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

    let playerInfo;

    for (let condition of conditions ){
        if(condition.play === playerSelection){
             playerInfo = condition
            break;
        }

    }

  	if (computerSelection == playerInfo.ties) {
		console.log("Game Tied");
		return "Game Tied";
	}

    if (computerSelection == playerInfo.loses) {
		console.log(`You Lose! ${playerInfo.loses} beats ${playerInfo.play}`);
		return `You Lose! ${playerInfo.loses} beats ${playerInfo.play}`;
	}

    if (computerSelection == playerInfo.beats) {
		console.log(`You Win! ${playerInfo.play} beats ${playerInfo.beats}`);
		return `You Win! ${playerInfo.play} beats ${playerInfo.beats}`;
	}
};

