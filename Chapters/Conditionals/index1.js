// Switch case
var clc = require("cli-color");
let day = new Date().getDay();
let monthOnly = new Date().toLocaleString("en-us", { month: "long" });
let almostFullDate = `${monthOnly} ${new Date().getDate()}th, ${new Date().getFullYear()}`;
var obtainDate = [];

function displayBeautyDate() {
    obtainDate.push(
        `The current date is: ${almostFullDate}`
    );

    return obtainDate.join("");
}

console.log(displayBeautyDate());

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log(clc.blue("Friday"));
        break;
    case 6:
        console.log(clc.green("Saturday"));
        break;
    case 7:
        console.log(clc.green("Sunday"));
        break;
    default:
        console.log(clc.red("Unknown day"));
        break;
}