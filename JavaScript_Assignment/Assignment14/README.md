# Assignment 14: Timers and Intervals

## EXPERIMENT NO. 14

### 1. Experiment Title:
Working with Timers and Intervals in JavaScript.

### 2. Aim:
To understand setTimeout(), clearTimeout(), setInterval() and clearInterval() methods in JavaScript.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

JavaScript provides timer functions to execute code after a delay or repeatedly after a fixed interval.

1. **setTimeout():** Executes a function after a specified delay.
2. **clearTimeout():** Cancels a timer created using setTimeout().
3. **setInterval():** Executes a function repeatedly after a specified interval.
4. **clearInterval():** Stops a repeated interval.
5. **Asynchronous Execution:** Timer callbacks execute after the current synchronous code finishes.

### 5. Algorithm / Procedure

**Question 1: setTimeout with Delay 0**

1. Print "Start".
2. Use setTimeout() with a delay of 0.
3. Schedule the message "Timer done".
4. Print "End".
5. Observe the execution order.

**Question 2: Cancel a Timer using clearTimeout()**

1. Create a timer using setTimeout().
2. Set the delay to 1000 milliseconds.
3. Store the timer ID in timerId.
4. Cancel the timer using clearTimeout().
5. Print "Cancelled".

**Question 3: Repeat using setInterval()**

1. Initialize count = 0.
2. Create an interval of 200 milliseconds.
3. Increase count by 1 in every interval.
4. Print the count.
5. When count reaches 3, stop the interval using clearInterval().

### 6. Program / Queries / Commands

**Question 1: setTimeout with Delay 0**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 14 - Task 1</title>
</head>
<body>
    <h1>JavaScript setTimeout</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 14 - Task 1

console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 0);

console.log("End");
```

**Question 2: Cancel a Timer using clearTimeout()**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 14 - Task 2</title>
</head>
<body>
    <h1>JavaScript clearTimeout</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 14 - Task 2

let timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);

console.log("Cancelled");
```

**Question 3: Repeat using setInterval()**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 14 - Task 3</title>
</head>
<body>
    <h1>JavaScript setInterval</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 14 - Task 3

let count = 0;

let intervalId = setInterval(() => {
    count++;

    console.log("Tick", count);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
```

### 7. Input

**Question 1:**
- Delay = 0 milliseconds

**Question 2:**
- Delay = 1000 milliseconds

**Question 3:**
- Interval = 200 milliseconds
- Stop when count = 3

### 8. Output

**Question 1:**
```text
Start
End
Timer done
```

**Question 2:**
```text
Cancelled
```

**Question 3:**
```text
Tick 1
Tick 2
Tick 3
```

### 9. Result:
All three JavaScript programs were successfully executed. I learned how to use setTimeout(), clearTimeout(), setInterval() and clearInterval() to control the execution of code over time.