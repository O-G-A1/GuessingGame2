let compNumber=parseInt(Math.random()*4)+1;
let humanGuess=parseInt(prompt("Guess a number"));
let remark;

let maximumTrials=3;
let minimumTrials=1;


console.log(compNumber);
console.log(humanGuess);


document.getElementById("humanguess").textContent+=humanGuess;
document.getElementById("Compnumber").textContent+=compNumber;

    if(humanGuess===compNumber){
        alert("Wow! You guessed right.");
        remark="Congratulations! You guessed right.\n Welcome to stage 2."
        document.getElementById("remark").textContent+=remark;
    }else{
        alert("You are wrong!");
        remark="Sorry, you did not guess right. Try again."
        document.getElementById("remark").textContent+=remark;
    }
    
 
    
        

    

