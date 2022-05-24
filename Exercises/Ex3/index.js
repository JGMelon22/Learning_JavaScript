// Imagine you want to call 3 friends to a party, whoever,
// They only understand you by JS functions;
// Call them all!
const friendOne = "Intel";
const friendTwo = "AMD";
const friendThree = "Nvidia";

// String Builder sort off
var invitationBody = [];
invitationBody.push(
    "Hello, ",
    `${friendOne}, `,
    `${friendTwo}, `,
    `and ${friendThree}! `,
    "As you may knowledge, ",
    "tomorrow we will have, ",
    "a party at my house ",
    "at 6pm. ",
    "Looking forward for our meeting\n",
    "Cordially: JG"
);

// Function to call the friends
function callTheHomies() {
    return invitationBody.join("");
}

console.log(callTheHomies());