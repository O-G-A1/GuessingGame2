let humanGuess;
let remark;
let endrange=2;
let stage=1;
let playAgain=true;
// let compNumber=parseInt(Math.random()*endrange)+1;
let compNumber=1;
let maximumTrials=3;
let minimumTrials=1;
let correctGuess=true;

while(playAgain){
    for(minimumTrials=1; minimumTrials<=maximumTrials;minimumTrials++){
        humanGuess=parseInt(prompt("Stage "+ stage + "." + " Guess a number between 1 and " + endrange +"." + " You are using your " + minimumTrials + " of " + maximumTrials + " trials"));
        if(humanGuess===compNumber){
            alert("Wow! You guessed right.");
            document.getElementById("humanguess").textContent+=humanGuess + " - ";
            document.getElementById("Compnumber").textContent+=compNumber + " - ";
            remark="Congratulations! You guessed right.";
            document.getElementById("remark").textContent+=remark;

            if(correctGuess){
                minimumTrials=0;
                stage++;
                endrange+=1;
                playAgain=confirm("Do you wish to proceed to the next stage?");
            }

    
        }
        else if(humanGuess!=compNumber){
                alert("You are wrong, try again!");
                document.getElementById("humanguess").textContent+=humanGuess + " - ";
                document.getElementById("Compnumber").textContent+=compNumber + " - ";
                let decreasetrials=maximumTrials-minimumTrials;
                if(minimumTrials===maximumTrials){
                    alert("Game over");
                    remark="Sorry, you did not guess right. Restart guess?"
                    document.getElementById("remark").textContent+=remark;
                }
                
                else if(decreasetrials>0){
                    alert("You have " + decreasetrials + " more attempts");
                }
            }
            
        }
        
        break;
    }



 
    
        

    

