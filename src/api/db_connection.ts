"use strict";
import { Sequelize } from "sequelize-typescript";
import { Quiz } from "./models/quiz";
import path from "path";

const source = path.resolve(__dirname, "./quiz_list");

let connection: Sequelize;

if (process.env.NODE_ENV === "production") {
  console.log("Connecting to production database... 🚀");
  connection = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    models: [Quiz],
  });
} else {
  connection = new Sequelize({
    dialect: "sqlite",
    storage: source,
    models: [Quiz],
  });
}

export default connection;
