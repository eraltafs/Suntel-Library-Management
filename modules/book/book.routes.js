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
    authorize(["ADMIN"]),
    addBook
);

router.put(
    "/:id",
    authenticate,
    authorize(["ADMIN"]),
    editBook
);

router.delete(
    "/:id",
    authenticate,
    authorize(["ADMIN"]),
    removeBook
);

router.patch(
    "/:id/status",
    authenticate,
    changeBookStatus
);

export default router;