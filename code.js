
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const classAdd = document.getElementById('rockPaperScissors')

const playerContent = document.querySelector('.playContent')
const computerContent = document.querySelector('.compContent')
const roundContent = document.querySelector('.round-winner')
const playRounds = document.querySelector('.playRounds')


rock.addEventListener('click', () => playGame("rock"));
paper.addEventListener('click', () => playGame("paper"));
scissors.addEventListener('click', () => playGame('scissors'));

const game = document.getElementById('game');
const freshGame = game.cloneNode(true);




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
    
    
    classAdd.setAttribute('class', 'hider')
    $('.btn').click(function(){
        $(".hider").hide();
    });
    const buttons = document.getElementById('btnId');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id','playAgain')
    buttons.append(newDiv);
    
    const paragraph = document.createElement('button');

    paragraph.setAttribute('style', 'background: rgb(122, 120, 134); width: 300px; height: 200px; border-radius: 25px; color: aliceblue; font-size: 32px;')
    paragraph.textContent = "Play again?"
    newDiv.appendChild(paragraph);
    paragraph.addEventListener('click', () => newgame('yes'));
    
}

function newgame(play) {
    if (play === "yes"){
        console.log("yes");
            $('#playAgain').remove();
            $('.hider').show();
            classAdd.removeAttribute('class', 'hider');
            
        }
    compWins = 0
    playerWins = 0
    lives = 5
    playRounds.textContent = "You have " + lives + " lives, what weapon do you choose?"
    computerContent.textContent = "Computer Score: "
    playerContent.textContent = "Player Score: "
    roundContent.textContent = "Last Round: "
    console.log(compWins, playerWins, lives)
}


