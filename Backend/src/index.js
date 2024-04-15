const express = require('express');
require("dotenv").config();
const dbConnection = require("./api/db/Database.connect");
const Routers = require('./api/routes/User.router');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({extended:true}))
                        dbConnection();
       





app.use(Routers);



















app.listen(port,function(){
    console.log("listening on port "+ port);
});