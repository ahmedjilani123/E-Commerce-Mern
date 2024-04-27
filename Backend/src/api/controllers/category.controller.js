const CategoryData = require("../models/category.schema");
const ProductData = require("../models/products.schema");
const { SchemaValidatorC } = require("../validations/category.validate");



const GetAllCategoryView = async (req,res)=>{
    try {
        const allCategory = await CategoryData.find();
        res.status(200).json(allCategory);
    } catch (err) {
        res.status(500).json(err);
    }
};
const OneCategoryViewDelete = async (req,res)=>{
   //delete category statement space
};
const OneCategoryRelatedProduct = (req, res) => {
    var CategoryName = req.body;
    if (!CategoryName) {
        return res.status(404).json({ Message: "Products not found" });
    }
    ProductData.find(CategoryName).then((All_Product_related_Detail) => {
        res.status(200).json({ Message: "Successfully Get All Products", Data: All_Product_related_Detail });
    }).catch((err) => {
        res.status(400).json({ Message: err });
    })
};
const PostCategoryView = (req,res)=>{
    const allData = req.body;
    try {
        const { error } = SchemaValidatorC(allData);
        if (error) throw `Error like :${error}`;
        CategoryData.create(allData).then((category) => {
            res.status(201).json({ Message: "Category created successfully", Data: category })
        })
    } catch (err) {
        res.status(400).json({ Message: err })
    }
};

module.exports = {
    GetAllCategoryView,
    OneCategoryViewDelete,
    PostCategoryView,
    OneCategoryRelatedProduct
}