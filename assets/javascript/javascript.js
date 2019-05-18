
//--------------------------------------------------------------------------
// these are initial the button values 
var buttons = {
    button1: {
        value: 0
    }, 

    button2: {
        value: 0 
    }, 

    button3: {
        value: 0
    }, 

    button4: {
        value: 0
    }
};

// this is the random number and the current guess
var randomNumber = 0; 
var currentGuess = 0; 
var num1, num2, num3, num4; 
var wins = 0;
var losses = 0; 

//--------------------------------------------------------------------------


// INITIALIZE PAGE - THIS RUNS WHEN THE PAGE LOADS 
$(document).ready(function() {
    console.log ("ready!");

    //START GAME FUNCTION - SET RANDOM NUMBER, SETS BUTTON NUMBERS
    //--------------------------------------------------------------------------
    
    function startGame() {
        // reset the current score 
        currentGuess = 0; 
        $("#currentGuess").text(currentGuess);
        $("#wins").text(wins);
        $("#losses").text(losses);
        // this is generating the random number (target number) that the user must match to win
        randomNumber = Math.floor(Math.random()* 120 + 19);
        $("#number").text(randomNumber); 
        //log to console 
        console.log ("number to guess " + randomNumber);
        


        // Define each number as a random number between 1 - 12, and set the value in the object
        num1 = Math.floor(Math.random() * 12+1);
        console.log ("number 1 " + num1);

        num2 = Math.floor(Math.random() * 12+1);
        console.log ("number 2 " + num2);

        num3 = Math.floor(Math.random() * 12+1);
        console.log ("number 3 " + num3);

        num4 = Math.floor(Math.random() * 12+1);
        console.log ("number 4 " + num4);
        
        //ASSIGN VALUES TO BUTTONS AS PART OF START FUNCTION

        // END START FUNCTION 
        //--------------------------------------------------------------------------
    } 

    //BUTTON ON CLICK EVENTS
    //--------------------------------------------------------------------------
    
    
    $("#button1").on("click", 
        function() { 
            currentGuess = currentGuess + num1;
            console.log("on click number = " + num1);
            console.log ("current guess is " + currentGuess);
            $("#currentGuess").text(currentGuess); 
            endGame();  
        }
    ) 

    $("#button2").on("click", 
        function() {
            currentGuess = currentGuess + num2;
            console.log("on click number = " + num2);
            console.log ("current guess is " + currentGuess);  
            $("#currentGuess").text(currentGuess); 
            endGame();
        }
    ) 

    $("#button3").on("click", 
        function() { 
            currentGuess = currentGuess + num3; 
            console.log("on click number = " + num3);
            console.log ("current guess is " + currentGuess); 
            $("#currentGuess").text(currentGuess);  
            endGame();
        }
    ) 

    $("#button4").on("click", 
        function() {
            currentGuess = currentGuess + num4;
            console.log("on click number = " + num4); 
            console.log ("current guess is " + currentGuess);  
            $("#currentGuess").text(currentGuess); 
            endGame();
        }
        
    ) 

    //--------------------------------------------------------------------------
    
    //WIN OR LOSE FUNCTION 
    // If the guessedCount matches the random number
    function endGame(){
        console.log (currentGuess); 
        console.log(randomNumber);
        if (currentGuess === randomNumber) {
            // Display an alert
            alert ("You're a winner!");  
            // Write to console
            console.log ("they won");
            // Increment win counter  
            wins++; 
            // Push wins to HTML 
            $("#wins").text(wins); 
            // Log win counter to console 
            console.log ("wins " + wins); 
            // Start game
            startGame(); 
        } 

        // else if the guessed count is greater than the random number
        else if (currentGuess > randomNumber) {                     
            // Display an alert 
            alert ("You lose!!"); 
            // Log to console 
            console.log ("they lost"); 
            // Increment losses counter 
            losses++; 
            // Push losses to HTML 
            $("#losses").text (losses); 
            // Log losses to console 
            console.log ("losses " + losses); 
            // Start game 
            startGame(); 

        }

        else if (currentGuess < randomNumber) {
            // no actions to take
            return; 
        }
    }    
    //RUNS THE GAME 
    startGame();     
}); 
