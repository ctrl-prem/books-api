// bookController.js

const bookService = require('../services/bookService');
const { handleError } = require('../utils/errorHandler');

// Controller to retrieve all books with pagination, search, and sorting
exports.getAllBooks = async (req, res) => {
    try {
        // Extract query parameters for pagination, search, and sorting
        const { page, limit, search, sortBy, sortOrder } = req.query;
        const books = await bookService.getAllBooks({ page, limit, search, sortBy, sortOrder });
        res.json(books);
    } catch (err) {
        handleError(res, err);
    }
};

exports.createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        handleError(res, err);
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        handleError(res, err);
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req.params.id, req.body);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        handleError(res, err);
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await bookService.deleteBook(req.params.id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.json({ msg: 'Book removed' });
    } catch (err) {
        handleError(res, err);
    }
};
