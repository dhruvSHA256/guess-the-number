'use strict';

const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const setMessage = function (msg) {
    document.querySelector(".message").textContent = msg;
}

const eventCheck = function () {
    const number = Number(document.querySelector(".guess").value);
    if (!number) {
        setMessage('⛔️ No number!');
    }
    else if (number === correctNumber) {
        setMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = correctNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        highscore = Math.max(score, highscore);
        document.querySelector('.highscore').textContent = highscore;
    }
    else {

        if (score) {
            setMessage(number > correctNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            setMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
}

const eventAgain = function () {
    score = 20;
    correctNumber = getRandomInt(1, 20);
    setMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

let correctNumber = getRandomInt(1, 20);
let score = 20;
let highscore = 0;

console.log(correctNumber);
document.querySelector(".check").addEventListener('click', eventCheck);
document.querySelector('.again').addEventListener('click', eventAgain);
