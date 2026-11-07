// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment 15 - Task 3

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