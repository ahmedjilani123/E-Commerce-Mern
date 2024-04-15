const express = require('express');
const { Register } = require('../controllers/user.controller');
const Routers = express.Router();




Routers.get("/api/user/register",Register);


module.exports =Routers;