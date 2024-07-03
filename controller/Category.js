const CATEGORY = require('../model/category');

// -------------------------------------------------------------------------------------------------------------

exports.addCategory = async function (req, res, next) {
    try {
        req.body.image = req.file.filename
        if (!req.body.name || !req.body.image) {
            throw new Error("Please Enter Valid Fields")
        }

        const data = await CATEGORY.create(req.body);

        res.status(201).json({
            status: "Success",
            message: "Category Added",
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

exports.showCategory = async function (req, res, next) {
    try {

        const data = await CATEGORY.find();

        res.status(201).json({
            status: "Success",
            message: "All Categories",
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

exports.updateCategory = async function (req, res, next) {
    try {
        if (req.file) {
            req.body.image = req.file.filename
        }

        const data = await CATEGORY.findByIdAndUpdate(req.query.id, req.body, { new: true });

        res.status(201).json({
            status: "Success",
            message: "Category Updated",
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

exports.deleteCategory = async function (req, res, next) {
    try {

        const data = await CATEGORY.findByIdAndDelete(req.query.id);

        res.status(201).json({
            status: "Success",
            message: "Category Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}