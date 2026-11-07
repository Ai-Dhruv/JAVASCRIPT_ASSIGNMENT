// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment 14 - Task 2

let timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);

console.log("Cancelled");