import { createConnection } from "typeorm";
createConnection()
    .then((connection) => {
    console.log("Connected to database");
})
    .catch((error) => {
    console.log("Database connection failed");
    console.error(error);
});
