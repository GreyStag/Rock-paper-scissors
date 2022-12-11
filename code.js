let numRounds = prompt("Welcome to Rock Paper Scissors, How many rounds would you like to play?")
let playersInput = prompt("What do you choose, Rock, Paper or Scissors?");
let playersDecision = playersInput.toLowerCase();
console.log(playersDecision);

function computersChoice(){
    let computerInput = Math.floor(Math.random() * 3);
    if (computerInput == 0) {
        return ("rock")
    }
    else if (computerInput == 1) {
        return ("paper")
    }
    else {
        return ("scissors")
    }
};
computersChoice()

let compChoice = computersChoice()
console.log(compChoice);

function winnerWinnerChickenDinner (compChoice, playersDecision, numRounds){ 
    let compWins = 0
    let playerWins = 0
    for (i = 1; i < numRounds; i++){
        let playersInput = prompt("What do you choose, Rock, Paper or Scissors?");
        let playersDecision = playersInput.toLowerCase();
        
        if (playersDecision == "rock" && compChoice == "scissors") {
            playerWins++; console.log("playerwins" + playerWins)}
        else if (playersDecision == "paper" && compChoice == "rock") {
            playerWins++; console.log("playerwins" + playerWins)}
        else if (playersDecision == "scissors" && compChoice == "paper") {
            playerWins++; console.log("playerwins" + playerWins)}
        
        else if (playersDecision == "paper"&& compChoice == "scissors"){
            compWins++; console.log("compwins" + compWins)}
        else if (playersDecision == "rock" && compChoice == "paper"){
            compWins++; console.log("compwins" + compWins)}
        else if (playersDecision == "scissors" && compChoice == "rock") {
            compWins++; console.log("compwins" + compWins)}	
        else {compWins++; playerWins++; console.log("Compwins" + compWins); console.log("playerwins" + playerWins)}
    }
    console.log(compWins)
    console.log(playerWins)
    if (compWins > playerWins) {
        alert("The Computer Won! Maybe next time you'll succeed.. maybe..")
    }
    else if (compWins < playerWins) {
        alert("You Won! Great job winning a game of chance that doesn't really take much skill...")
    }
    else {
        alert("Tie! Guess both of you are having a bad day.")
    }
};
winnerWinnerChickenDinner(compChoice, playersDecision, numRounds)

