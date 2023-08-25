import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.DB_PORT ?? 1234;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Servet");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
