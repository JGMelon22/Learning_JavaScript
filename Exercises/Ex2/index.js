// Create a simple console app to calculate the user age, based on which year he/she borned
const prompt = require('prompt-sync')();
const currentYear = new Date().getFullYear();

console.log("When did you was born?");
var userBornYear = parseInt(prompt());

if (userBornYear > currentYear) {
    console.log("Invalid birth year!");
}

else {
    function userAge() {
        return currentYear - userBornYear;
    }

    console.log(`You have ${userAge()} years`);
}