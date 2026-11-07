// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 12 - Task 2

function formatMarks(marks, callback) {
    return callback(marks);
}

let result = formatMarks(76, (marks) => {
    return "Marks: " + marks + "/100";
});

console.log(result);