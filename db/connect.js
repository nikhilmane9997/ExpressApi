require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = (uri) => {
  console.log("connected db");
  mongoose.set("strictQuery", true);
  return mongoose.connect(uri);
};

module.exports = connectDb;
