// Now in JS , we will use 2 variables , 1 to track user's score , and the second to track the computer's score.

let userScore = 0 ;
let compScore = 0 ;

//we have to access all the choices available in the game[rock,paper,scissor].

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");  
const compScorePara = document.querySelector("#comp-score"); 


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
    const userChoice =  choice.getAttribute("id");
    playGame(userChoice);       //calling the function.
       
    })
})

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        console.log("YOU WIN!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
     } else{
                console.log("YOU LOSE!");
                compScore++;
                compScorePara.innerText = compScore;
                msg.innerText = `YOU LOSE! ${compChoice} beats your ${userChoice}. `;
                msg.style.backgroundColor = "red";
            }
        }
    

const playGame = (userChoice) =>{
    console.log("user choice = " , userChoice);
  
    // now generate computer choice --> make a function.
    const compChoice = genCompChoice();

    console.log("computer choice : " ,compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice ==="rock"){
            // compChoice-->if rock then draw so left-->paper,scissors.
         userWin =  compChoice === "paper"? false : true;
        } else if(userChoice ==="paper"){
            // compChoice-->if paper then draw so left-->rock,scissors.
           userWin = compChoice ==="scissors"? false : true; 
        } else{   // userChoice = scissors is only left.
            // compChoice cant be scissors --> draw , so rock paper left.
                userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice , compChoice);
    }

}

const genCompChoice = ()=>{
    // we want comp to generate a random choice out of rock,paper,scissor.
    let options = ["rock" , "paper" , "scissors"];
    //so randomly choose krvaane se pehle apne options ko array mei store kar lete hai.

    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

}

const drawGame = () =>{
    console.log("GAME DRAW!");
    msg.innerText = "GAME DRAW!";
    msg.style.backgroundColor = "#081b31";
}




// As we have got our "user's choice" , but in order to play the game , we need "computers choice" too.

// Firstly we will create a function "playGame" and we will generate a random choice from user as well as the computer.

// Then we will compare both the values , and check who wins and scores must be updated.

// All this work will be performed by "playGame" function.




// Now we will see when user and computer will compete , who's actually gonna win? , we will see that in "playGame" function.