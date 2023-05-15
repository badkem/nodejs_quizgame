"use strict";
import { Sequelize } from "sequelize-typescript";
import { Quiz } from "./models/quiz";
import path from "path";

const source = path.resolve(__dirname, "./quiz_list");

const connection = new Sequelize({
  dialect: "sqlite",
  storage: source,
  models: [Quiz],
});

export default connection;
