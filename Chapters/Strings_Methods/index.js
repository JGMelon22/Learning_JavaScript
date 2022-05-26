let fruits = "Banana";
var moreFruits = "Coconut,\nApple,\nKiwi"; // \n means new line
var anotherListOfFruits = "Coconut,\tApple,\tKiwi,\tPineapple"; // Adds a tab between the items
var aSentence = "The quick brown fox jumps over the lazy dog."
var friendsName = "Arthur Bruna Robert Ruas";

console.log(`A single fruit: ${fruits}`);
console.log(`Three fruits: ${moreFruits}\n`);

function isThereApple() {
    console.log(`Is there any Apple? ${moreFruits.includes("Apple")}`);
    console.log(`If so, it's position? ${moreFruits.indexOf("Apple")}`);
    console.log(`How do you call a negative banana? ${fruits.slice(2, 6)}`);
    console.log(`I hate kiwi's. Change it to fries! (why not?):  ${anotherListOfFruits.replace("Kiwi", "'Fries'")}`);

}

function voiceTone() {
    console.log(`\nScream about a fox: ${aSentence.toUpperCase()}`);
    console.log(`Silence! The red panda is sleeping: ${aSentence.toLocaleLowerCase()}`);
}

function findTheLetter() {
    let alphabetStupidWay = "abcdefghijklmnopqrstuvwxyz";
    console.log(`\n9th letter from the alphabet? ${alphabetStupidWay.charAt(9)}/${alphabetStupidWay.charAt(9).toUpperCase()}`);
    // or use alphabetStupidWay[2]
}

function friendsForever() {
    console.log(`Real friends are together forever: ${friendsName.split(",")}`);
}

isThereApple();

voiceTone();

findTheLetter();

friendsForever();