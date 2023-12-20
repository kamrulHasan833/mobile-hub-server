const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();

// server running port
const port = process.env.PORT || 5000;

// create app
const app = express();

// common middleware
app.use(express.json());
app.use(cors());

// default route
app.get("/", (req, res) => {
  res.send("mobile hub app is running well...");
});

// important routes

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
  });
};
module.exports = main;
