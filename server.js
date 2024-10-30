const express = require("express");
const mongoose = require("mongoose");
const recruitmentRouter = require("./api/routes/recruitments");
const gamesRouter = require("./api/routes/games");
const app = express();
require("dotenv").config();

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use("/games", gamesRouter);
app.use("/recruitment", recruitmentRouter)
app.listen(3000, () => console.log("Server started"));
