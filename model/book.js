// Define a Book class to represent the structure of a book object
class Book {
    constructor (
        bookId,             // Unique identifier for the book
        title,              // Title of the book
        authorName,         // Author's name
        publishedYear,      // Year the book was published
        availableCopies,    // Number of copies currently available
        totalCopies,        // Total number of copies owned by the library
        genreCategory,      // Genre (e.g., Fiction, Non-fiction, Sci-fi, etc.)
        ageCategory         // Target age group (e.g., Adult, Kids, Teen, etc.)
    ) {
        this.bookId = bookId;
        this.title = title;
        this.authorName = authorName;
        this.publishedYear = publishedYear;
        this.availableCopies = availableCopies;
        this.totalCopies = totalCopies;
        this.genreCategory = genreCategory;
        this.ageCategory = ageCategory;

        // Optional description, can be added or updated later
        this.description = "";
    }
}

// Use a Map as an in-memory database to store books
// Key: bookId, Value: Book instance
const bookDatabase = new Map();

// ID counter to generate unique book IDs
let currentId = 1;

// Helper function to get the next unique ID for a new book
function getNextId() {
    return currentId++;
}

// Export the class and storage/database so other files (e.g., controllers) can access them
module.exports = {
    Book,
    bookDatabase,
    getNextId
};
