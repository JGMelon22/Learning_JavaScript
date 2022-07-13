// Let's assume you are teaching your friend JavaScript,
// Whoever, he is having some struggles to understand
// The data types; As a good teacher, instead of give him the fish,
// you are teaching him to fishing; 
const prompt = require('prompt-sync')();
var examples = [];
var userInput;

function intro() {

    examples.push(
        "1- An age would be a: \n",
        "1- A name would be a: \n",
        "3- A full name would be a: \n",
        "4- An age would be a: \n",
        "5- A lie would be a: \n",
        "6- Brands could could be a: \n",
        "Push enter to reveal the answers..."
    );
    return examples.join("");
}

console.log(intro());

userInput = prompt();

function dataTypes() {

    var age = 20;

    let yourName = "João Gabriel"

    let fullName = {
        first: "João",
        last: "Melão"
    };

    let falsity = false;


    let brands = ["AMD", "Intel", "Nvidia"];

    let empty = null;

    let random;

    console.log(typeof (age));
    console.log(typeof (yourName));
    console.log(typeof (fullName));
    console.log(typeof (falsity));
    console.log(typeof (brands));
    console.log(typeof (empty));
    console.log(typeof (random));
}

console.log(dataTypes());