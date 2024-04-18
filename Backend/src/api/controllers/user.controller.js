const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserData = require("../models/user.schema");
const { SchemaValidatorR } = require("../validations/register.validate");

const allRegister = async (req, res) => {
    const user = req.body;
    const users = await UserData.find();
    res.json({ users })

}

const PostRegister = async (req, res) => {
    const { FirstName, LastName, Email, Password, Contact } = req.body;
    try {
        const { error, value } = SchemaValidatorR(req.body);
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
        res.status(201).json(users);
    }
    catch (err) {
        return res.status(400).json(err);
    }

}
const loginUser = async (req, res) => {
    const { Email, Password } = req.body;
    const UserOneData = await UserData.findOne({ Email });
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
    const token = jwt.sign({"id":UserOneData._id},process.env.SECURITY_KEY,{expiresIn:days});
    //cookies
    res.cookie("Token",token,{maxAge:1000 * 60 * 60 * 24,httpOnly:true});
    res.status(200).json({ message: "Login successfully" });

}
const OnlyOneUser = async (req, res) => {
}
const updateUser = async (req, res) => {
}


module.exports = {
    PostRegister,
    allRegister,
    loginUser,
    OnlyOneUser,
    updateUser

}