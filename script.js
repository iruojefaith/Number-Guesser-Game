//selecting and element in JS
//changing text content
// document.querySelector(".number").textContent = 14;

//USING EVENT LISTENER
// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess'.value));
//     console.log(guess, typeof guess);

//     if (!guess) {
//         document.querySelector('.message').textContent = 'No number';
//     }
// });

//GETTING RANDOM NUMBER FOR THE GAME
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;


//COMPARE USER INPUT WITH SECRET NUMBER
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
} else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "Correct Number";
} else if (guess > secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = "Too High!";
    score --;
    document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = "YOU LOSE !!!!!";
    score --;
    document.querySelector('.score').textContent = 0;
    }

   }else if (guess < secretNumber) {
     if(score > 1) {
        document.querySelector('.message').textContent = "Too LOW!";
    score --;
    document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = "YOU LOSE !!!!!";
    score --;
    document.querySelector('.score').textContent = 0;
    }
}
});

//REDUCE SCORE ON EACH USER GUESS WRONG
//set a variable let score = 20
