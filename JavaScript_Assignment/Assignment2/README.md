# Assignment 2: Operators, Type Conversion and a Calculator

## EXPERIMENT NO. 2

### 1. Experiment Title:
Operators, Type Conversion and a Calculator in JavaScript.

### 2. Aim:
To use arithmetic operators, convert between text and numbers, and use if and else if statements to choose an operation.

### 3. Software / Tools Required:
- Programming Language: JavaScript
- IDE: Visual Studio Code
- Runtime Environment: Node.js
- Operating System: Windows
- Terminal / Command Prompt

### 4. Theory:

JavaScript provides different operators to perform mathematical calculations and manipulate values.

**Key Concepts:**

1. **Arithmetic Operators:** Used to perform mathematical operations.
   - `+` Addition
   - `-` Subtraction
   - `*` Multiplication
   - `/` Division

2. **Type Conversion:** Converts one data type into another.
   - `Number()` converts a value into a number.
   - `String()` converts a value into a string.

3. **Conditional Statements:** `if` and `else if` are used to execute different blocks of code depending on conditions.

4. **String Concatenation:** The `+` operator joins two strings together.

### 5. Algorithm / Procedure

**Question 1: Arithmetic Operators**

1. Start the program.
2. Declare two variables with values 17 and 5.
3. Calculate their sum using the addition operator.
4. Calculate their difference using the subtraction operator.
5. Calculate their product using the multiplication operator.
6. Calculate their quotient using the division operator.
7. Print all four results on separate lines.

**Question 2: Type Conversion**

1. Start the program.
2. Declare a variable containing the text "12".
3. Convert the text into a number using Number().
4. Add 5 to the converted number.
5. Print the result.
6. Convert the number 7 into text using String().
7. Join it with the text "3".
8. Print the final result.

**Question 3: Calculator using if and else if**

1. Start the program.
2. Declare two numbers 8 and 4.
3. Declare an operator with the value "+".
4. Use if and else if to check the operator.
5. Print the sum when the operator is "+".
6. Change the operator to "-".
7. Repeat the condition check.
8. Print the difference.

### 6. Program / Queries / Commands

**Question 1: Arithmetic Operators**

**task1.js**

```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 2 - Task 1

let a = 17;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

**Question 2: Type Conversion**

**task2.js**

```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 2 - Task 2

let num = "12";

let result = Number(num) + 5;
console.log(result);

let text = String(7) + "3";
console.log(text);
```

**Question 3: Calculator using if and else if**

**task3.js**

```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 2 - Task 3

let a = 8;
let b = 4;
let operator = "+";

if (operator == "+") {
    console.log(a + b);
}
else if (operator == "-") {
    console.log(a - b);
}

operator = "-";

if (operator == "+") {
    console.log(a + b);
}
else if (operator == "-") {
    console.log(a - b);
}
```

### 7. Input

**Question 1:**
- First Number = 17
- Second Number = 5

**Question 2:**
- Text = "12"
- Number = 5
- Number = 7
- Text = "3"

**Question 3:**
- First Number = 8
- Second Number = 4
- Operator = "+"
- Changed Operator = "-"

### 8. Output

**Question 1:**
```text
22
12
85
3.4
```

**Question 2:**
```text
17
73
```

**Question 3:**
```text
12
4
```

### 9. Result:

All three JavaScript programs were successfully executed. I learned how to perform arithmetic operations, convert values between strings and numbers, and use if and else if conditional statements to create a simple calculator.

**Submitted By:**
- Name: Dhruv Saxena
- Roll No.: BCS2025626
- Course: B.Tech CSE
- University: Invertis University, Bareilly