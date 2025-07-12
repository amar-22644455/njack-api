// Import the Express framework to create a web server
const express = require('express');

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests
// This is important because it allows us to access req.body when handling POST/PUT requests
app.use(express.json());


// Define a basic route at the root path
// This will respond with a simple message when accessed via a web browser or a GET request
app.get('/', (req, res) => {
    res.send('Hello This is in web browser');
});


// Import routes related to books from a separate file
// This keeps the route logic modular and organized
const bookRoutes = require('./routes/bookapis');

// Mount the book-related routes under the '/books' path
// Any request starting with '/books' will be handled by bookRoutes (e.g., /books/create, /books/:id)
app.use('/books', bookRoutes);


// Define the port on which the server will run
const PORT = 3000;

// Start the server and listen on the defined port
// The callback function logs a message once the server is successfully running
app.listen(PORT, () => {
    console.log(`console is started on ${PORT}`);
    console.log('Lets get started');
});
