// Name: Dhruv Saxena
// Roll No: BCS2025626
// Assignment: 7 - Task 2

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

let book = new Book("Algorithms", 320);

console.log(book.summary());