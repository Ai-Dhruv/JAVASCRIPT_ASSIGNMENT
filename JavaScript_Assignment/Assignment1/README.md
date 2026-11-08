# Assignment 1: Your First JavaScript Script

## EXPERIMENT NO. 1

### 1. Experiment Title:
Your First JavaScript Script, Variables and Data Types in JavaScript.

### 2. Aim:
To write JavaScript programs to print text with `console.log()`, run a script in the browser and with Node.js, declare variables with `const` and `let`, and find the type of values using `typeof`.

### 3. Software / Tools Required:
- Programming Language: JavaScript
- Web Browser: Google Chrome / Microsoft Edge
- Node.js
- IDE: Visual Studio Code

### 4. Theory:

JavaScript is a high-level, interpreted programming language used to make web pages interactive.

The following concepts are used in this experiment:

1. **console.log():** Prints output in the browser console or terminal.
2. **Script Tag:** Used to connect JavaScript files with HTML.
3. **const:** Declares a variable whose value cannot be reassigned.
4. **let:** Declares a variable whose value can be changed.
5. **typeof:** Returns the data type of a value.

### 5. Algorithm / Procedure

**Question 1: Print Text in Browser Console**

1. Start the program.
2. Create an HTML page.
3. Add a heading to the page.
4. Connect the JavaScript file using the script tag.
5. Print "Hello from the script" using console.log().
6. Open the page in a browser and check the console.

**Question 2: Variables with const and let**

1. Start the program.
2. Declare schoolName using const.
3. Assign "Sample College" to schoolName.
4. Declare year using let.
5. Assign 2026 to year.
6. Print both variables.

**Question 3: Data Types using typeof**

1. Start the program.
2. Print typeof "hello".
3. Print typeof 7.
4. Print typeof true.
5. Observe the output.

### 6. Program / Queries / Commands

**Question 1: Print Text in Browser Console**

**task1.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 1 - Task 1</title>
</head>
<body>
    <h1>My First JavaScript Script</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**

```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 1 - Task 1

console.log("Hello from the script");
```

**Question 2: Variables with const and let**

**task2.js**

```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 1 - Task 2

const schoolName = "Sample College";
let year = 2026;

console.log(schoolName);
console.log(year);
```

**Question 3: Data Types using typeof**

**task3.js**

```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 1 - Task 3

console.log(typeof "hello");
console.log(typeof 7);
console.log(typeof true);
```

### 7. Input

**Question 1:** No input required.

**Question 2:**
- schoolName = "Sample College"
- year = 2026

**Question 3:**
- "hello"
- 7
- true

### 8. Output

**Question 1:**
```text
Hello from the script
```

**Question 2:**
```text
Sample College
2026
```

**Question 3:**
```text
string
number
boolean
```

### 9. Result:

All three JavaScript programs were successfully executed. I learned how to use console.log(), connect JavaScript with HTML, declare variables using const and let, and identify data types using the typeof operator.