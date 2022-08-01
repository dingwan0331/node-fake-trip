var express = require('express');
var router = express.Router();
const user = require('./userRouter')
const product = require('./productRouter')

router.use('/users', user)
router.use('/products', product)

module.exports = router;