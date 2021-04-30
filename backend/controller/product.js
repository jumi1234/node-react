const Product = require("../model/product.js");

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Product
  const customer = new Product({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // Save Product in the database
  Product.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    else res.send(data);
  });
};
// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Update a Product identified by the customerId in the request
exports.findOne = (req, res) => {
  Product.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Product.updateById(
    req.params.customerId,
    new Product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Product with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Product with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Product with the specified customerId in the request
exports.delete = (req, res) => {
  Product.remove(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Product with id " + req.params.customerId
        });
      }
    } else res.send({ message: `Product was deleted successfully!` });
  });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  Product.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Products were deleted successfully!` });
  });
};
