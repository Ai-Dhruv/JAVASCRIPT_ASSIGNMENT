# Assignment 4: Writing Functions

## EXPERIMENT NO. 4

### 1. Experiment Title:
Writing Functions in JavaScript.

### 2. Aim:
To write JavaScript programs using a function with a return value, an arrow function and a function with a default parameter.

### 3. Software / Tools Required:
- Programming Language: JavaScript
- Web Browser: Google Chrome / Microsoft Edge
- Node.js
- IDE: Visual Studio Code

### 4. Theory:

A function is a reusable block of code that performs a specific task.

1. **Function:** A block of code that can accept parameters and return a value.
2. **Return Statement:** Used to return a value from a function.
3. **Arrow Function:** A shorter way to define functions using the `=>` symbol.
4. **Default Parameter:** Provides a default value when no argument is passed.

### 5. Algorithm / Procedure

**Question 1: Function with Return Value**

1. Start the program.
2. Define a function greet(name).
3. Return "Hello, " joined with the name.
4. Call the function with "Asha".
5. Print the returned value.
6. Stop the program.

**Question 2: Arrow Function**

1. Start the program.
2. Define an arrow function named square.
3. Pass a number as an argument.
4. Return the square of the number.
5. Call square(6).
6. Print the result.

**Question 3: Default Parameter**

1. Start the program.
2. Define billWithTax(amount, taxRate = 0.18).
3. Calculate the amount including tax.
4. Call the function with 100.
5. Print the result.
6. Stop the program.

### 6. Program / Queries / Commands

**Question 1: Function with Return Value**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 4 - Task 1</title>
</head>
<body>
    <h1>Greet Function</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 4 - Task 1

function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Asha"));
```

**Question 2: Arrow Function**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 4 - Task 2</title>
</head>
<body>
    <h1>Arrow Function</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 4 - Task 2

const square = (num) => {
    return num * num;
};

console.log(square(6));
```

**Question 3: Default Parameter**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 4 - Task 3</title>
</head>
<body>
    <h1>Default Parameter</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 4 - Task 3

function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));
```

### 7. Input

**Question 1:**
- name = "Asha"

**Question 2:**
- num = 6

**Question 3:**
- amount = 100
- taxRate = 0.18 (default)

### 8. Output

**Question 1:**
```text
Hello, Asha
```

**Question 2:**
```text
36
```

**Question 3:**
```text
118
```

### 9. Result:
All three JavaScript programs were successfully executed. I learned how to create functions, use return statements, write arrow functions and apply default parameters.