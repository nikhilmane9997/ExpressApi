const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "must be provided"],
  },
  feature: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "sumsang", "dell", "mi", "xiaomi", "google"],
      message: `{VALUE} is not a valid`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
