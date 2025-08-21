const products = require("../models/productModel");

exports.getProducts = (req, res) => {
  res.json(products);
};
