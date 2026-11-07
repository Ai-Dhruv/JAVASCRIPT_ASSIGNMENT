// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 4 - Task 3

function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));