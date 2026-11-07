// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment 15 - Task 4

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