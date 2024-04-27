const express = require('express');
const { AuthMiddleware } = require('../middlewares/Auth.middleware');
const { GetAllCategoryView,PostCategoryView,OneCategoryViewDelete ,OneCategoryRelatedProduct} = require('../controllers/category.controller');

const Routers = express.Router();

Routers.route("/category").get(GetAllCategoryView);
Routers.route("/adminCategory").post(PostCategoryView);
Routers.route("/delCategory").delete(OneCategoryViewDelete);
Routers.route("/productC").get(OneCategoryRelatedProduct);


module.exports = Routers;