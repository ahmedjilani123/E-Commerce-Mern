const express = require('express');
const CookieParser = require('cookie-parser');
//const cors = require('cors');

const dbConnection = require("./src/api/db/Database.connect");
const UserRouter = require('./src/api/routes/User.router');
const ProductRouter = require('./src/api/routes/Product.router');
const CategoryRouter = require('./src/api/routes/Category.router');
const { Port } = require('./src/config/allData.config');
const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
const port = Port || 3000
app.use(CookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api",UserRouter);
app.use('/api/p',ProductRouter);
app.use('/api/c',CategoryRouter);


dbConnection().then(()=>{
    app.listen(port,function(){
        console.log("listening on port "+ port);
    });  
}).catch((err)=>{
    console.log("Listening Failed : "+err.message);
})                  




















