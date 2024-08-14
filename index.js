let compNumber=parseInt(Math.random()*4)+1;
let humanGuess;
let remark;
let maximumTrials=3;
let minimumTrials=1;






for(minimumTrials=1; minimumTrials<=maximumTrials;minimumTrials++){
    humanGuess=parseInt(prompt("Guess a number between 1 and 4. " + " You are given " + minimumTrials + " of " + maximumTrials + " trials"));
    if(humanGuess===compNumber){
        alert("Wow! You guessed right.");
        document.getElementById("humanguess").textContent+=humanGuess;
        // document.getElementById("humanguess").value;
        document.getElementById("Compnumber").textContent+=compNumber;
        remark="Congratulations! You guessed right.\n Welcome to stage 2."
        document.getElementById("remark").textContent+=remark;

        break;
    }
    else if(humanGuess!=compNumber){
            alert("You are wrong!");
            remark="Sorry, you did not guess right. Try again."
            document.getElementById("humanguess").textContent+=humanGuess + " - ";
            document.getElementById("Compnumber").textContent+=compNumber + " - ";
            document.getElementById("remark").textContent+=remark;
            let decreasetrials=maximumTrials-minimumTrials;
        if(minimumTrials===maximumTrials){
                alert("Game over");
            }
       else if(decreasetrials>0){
                alert("You have " + decreasetrials + " more attempts");
            }
        }
        
    

}



 
    
        

    

