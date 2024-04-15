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
        required: true,
        type: String,
    },
    "Password": {
        required: true,
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("UserData", UserShcema);