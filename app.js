let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomId=Math.floor(Math.random()*3);
    return options[randomId]
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You are the winner");
        userScore++;
        userScorePara.innerText=userScore
        msg.innerText =`You Win!. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green"
    }else{
        console.log("computer was the winner you are lost");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. Computer ${userChoice} beats your ${compChoice}`
        msg.style.backgroundColor ="red";
    }
}
const drawGame=()=>{
    console.log("Game was draw");
    msg.style.backgroundColor="#081b31"
    msg.innerText="Game was Draw.Play Again";}
const playGame=(userChoice)=>{
    console.log("userChoice=", userChoice);

    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);

    if(compChoice===userChoice){
        //Draw
        drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            if(compChoice=="paper"){
                userWin=false;
            }else{
                userWin=true;
            }
        }else if(userChoice === "paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})