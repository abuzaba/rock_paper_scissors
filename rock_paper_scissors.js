let playerScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore++;
    return pcWinsPaper;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    return playerWinsRock;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore++;
    return pcWinsScissors;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
    return playerWinsPaper;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    return playerWinsScissors;
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore++;
    return pcWinsRock;
  } else if (playerSelection == computerSelection) {
    return draw;
  }
}

//Game results

let pcWinsPaper = 'You lose! Paper beats rock!';
let playerWinsRock = 'You win! Rock beats scissors!';
let pcWinsScissors = 'You lose! Scissor beats paper!';
let playerWinsPaper = 'You win! Paper beats rock!';
let playerWinsScissors = 'You win! Scissors beat paper!';
let pcWinsRock = 'You lose! Rock beats scissors!';
let draw = 'Draw!';

function game() {
  for (let i = 0; i < 100; i++) {
    let playerSelection = prompt(
      'Enter Rock, Paper, or Scissors'
    ).toLowerCase();

    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log(`'Your score is ${playerScore}'`);
    console.log(`'The computer score is ${computerScore}'`);

    if (playerScore === 5 || computerScore === 5) {
      break;
    }
  }
}

function gameScore() {
  if (playerScore === 5) {
    console.log('You have defeated the evil!');
    return;
  }

  if (computerScore === 5) {
    console.log('Evil has prevailed!');
    return;
  }
}

game();
gameScore();
