import {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook,
    updateBookStatus,
} from "./book.service.js";

export const fetchBooks = async (req, res) => {
    const books = await getAllBooks();
    res.json(books);
};

export const addBook = async (req, res) => {
    const book = await createBook(req.body);

    res.status(201).json({
        message: "Book created",
        book,
    });
};

export const editBook = async (req, res) => {
    const book = await updateBook(req.params.id, req.body);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json({
        message: "Book updated",
        book,
    });
};

export const removeBook = async (req, res) => {
    const book = await deleteBook(req.params.id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json({
        message: "Book deleted",
    });
};

export const changeBookStatus = async (req, res) => {
    try {
        const updatedBook = await updateBookStatus(
            req.params.id,
            req.user.id
        );

        res.json({
            message: "Book status updated",
            updatedBook,
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};