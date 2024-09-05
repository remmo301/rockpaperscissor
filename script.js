// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// Function to play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    let result = "";

    if (humanChoice === computerChoice) {
        result = `It's a tie! You both chose ${humanChoice}.`;
    } else if (winConditions[humanChoice] === computerChoice) {
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Display result
    document.querySelector("#result").textContent = result;
}

// Adding event listeners to the buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
