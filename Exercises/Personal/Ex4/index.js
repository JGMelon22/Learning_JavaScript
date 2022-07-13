// Suppose you are hired to develop a simple
// market list, where the user types how many products he/she
// would like to buy at a US$ 0.99 store;
// Describe how much he would pay
//Ps: if input is null, keep looping
const prompt = require('prompt-sync')();
var userQuantity = 0;
var userOption = '';

function introduction() {
    let welcome = [];
    welcome.push(
        "=== La lojita braba ===\n",
        "All products here cost $0.99\n",
        "How many would you like to buy?"
    );

    return welcome.join("");
}


console.log(introduction());
userQuantity = parseInt(prompt());

function finalPrice() {
    var finalPrice = userQuantity * 0.99;
    return `Final price is $${finalPrice}`;
}

console.log(finalPrice());

while (userOption == '') {
    console.log("Would you like to cancel or continue you purchase?\nA- Continue\nB- Cancel");
    userOption = prompt();
    if (userOption === 'A' || userOption === 'a') {
        console.log("Thanks for buying in our store :)");
    }
    else if (userOption === 'B' && userOption === 'b') {
        console.log("*Purchase canceled by the user*");
    }

    else {
        console.log("Invalid option");
    }
}