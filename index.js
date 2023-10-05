require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDB = require("./db/connect");

app.get("/", (req, res) => res.send("Hello World!"));
// start
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    // connect to database
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
