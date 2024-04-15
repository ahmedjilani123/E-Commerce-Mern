const Joi = require("joi");
const bcrypt = require("bcrypt");
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
        if (error) {
            console.log(error)
            return res.status(400).send(error.details);
        }
    }
    catch (err) {
        return res.status(400).json(err.message);
    }
    const hashPassword =await bcrypt.hash(Password,10);
    const users = await UserData.create({
        FirstName,
        LastName,
        Email,
        Password:hashPassword,
        Contact
    });
    users.save();
    res.status(201).json(users);
}
const loginUser = async (req, res) => {
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