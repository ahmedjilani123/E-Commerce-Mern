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

let PostProduct = (req, res) => {
    const allData = req.body;
    try {
        const { error } = SchemaValidatorP(allData);
        if (error) throw `Error like :${error}`;
        ProductData.create(allData).then((product) => {
            res.status(201).json({ Message: "Product created successfully", Data: product })
        })
    } catch (err) {
        res.status(400).json({ Message: err })
    }

};

let OneProductView = (req, res) => {
    if (!req.params.id) {
        return res.status(404).json({ Message: "Product not found" });
    }
    ProductData.findById(req.params.id).then((ProductDetails) => {
        res.status(200).json({ Message: "Successfully Get One Product", Data: ProductDetails });
    }).catch((err) => {
        res.status(400).json({ Message: err });
    })

};

let UpdateProduct = (req, res) => {
    const { ProductName, ProductDescription, ProductImage, Price, Category, ViewRate, Id } = req.body;
    const payload = { ProductName, ProductDescription, ProductImage, Price, Category, ViewRate };
    console.log(payload);
    if (!ProductName && !ProductDescription && !ProductImage && !Price && !Category) {
        return res.status(404).json({ Message: payload });
    }
    ProductData.updateOne({ _id: Id }, payload).then(odata => {
        console.log(odata);
        res.send("Updated Successfully");
    }).catch((err) => {
        res.status(400).json({ Message: err });
    });
};


module.exports = {
    getAllProducts,
    OneProductView,
    UpdateProduct,
    PostProduct
}