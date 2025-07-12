// Import the Book class, the in-memory database, and ID generator function
const { Book, bookDatabase, getNextId } = require('../model/book');


// --------------------- GET ALL BOOKS ---------------------
exports.getAllBook = (req, res) => {
    // Convert the Map values (Book objects) to an array
    const allbooks = Array.from(bookDatabase.values());
    // Return the array of books as a JSON response
    res.json(allbooks);
};


// --------------------- CREATE A NEW BOOK ---------------------
exports.createBook = (req, res) => {
    console.log("request arrived");

    // Destructure the request body to extract book details
    const {
        title,
        authorName,
        publishedYear,
        availableCopies,
        totalCopies,
        genreCategory,
        ageCategory
    } = req.body;

    // Generate a new unique book ID
    const bookId = getNextId();

    // Create a new Book instance using the extracted data
    const newBook = new Book(
        bookId,
        title,
        authorName,
        publishedYear,
        availableCopies,
        totalCopies,
        genreCategory,
        ageCategory
    );

    // Store the new book in the in-memory Map database
    bookDatabase.set(bookId, newBook);

    // Return the newly created book as a response
    res.json(newBook);
    console.log('request end');
};


// --------------------- GET A BOOK BY ID ---------------------
exports.getBookById = (req, res) => {
    const requestedBookId = parseInt(req.params.id);

    // Check if ID is a valid integer
    if (isNaN(requestedBookId)) {
        return res.status(400).json({ message: "Invalid Book Id Format! Give integer ID" });
    }

    // Check if book exists
    if (!bookDatabase.has(requestedBookId)) {
        return res.status(404).json({ message: "Book with given ID is not found in our database!" });
    }

    // Fetch and return the book
    const requestedBook = bookDatabase.get(requestedBookId);
    res.json(requestedBook);
};


// --------------------- GET BOOKS BY GENRE ---------------------
exports.getBooksByGenre = (req, res) => {
    const requestedGenre = req.params.genreName.toLowerCase();

    // Get all books and filter them by matching genre (case-insensitive)
    const allBooks = Array.from(bookDatabase.values());
    const requestedBook = allBooks.filter(book => book.genreCategory.toLowerCase() === requestedGenre);

    // Return error if no books found
    if (requestedBook.length === 0) {
        return res.status(404).json({ message: "No books found from requested genre category!" });
    }

    // Return matched books
    res.json(requestedBook);
};


// --------------------- GET BOOKS BY AUTHOR ---------------------
exports.getBooksByAuthor = (req, res) => {
    const requestedAuthorBook = req.params.author.toLowerCase();

    // Get all books and filter them by matching author name (case-insensitive)
    const allBooks = Array.from(bookDatabase.values());
    const requestedBook = allBooks.filter(book => book.authorName.toLowerCase() === requestedAuthorBook);

    // Return error if no books found
    if (requestedBook.length === 0) {
        return res.status(404).json({ message: "No books found by requested Author!" });
    }

    // Return matched books
    res.json(requestedBook);
};


// --------------------- DELETE BOOK BY ID ---------------------
exports.deleteBookById = (req, res) => {
    const requestedBookId = parseInt(req.params.id);

    // Check if ID is valid
    if (isNaN(requestedBookId)) {
        return res.status(400).json({ message: "Invalid Book Id Format! Give integer ID" });
    }

    // Check if the book exists in the database
    if (!bookDatabase.has(requestedBookId)) {
        return res.status(404).json({ message: "Book with given ID is not found in our database!" });
    }

    // Delete the book from the Map
    bookDatabase.delete(requestedBookId);

    // Send success message
    res.json({ message: `Book with ID: ${requestedBookId} is deleted` });
};


// --------------------- UPDATE BOOK BY ID ---------------------
exports.updateBookById = (req, res) => {
    const bookId = parseInt(req.params.id);

    // Check for valid book ID
    if (isNaN(bookId)) {
        return res.status(400).json({ message: "Invalid book ID format." });
    }

    // Verify book exists
    if (!bookDatabase.has(bookId)) {
        return res.status(404).json({ message: `Book with ID ${bookId} not found.` });
    }

    // Retrieve the existing book
    const book = bookDatabase.get(bookId);

    // Destructure fields from the request body
    const {
        title,
        authorName,
        publishedYear,
        availableCopies,
        totalCopies,
        genreCategory,
        ageCategory,
        description
    } = req.body;

    // Conditionally update fields only if they are provided in the request
    if (title !== undefined) book.title = title;
    if (authorName !== undefined) book.authorName = authorName;
    if (publishedYear !== undefined) book.publishedYear = publishedYear;
    if (availableCopies !== undefined) book.availableCopies = availableCopies;
    if (totalCopies !== undefined) book.totalCopies = totalCopies;
    if (genreCategory !== undefined) book.genreCategory = genreCategory;
    if (ageCategory !== undefined) book.ageCategory = ageCategory;
    if (description !== undefined) book.description = description;

    // Respond with updated book
    res.status(200).json({
        message: `Book with ID ${bookId} has been updated.`,
        updatedBook: book
    });
};
