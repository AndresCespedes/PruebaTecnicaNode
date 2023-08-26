import http from "node:http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.DB_PORT ?? 1234;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
