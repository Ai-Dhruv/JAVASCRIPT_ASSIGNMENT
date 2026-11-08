# Assignment 12: Callbacks and Higher-Order Functions

## EXPERIMENT NO. 12

### 1. Experiment Title:
Callbacks and Higher-Order Functions in JavaScript.

### 2. Aim:
To write JavaScript programs that pass a function as an argument to another function and execute it.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

In JavaScript, functions are first-class values. They can be passed as arguments to other functions.

1. **Callback:** A function passed as an argument to another function.
2. **Higher-Order Function:** A function that accepts another function as an argument or returns a function.
3. **Function as Argument:** Allows different operations to be performed by passing different functions.

### 5. Algorithm / Procedure

**Question 1: Apply a Function Twice**

1. Define applyTwice(func, value).
2. Call func on the given value.
3. Call func again on the returned result.
4. Define addTen(num) to return num + 10.
5. Call applyTwice(addTen, 5).
6. Print the result.

**Question 2: Format Marks using a Callback**

1. Define formatMarks(marks, callback).
2. Return callback(marks).
3. Call the function with 76.
4. Pass an arrow function to format the marks.
5. Print the result.

**Question 3: Repeat an Action**

1. Define repeatAction(times, action).
2. Create a for loop from 1 to times.
3. Call action(i) in every iteration.
4. Call repeatAction with 3.
5. Print each round.

### 6. Program / Queries / Commands

**Question 1: Apply a Function Twice**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 12 - Task 1</title>
</head>
<body>
    <h1>Apply Function Twice</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 12 - Task 1

function applyTwice(func, value) {
    let result = func(value);
    result = func(result);

    return result;
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));
```

**Question 2: Format Marks using a Callback**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 12 - Task 2</title>
</head>
<body>
    <h1>Format Marks</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
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
```

**Question 3: Repeat an Action**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 12 - Task 3</title>
</head>
<body>
    <h1>Repeat Action</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 12 - Task 3

function repeatAction(times, action) {
    for (let i = 1; i <= times; i++) {
        action(i);
    }
}

repeatAction(3, (round) => {
    console.log("Round " + round);
});
```

### 7. Input

**Question 1:**
- Value = 5
- Function = addTen

**Question 2:**
- Marks = 76

**Question 3:**
- Times = 3

### 8. Output

**Question 1:**
```text
25
```

**Question 2:**
```text
Marks: 76/100
```

**Question 3:**
```text
Round 1
Round 2
Round 3
```

### 9. Result:
All three JavaScript programs were successfully executed. I learned callbacks, higher-order functions and passing functions as arguments.