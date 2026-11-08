# Assignment 11: Scope and Closures

## EXPERIMENT NO. 11

### 1. Experiment Title:
Scope and Closures in JavaScript.

### 2. Aim:
To understand block scope, closures and global variables in JavaScript.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

Scope determines where variables can be accessed in a program.

1. **Block Scope:** Variables declared with let and const inside a block are accessible only within that block.
2. **Closure:** A function remembers variables from its outer scope even after the outer function has finished execution.
3. **Global Scope:** Variables declared outside functions and blocks can be accessed throughout the program.
4. **Local Scope:** Variables declared inside a function are accessible within that function.

### 5. Algorithm / Procedure

**Question 1: Block Scope**

1. Declare a variable level with value "outer".
2. Create a block.
3. Declare another level variable with value "inner".
4. Print the inner variable inside the block.
5. Print the outer variable outside the block.

**Question 2: Closure Counter**

1. Create a function makeCounter().
2. Declare count = 0 inside it.
3. Return an inner function.
4. Increase count by 1 whenever the inner function is called.
5. Create a counter and call it twice.
6. Print both results.

**Question 3: Global Variable inside a Function**

1. Declare a global variable school.
2. Define a function showSchool().
3. Access the global variable inside the function.
4. Print the message.
5. Call the function.

### 6. Program / Queries / Commands

**Question 1: Block Scope**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 11 - Task 1</title>
</head>
<body>
    <h1>Block Scope</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 11 - Task 1

let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);
```

**Question 2: Closure Counter**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 11 - Task 2</title>
</head>
<body>
    <h1>Closure Counter</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 11 - Task 2

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
```

**Question 3: Global Variable inside a Function**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 11 - Task 3</title>
</head>
<body>
    <h1>Global Scope</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 11 - Task 3

let school = "Sample College";

function showSchool() {
    console.log("Welcome to " + school);
}

showSchool();
```

### 7. Input

**Question 1:**
- Outer level = outer
- Inner level = inner

**Question 2:**
- Initial count = 0

**Question 3:**
- school = Sample College

### 8. Output

**Question 1:**
```text
inner
outer
```

**Question 2:**
```text
1
2
```

**Question 3:**
```text
Welcome to Sample College
```

### 9. Result:
All three JavaScript programs were successfully executed. I learned block scope, closures and how global variables can be accessed inside functions.