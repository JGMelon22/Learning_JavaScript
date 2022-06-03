// Basic array creation
let fruits = ["Apple", "Banana", "Tomato", "JackFruit"];
let vegetables = ["Asparagus", "Brocoli", "Potato"];
let allGroceries = fruits.concat(vegetables);
let someNumbers = [10, 69, 420, 33, 12, 43];
let mixedLetters = ['u', 'a', 'x', 'z', 'b', 'c'];

// Like an object
let fruitsObj = new Array("Apple", "Banana", "Tomato", "JackFruit");

// Prints all fe elements 
fruits.forEach(items => {
    console.log(items);
});

// Getting only the first array item
console.log(`==========\n${fruitsObj[0]}`);

// Assigning a new value to an array element
fruits[2] = "Kiwi";

console.log("==========");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Some common array methods
var myFruitsPrinter = [];

function printFruits() {
    myFruitsPrinter.push(
        `\nBefore .pop(): ${fruits}\n`,
        `Using .pop(): ${fruits.pop()}\n`,
        `After pop: ${fruits}\n`
    );

    return myFruitsPrinter.join("");
}

var newFruit = [];

function printNewlyAddedFruit() {
    newFruit.push(
        `Before add: ${fruitsObj}\n`,
        `After add: ${fruitsObj = "Cherry"}\n`,
    );

    return newFruit.join("");
}

var shiftFruit = [];

function printFruitsShift() {
    shiftFruit.push(
        `\nBefore .shift(): ${fruits}\n`,
        `Using .shift(): ${fruits.shift()}\n`,
        `After shift: ${fruits}\n`
    );

    return shiftFruit.join("");
}

// Unshift adds an element at the first position from the array
var unshiftFruit = [];

function printFruitsUnshift() {
    unshiftFruit.push(
        `\nBefore .unshift(): ${fruits}\n`,
        `Using .unshift(): ${fruits.unshift("Cocoa")}\n`,
        `After unshift: ${fruits}\n`
    );

    return unshiftFruit.join("");
}

// Opposite of "split()" 
console.log(`\n===== Basic Methods =====\nUsing .toString(): ${fruits.toString()}`);
console.log(`Using .join(','): ${fruits.join(',')}`);
console.log(printFruits()); // Removes the last item
console.log(`Obtains the array size: ${fruits.length}`);

// Adding an item to a the 4th position from the array 
console.log(printNewlyAddedFruit());
console.log(printFruitsShift());
console.log(printFruitsUnshift());
console.log(`Mixing two arrays together: ${allGroceries}`);
console.log(`Only certain amount of groceries: ${allGroceries.slice(0, 2)}`);
console.log(`Sorting letters: ${mixedLetters.sort()}`);
console.log(`Sorting numbers: ${someNumbers.sort((a, b) => (a - b))}`);

// Adding items to an empty array
let nothingArray = new Array();

for (let i = 0; i < 5; i++) {
    nothingArray.push(i);
}

console.log("Adding itens to emptyArray:", nothingArray);