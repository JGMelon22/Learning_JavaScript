// Functions in JS
const prompt = require('prompt-sync')();
const numOne = Math.floor(Math.random() * 10);
const numTwo = Math.floor(Math.random() * 10);

function greetsUser() {
    console.log("Hello, mate! What is your name?");
    const userName = prompt().trim();
    console.log(`Greetings, ${userName}!`);
}

function checkNumbersSum() {
    return numOne + numTwo;
}

function stupidCaptcha() {
    console.log("Great! Before we do continue, please, complete the challenge below: ");
    console.log(`${numOne} + ${numTwo}`);
    let userAnswer = parseInt(prompt());
    if (userAnswer != checkNumbersSum()) {
        console.log("Wrong answer, paul! Finishing the program!");
    }

    else {
        console.log("Welcome, to the program!");
    }
}

greetsUser();
checkNumbersSum();
stupidCaptcha();