import express from "express";
import authenticate from "../../middleware/authenticate.middleware.js";
import { authorize } from "../../middleware/authorise.middleware.js";

import {
    fetchBooks,
    addBook,
    editBook,
    removeBook,
    changeBookStatus,
} from "./book.controller.js";

const router = express.Router();

router.get("/", authenticate, fetchBooks);

router.post(
    "/",
    authenticate,
    authorize(["admin"]),
    addBook
);

router.put(
    "/:id",
    authenticate,
    authorize(["admin"]),
    editBook
);

router.delete(
    "/:id",
    authenticate,
    authorize(["admin"]),
    removeBook
);

router.patch(
    "/:id/status",
    authenticate,
    changeBookStatus
);

export default router;