function getComputerChoice() {
    const choices = ["S", "W", "G"]; // Snake, Water, Gun
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Function to determine the winner
  function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
    if (
      (playerChoice === "S" && computerChoice === "W") || // Snake drinks water
      (playerChoice === "W" && computerChoice === "G") || // Water douses gun
      (playerChoice === "G" && computerChoice === "S")    // Gun shoots snake
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  // Main game function
  function playGame() {
    const playerChoice = prompt("Enter your choice: S (Snake), W (Water), G (Gun)").toUpperCase();
    if (!["S", "W", "G"].includes(playerChoice)) {
      alert("Invalid input! Please enter S, W, or G.");
      return;
    }

    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);
    alert(`Your choice: ${playerChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}`);
}
playGame();