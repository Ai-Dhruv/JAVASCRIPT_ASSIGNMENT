// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 8 - Task 1

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher = new Teacher("Anita", "Maths");

console.log(teacher.greet());