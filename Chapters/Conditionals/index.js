// Conditionals 
// && - And
// || - Or
const prompt = require("prompt-sync")();
var clc = require("cli-color");
let status = "";

console.log("Whats your age?");
let customersAge = prompt();

if ((customersAge >= 18) && (customersAge <= 35)) {
    status = clc.green("Target demo");
} else {
    status = clc.red("Not my audience");
}

console.log(status);