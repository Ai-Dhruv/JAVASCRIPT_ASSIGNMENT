# Assignment 10: Objects and Destructuring

## EXPERIMENT NO. 10

### 1. Experiment Title:
Objects and Destructuring in JavaScript.

### 2. Aim:
To create JavaScript objects, read and modify their properties, and use array and object destructuring.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

Objects store related data in key-value pairs.

1. **Object:** Stores data as properties and values.
2. **Dot Notation:** Used to access object properties, such as student.name.
3. **Array Destructuring:** Extracts values from an array using square brackets.
4. **Object Destructuring:** Extracts properties from an object using curly brackets.

### 5. Algorithm / Procedure

**Question 1: Create and Change an Object**

1. Create a student object.
2. Store name, roll and marks.
3. Print the student's name.
4. Update marks from 78 to 81.
5. Print the updated marks.

**Question 2: Array Destructuring**

1. Create an array of subjects.
2. Use array destructuring to extract the first two subjects.
3. Print both subjects.

**Question 3: Object Destructuring**

1. Create a student object.
2. Extract name and roll using object destructuring.
3. Print both values.

### 6. Program / Queries / Commands

**Question 1: Create and Change an Object**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 10 - Task 1</title>
</head>
<body>
    <h1>Objects</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 10 - Task 1

let student = {
    name: "Rohan",
    roll: 12,
    marks: 78
};

console.log("Student Name:", student.name);

student.marks = 81;

console.log("Updated Marks:", student.marks);
```

**Question 2: Array Destructuring**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 10 - Task 2</title>
</head>
<body>
    <h1>Array Destructuring</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 10 - Task 2

let subjects = ["Maths", "Science", "English"];

let [first, second] = subjects;

console.log("First Subject:", first);
console.log("Second Subject:", second);
```

**Question 3: Object Destructuring**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 10 - Task 3</title>
</head>
<body>
    <h1>Object Destructuring</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 10 - Task 3

let student = {
    name: "Rohan",
    roll: 12,
    marks: 81
};

let { name, roll } = student;

console.log("Student Name:", name);
console.log("Roll Number:", roll);
```

### 7. Input

**Question 1:**
- name = Rohan
- roll = 12
- marks = 78, updated to 81

**Question 2:**
- subjects = Maths, Science, English

**Question 3:**
- name = Rohan
- roll = 12

### 8. Output

**Question 1:**
```text
Student Name: Rohan
Updated Marks: 81
```

**Question 2:**
```text
First Subject: Maths
Second Subject: Science
```

**Question 3:**
```text
Student Name: Rohan
Roll Number: 12
```

### 9. Result:
All three JavaScript programs were successfully executed. I learned how to create objects, access and update properties, and use array and object destructuring.