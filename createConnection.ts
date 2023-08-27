import { createConnection } from "typeorm";

createConnection({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "Rufo1261!",
  database: "products-users",
  entities: [__dirname + "src/entities/*.ts"],
  synchronize: true,
})
  .then((connection) => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.error(error);
  });
