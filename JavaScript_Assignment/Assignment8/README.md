# Assignment 8: Inheritance, Methods and Composition

## EXPERIMENT NO. 8

### 1. Experiment Title:
Inheritance, Methods and Composition in JavaScript.

### 2. Aim:
To understand inheritance, method overriding, the super keyword and object composition in JavaScript.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

Inheritance allows one class to acquire properties and methods from another class.

1. **Inheritance:** Allows a child class to reuse the properties and methods of a parent class.
2. **extends:** Used to create a child class.
3. **super():** Calls the constructor of the parent class.
4. **Method Overriding:** Allows a child class to provide its own implementation of a parent method.
5. **Composition:** Combines smaller objects or functionalities to create a larger object.

### 5. Algorithm / Procedure

**Question 1: Inheritance**

1. Start the program.
2. Create a parent class Animal.
3. Define a speak() method.
4. Create a child class Dog using extends.
5. Create a Dog object.
6. Call the speak() method.

**Question 2: Method Overriding and super**

1. Start the program.
2. Create a parent class Person.
3. Initialize the name using its constructor.
4. Create a child class Student using extends.
5. Use super() to call the parent constructor.
6. Override the introduce() method.
7. Print the introduction.

**Question 3: Composition**

1. Start the program.
2. Create an object containing an engine functionality.
3. Create a car object using the engine object.
4. Define a start() method.
5. Call the start() method.
6. Stop the program.

### 6. Program / Queries / Commands

**Question 1: Inheritance**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 8 - Task 1</title>
</head>
<body>
    <h1>Inheritance</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 8 - Task 1

class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
}

const dog = new Dog();

dog.speak();
```

**Question 2: Method Overriding and super**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 8 - Task 2</title>
</head>
<body>
    <h1>Method Overriding</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 8 - Task 2

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log("I am " + this.name);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log("I am " + this.name + " and I study " + this.course);
    }
}

const student = new Student("Dhruv", "B.Tech CSE");

student.introduce();
```

**Question 3: Composition**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 8 - Task 3</title>
</head>
<body>
    <h1>Object Composition</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 8 - Task 3

const engine = {
    start() {
        console.log("Engine started");
    }
};

const car = {
    engine: engine,

    start() {
        this.engine.start();
        console.log("Car started");
    }
};

car.start();
```

### 7. Input

**Question 1:**
- Object = Dog

**Question 2:**
- Name = Dhruv
- Course = B.Tech CSE

**Question 3:**
- Engine object
- Car object

### 8. Output

**Question 1:**
```text
Animal makes a sound
```

**Question 2:**
```text
I am Dhruv and I study B.Tech CSE
```

**Question 3:**
```text
Engine started
Car started
```

### 9. Result:
All JavaScript programs were successfully executed. I learned inheritance, the extends keyword, super(), method overriding and object composition.