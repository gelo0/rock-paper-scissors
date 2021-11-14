function computerPlay() {
    let random = Math.floor(Math.random()*3);
    //console.log(random);
    if (random === 0) {
        return "ROCK";
    }
    else if (random === 1) {
        return "PAPER"
    }
    else {
        return "SCISSORS"
    }
}

function playerSelection() {
    const input = prompt("Choose ROCK, PAPER or SCISSORS: ");
    let playersChoice = input.toUpperCase();
    if (playersChoice !== 'ROCK' && playersChoice !== 'PAPER' && playersChoice !== 'SCISSORS') {
        alert("You can only choose ROCK, PAPER or SCISSORS")
        return playerSelection();
    }
    else {
        return playersChoice;
    }
    
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log("DRAW");
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            console.log('You lose. PAPER beats ROCK');
            return ++computerScore;
        }
        else {
            console.log('You win. ROCK beats SCISSORS');
            return ++playerScore;
        }    
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            console.log('You lose. SCISSORS beats PAPER');
            return ++computerScore;
        }
        else {
            console.log('You win. PAPER beats ROCK');
            return ++playerScore;
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            console.log('You lose. ROCK beats SCISSORS');
            return ++computerScore;
        }
        else {
            console.log('You win. SCISSORS beats PAPER');
            return ++playerScore;
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function game(){
    for (let i = 1; i < 6; i++){
        console.log(`Round: ${i}`)
        let round = playRound(playerSelection(), computerPlay());
        //console.log(round)
        console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    }
    finalScore(playerScore, computerScore);
}

function finalScore(playerScore, computerScore) {
    if (playerScore > computerScore) alert('YOU WIN!!!');
    else if (playerScore < computerScore) alert('YOU LOSE!!!');
    else alert('DRAW!!!');
}