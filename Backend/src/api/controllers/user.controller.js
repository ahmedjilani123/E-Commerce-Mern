const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserData = require("../models/user.schema");
const { SchemaValidatorR } = require("../validations/register.validate");
const { SecurityKey } = require("../../config/allData.config");

const allRegister = async (req, res) => {
    const users = await UserData.find();
    res.json({ users })
}

const PostRegister = async (req, res) => {
    const { FirstName, LastName, Email, Password, Contact } = req.body;
    try {
        const { error } = SchemaValidatorR(req.body);
        if (error) throw `Server Side Error :${error}`;
        let AlreadyData = await UserData.find({ Email });
        let userAvailable = AlreadyData.some(user => user.Email === req.body.Email);
        if (userAvailable) throw "Already registered";
        const salt = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(Password, salt);
        const users = await UserData.create({
            FirstName,
            LastName,
            Email,
            Password: hashPassword,
            Contact
        });
        users.save();
        const days = 3 * 24 * 60 * 60;
        const token = jwt.sign({"id":users._id},SecurityKey,{expiresIn:days});
        //cookies
        res.cookie("Token",token,{maxAge:1000 * 60 * 60 * 24,httpOnly:true});
        res.status(201).json(users);
    }
    catch (err) {
        return res.status(400).json({"Message":err});
    }

}
const loginUser = async (req, res) => {
    const { Email, Password } = req.body;
    var UserOneData = await UserData.find({ Email })
    try {
        if (!Password && !Email) throw `400, "password or email is required"`;
        let userAvailable = UserOneData.some(user => user.Email === req.body.Email);
        if (!userAvailable) throw `User Not Found`;
        const PassowrdMatch = await bcrypt.compare(Password, UserOneData[0].Password);
        if (!PassowrdMatch) throw `401,Wrong Password`;
    }
    catch (err) {
        return res.status(400).json({ message: err});
    }
    //jwt
    const days = 3 * 24 * 60 * 60
    const token = jwt.sign({"id":UserOneData[0]._id},SecurityKey,{expiresIn:days});
    //cookies
    res.cookie("Token",token,{maxAge:1000 * 60 * 60 * 24,httpOnly:true});
    res.status(200).json({ message: "Login successfully" });
}
const OnlyOneUser = async (req, res) => {
    if(!req.params.id){
        res.status(404).json({ message:"Please pass a valid id" });
    }
 UserData.findOne({_id:req.params.id}).then((user) =>{
res.status(200).json(user);
    })
}
const updateUser = async (req, res) => {
    const {FirstName,LastName,Email,Password,Contact} = req.body;
    const UserDataOld = await UserData.findOne({Email});
try{
        const PassowrdMatch = await bcrypt.compare(Password, UserDataOld.Password);
       if(!PassowrdMatch) throw `Old Password mismatch`;
        const salt = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(Password, salt);
        console.log(hashPassword);
        const payload = {
            FirstName,
            LastName,
            Contact,
            Password:hashPassword
        }
          UserData.updateOne({_id:UserDataOld._id},payload).then(odata=>{
            res.send("Updated Successfully");
          })
    }catch(err){
        return res.send(err);
    }
   
}
module.exports = {
    PostRegister,
    allRegister,
    loginUser,
    OnlyOneUser,
    updateUser
}