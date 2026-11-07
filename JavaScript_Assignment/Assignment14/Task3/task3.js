// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment 14 - Task 3

let count = 0;

let intervalId = setInterval(() => {
    count++;

    console.log("Tick", count);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);