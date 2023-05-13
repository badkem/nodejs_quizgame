require("dotenv").config();
import express from "express";
import { sequelize, connectDB } from "./api/db";

const app = express();

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "Welcome to badkem API ✋" });
});

app.use("/api", router);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log("🚀 Server started Successfully");

  await connectDB();

  sequelize.sync({ force: false }).then(() => {
    console.log("✅ Synced database successfully...");
  });
});
