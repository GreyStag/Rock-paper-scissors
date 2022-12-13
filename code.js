
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const button = document.querySelector('buttonRemove')
const playerContent = document.querySelector('.playContent')
const computerContent = document.querySelector('.compContent')
const roundContent = document.querySelector('.round-winner')
const playRounds = document.querySelector('.playRounds')
const newGame = document.querySelector('#game')

rock.addEventListener('click', () => playGame("rock"));
paper.addEventListener('click', () => playGame("paper"));
scissors.addEventListener('click', () => playGame('scissors'));





let compWins = 0
let playerWins = 0
let lives = 5

function playGame(playerInput){

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
 

    console.log(playerInput)
    console.log(compChoice)
    

    if (compWins < 5 && playerWins < 5) {

        if (playerInput == "rock" && compChoice == "scissors") {
            playerWins++; playerContent.textContent = "Player Score: " + playerWins; console.log("playerwins" + playerWins)
            roundContent.textContent = "Last Round: You chose Rock, Computer chose Scissors"
        }
        else if (playerInput == "paper" && compChoice == "rock") {
            playerWins++; playerContent.textContent = "Player Score: " + playerWins; console.log("playerwins" + playerWins)
            roundContent.textContent = "Last Round: You chose Paper, Computer chose Rock"
        }
        else if (playerInput == "scissors" && compChoice == "paper") {
            playerWins++; playerContent.textContent = "Player Score: " + playerWins; console.log("playerwins" + playerWins)
            roundContent.textContent = "Last Round: You chose Scissors, Computer chose Paper"
        }
        
    
    
        else if (playerInput == "paper"&& compChoice == "scissors"){
            compWins++; computerContent.textContent = "Computer Score: " + compWins; console.log("compwins" + compWins)
            roundContent.textContent = "Last Round: You chose Paper, Computer chose Scissors"
            lives--;
            playRounds.textContent = "You have " + lives + " lives, what weapon do you choose?"
        }
        else if (playerInput == "rock" && compChoice == "paper"){
            compWins++; computerContent.textContent = "Computer Score: " + compWins; console.log("compwins" + compWins)
            roundContent.textContent = "Last Round: You chose Rock, Computer chose Paper"
            lives--;
            playRounds.textContent = "You have " + lives + " lives, what weapon do you choose?"
        }
        else if (playerInput == "scissors" && compChoice == "rock") {
            compWins++; computerContent.textContent = "Computer Score: " + compWins; console.log("compwins" + compWins)
            roundContent.textContent = "Last Round: You chose Scissors, Computer chose Rock"
            lives--;
            playRounds.textContent = "You have " + lives + " lives, what weapon do you choose?"
        }	
        else {roundContent.textContent = "Last Round: Tie"; console.log("It's a tie")}

    }

    if (compWins == 5 && compWins > playerWins){
        computerContent.textContent = "Computer Score: 5"; console.log("The computer won, too bad.")
        roundContent.textContent = "Last Round: The Computer Won! Sucks to be you!"; 
        playRounds.textContent = "You have 0 lives"; 
        
        startNewGame()
    }
    else if (playerWins == 5 && playerWins > compWins){
        playerContent.textContent = "Player Score: 5"; console.log("You Won!")
        roundContent.textContent = "Last Round: You Won! Alright!";
        
        startNewGame()
    }

    
}

function startNewGame() {
    let buttons = document.getElementById('btnId')
    while (buttons.firstChild) {
        buttons.removeChild(buttons.firstChild);
    }
    const paragraph = document.createElement('button');
    paragraph.setAttribute('style', 'background: rgb(122, 120, 134); width: 300px; height: 200px; border-radius: 25px; color: aliceblue; font-size: 32px;')
    paragraph.textContent = "Play again?"
    buttons.appendChild(paragraph)


}

// let numRounds = prompt("Welcome to Rock Paper Scissors, How many rounds would you like to play?")
// let playersInput = prompt("What do you choose, Rock, Paper or Scissors?");
// let playersDecision = playersInput.toLowerCase();
// console.log(playersDecision);

// function computersChoice(){
//     let computerInput = Math.floor(Math.random() * 3);
//     if (computerInput == 0) {
//         return ("rock")
//     }
//     else if (computerInput == 1) {
//         return ("paper")
//     }
//     else {
//         return ("scissors")
//     }
// };
// computersChoice()

// let compChoice = computersChoice()
// console.log(compChoice);

// function winnerWinnerChickenDinner (compChoice, playersDecision, numRounds){ 
//     let compWins = 0
//     let playerWins = 0
//     for (i = 1; i < numRounds; i++){
//         let playersInput = prompt("What do you choose, Rock, Paper or Scissors?");
//         let playersDecision = playersInput.toLowerCase();
        
//         if (playersDecision == "rock" && compChoice == "scissors") {
//             playerWins++; console.log("playerwins" + playerWins)}
//         else if (playersDecision == "paper" && compChoice == "rock") {
//             playerWins++; console.log("playerwins" + playerWins)}
//         else if (playersDecision == "scissors" && compChoice == "paper") {
//             playerWins++; console.log("playerwins" + playerWins)}
        
//         else if (playersDecision == "paper"&& compChoice == "scissors"){
//             compWins++; console.log("compwins" + compWins)}
//         else if (playersDecision == "rock" && compChoice == "paper"){
//             compWins++; console.log("compwins" + compWins)}
//         else if (playersDecision == "scissors" && compChoice == "rock") {
//             compWins++; console.log("compwins" + compWins)}	
//         else {compWins++; playerWins++; console.log("Compwins" + compWins); console.log("playerwins" + playerWins)}
//     }
//     console.log(compWins)
//     console.log(playerWins)
//     if (compWins > playerWins) {
//         alert("The Computer Won! Maybe next time you'll succeed.. maybe..")
//     }
//     else if (compWins < playerWins) {
//         alert("You Won! Great job winning a game of chance that doesn't really take much skill...")
//     }
//     else {
//         alert("Tie! Guess both of you are having a bad day.")
//     }
// };
// winnerWinnerChickenDinner(compChoice, playersDecision, numRounds)

