require("dotenv").config();
const Port = process.env.PORT
const DBUrl = process.env.DATABASE_URl
const SecurityKey = process.env.SECURITY_KEY
module.exports ={
    Port,
    DBUrl,
    SecurityKey,

}