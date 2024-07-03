var express = require('express');
var router = express.Router();
const productController = require('../controller/product');
const multer  = require('multer')

/* Multer Storage */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/product_images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

/* GET products listing. */

router.get('/', productController.showProduct);
router.post('/', upload.single('image'), productController.addProduct);
router.patch('/', upload.single('image'), productController.updateProduct);
router.delete('/', productController.deleteProduct);

module.exports = router;                 
