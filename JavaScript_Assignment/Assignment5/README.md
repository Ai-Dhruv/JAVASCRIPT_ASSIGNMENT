# Assignment 5: Arrays, Array Methods and Nested Arrays

## EXPERIMENT NO. 5

### 1. Experiment Title:
Arrays, Array Methods and Nested Arrays in JavaScript.

### 2. Aim:
To create arrays, access their elements, use forEach() and filter() methods, and access values from nested arrays.

### 3. Software / Tools Required:
- Programming Language: JavaScript
- Web Browser: Google Chrome / Microsoft Edge
- Node.js
- IDE: Visual Studio Code

### 4. Theory:

An array is a data structure used to store multiple values in a single variable.

1. **Array:** Stores multiple values using indexed positions starting from 0.
2. **length:** Returns the total number of elements in an array.
3. **forEach():** Executes a function for each array element.
4. **filter():** Creates a new array containing elements that satisfy a condition.
5. **Nested Array:** An array that contains other arrays.

### 5. Algorithm / Procedure

**Question 1: Array Length and First Item**

1. Start the program.
2. Create an array marks containing 72, 85, 64 and 90.
3. Print the array length.
4. Print the first element.
5. Stop the program.

**Question 2: forEach Method**

1. Start the program.
2. Create an array subjects containing Maths, Science and English.
3. Use forEach() to access each subject.
4. Print every subject.
5. Stop the program.

**Question 3: filter Method**

1. Start the program.
2. Create an array marks containing 72, 85, 45 and 90.
3. Use filter() to select marks greater than or equal to 60.
4. Store the result in newMarks.
5. Print newMarks.
6. Stop the program.

**Question 4: Nested Arrays**

1. Start the program.
2. Create a nested array containing [1, 2, 3] and [4, 5, 6].
3. Access the element at index [1][2].
4. Print the result.
5. Stop the program.

### 6. Program / Queries / Commands

**Question 1: Array Length and First Item**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 5 - Task 1</title>
</head>
<body>
    <h1>Array Basics</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 5 - Task 1

let marks = [72, 85, 64, 90];

console.log("Number of items:", marks.length);
console.log("First mark:", marks[0]);
```

**Question 2: forEach Method**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 5 - Task 2</title>
</head>
<body>
    <h1>forEach Method</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 5 - Task 2

let subjects = ["Maths", "Science", "English"];

subjects.forEach(function(subject) {
    console.log(subject);
});
```

**Question 3: filter Method**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 5 - Task 3</title>
</head>
<body>
    <h1>Filter Method</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 5 - Task 3

let marks = [72, 85, 45, 90];

let newMarks = marks.filter(function(mark) {
    return mark >= 60;
});

console.log(newMarks);
```

**Question 4: Nested Arrays**

**task4.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 5 - Task 4</title>
</head>
<body>
    <h1>Nested Arrays</h1>
    <script src="task4.js"></script>
</body>
</html>
```

**task4.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 5 - Task 4

let grid = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(grid[1][2]);
```

### 7. Input

**Question 1:**
- marks = [72, 85, 64, 90]

**Question 2:**
- subjects = ["Maths", "Science", "English"]

**Question 3:**
- marks = [72, 85, 45, 90]
- Condition: mark >= 60

**Question 4:**
- grid = [[1, 2, 3], [4, 5, 6]]

### 8. Output

**Question 1:**
```text
Number of items: 4
First mark: 72
```

**Question 2:**
```text
Maths
Science
English
```

**Question 3:**
```text
[72, 85, 90]
```

**Question 4:**
```text
6
```

### 9. Result:
All four JavaScript programs were successfully executed. I learned how to create arrays, access elements, use forEach() and filter() methods, and work with nested arrays.