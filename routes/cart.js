var express = require('express');
var router = express.Router();
const cartController = require('../controller/Cart')

/* GET users listing. */

router.post('/:id', cartController.addtoCart);
router.get('/showcart', cartController.showCart);
router.delete('/:id', cartController.deleteProduct);

module.exports = router;             
