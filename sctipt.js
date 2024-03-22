let rock = () => {
    playRound("rock");
}

let paper = () => {
    playRound("paper");
}

let scissors = () => {
    playRound("scissors");
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function playerPlay() {

// }

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        result = "You lose! " + computerSelection + " beats " + playerSelection;
    }
    displayResult(result);
}

function displayResult(result) {
    document.getElementById("showResults").textContent = result;
}


