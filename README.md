# 📚 Book Management REST API

This is a simple Node.js + Express API for managing books in a library system. It uses **JavaScript `Map`** as an in-memory database—no external DB is required.

---

## 🚀 How to Start

1. Install dependencies:
   
   npm install
   

2. Start the server:
   
   node app.js


---

## 📌 Base URL

```
http://localhost:3000/
```

---

## 🛠️ API Endpoints

### 📖 Get All Books
**GET** `/books`

Returns all books in the system.

**Response Example:**
```json
[
  {
    "bookId": 1,
    "title": "Book Title",
    "authorName": "Author",
    "publishedYear": 2022,
    "availableCopies": 5,
    "totalCopies": 5,
    "genreCategory": "Fiction",
    "ageCategory": "Adult",
    "description": ""
  }
]
```

---

### ➕ Create a New Book
**POST** `/books/create`

**Request Body:**
```json
{
  "title": "Book Title",
  "authorName": "Author",
  "publishedYear": 2022,
  "availableCopies": 5,
  "totalCopies": 5,
  "genreCategory": "Fiction",
  "ageCategory": "Adult"
}
```

**Response:**
```json
{
  "bookId": 1,
  "title": "Book Title",
  "authorName": "Author",
  "publishedYear": 2022,
  "availableCopies": 5,
  "totalCopies": 5,
  "genreCategory": "Fiction",
  "ageCategory": "Adult",
  "description": ""
}
```

---

### 🔍 Get Book by ID
**GET** `/books/:id`

Returns book details by ID.

**Example:** `/books/1`

---

### 🎯 Get Books by Genre
**GET** `/books/genre/:genreName`

Returns books matching the given genre (case-insensitive).

**Example:** `/books/genre/fiction`

---

### ✍️ Get Books by Author
**GET** `/books/author/:author`

Returns books written by the given author (case-insensitive).

**Example:** `/books/author/JKRowling`

---

### ✏️ Update Book by ID
**PUT** `/books/:id`

Update one or more fields of a book.

**Request Body (partial or full):**
```json
{
  "title": "Updated Title",
  "availableCopies": 4
}
```

**Response:**
```json
{
  "message": "Book with ID 1 has been updated.",
  "updatedBook": {
    "bookId": 1,
    "title": "Updated Title",
    ...
  }
}
```

---

### ❌ Delete Book by ID
**DELETE** `/books/:id`

Deletes the book with the given ID.

**Response:**
```json
{ "message": "Book with ID: 1 is deleted" }
```

---

## 🧠 Notes

- The system does **not** persist data across server restarts since it uses in-memory storage.
- IDs are auto-incremented starting from 1.
- All endpoints return JSON responses.

---

## 🏗️ Project Structure

```
project-folder/
│
├── model/
│   └── book.js            # Book class and bookDatabase (Map)
│
├── routes/
│   └── bookapis.js        # All book-related route definitions
│
├── bookControl/
│   └── bookController.js  # Route logic
│
├── app.js               # Main server entry point
├── README.md              # API Documentation
└── package.json
```

---
