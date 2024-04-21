const ProductData = require("../models/products.schema");
const { SchemaValidatorP } = require("../validations/product.validate");


let getAllProducts = async (req, res) => {
    try {
        const allProductData = await ProductData.find();
        res.status(200).json(allProductData);
    } catch (err) {
        res.status(500).json(err);
    }
};

let PostProduct = async (req, res) => {
    const allData = req.body;
    try {
        const { error } = SchemaValidatorP(allData);
        if (error) throw `Server Side Error :${error}`;
        ProductData.create(allData).then((product) => {
            res.status(201).json({ Message: "Product created successfully", Data: product })
        })
    } catch (err) {
        res.status(400).json({ Message: err })
    }

};

let OneProductView = async (req, res) => {

};

let UpdateProduct = async (req, res) => {

};


module.exports = {
    getAllProducts,
    OneProductView,
    UpdateProduct,
    PostProduct
}