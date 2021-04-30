module.exports = app => {
  const products = require("../controller/product.js");

  // Create a new Customer
  app.post("/products", products.create);

  // Retrieve all Customers
  app.get("/products", products.findAll);

  // Retrieve a single Customer with productId
  app.get("/products/:productId", products.findOne);

  // Update a Customer with productId
  app.put("/products/:productId", products.update);

  // Delete a Customer with productId
  app.delete("/products/:productId", products.delete);

  // Create a new Customer
  app.delete("/products", products.deleteAll);
};
