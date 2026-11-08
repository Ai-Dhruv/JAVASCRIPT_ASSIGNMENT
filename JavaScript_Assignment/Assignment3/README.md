# Assignment 3: Conditions and Loops

## EXPERIMENT NO. 3

### 1. Experiment Title:
Conditions and Loops in JavaScript.

### 2. Aim:
To write JavaScript programs to choose a grade using an else-if ladder, print numbers using a for loop, and add numbers using a while loop.

### 3. Software / Tools Required:
- Programming Language: JavaScript
- Web Browser: Google Chrome / Microsoft Edge
- Node.js
- IDE: Visual Studio Code

### 4. Theory:

Conditions and loops control the flow of a JavaScript program.

1. **if-else:** Used to execute code based on conditions.
2. **else-if Ladder:** Used to check multiple conditions.
3. **for Loop:** Repeats code a fixed number of times.
4. **while Loop:** Repeats code as long as a condition is true.

### 5. Algorithm / Procedure

**Question 1: Find Grade using Else-If Ladder**

1. Start the program.
2. Store 72 in marks.
3. If marks are greater than or equal to 75, print Grade A.
4. Else if marks are greater than or equal to 60, print Grade B.
5. Otherwise, print Grade C.
6. Stop the program.

**Question 2: Print Numbers using for Loop**

1. Start the program.
2. Initialize i = 1.
3. Repeat the loop while i is less than or equal to 5.
4. Print i.
5. Increase i by 1.
6. Stop the program.

**Question 3: Add Numbers using while Loop**

1. Start the program.
2. Initialize total = 0 and i = 1.
3. Repeat while total is less than or equal to 20.
4. Add i to total.
5. Increase i by 1.
6. Print total.
7. Stop the program.

### 6. Program / Queries / Commands

**Question 1: Find Grade using Else-If Ladder**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 3 - Task 1</title>
</head>
<body>
    <h1>Grade Checking</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 3 - Task 1

let marks = 72;

if (marks >= 75) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}
```

**Question 2: Print Numbers using for Loop**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 3 - Task 2</title>
</head>
<body>
    <h1>For Loop</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 3 - Task 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Question 3: Add Numbers using while Loop**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 3 - Task 3</title>
</head>
<body>
    <h1>While Loop</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 3 - Task 3

let total = 0;
let i = 1;

while (total <= 20) {
    total = total + i;
    i++;
}

console.log(total);
```

### 7. Input

**Question 1:**
- marks = 72

**Question 2:**
- Numbers from 1 to 5

**Question 3:**
- Initial total = 0
- Initial i = 1
- Limit = 20

### 8. Output

**Question 1:**
```text
Grade B
```

**Question 2:**
```text
1
2
3
4
5
```

**Question 3:**
```text
21
```

### 9. Result:
All three JavaScript programs were successfully executed. I learned how to use if-else conditions, else-if ladder, for loop and while loop in JavaScript.