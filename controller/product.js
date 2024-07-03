const PRODUCT = require('../model/product');

// -------------------------------------------------------------------------------------------------------------

exports.addProduct = async function (req, res, next) {
    try {
        req.body.image = req.file.filename

        if (!req.body.name || !req.body.image || !req.body.price || !req.body.category) {
            throw new Error("Please Enter Valid Fields")
        }

        const data = await PRODUCT.create(req.body);

        res.status(201).json({
            status: "Success",
            message: "Product Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// -------------------------------------------------------------------------------------------------------------

exports.showProduct = async function (req, res, next) {
    try {

        const data = await PRODUCT.find().populate('category');

        res.status(201).json({
            status: "Success",
            message: "All Products",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// -------------------------------------------------------------------------------------------------------------

exports.updateProduct = async function (req, res, next) {
    try {
        if (req.file) {
            req.body.image = req.file.filename
        }
        
        const data = await PRODUCT.findByIdAndUpdate(req.query.id, req.body, { new: true });

        res.status(201).json({
            status: "Success",
            message: "Product Updated",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// -------------------------------------------------------------------------------------------------------------

exports.deleteProduct = async function (req, res, next) {
    try {

        const data = await PRODUCT.findByIdAndDelete(req.query.id);

        res.status(201).json({
            status: "Success",
            message: "Product Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}