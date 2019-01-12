$(document).ready(function() {

// arrays and variables 
    generatedScore = 0
    userScore = 0
    wins = 0
    losses = 0
    crystalNumbers = []
    crystal1 = 0
    crystal2 = 0
    crystal3 = 0
    crystal4 = 0

var startGame = function() {
// generates a random number that the user must score exactly
// this generates a number between 19 and 120
    generatedScore = Math.floor(Math.random() * 120) + 19; 
    console.log(generatedScore);

 // display the number
    $("#generatedScore").text(generatedScore);
   
    
// give each crystal a random value (number between 3 and 25)
    crystal1 = Math.floor((Math.random() * 25) + 3 );
    crystal2 = Math.floor((Math.random() * 25) + 3 );
    crystal3 = Math.floor((Math.random() * 25) + 3 );
    crystal4 = Math.floor((Math.random() * 25) + 3 );

// display user's score when crystal is clicked
    $("#userScore").text(userScore);

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

};

function resetGame() {
    userScore = 0;
    generatedScore = 0;
    generatedScore = Math.floor(Math.random() * 120) + 25; 
    crystal1 = Math.floor((Math.random() * 25) + 3 );
    crystal2 = Math.floor((Math.random() * 25) + 3 );
    crystal3 = Math.floor((Math.random() * 25) + 3 );
    crystal4 = Math.floor((Math.random() * 25) + 3 );
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#generatedScore").text(generatedScore);

};
// start startGame function
startGame();


// when user clicks on a crystal...
        // update score with every click 

 // if user wins...
    // their score must match the randomly generate score exactly
    // adds one to 'wins' counter and generates a "You won!" messages
    // restarts (with new generated #) after win

function winGame() {
    wins++;
    $("#generatedMessage").text("You won! Great job!");
    $("#wins").text("Wins:" + wins);
    resetGame();
};

// if user loses...
    // their score went over randomly generates score
    // adds one to 'loses' counter and generates "you lost!" message
    // restarts (withs new generates #) after lose  

function loseGame() {
    losses++;
    $("#generatedMessage").text("You lost! Better luck next time!");
    $("#losses").text("Losses:" + losses);
    resetGame();
};

// create click functions for crystals

$("#crystal1").click(function() {
    userScore = userScore + crystal1;
    $("#userScore").text(userScore);
    console.log("User Score:" + userScore);

   if (userScore === generatedScore) {
       wins++;
       winGame();
   }
   else if (userScore > generatedScore) {
       losses++;
       loseGame();
   }
});

// when user clicks crystal2 ...

$("#crystal2").click(function() {
    userScore = userScore + crystal2;
    $("#userScore").text(userScore);
    console.log("User Score:" + userScore);

    if (userScore === generatedScore) {
        winGame();
    }
    else if (userScore > generatedScore) {
        loseGame();
    }
});

// when user clicks crystal3 ...

$("#crystal3").click(function() {
    userScore = userScore + crystal3;
    $("#userScore").text(userScore);
    console.log("User Score:" + userScore)

    if (userScore === generatedScore) {
        winGame();
    }
    else if (userScore > generatedScore) {
        loseGame();
    }
});

// when user clicks crystal4 ...

$("#crystal4").click(function() {
    userScore = userScore + crystal4;
    $("#userScore").text(userScore);
    console.log("User Score:" + userScore);

    if (userScore === generatedScore) {
        winGame();
    }
    else if (userScore > generatedScore) {
        loseGame();
    }
});
});