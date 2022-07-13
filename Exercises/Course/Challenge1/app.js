// Challenge1: Your age in days
var prompt = require("prompt-sync")();

let currentDate = new Date;
let currentYear = currentDate.getFullYear();

console.log("Please, type your birth year: ");
let yearInput = prompt(parseInt());

// Convert year to days
let userAgeInDays = (currentYear - yearInput) * 365;

if (yearInput > currentYear) {
    console.log("Invalid year!");
} else if (yearInput < 0) {
    console.log("Invalid year!");

} else if (isNaN(yearInput)) {
    console.log("Wrong typed value.");

} else {
    console.log(`Your age in years is around: ${userAgeInDays} days.`);
}
