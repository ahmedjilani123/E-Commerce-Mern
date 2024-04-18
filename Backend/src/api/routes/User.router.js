const express = require('express');
const { allRegister, PostRegister,OnlyOneUser,updateUser,loginUser} = require('../controllers/user.controller');
const { AuthMiddleware } = require('../middlewares/Auth.middleware');
const Routers = express.Router();

Routers.route("/register").get(allRegister);
Routers.route("/registerUser").post(AuthMiddleware,PostRegister);
Routers.route("/loginUser").post(AuthMiddleware,loginUser);
Routers.route("/u/:id").put(updateUser);
Routers.route("/g/:id").get(OnlyOneUser);


module.exports = Routers;