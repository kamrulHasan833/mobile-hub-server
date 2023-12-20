const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log("db connecting... ");
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("db connected ");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
