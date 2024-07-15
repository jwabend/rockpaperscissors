// Initial scores
let playerScore = 0;
let computerScore = 0;

// Get references to elements once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const resultsDisplay = document.getElementById('results');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const restartButton = document.getElementById('restart');

    // Function to simulate computer choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    // Function to get icon path based on selection
    function getIcon(selection) {
        switch (selection) {
            case 'rock':
                return './imgs/rock-svgrepo-com.svg';
            case 'paper':
                return './imgs/paper-svgrepo-com.svg';
            case 'scissors':
                return './imgs/scissors-svgrepo-com.svg';
            default:
                return '';
        }
    }

    // Function to update computer's choice display
    function updateComputerChoiceDisplay(selection) {
        const computerChoiceIcon = getIcon(selection);
        computerChoiceDisplay.innerHTML = `
            <h1>Computer's Choice</h1>
            <img src="${computerChoiceIcon}" alt="Computer choice: ${selection}">
        `;
    }

    // Event listeners for buttons
    rockButton.addEventListener('click', function() {
        playRound('rock');
    });

    paperButton.addEventListener('click', function() {
        playRound('paper');
    });

    scissorsButton.addEventListener('click', function() {
        playRound('scissors');
    });

    restartButton.addEventListener('click', resetGame);

    // Function to play a single round
    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();

        // Update UI with computer's choice icon
        updateComputerChoiceDisplay(computerSelection);

        // Determine winner
        let roundResult = '';
        if (playerSelection === computerSelection) {
            roundResult = "It's a tie!";
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            roundResult = 'You win this round!';
            playerScore++;
        } else {
            roundResult = 'Computer wins this round!';
            computerScore++;
        }

        // Update UI with scores and result
        updateScoreboard();
        displayResult(roundResult);

        // Check if game is over (first player to reach 5 points)
        if (playerScore === 5) {
            announceWinner('Player');
            disableButtons();
        } else if (computerScore === 5) {
            announceWinner('Computer');
            disableButtons();
        }
    }

    // Update the scoreboard
    function updateScoreboard() {
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }

    // Display the result of each round
    function displayResult(result) {
        resultsDisplay.textContent = result;
    }

    // Announce the winner of the game
    function announceWinner(winner) {
        resultsDisplay.textContent = `${winner} wins the game!`;
    }

    // Disable buttons when game ends
    function disableButtons() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

