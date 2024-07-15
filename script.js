/* variables */
function getComputerChoice(){
    let values = [1, 2, 3];
    let number = values[Math.floor(Math.random() * values.length)];
    console.log(number);
    if (number==1){
        return "rock";
    } else if(number ==2){
        return "paper";
    }
    return "scissor"

}

/* functions */
function getHumanChoice() {
    const readlineSync = require('readline-sync');
    let human_choice = readlineSync.question("Rock, Paper, or Scissors? ");

    while (["rock", "paper", "scissors"].includes(human_choice.toLowerCase()) === false) {
        human_choice = readlineSync.question("That's not an option, What's your move? ");
    }
    console.log(`You chose: ${human_choice}`);
    return human_choice.toLowerCase();
}




function playRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("computer selection = ", computerSelection)
    let humanScore = 0;
    let computerScore = 0;

    if (humanSelection === computerSelection){
    
        console.log("tie")
    } else if (humanSelection === 'rock' && computerSelection === 'scissor'){
        
        humanScore += 1;
        console.log(" you get 1 point ")
    } else if (humanSelection === 'paper' && computerSelection === 'rock'){
        
        humanScore += 1;
        console.log(" you get 1 point ")
    } else if (humanSelection === 'scissors' && computerSelection === 'paper'){
        
        humanScore += 1;
    } else {
        
        computerScore += 1;
    }

    return [humanScore, computerScore];
}

function playGame(){
    let numberOfRounds = 5;
    let currentRound = 0;
    let totalHumanScore = 0;
    let totalComputerScore = 0;
    
    while (currentRound < numberOfRounds){
        const [humanScore, computerScore] = playRound();
        totalHumanScore += humanScore;
        totalComputerScore += computerScore;
        currentRound += 1;
    }

    if (totalHumanScore < totalComputerScore) {
        console.log("You lose");
    } else if (totalHumanScore > totalComputerScore) {
        console.log("You win!");
    } else {
        console.log("It's a tie!");
    }

    console.log("Player Score: ", totalHumanScore);
    console.log("Computer Score: ", totalComputerScore);
}

playGame()