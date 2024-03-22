let rock = () => {
    playersRound("rock");
}

let paper = () => {
    playersRound("paper");
}

let scissors = () => {
    playersRound("scissors");
}

// let choices = [
//     'rock',
//     'paper',
//     'scissors'
// ]

function computerplayers() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function playerserplayers() {

// }

function playersRound(playerserSelection) {
    const computerSelection = computerplayers();
    let result;
    if (playerserSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerserSelection === "rock" && computerSelection === "scissors") ||
        (playerserSelection === "paper" && computerSelection === "rock") ||
        (playerserSelection === "scissors" && computerSelection === "paper")
    ) {
        result = "You win! " + playerserSelection + " beats " + computerSelection;
    } else {
        result = "You lose! " + computerSelection + " beats " + playerserSelection;
    }
    displayersResult(result);
}

function displayersResult(result) {
    document.getElementById("showResults").textContent = result;
}


