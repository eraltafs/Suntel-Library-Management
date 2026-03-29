import express from "express";
import cors from "cors";
import { connection } from "./config/db.js";
import authRoutes from "./modules/auth/auth.routes.js";
import bookRoutes from "./modules/book/book.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT

app.listen(PORT, async () => {
    try {
        await connection()
        console.log("listening on port", PORT)

    } catch (error) {
        console.error("error while listening", error.message)
    }
});
