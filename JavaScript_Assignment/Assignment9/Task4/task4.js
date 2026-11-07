// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 9 - Task 4

let button = document.getElementById("checkBtn");

let result = document.getElementById("result");

button.addEventListener("click", function() {

    let selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (selected && selected.value === "5") {
        result.textContent = "Correct";
    } 
    else {
        result.textContent = "Try again";
    }

});