import Book from "./book.model.js";

export const getAllBooks = async () => {
    return await Book.find();
};

export const createBook = async (data) => {
    return await Book.create(data);
};

export const updateBook = async (id, data) => {
    return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id);
};

export const updateBookStatus = async (id, userId) => {
    const book = await Book.findById(id);

    if (!book) {
        throw new Error("Book not found");
    }

    if (book.status === "available") {
        book.status = "borrowed";
        book.borrowedBy = userId;
    } else {
        book.status = "available";
        book.borrowedBy = null;
    }

    return await book.save();
};