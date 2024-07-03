var express = require('express');
var router = express.Router();
const categoryController = require('../controller/Category');
const multer  = require('multer')

/* Multer Storage */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/category_images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

/* GET categories listing. */

router.get('/', categoryController.showCategory);
router.post('/', upload.single('image'), categoryController.addCategory);
router.patch('/', upload.single('image'), categoryController.updateCategory);
router.delete('/', categoryController.deleteCategory);

module.exports = router;                 
