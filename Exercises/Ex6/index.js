// You were hired to improve the readability of a book
// As a test, the company asked you to adapt a sentence 
// According to each user necessity. 
// Develop a program with user input to tho de following
// 1 - Upper Case Text;
// 2- Lower Case Text;
// 3- Scrambled words from the Text;
// 4- Find all "A" letters position
// 5- Says if a word based on user informed word exists 
const prompt = require('prompt-sync')();
var userInput = "";

var textExampleBook = [];

function bookSummary() {
    textExampleBook.push(
        "Combat medic and ",
        "biochemist Rebecca Chambers, ",
        "the sole survivor of Bravo Team, ",
        "joins a new S.T.A.R.S.strike force ",
        "when rumor comes of another Umbrella experiment: ",
        "hidden beneath the rocky cliffs of Caliban Cove, Maine, ",
        "someone is building an army of the undead.Now the S.T.A.R.S. ",
        "must battle more unspeakable horrors and stop a madman ",
        "from unleashing the biohazard upon the world."
    );

    return textExampleBook.join("");
}

// I know, pretty random, but it helps AF to store the string builder like function
// to manipulate latter
var auxVariable = bookSummary();

function userOptions() {
    console.log("\nChoose an option below: ");
    console.log("\n1- Upper Case ");
    console.log("\n2- Lower Case ");
    console.log("\n3- Scrambled words from the Text ");
    console.log("\n4- Find all \"A's\" positions");
}

function userChoice() {

    userInput = prompt();

    if (userInput == 1) {
        console.log(`===\nUpper Case Text: ${auxVariable.toUpperCase().slice(0, 30)}`);
    }

    else if (userInput == 2) {
        console.log(`===\nLower case text: ${auxVariable.toLowerCase().slice(0, 30)}`);
    }

    else if (userInput == 3) {
        console.log(`===\nReversed text: ${auxVariable.split("").reverse().join("").slice(0, 30)}`);
    }

    else if (userInput == 4) {
        console.log(`===\nTotal of A's: ${auxVariable.indexOf("A")}`);
    }

    else {
        console.log("Unknown option");
    }
}


console.log("Book: Resident Evil Caliban Cove");
console.log(`Summary: ${bookSummary()}`);

userOptions();
userChoice()