// Name: Dhruv Saxena
// Roll No: BSC2025626
// Assignment: 13 - Task 1

let prices = [120, 45, 300];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log("Total Price:", total);