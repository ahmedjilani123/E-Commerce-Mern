const express = require('express');
const { allRegister, PostRegister,OnlyOneUser,updateUser,loginUser} = require('../controllers/user.controller');
const Routers = express.Router();

Routers.route("/register").get(allRegister);
// Routers.route("/registerUser").post(PostRegister);
// Routers.route("/loginUser").post(loginUser);
// Routers.route("/u/:id").put(updateUser);
// Routers.route("/g/:id").get(OnlyOneUser);


module.exports = Routers;