// An simple to do list using DOM (w/o Database)
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("todoDoContainer");
let inputField = document.getElementById("inputField");

// When the button is pressed, add an item to the paragraph
addToDoButton.addEventListener("click", function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    // Display a line in at the concluded item
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through"
    });

    // Remove a list
    paragraph.addEventListener("dbl", function () {
        toDoContainer.removeChild(paragraph);
    });
});