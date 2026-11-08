# Assignment 15: Promises and async/await with Local Data

## EXPERIMENT NO. 15

### 1. Experiment Title:
Promises and async/await with Local Data in JavaScript.

### 2. Aim:
To create Promises that resolve or reject, use async/await with try and catch, and load local data asynchronously.

### 3. Software / Tools Required:
- JavaScript
- Node.js
- Visual Studio Code
- Web Browser

### 4. Theory:

A Promise represents the eventual completion or failure of an asynchronous operation.

1. **Promise:** Represents a value that may be available in the future.
2. **resolve():** Indicates successful completion of a Promise.
3. **reject():** Indicates failure of a Promise.
4. **then():** Handles the successful result.
5. **catch():** Handles errors or rejected Promises.
6. **async:** Declares an asynchronous function.
7. **await:** Waits for a Promise to settle inside an async function.
8. **try-catch:** Handles errors during asynchronous execution.

### 5. Algorithm / Procedure

**Question 1: Promise that Resolves**

1. Define checkMarks(marks).
2. Return a new Promise.
3. Check whether marks are between 0 and 100.
4. Resolve the Promise if valid.
5. Otherwise reject it.
6. Call checkMarks(80) and print the result using then().

**Question 2: Promise that Rejects**

1. Define checkMarks(marks).
2. Check whether marks are within the valid range.
3. Call checkMarks(120).
4. Handle the rejected Promise using catch().
5. Print the error message.

**Question 3: async/await with try and catch**

1. Define checkMarks(marks).
2. Create an async function run().
3. Use try to await checkMarks(65).
4. Then await checkMarks(-5).
5. Handle the rejected Promise using catch().
6. Print the error message.

**Question 4: Load Local Data as a Promise**

1. Define getUsers().
2. Return a Promise.
3. Use setTimeout() to resolve the Promise after 100 milliseconds.
4. Create an array containing three users.
5. Define an async function showUsers().
6. Use await to get the users.
7. Print each user's name using forEach().

### 6. Program / Queries / Commands

**Question 1: Promise that Resolves**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 15 - Task 1</title>
</head>
<body>
    <h1>Promise Resolve</h1>
    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 15 - Task 1

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        }
        else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(80)
    .then((result) => {
        console.log(result);
    });
```

**Question 2: Promise that Rejects**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 15 - Task 2</title>
</head>
<body>
    <h1>Promise Reject</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 15 - Task 2

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        }
        else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .catch((error) => {
        console.log(error.message);
    });
```

**Question 3: async/await with try and catch**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 15 - Task 3</title>
</head>
<body>
    <h1>Async Await with Try and Catch</h1>
    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 15 - Task 3

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        }
        else {
            reject(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        console.log(await checkMarks(65));

        await checkMarks(-5);
    }
    catch (error) {
        console.log("Caught:", error.message);
    }
}

run();
```

**Question 4: Load Local Data as a Promise**

**task4.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 15 - Task 4</title>
</head>
<body>
    <h1>Local Users Data</h1>
    <script src="task4.js"></script>
</body>
</html>
```

**task4.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 15 - Task 4

function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ];

            resolve(users);
        }, 100);
    });
}

async function showUsers() {
    const users = await getUsers();

    users.forEach((user) => {
        console.log(user.name);
    });
}

showUsers();
```

### 7. Input

**Question 1:**
- marks = 80

**Question 2:**
- marks = 120

**Question 3:**
- marks = 65
- marks = -5

**Question 4:**
- Users = Asha, Rohan and Meera

### 8. Output

**Question 1:**
```text
80
```

**Question 2:**
```text
Marks out of range
```

**Question 3:**
```text
65
Caught: Marks out of range
```

**Question 4:**
```text
Asha
Rohan
Meera
```

### 9. Result:
All four JavaScript programs were successfully executed. I learned how to create and handle Promises, use resolve() and reject(), apply async/await, handle errors using try-catch and load local data asynchronously.