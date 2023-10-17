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
        playerSelection != "scissors") return alert("Invalid Input!");
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
    const mainContent = document.querySelector(".main-content");
    const btnContainer = document.querySelector(".btn-container");
    const content = document.createElement("div");
    let yourScore = 0;
    let pcScore = 0;
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const h1 = document.createElement("h1");
    const resetButton = document.createElement("button");


    function output(playerSelection) {
        const computerSelection = getComputerChoice();
        p1.textContent = `you picked: ${playerSelection}`.toUpperCase();
        p2.textContent = `pc picks: ${computerSelection}`.toUpperCase();
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
            btnContainer.appendChild(resetButton); 
        } else if (pcScore === 5) {
            p3.textContent = "YOU LOST :(";
            resetButton.textContent = "Restart";
            resetButton.addEventListener('click', () => {
                location.reload();
            }); 
            btnContainer.appendChild(resetButton); 
        }
        h1.textContent = `LEADERBOARD: YOU: ${yourScore} - PC: ${pcScore}`;

        // Syling
        p1.style = "text-align: center";
        p2.style = "text-align: center";
        p3.style = "text-align: center";
        resetButton.style = "color: red";
                 
        content.appendChild(p1);
        content.appendChild(p2);
        content.appendChild(p3);
        content.appendChild(h1);
        mainContent.appendChild(content);
    }
    p1.remove();
    p2.remove();
    h1.remove();
    
    const rock = document.querySelector("#btn1");
    const paper = document.querySelector("#btn2");   
    const scissors = document.querySelector("#btn3");
    
    
    rock.addEventListener('click', () => {
        output("rock");
        
    });
    paper.addEventListener('click', () => {
        output("paper");
    }); 
    scissors.addEventListener('click', () => {
        output("scissors");
    });
}

game();
