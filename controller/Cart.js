const CART = require('../model/cart')
var Storage = require('node-persist');Storage.init()

exports.addtoCart = async function (req, res, next) {
    try {
        var uid = await Storage.getItem('uid')
        req.body.uid = uid
        var pid = req.params.id
        req.body.pid = pid

        const data = await CART.create(req.body)

        res.status(201).json({
            status : "Success",
            message : "Item Added to Cart",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : "Fail to Add Item"
        })
    }
}

exports.showCart = async function (req, res, next) {
    try {
        var uid = await Storage.getItem('uid')
        console.log(uid)

        const data = await CART.find({"uid" : uid})

        res.status(201).json({
            status : "Success",
            message : "User's Cart",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : "Fail to Load Cart"
        })
    }
}

exports.deleteProduct = async function (req, res, next) {
    try {
        var id = req.params.id     
        const data = await CART.findByIdAndDelete(id)

        res.status(201).json({
            status : "Success",
            message : "Product is Deleted",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : "Fail to Load Cart"
        })
    }
}