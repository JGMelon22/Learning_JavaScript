// JSON Basics

// Parses
/* 
var clc = require("cli-color");

let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(`JS to JSON: ${clc.yellow(string)}`);
console.log(`JSON to JS: ${clc.blue(JSON.parse(string).squirrel)}`);
*/

const clc = require("cli-color");
const fs = require("fs");
var file = fs.readFileSync("/home/joogabriel/Documents/CodeRelated/Codes/JavaScript/CP_Learning_JS/Chapters/JSON/eg.json");

console.log(clc.yellow("JSON to JavaScript:"));
console.log(JSON.parse(file));

console.log(clc.blue("\nJavaScript to JSON:"));
console.log(JSON.stringify(
    {
        shark: true,
        routine: ["Swim", "Eat"]
    }
));

