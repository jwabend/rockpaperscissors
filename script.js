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

}

function playGame(){
    getComputerChoice()
    getHumanChoice()
}

playGame()