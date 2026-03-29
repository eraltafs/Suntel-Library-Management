import express from "express";
import cors from "cors";
import { connection } from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT

app.listen(PORT, async () => {
    try {
        await connection()
        console.log("listening on port", PORT)

    } catch (error) {
        console.error("error while listening", error.message)
    }
});
