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
    const container = document.querySelector(".container");
    const content = document.createElement("div");
    let yourScore = 0;
    let pcScore = 0;
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const h3 = document.createElement("h3");
    const resetButton = document.createElement("button");


    function output(playerSelection) {
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);  
        p1.textContent = "YOU: " + playerSelection;
        p2.textContent = "PC: " + computerSelection;
        let round = playRound(playerSelection, computerSelection);
        if (round === "YOU WIN!") {
            yourScore++;
        } else if (round === "YOU LOSE!") {
            pcScore++;
        }
        if (yourScore === 5) {
            p3.textContent = "YOU WON!"; 
            resetButton.textContent = "Restart";
            resetButton.addEventListener('click', () => {
                location.reload();
            });
            content.appendChild(resetButton); 
        } else if (pcScore === 5) {
            p3.textContent = "YOU LOST :(";
            resetButton.textContent = "Restart";
            resetButton.addEventListener('click', () => {
                location.reload();
            }); 
            content.appendChild(resetButton); 
        }
        h3.textContent = `LEADERBOARD: YOU: ${yourScore} - PC: ${pcScore}`;
        
        content.appendChild(p1);
        content.appendChild(p2);
        content.appendChild(p3);
        content.appendChild(h3);
        container.appendChild(content);
    }
    p1.remove();
    p2.remove();
    h3.remove();
    
    const rock = document.querySelector("#btn1");
    const paper = document.querySelector("#btn2");   
    const scissors = document.querySelector("#btn3");
    
    
    btn1.addEventListener('click', () => {
        output("rock");
        
    });
    btn2.addEventListener('click', () => {
        output("paper");
    }); 
    btn3.addEventListener('click', () => {
        output("scissors");
    });
}

game();
