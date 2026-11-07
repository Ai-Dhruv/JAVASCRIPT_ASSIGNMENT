// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 6 - Task 3

let jsonText = '{name: Rohan}';

try {
    let student = JSON.parse(jsonText);

    console.log(student);
}
catch (error) {
    console.log("Invalid JSON");
}