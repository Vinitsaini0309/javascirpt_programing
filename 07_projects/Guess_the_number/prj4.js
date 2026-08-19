

 const randomNumber = parseInt(Math.random() * 100 + 1);

 const submit = document.querySelector('#subt');
 const userInput = document.querySelector('#guessField');
 const GuesSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const LowORHigh = document.querySelector('.lowOrHi');
 const startover = document.querySelector('.resultParas');
 const p = document.createElement('p');

 let prevGuess = []
 let Numguess = 1;

 let Playgame = true;
 if(Playgame){
    submit.addEventListener('click' , function(e){
e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);

ValidateGuess(guess);
    })
 }

 function ValidateGuess(guess){
if(guess > 100){
    alert(`Please enter a valid Guess`);
}
 else if(isNaN(guess)){
    alert(`Please enter a valid Guess`);
}
 else if(guess < 1){
    alert(`Please enter a valid Guess`);
}
else{
    prevGuess.push(guess)
    Numguess++
    if(Numguess === 11){
        displayGuess(guess);
        displayMessage(`GAME OVER , Random NO Was ${randomNumber}`);
        endGame();
    
    }
    else{
        displayGuess(guess);
        CheckGuess(guess);

    }
}

 }
 function CheckGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You Guessed It Right`);
        endGame();
       
    }
    else if(guess < randomNumber){
        displayMessage(`Number Is Too Low`);
        endGame();
        
    }
    else{
        displayMessage(`Number Is Too High`);
        endGame();
        

    }

 }

 function displayGuess(guess){
    userInput.value = ''
    GuesSlot.innerHTML += `${guess},  `;
    remaining.innerHTML = `${10 - Numguess}`

 }

 function displayMessage(Message){
LowORHigh.innerHTML = `${Message}`;

 }

 function newGame(){


}

function endGame(){

}








