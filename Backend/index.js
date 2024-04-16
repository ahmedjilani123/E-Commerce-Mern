const express = require('express');
//const cors = require('cors');
require("dotenv").config();
const dbConnection = require("./src/api/db/Database.connect");
const UserRouter = require('./src/api/routes/User.router');
const app = express();
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api",UserRouter)
dbConnection().then(()=>{
    app.listen(port,function(){
        console.log("listening on port "+ port);
    });  
}).catch((err)=>{
    console.log("Listening Failed : "+err.message);
})                  




















