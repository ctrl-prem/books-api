// /models/Book.js

const mongoose = require('mongoose');

// Define the Book schema
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true, required: true },
    publishedDate: { type: Date }
});

module.exports = mongoose.model('Book', BookSchema); // Export the Book model
