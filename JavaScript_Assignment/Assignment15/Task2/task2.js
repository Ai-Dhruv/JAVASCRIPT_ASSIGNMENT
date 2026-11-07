// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment 15 - Task 2

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        }
        else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .catch((error) => {
        console.log(error.message);
    });