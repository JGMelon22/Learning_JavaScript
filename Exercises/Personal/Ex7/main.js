// I were hired to develop a simple date and time display page
// As a clever developer, you decided to use DOM and event click
// Develop a simple HTML page with buttons that display date and time
// Tip: use "id" and "innerHTML"
// Store the date and the time into arrays
var currentDate = [`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`];
var currentTime = [`${new Date().getHours()}:${new Date().getMinutes()}`];

let clockButton = document.getElementById("leClock")
let calendarButton = document.getElementById("leCalendar")

// console.log(currentDate.toString());
// console.log(currentTime.toString());

// Call Window Alert
clockButton.addEventListener("click", function () {
    window.alert(`Current time is: ${currentTime}`);
});

calendarButton.addEventListener("click", function () {
    window.alert(`Current date is: ${currentDate.toString()}`);
});

console.log(new Date().getMonth());
console.log(new Date().getDay());