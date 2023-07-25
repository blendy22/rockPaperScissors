function getComputerChoice() {
    const allPossibleChoices = [
        "rock",
        "paper",
        "scissors"
        ]; 
    let randomChoice = Math.floor(Math.random() * allPossibleChoices.length);
    let actualChoice = allPossibleChoices[randomChoice];
    return actualChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != "rock" &&
        playerSelection != "paper" &&
        playerSelection != "scissors") return "Invalid Input!";
    if (playerSelection == computerSelection) { 
        return "DRAW!";
    } else if (computerSelection == "rock") {
        return (playerSelection == "paper") ? "YOU WIN!" : "YOU LOSE!";
    } else if (computerSelection == "paper") {
        return (playerSelection == "scissors") ? "YOU WIN!" : "YOU LOSE!";
    } else if (computerSelection == "scissors") {
        return (playerSelection == "rock") ? "YOU WIN!" : "YOU LOSE!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose between rock, paper and scissors: ").toLowerCase(); 
        const computerSelection = getComputerChoice();
        console.log("YOU: " + playerSelection);
        console.log("PC: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
