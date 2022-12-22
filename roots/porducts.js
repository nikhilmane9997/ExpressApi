const express = require("express");
const router = express.Router();
const { getAllProducts, getAllTesting } = require("../controller/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllTesting);

module.exports = router;
