const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) +1 ) + minNum ;

let attempts = 0;
let guess = 0;
let isRunning = true;

const guessBtn = document.getElementById('guessBtn');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

guessBtn.addEventListener('click', () => {
    guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        message.textContent = "Please Enter a valid number between 1 - 100";
    } else {
        attempts++;
        if (guess < answer) {
            message.textContent = "Too Low!! Try Again!";
        } else if (guess > answer) {
            message.textContent = "Too High!! Try Again!";
        } else {
            message.textContent = `Correct! The answer was ${answer}. You won after ${attempts} attempts`;
            isRunning = false;
            guessInput.disabled = true;
            guessBtn.disabled = true;
        }
    }
});