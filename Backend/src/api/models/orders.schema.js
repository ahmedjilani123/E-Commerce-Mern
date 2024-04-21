const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "TotalPrice":{type:Integer},
    "Quantity":{type:Integer},
    "ProductItems":[
        {
            "Product":{
                type: mongoose.SchemaType.ObjectId,
                ref: 'ProductsData'
            }
        }
    ],
    "Address":{
        "State":{type:String},
        "Area":{type:String},
        "City":{type:String},
        "Country":{type:String},
        "CountryCode":{type:String}
    },
    "OwnerName":{
        type:mongoose.SchemaType.ObjectId,
        ref: 'UsersData'
    }
}, { timestamps: true });
module.exports = mongoose.model("OrderData", UserShcema);