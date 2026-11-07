// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 7 - Task 3

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function() {
    if (this.marks >= 40) {
        return "Pass";
    }
    else {
        return "Fail";
    }
};

let student = new Student("Asha", 88);

console.log(student.result());