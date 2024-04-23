const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "CatImage":{type:String},
    "Category":{type:String}
}, { timestamps: true });
module.exports = mongoose.model("CategoryData", UserShcema);