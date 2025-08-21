const products = require("../models/productModel");

exports.addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const totalPrice = product.price * quantity;
  res.json({
    product: product.name,
    quantity,
    totalPrice
  });
};
