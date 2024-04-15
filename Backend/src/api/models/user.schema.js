const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "FirstName": {
        required: true,
        type: String,
        
    },
    "LastName":{
        type: String,
    },
    "Email": {
        required:[true,"please enter a valid email address"],
        type: String,
        unique: true
    },
    "Contact":{
        type: String
    },
    "Password": {
        required: true,
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("UserData", UserShcema);