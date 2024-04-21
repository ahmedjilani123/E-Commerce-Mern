const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "ProductName":{type:String, required:true},
    "ProductImage":{type:String},
    "Category":{type:String ,required:true}
}, { timestamps: true });
module.exports = mongoose.model("CategoryData", UserShcema);