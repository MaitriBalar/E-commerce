var express = require('express');
var router = express.Router();
const userController = require('../controller/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userController.Signup);
router.post('/login', userController.Login);
router.get('/one',userController.Secure, userController.oneUser);

module.exports = router;                 
