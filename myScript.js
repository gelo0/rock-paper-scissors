function computerPlay() {
    let random = Math.floor(Math.random()*3);
    //console.log(random);
    if (random === 0) {
        return "ROCK";
    }
    else if (random === 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playerSelection() {
    const input = prompt("Choose ROCK, PAPER or SCISSORS: ");
    let playersChoice = input.toUpperCase();
    if (playersChoice !== 'ROCK' && playersChoice !== 'PAPER' && playersChoice !== 'SCISSORS') {
        alert("You can only choose ROCK, PAPER or SCISSORS");
        return playerSelection();
    }
    else {
        return playersChoice;
    }
    
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return("DRAW");
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            ++computerScore;
            return('You lose. PAPER beats ROCK');
            return ++computerScore;
        }
        else {
            ++playerScore;
            return('You win. ROCK beats SCISSORS');
            return ++playerScore;
        }    
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            ++computerScore;
            return('You lose. SCISSORS beats PAPER');
            return ++computerScore;
        }
        else {
            ++playerScore;
            return('You win. PAPER beats ROCK');
            return ++playerScore;
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            ++computerScore;
            return('You lose. ROCK beats SCISSORS');
            return ++computerScore;
        }
        else {
            ++playerScore;
            return('You win. SCISSORS beats PAPER');
            return ++playerScore;
        }
    }
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

function game(){
    for (let i = 1; i < 6; i++){
        console.log(`Round: ${i}`);
        let round = playRound(playerSelection(), computerPlay());
        console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
    }
    finalScore(playerScore, computerScore);
}

function finalScore(playerScore, computerScore) {
    if (playerScore > computerScore) return('END GAME. YOU WIN!!!');
    else if (playerScore < computerScore) return('END GAME. YOU LOSE!!!');
    else return('END GAME. DRAW!!!');
}

const gameStats = document.querySelector('#game-stats');
const roundNumber = document.querySelector('#round-number');
const buttons = document.querySelectorAll('button');

printRound(roundCount);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (roundCount <= 5){
            console.log(`'${button.id}'`);
            ++roundCount;
            let round = playRound(button.id, computerPlay());
            printResult(round);
            printStats(playerScore, computerScore);
            if (roundCount > 5) printRound(finalScore(playerScore, computerScore))
            else printRound(roundCount);
        };
    });
});

function printResult (string) {
    const text = document.querySelector('#round-result');
    text.textContent = string;
}

function printStats (playerScore, computerScore) {
    gameStats.innerHTML = `Player Score: ${playerScore} 
      <br>Computer Score: ${computerScore}`;
}

function printRound (round) {
    roundNumber.textContent = `Round: ${round}`;
}