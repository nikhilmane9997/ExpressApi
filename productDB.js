require("dotenv").config();
const connectDb = require("./db/connect");
const product = require("./models/product");
const ProductData = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    await product.deleteMany();
    await product.create(ProductData);
    console.log("data added successfully");
  } catch (error) {
    console.log(error);
  }
};

start();
