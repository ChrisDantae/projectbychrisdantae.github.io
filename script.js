'use strict';

const secretCode = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highscore = 0;
let forSecretCode = document.querySelector('.number')
forSecretCode = secretCode;

console.log(`The Secret Code is ${secretCode}`);

//for play the game
document.querySelector('.check').addEventListener('click' ,  function(){
     const guess = Number(document.querySelector('.guess').value);
     if(scoreNumber > 0){
          if(!guess){
               document.querySelector('.message').textContent = "Please fill the number";
          }else if (guess === secretCode){
               document.querySelector('.message').textContent = "Correct Answer";
               document.querySelector('.highscore').textContent = scoreNumber;
          }else if ( guess > secretCode){
               document.querySelector('.message').textContent = "Too high";
               scoreNumber--;
               document.querySelector('.score').textContent = scoreNumber;
               console.log(scoreNumber);

          }else if(guess < secretCode){
               document.querySelector('.message').textContent = "Too low";
               scoreNumber--;
               document.querySelector('.score').textContent = scoreNumber;
               console.log(scoreNumber);
          }
     }
     else{
          document.querySelector('.message').textContent = "You lose the game! Try Again";
     }
     
})

//for play again the game

document.querySelector('.again').addEventListener('click', function(){
     window.location.reload();
     
})


