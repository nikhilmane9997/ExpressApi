const products = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, sort, select } = req.query;
  const queryObject = {};
  let apiData = products.find(queryObject);
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  let page = Number(req.query.page) || 1;
  let limits = Number(req.query.limit) || 3;

  let skipPage = (page - 1) * limits;
  apiData = await apiData.skip(skipPage).limit(limits);

  const ProductDetails = await apiData;
  res.status(200).json({ ProductDetails, totalData: ProductDetails.length });
};

const getAllTesting = async (req, res) => {
  const TestingDetails = await products.find(req.query).sort("name -price");
  res.status(200).json({ TestingDetails });
};

module.exports = { getAllProducts, getAllTesting };
