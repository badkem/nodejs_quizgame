import "reflect-metadata";
import express from "express";
import Routes from "./routes";
import connection from "./api/db_connection";

const PORT = 3000;
const app = express();

Routes(app);

const start = async (): Promise<void> => {
  try {
    await connection.sync();

    app.listen(PORT, () => {
      console.log("Server started on port 3000 🚀");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
