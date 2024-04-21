const express = require('express');
const { allRegister, PostRegister,OnlyOneUser,updateUser,loginUser} = require('../controllers/user.controller');
const { AuthMiddleware } = require('../middlewares/Auth.middleware');
const Routers = express.Router();

Routers.route("/register").get(allRegister);
Routers.route("/registerUser").post(PostRegister);
Routers.route("/loginUser").post(loginUser);
Routers.route("/UpdateUser").put(updateUser);
Routers.route("/getOneUser/:id").get(OnlyOneUser);


module.exports = Routers;