# Assignment 13: Reduce, Some, Every and Map

## EXPERIMENT NO. 13

### 1. Experiment Title:
Working with reduce(), some(), every() and map() Methods in JavaScript.

### 2. Aim:
To use reduce(), some(), every() and map() methods on arrays and understand how these methods work without modifying the original array.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

JavaScript provides several built-in array methods to perform operations on array elements.

1. **reduce():** Combines array elements into a single value.
2. **some():** Returns true if at least one element satisfies a condition.
3. **every():** Returns true only if all elements satisfy a condition.
4. **map():** Creates a new array by applying a function to each element.

### 5. Algorithm / Procedure

**Question 1: Total using reduce()**

1. Create an array prices containing 120, 45 and 300.
2. Use reduce() to calculate the total.
3. Initialize the accumulator with 0.
4. Print the total price.

**Question 2: Check Marks using some() and every()**

1. Create an array marks containing 72, 85, 30 and 90.
2. Use some() to check whether any mark is below 40.
3. Use every() to check whether all marks are 35 or more.
4. Print both results.

**Question 3: Increase Marks using map()**

1. Create an array marks containing 72, 85, 64 and 90.
2. Use map() to increase every mark by 5.
3. Store the new values in newMarks.
4. Print the new array.
5. Print the original array.

### 6. Program / Queries / Commands

**Question 1: Total using reduce()**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 13 - Task 1</title>
</head>
<body>
    <h1>Reduce Method</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 13 - Task 1

let prices = [120, 45, 300];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log("Total Price:", total);
```

**Question 2: Check Marks using some() and every()**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 13 - Task 2</title>
</head>
<body>
    <h1>Some and Every Methods</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 13 - Task 2

let marks = [72, 85, 30, 90];

let below40 = marks.some(mark => mark < 40);

let above35 = marks.every(mark => mark >= 35);

console.log("Any mark below 40:", below40);
console.log("All marks are 35 or more:", above35);
```

**Question 3: Increase Marks using map()**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 13 - Task 3</title>
</head>
<body>
    <h1>Map Method</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 13 - Task 3

let marks = [72, 85, 64, 90];

let newMarks = marks.map(mark => mark + 5);

console.log("New Marks:", newMarks);

console.log("Original Marks:", marks);
```

### 7. Input

**Question 1:**
- prices = [120, 45, 300]

**Question 2:**
- marks = [72, 85, 30, 90]

**Question 3:**
- marks = [72, 85, 64, 90]
- Increase = 5

### 8. Output

**Question 1:**
```text
Total Price: 465
```

**Question 2:**
```text
Any mark below 40: true
All marks are 35 or more: false
```

**Question 3:**
```text
New Marks: [ 77, 90, 69, 95 ]
Original Marks: [ 72, 85, 64, 90 ]
```

### 9. Result:
All three JavaScript programs were successfully executed. I learned how to use reduce(), some(), every() and map() methods to perform operations on arrays.