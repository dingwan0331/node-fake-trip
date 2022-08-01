const productService   = require('../services/productService')

const a = async (req, res) => {
    const productId = req.params.productId
    
    const data = await productService.productDetail(productId)

    res.status(200).json(data)
}

module.exports = {a}