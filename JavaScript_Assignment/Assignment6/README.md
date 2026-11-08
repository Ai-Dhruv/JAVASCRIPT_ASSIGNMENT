# Assignment 6: JSON Text

## EXPERIMENT NO. 6

### 1. Experiment Title:
Working with JSON Text in JavaScript.

### 2. Aim:
To convert JavaScript objects into JSON strings and JSON strings back into JavaScript objects using JSON.stringify() and JSON.parse().

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:
JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data.

1. **JSON.stringify():** Converts a JavaScript object into a JSON string.
2. **JSON.parse():** Converts a JSON string into a JavaScript object.
3. **JSON:** Represents data using key-value pairs and arrays.

### 5. Algorithm / Procedure

**Question 1: Convert Object into JSON String**

1. Start the program.
2. Create a student object with name, age and course.
3. Convert the object into JSON using JSON.stringify().
4. Print the JSON string.

**Question 2: Convert JSON String into Object**

1. Start the program.
2. Create a JSON string containing student details.
3. Convert it into an object using JSON.parse().
4. Print the student's name and age.

**Question 3: JSON with an Array**

1. Start the program.
2. Create a JSON string containing an array of subjects.
3. Parse the JSON string.
4. Print all subjects using forEach().
5. Stop the program.

### 6. Program / Queries / Commands

**Question 1: Convert Object into JSON String**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 6 - Task 1</title>
</head>
<body>
    <h1>JSON Stringify</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 6 - Task 1

const student = {
    name: "Dhruv",
    age: 19,
    course: "B.Tech CSE"
};

const jsonData = JSON.stringify(student);

console.log(jsonData);
```

**Question 2: Convert JSON String into Object**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 6 - Task 2</title>
</head>
<body>
    <h1>JSON Parse</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 6 - Task 2

const jsonData = '{"name":"Dhruv","age":19}';

const student = JSON.parse(jsonData);

console.log(student.name);
console.log(student.age);
```

**Question 3: JSON with an Array**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 6 - Task 3</title>
</head>
<body>
    <h1>JSON Array</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 6 - Task 3

const jsonData = '{"subjects":["Maths","Science","English"]}';

const data = JSON.parse(jsonData);

data.subjects.forEach(function(subject) {
    console.log(subject);
});
```

### 7. Input

**Question 1:**
- Student name = Dhruv
- Age = 19
- Course = B.Tech CSE

**Question 2:**
- JSON string containing name and age.

**Question 3:**
- Subjects = Maths, Science, English

### 8. Output

**Question 1:**
```text
{"name":"Dhruv","age":19,"course":"B.Tech CSE"}
```

**Question 2:**
```text
Dhruv
19
```

**Question 3:**
```text
Maths
Science
English
```

### 9. Result:
All JavaScript programs were successfully executed. I learned how to convert JavaScript objects into JSON strings and JSON strings into JavaScript objects using JSON.stringify() and JSON.parse().