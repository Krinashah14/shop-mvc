const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Register routes
app.use(productRoutes);
app.use(cartRoutes);

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
