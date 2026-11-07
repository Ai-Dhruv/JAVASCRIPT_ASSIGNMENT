// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 12 - Task 1

function applyTwice(func, value) {
    let result = func(value);
    result = func(result);

    return result;
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));