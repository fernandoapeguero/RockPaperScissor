// Scores

let playerScore = 0;
let computerScore = 0;

const printScore = () => {
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
};

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  const rps = ["Rock", "Paper", "Scissor"];

  return rps[randomNumber];
};
// Selections

let playerSelection = "rock";

let computerSelection = computerPlay();

const options = {
  paper: {
    paper: 1,
    rock: 0,
    scissor: 2,
  },
  scissor: {
    paper: 0,
    rock: 2,
    scissor: 1,
  },
  rock: {
    paper: 2,
    rock: 1,
    scissor: 0,
  },
};

const playRound = (player, computer) => {
  const roundOptions = options[playerSelection.toLowerCase()];

  const playerValue = roundOptions[player.toLowerCase()];
  const computerValue = roundOptions[computer.toLowerCase()];

  if (playerValue === computerValue) {
    return "It's a draw play again";
  } else if (playerValue > computerValue) {
    playerScore++;
    return `You win, ${player} beats ${computer}`;
  } else {
    computerScore++;
    return `Computer Won, ${player}  beats ${computer}`;
  }
};

const game = () => {
  playerSelection = prompt("Choose Rock, Paper or Scissor.", "Rock").trim();

  playRound(playerSelection, computerSelection);

  printScore();
};

for (let i = 0; i < 5; i++) {
  game();
}

// Print score
