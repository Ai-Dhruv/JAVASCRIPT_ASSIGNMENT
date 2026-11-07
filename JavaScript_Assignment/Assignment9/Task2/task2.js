// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 9 - Task 2

function validateForm(name) {
    let errors = [];

    if (name === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));

console.log(validateForm(""));