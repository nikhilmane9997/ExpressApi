require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./db/connect");

const product_routes = require("./roots/porducts");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("hi i am live");
});
app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`${PORT} yes connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
