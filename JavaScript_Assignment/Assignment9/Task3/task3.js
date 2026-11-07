// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 9 - Task 3

let note = document.getElementById("note");

let button = document.getElementById("saveBtn");

// Show saved text when page opens
note.value = localStorage.getItem("note") || "";

button.addEventListener("click", function() {
    localStorage.setItem("note", note.value);

    alert("Note Saved Successfully");
});