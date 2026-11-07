// Name: Dhruv Saxena
// Roll No: BSC2025626
// Assignment: 13 - Task 2

let marks = [72, 85, 30, 90];

let below40 = marks.some(mark => mark < 40);

let above35 = marks.every(mark => mark >= 35);

console.log("Any mark below 40:", below40);
console.log("All marks are 35 or more:", above35);