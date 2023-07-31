const buttons = document.querySelectorAll('.btn');
const plyrScore = document.querySelector('#plyrScore');
const pcScore = document.querySelector('#pcScore');
const winner = document.querySelector('#winner');
const gWinner = document.querySelector('#gameWinner');
const reset = document.querySelector('#reset')

let playerWins = 0;
let pcWins = 0;

const computerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (e) => {
  const playerSelection = e.target.id;
  const computerSelection = computerChoice();

  if (playerSelection === computerSelection) {
    winner.textContent = "It\'s a draw!"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winner.textContent = "Nice, you won! " + playerSelection + " beats " + computerSelection;
    playerWins++
  } else {
    winner.textContent = "Computer won, damn. " + computerSelection + " beats " + playerSelection;
    pcWins++
  }

  plyrScore.textContent = "Player: " + playerWins;
  pcScore.textContent = "Computer: " + pcWins;

  if (playerWins === 5) {
    gWinner.textContent = "Amazing, you won!"
  } else if (pcWins === 5) {
    gWinner.textContent = "Try again, pc won this time."
  } else {
    gWinner.textContent = ""
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

reset.addEventListener("click", function () {
  playerWins = 0;
  pcWins = 0;
  plyrScore.textContent = "Player: 0";
  pcScore.textContent = "Computer: 0";
  winner.textContent = "";
  gWinner.textContent = "";
});
