/*
Based on a path where a json file is stored,  
convert it to JS and then display at at a window alert
*/

// JSON sample 
const buttonOne = document.getElementById('btn');
let mockJSON = `
[
    {
        "color": "red",
        "value": "#f00"
    },
    {
        "color": "green",
        "value": "#0f0"
    },
    {
        "color": "blue",
        "value": "#00f"
    },
    {
        "color": "cyan",
        "value": "#0ff"
    },
    {
        "color": "magenta",
        "value": "#f0f"
    },
    {
        "color": "yellow",
        "value": "#ff0"
    },
    {
        "color": "black",
        "value": "#000"
    }
]`

buttonOne.addEventListener("click", function () {
    alert(JSON.parse(mockJSON)) // Quirky AF, I know. Might fix later
    // alert()

})