// Ask for the user age and greats him with his age
// Use DOM for it
var userAge = prompt("Please, inform your age:");

if (userAge < 18 && userAge >= 0) {
    alert("Minor");
}

else if (userAge >= 18 && userAge <= 100) {
    alert("Welcome!");
}

else {
    alert("You are a vampire. Get out!");
}

// alert(`Hello, user! Your age is: ${userAge}`);