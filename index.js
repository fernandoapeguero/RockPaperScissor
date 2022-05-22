const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  const rps = ["Rock", "Paper", "Scissor"];

  return rps[randomNumber];
};

const playerSelection = "rock";

const computerSelection = computerPlay();

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
    return `You win, ${player} beats ${computer}`;
  } else {
    return `Computer Won, ${player}  beats ${computer}`;
  }
};

console.log(playRound(playerSelection, computerSelection));
