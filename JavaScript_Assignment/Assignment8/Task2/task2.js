// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 8 - Task 2

class Locker {
    constructor() {
        this.pin = 1234;
    }

    checkPin(number) {
        if (number === this.pin) {
            return true;
        }
        else {
            return false;
        }
    }
}

let locker = new Locker();

console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));