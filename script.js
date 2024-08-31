function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

function getHumanChoice() {
    humanChoice = window.prompt("Rock, paper, or scissors?")
    return humanChoice.toLowerCase();
}


  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        // your code here!
        // write a code that gives the logic to the game
        // create the ruleset on which the game works
        

        const winCondition = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
        if (humanChoice === computerChoice) {
            return "It is a tie!";
        }
        else if (winCondition[humanChoice] === computerChoice) {
            humanScore++;
            return "The human wins, " + humanChoice + " beats " + computerChoice + "!";
        }
        else {
            computerScore++;
            return "The computer wins, " + computerChoice + " beats " + humanChoice + "!";
        }
      }
      for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);


  }
  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("The human is the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
playGame();
  
  
  
