// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 11 - Task 2

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());