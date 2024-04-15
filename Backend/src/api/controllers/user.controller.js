
const UserData = require("../models/user.schema");
const Register = async(req,res)=>{
    const user = req.body;
    const users = await UserData.find();
    res.json({users})

}
module.exports ={
    Register
}