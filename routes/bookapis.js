// Import the Express framework
const express = require('express');

// Create a router instance using Express Router
// This allows grouping of route handlers for better organization
const router = express.Router();




// Import the controller which contains the logic for handling book-related operations
const bookController = require('../bookControl/bookController');


// ------------------------ ROUTES ------------------------ //

// GET /books/genre/:genreName
// Route to fetch all books belonging to a specific genre
// Example: /books/genre/Fiction
router.get('/genre/:genreName', bookController.getBooksByGenre);


// GET /books/author/:author
// Route to fetch all books by a specific author
// Example: /books/author/JKRowling
router.get('/author/:author', bookController.getBooksByAuthor);


// GET /books/
// Route to fetch all books in the database
router.get('/', bookController.getAllBook);


// POST /books/create
// Route to create/add a new book entry
// Expects JSON data in the request body (title, author, etc.)
router.post('/create', bookController.createBook);


// GET /books/:id
// Route to fetch a specific book by its ID
// Useful for getting detailed info about one book
router.get('/:id', bookController.getBookById);


// PUT /books/:id
// Route to update a specific book by its ID
// Expects updated book data in JSON format
router.put('/:id', bookController.updateBookById);


// DELETE /books/:id
// Route to delete a specific book by its ID
router.delete('/:id', bookController.deleteBookById);


// -------------------------------------------------------- //

// Export the router so it can be used in the main application (app.js or index.js)
module.exports = router;
