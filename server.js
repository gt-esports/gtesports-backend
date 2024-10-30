const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

const gamesRouter = require("./api/routes/games");
app.use("/games", gamesRouter);
app.listen(3000, () => console.log("Server started"));
