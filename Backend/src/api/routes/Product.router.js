const express = require('express');
const { AuthMiddleware } = require('../middlewares/Auth.middleware');
const { getAllProducts,PostProduct,UpdateProduct,OneProductView } = require('../controllers/product.controller');

const Routers = express.Router();

Routers.route("/products").get(getAllProducts);
Routers.route("/AdminPost").post(PostProduct);
Routers.route("/UpdateUser").put(UpdateProduct);
Routers.route("/productOne/:id").get(OneProductView);


module.exports = Routers;