// Suppose you are working for a automatic snack machine vending corp.
// Develop a basic console program which asks the client
// a number for a snack and display for him what he asked

let clc = require("cli-color");
const prompt = require("prompt-sync")();
let userInput = "";
var machineOptions = [];

function machineScreen() {
    machineOptions.push(
        `${clc.bgCyan.bold("*** Lili Snacks Vending Machine ***")}\n`,
        "1- Chocolate Brownie\n",
        "2- Kit Kat\n",
        "3- Chicken Crocket (Coxinha)\n",
        "4- Choccy Milk\n",
        "5- Cancel"
    );

    return machineOptions.join("");
}

console.log(machineScreen());

userInput = parseInt(prompt("What Item Would Like? "));

switch (userInput) {
    case 1:
        console.log("Chocolate Bar Selected");
        break;

    case 2:
        console.log("Kit Kat Selected");
        break;

    case 3:
        console.log("Chicken Crocket Selected");
        break;

    case 4:
        console.log("Choccy Milk Selected");
        break;

    case 5:
        console.log(clc.red("Operation Canceled By User"));
        break;

    default:
        console.log(clc.yellowBright("Unknown Option"));
        break;
}