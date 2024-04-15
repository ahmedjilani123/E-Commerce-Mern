const express = require('express');
const { allRegister, PostRegister,OnlyOneUser,updateUser,loginUser} = require('../controllers/user.controller');
const Routers = express.Router();

Routers.get("/register",allRegister);
Routers.post("/registerUser",PostRegister);
Routers.post("/loginUser",loginUser);
Routers.put("/u/:id",updateUser);
Routers.get("/g/:id",OnlyOneUser);

module.exports =Routers;