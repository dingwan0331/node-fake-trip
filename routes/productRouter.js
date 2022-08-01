const express        = require('express');
const router         = express.Router();
const productController = require('../controllers/productController')

router.get('/:id', productController.a)

module.exports = router