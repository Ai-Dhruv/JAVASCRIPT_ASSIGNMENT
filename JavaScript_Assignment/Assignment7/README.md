# Assignment 7: Constructor Functions and Classes

## EXPERIMENT NO. 7

### 1. Experiment Title:
Working with Constructor Functions and Classes in JavaScript.

### 2. Aim:
To create objects using constructor functions and ES6 classes, and define methods inside classes.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

JavaScript uses objects to store related data and functionality.

1. **Constructor Function:** A special function used to create multiple objects with similar properties.
2. **this Keyword:** Refers to the current object.
3. **Class:** A template for creating objects.
4. **Constructor Method:** Initializes object properties when an object is created.
5. **Methods:** Functions defined inside a class.

### 5. Algorithm / Procedure

**Question 1: Constructor Function**

1. Start the program.
2. Create a constructor function Student.
3. Initialize name and age using this.
4. Create a student object using new.
5. Print the object properties.

**Question 2: Create a Class**

1. Start the program.
2. Define a class Rectangle.
3. Initialize length and breadth using the constructor.
4. Create an object of Rectangle.
5. Print its properties.

**Question 3: Class with a Method**

1. Start the program.
2. Define a class Rectangle.
3. Create a constructor for length and breadth.
4. Define an area() method.
5. Create an object and call the method.
6. Print the area.

### 6. Program / Queries / Commands

**Question 1: Constructor Function**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 7 - Task 1</title>
</head>
<body>
    <h1>Constructor Function</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 7 - Task 1

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Dhruv", 19);

console.log(student1.name);
console.log(student1.age);
```

**Question 2: Create a Class**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 7 - Task 2</title>
</head>
<body>
    <h1>JavaScript Class</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 7 - Task 2

class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
}

const rect = new Rectangle(10, 5);

console.log(rect.length);
console.log(rect.breadth);
```

**Question 3: Class with a Method**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 7 - Task 3</title>
</head>
<body>
    <h1>Class Method</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 7 - Task 3

class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    area() {
        return this.length * this.breadth;
    }
}

const rect = new Rectangle(10, 5);

console.log(rect.area());
```

### 7. Input

**Question 1:**
- Name = Dhruv
- Age = 19

**Question 2:**
- Length = 10
- Breadth = 5

**Question 3:**
- Length = 10
- Breadth = 5

### 8. Output

**Question 1:**
```text
Dhruv
19
```

**Question 2:**
```text
10
5
```

**Question 3:**
```text
50
```

### 9. Result:
All JavaScript programs were successfully executed. I learned how to create objects using constructor functions and ES6 classes, initialize properties and define methods.