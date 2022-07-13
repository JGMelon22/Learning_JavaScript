// Initial counter value
let count = 0;

// Value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {

    btn.addEventListener("click", function (e) {

        const styles = e.currentTarget.classList; // Obtains which button was clicked


        if (styles.contains("decrease")) {
            count--;
        }

        else if (styles.contains("reset")) {
            count = 0;
        }

        else if (styles.contains("increase")) {
            count++;
        }


        value.textContent = count;

        if (value.textContent < 0) {
            document.body.style.color = "red";
        }


        else if (value.textContent > 0) {
            document.body.style.color = "green";
        }

        else if (value.textContent == 0) {
            document.body.style.color = "silver";
        }

    })
});

