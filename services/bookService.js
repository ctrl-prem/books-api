// bookService.js

const Book = require('../models/Book');

// Service function to get all books with pagination, search, and sorting
exports.getAllBooks = async ({ page = 1, limit = 10, search = '', sortBy = 'publishedDate', sortOrder = 'desc' }) => {
    // Create a search query for title and author
    const searchQuery = search ? {
        $or: [
            { title: { $regex: search, $options: 'i' } },
            { author: { $regex: search, $options: 'i' } }
        ]
    } : {};

    // Set up sorting order
    const sortQuery = {};
    sortQuery[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute the query with pagination, search, and sorting
    return await Book.find(searchQuery)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort(sortQuery);
};

exports.createBook = async (bookData) => {
    const book = new Book(bookData);
    return await book.save();
};

exports.getBookById = async (id) => {
    return await Book.findById(id);
};

exports.updateBook = async (id, bookData) => {
    return await Book.findByIdAndUpdate(id, { $set: bookData }, { new: true });
};

exports.deleteBook = async (id) => {
    return await Book.findByIdAndRemove(id);
};