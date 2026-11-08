# Assignment 9: DOM, Validation, Storage and Quiz

## EXPERIMENT NO. 9

### 1. Experiment Title:
DOM, Validation, Storage and Quiz in JavaScript.

### 2. Aim:
To change webpage text on a click, validate form values, save text using localStorage and create a simple quiz.

### 3. Software / Tools Required:
- JavaScript
- HTML5
- CSS3
- Node.js
- Visual Studio Code
- Google Chrome / Microsoft Edge

### 4. Theory:

1. **DOM:** Document Object Model represents an HTML page as objects.
2. **getElementById():** Selects an HTML element using its ID.
3. **Events:** addEventListener() handles events such as button clicks.
4. **Validation:** Checks whether the entered data is valid.
5. **localStorage:** Stores data in the browser even after closing the page.
6. **querySelector():** Selects an HTML element using a CSS selector.

### 5. Algorithm / Procedure

**Question 1: Change Text on Button Click**

1. Create a heading and a button in HTML.
2. Select both elements using getElementById().
3. Add a click event listener.
4. Change heading text to "Button clicked".
5. Stop the program.

**Question 2: Validate a Form Value**

1. Define validateForm(name).
2. Create an empty errors array.
3. Check whether name is empty.
4. If empty, add "Name is required".
5. Return the errors array.
6. Test with Asha and an empty string.

**Question 3: Save a Note in localStorage**

1. Create an input field and Save button.
2. Read the previously saved note from localStorage.
3. Display the saved note in the input field.
4. On button click, save the entered text using setItem().
5. Display a success alert.

**Question 4: Simple Quiz**

1. Create a question with three radio button options.
2. Create a Check answer button.
3. Select the chosen option using querySelector().
4. Check whether the selected answer is 5.
5. Display Correct or Try again.

### 6. Program / Queries / Commands

**Question 1: Change Text on Button Click**

**task1.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 9 - Task 1</title>
</head>
<body>
    <h1 id="heading">Welcome</h1>
    <button id="changeBtn">Change text</button>

    <script src="task1.js"></script>
</body>
</html>
```

**task1.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 9 - Task 1

let heading = document.getElementById("heading");
let button = document.getElementById("changeBtn");

button.addEventListener("click", function() {
    heading.textContent = "Button clicked";
});
```

**Question 2: Validate a Form Value**

**task2.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 9 - Task 2</title>
</head>
<body>
    <h1>Form Validation</h1>
    <script src="task2.js"></script>
</body>
</html>
```

**task2.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 9 - Task 2

function validateForm(name) {
    let errors = [];

    if (name === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
```

**Question 3: Save a Note in localStorage**

**task3.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 9 - Task 3</title>
</head>
<body>
    <h1>Local Storage</h1>

    <input type="text" id="note" placeholder="Enter your note">
    <button id="saveBtn">Save</button>

    <script src="task3.js"></script>
</body>
</html>
```

**task3.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 9 - Task 3

let note = document.getElementById("note");
let button = document.getElementById("saveBtn");

note.value = localStorage.getItem("note") || "";

button.addEventListener("click", function() {
    localStorage.setItem("note", note.value);

    alert("Note Saved Successfully");
});
```

**Question 4: Simple Quiz**

**task4.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Assignment 9 - Task 4</title>
</head>
<body>
    <h1>Simple Quiz</h1>

    <p>What is 2 + 3?</p>

    <input type="radio" name="answer" value="4"> 4
    <br>
    <input type="radio" name="answer" value="5"> 5
    <br>
    <input type="radio" name="answer" value="6"> 6
    <br><br>

    <button id="checkBtn">Check answer</button>

    <p id="result"></p>

    <script src="task4.js"></script>
</body>
</html>
```

**task4.js**
```javascript
// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 9 - Task 4

let button = document.getElementById("checkBtn");
let result = document.getElementById("result");

button.addEventListener("click", function() {
    let selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (selected && selected.value === "5") {
        result.textContent = "Correct";
    }
    else {
        result.textContent = "Try again";
    }
});
```

### 7. Input

**Question 1:**
- Heading = Welcome

**Question 2:**
- Name = Asha
- Name = Empty string

**Question 3:**
- Note entered by the user

**Question 4:**
- Question = 2 + 3
- Options = 4, 5, 6

### 8. Output

**Question 1:**
```text
Button clicked
```

**Question 2:**
```text
[]
["Name is required"]
```

**Question 3:**
```text
Note Saved Successfully
```

**Question 4:**
```text
Correct
```

### 9. Result:
All four JavaScript programs were successfully executed. I learned DOM manipulation, event handling, form validation, localStorage and creating an interactive quiz.