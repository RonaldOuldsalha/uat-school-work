function playDiceGame() {
     const playerRoll = Math.floor(Math.random() * 6) + 1;
    const casinoRoll = Math.floor(Math.random() * 6) + 1;

    let resultMessage = `You rolled a ${playerRoll}. Casino rolled a ${casinoRoll}. `;

    // Intentional Logic Error: the win condition has been misspelled 
    if (playerRoll > casinoRoll) {
        resultMessage += "You Win!"; // This should say "You win!"
    } else if (playerRoll < casinoRoll) {
        resultMessage += "You Lose!"; // This should say "You lose!"
    } else {
        resultMessage += "It's a tie!";
    }

    document.getElementById("gameResult").innerText = resultMessage;
}

function displayUserMessage(name) {
    const message = `Good luck, ${name}! Let's see if fortune favors you today.`;
    document.getElementById("userMessage").innerText = message;
}
