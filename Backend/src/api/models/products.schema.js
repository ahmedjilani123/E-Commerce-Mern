const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "ProductName":{type:String, required:true},
    "ProductDescription":{type:String},
    "ProductImage":{type:String, required:true},
    "Price":{type:Number,required:true},
    "Category":{type:String,required:true},
    "ViewRate":{type:Number},
}, { timestamps: true });
module.exports = mongoose.model("ProductData", UserShcema);